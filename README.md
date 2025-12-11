# express_command_line_weather_app

- `yargs` parses and validates the command-line input.
- The application sends a request to a weather API.
- If the city exists → weather details are shown.
- If the city is invalid → a custom error appears.
- If the network is disconnected → a network error is displayed.

📚 Technologies Used

- Node.js
- `yargs` (CLI argument handling)
- `request` / `axios` / `fetch` (API calls)
- Weather API service (e.g., WeatherStack or OpenWeatherMap)

A simple and fast **Node.js command-line weather application** that provides real-time weather information for any city directly from your terminal.  
The app uses **yargs** to handle command-line arguments and **API requests** to fetch live weather data.  
It includes clear error handling for invalid cities, missing arguments, or network issues.

---

## 🚀 Features

- Fetch real-time weather information from the command line  
- Displays:
  - 🌡 **Temperature** (Celsius & Fahrenheit)
  - ⛅ **Weather condition**
  - 📍 **Coordinates** (longitude & latitude)
- Handles:
  - Missing city input  
  - Invalid city names  
  - Network connection errors  
- Lightweight, simple, and beginner-friendly  
- Clean and readable output in the terminal  

---

## 📦 Installation

### Clone this repository:
```bash
git clone https://github.com/your-username/express_command_line_weather_app.git
cd express_command_line_weather_app
```

Install dependencies:

```bash
npm install
```

▶️ Usage

1. Run without a city

```bash
node app.js
```

Output:

```
enter city please
```

2. Run with a valid city

Example:

```bash
node app.js damascus
```

Output:

```
required city : Damascus.
it is Partly cloudy and temperature : 10.3 Celsius or 50.5 Fahrenheit.
it has corrdinate:
  longtitude : 36.3 , latitude : 33.5 .
```

3. Invalid city name

```bash
node app.js jsdfgj
```

Output:

```
ERROR: [jsdfgj] is not found
```

4. Network error

Output:

```
ERROR: Network error
```

🛠️ How It Works

You run the script with:

```bash
node app.js <city>
```