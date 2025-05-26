// This file contains configuration settings for the Weather Now application
const CONFIG = {
    // For local development, replace with your API key
    // For production on Vercel, this will use the environment variable
    API_KEY: typeof process !== 'undefined' && process.env.OPENWEATHER_API_KEY 
           ? process.env.OPENWEATHER_API_KEY 
           : "YOUR_API_KEY_HERE"
};
