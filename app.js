const forecast = require("./provider/forecast");

const cityName = process.argv.slice(2).join("%20");

if (cityName.trim().length === 0) console.info("enter city please");
else
  forecast(cityName, (error, response) => {
    if (error) console.error(`ERROR: ${error}`);
    else console.log(response);
  });
