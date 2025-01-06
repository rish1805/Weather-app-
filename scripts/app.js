const form = document.querySelector('.change-location');
const details = document.querySelector('.details');
const card = document.querySelector('.card');
const time = document.querySelector('.time');

const updateUI = (data) => {
    const { temperature, weatherCode, city, isDaytime } = data;

    details.innerHTML = `
        <h5 class="my-3">${city}</h5>
        <div class="my-3">${weatherCode}</div>
        <div class="display-4 my-4">
            <span>${temperature}</span>
            <span>&deg;C</span>
        </div>
    `;

    // Set the day or night image
    const timeSrc = isDaytime ? 'sun.png' : 'moon.png';
    time.setAttribute('src', timeSrc);

    card.classList.remove('d-none');
};

const updateWeather = async (city) => {
    try {
        const weatherData = await getWeather(city);
        const currentTime = new Date(weatherData.data.values.time); // Fetch or calculate time
        const isDaytime = currentTime.getHours() >= 6 && currentTime.getHours() < 18;

        const weather = {
            city,
            temperature: weatherData.data.values.temperature,
            weatherCode: weatherData.data.values.weatherCode,
            isDaytime,
        };
        updateUI(weather);
    } catch (error) {
        alert('Unable to fetch weather. Please try again.');
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = form.city.value.trim();
    form.reset();
    updateWeather(city);
});