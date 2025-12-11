const request = require("request");
const api = require("./api");

const forecast = (city, callback) => {
  // console.log(`${api}&q=${city}`);
  request({ url: `${api}&q=${city}`, json: true }, (error, response) => {
    if (error) {
      callback("Network error", undefined);
    } else if (response.body.error) {
      if (response.body.error.code == 2006)
        callback("incorrect token", undefined);
      else if (response.body.error.code == 1006)
        
        callback(`[${city.replaceAll("%20", " ")}] is not found`, undefined);
      else callback(response.body.error, undefined);
    } else {
      callback(
        undefined,
        `required city : ${response.body.location.name}.\n` +
          `it is ${response.body.current.condition.text} and temperature : ${response.body.current.temp_c} Celsius or ${response.body.current.temp_f} Fahrenheit.\n` +
          `it has corrdinate:\n     longtitude : ${response.body.location.lon} , latitude : ${response.body.location.lat} .\n`
      );
    }
  });
};

module.exports = forecast;
