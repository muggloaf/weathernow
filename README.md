# WeatherNow 🔆

## Project Overview
Weather Now is an interactive web application that provides real-time weather information and 5-day forecasts for cities worldwide. The application leverages the OpenWeatherMap API to fetch accurate meteorological data, presenting it through an intuitive and responsive user interface.

## Features
- **Current Weather Display**: Shows temperature, weather conditions, humidity, and wind speed
- **5-Day Forecast**: Provides a detailed outlook for the upcoming days at noon
- **Dynamic Weather Icons**: Visually represents different weather conditions
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Error Handling**: Gracefully manages failed searches or API errors

## Technical Implementation
The application is built using modern web technologies:

### Front-End Architecture
- **HTML5**: Semantic structure for content organization
- **CSS3**: Responsive styling with flexbox and modern CSS properties
- **JavaScript (ES6+)**: Asynchronous operations for API interactions

### Key Components
1. **Weather Data Retrieval**:
   - Asynchronous fetch operations to the OpenWeatherMap API
   - JSON data parsing and extraction
   
2. **Dynamic UI Updates**:
   - DOM manipulation for real-time content updates
   - Event listeners for user interactions
   
3. **Data Processing**:
   - Date formatting and manipulation
   - Temperature unit conversion
   - Weather condition categorization

### Code Structure
- Modular JavaScript functions with clear separation of concerns
- Event-driven architecture for user interactions
- Asynchronous programming pattern using async/await

## User Interaction Flow
1. User enters a city name in the search field
2. Application fetches current weather data from the API
3. UI updates to display current conditions
4. Application fetches and displays the 5-day forecast
5. Error handling displays appropriate messages for failed searches

## API Integration
The application uses the OpenWeatherMap API with two key endpoints:
- `/weather` - For current weather conditions
- `/forecast` - For the 5-day forecast data

## Future Enhancements
- Location-based weather detection
- Temperature unit toggle (Celsius/Fahrenheit)
- Historical weather data visualization
- Severe weather alerts integration
- Dark/light theme options

## Installation and Usage
1. Clone the repository
2. Open index.html in a web browser
3. Enter a city name to view current weather conditions and the 5-day forecast

Note: The application uses a free OpenWeatherMap API key included in the repository for demonstration purposes.

## Dependencies
- OpenWeatherMap API (requires API key)
- Modern web browser with JavaScript enabled

## Author
Alesha Mulla - [muggloaf](https://github.com/muggloaf)

## License
This project is submitted as an academic assignment and is not licensed for commercial use.
