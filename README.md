## Demo
* [React Weather App](https://neha13singh.github.io/weather-app/)


# Weather App

This is a simple weather application built using React. The app allows users to search for the current weather information of any city. It utilizes the OpenWeatherMap API to fetch real-time weather data.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Features
- Search for weather information by city name.
- Display current temperature, humidity, wind speed, and weather conditions.
- Responsive design for optimal viewing on various devices.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **OpenWeatherMap API**: A service that provides weather data.
- **CSS**: For styling the application.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Install the required packages:
   ```bash
   npm install
   ```

## Usage
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your web browser and go to `http://localhost:5173`.
3. Enter a city name in the search bar and click the "Search" button to retrieve the weather data.

## Components
### 1. Weather
This component is the main part of the application, handling weather data retrieval and display.
- **State Variables**:
  - `search`: Holds the city name entered by the user.
  - `loading`: Indicates whether the weather data is being fetched.
  - `weatherData`: Stores the fetched weather data from the API.

- **Functions**:
  - `fetchWeatherData(param)`: Fetches weather data from the OpenWeatherMap API.
  - `handleSearch()`: Initiates the search for weather data based on user input.
  - `getCurrentDate()`: Returns the current date in a readable format.

### 2. Search
This component renders the search bar for user input and triggers the search action.

## API Integration
The app makes use of the OpenWeatherMap API to fetch weather data. The API key is required to access the data. Replace `YOUR_API_KEY` in the fetch URL with your actual API key.

```javascript
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=YOUR_API_KEY`
);
```

## Styling
The application uses CSS for styling. You can customize the styles in the `App.css` file to change the appearance of the app.

### Example of CSS
```css
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #cee0f9;
}

.weather-container {
  text-align: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
}
```

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
