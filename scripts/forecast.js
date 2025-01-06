const key = '6mP2dleewmDyZP2C1aczjQdQVoOvLt6o'; // Replace with your Tomorrow.io API key

// Fetch weather data
const getWeather = async (city) => {
    const baseURL = `https://api.tomorrow.io/v4/weather/realtime`;
    const query = `?location=${city}&apikey=${key}`;
    
    const response = await fetch(baseURL + query);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data;
};
