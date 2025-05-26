const cityInput = document.querySelector('.city-input') //querySelector will return the first element of this class
const searchBtn = document.querySelector('.search')

const notFoundSection = document.querySelector('.error-section')
const searchCitySection = document.querySelector('.search-city')
const weatherInfoSection = document.querySelector('.weather-info')

const cityNow = document.querySelector('.citynow')
const tempTxt = document.querySelector('.temptext')
const conditionTxt = document.querySelector('.conditiontext')
const humidityValueText = document.querySelector('.humidity-value-txt')
const windValueText = document.querySelector('.wind-value-txt')
const weatherSummaryImg = document.querySelector('.weather-summary-img')
const currentDateTxt = document.querySelector('.current-date')

const forecastItemsContainer = document.querySelector('.forecast-items-container')

// API key for OpenWeatherMap - loaded from config.js
const apiKey = CONFIG.API_KEY;

searchBtn.addEventListener('click', () => {  //addEventListener allows you to react to user interactions eg mouseclick
    if (cityInput.value.trim() != ''){
    updateWeatherInfo(cityInput.value)
    cityInput.value = ''
    cityInput.blur()
    }
})

cityInput.addEventListener('keydown',(event) => {
    if (event.key == 'Enter' && cityInput.value.trim() != ''){
    updateWeatherInfo(cityInput.value)
    cityInput.value = ''
    cityInput.blur() //will remove focus from cityInput
    }
})


async function getFetchData(endPoint, city){  //async functions dont complete immediately, they will wait for data like fetching stuff using api keys
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`

    const response = await fetch(apiUrl)

    return response.json() //json = js object notation. used for storing+exchanging data
}


function getWeatherIcon(id){
    if(id <= 232) return 'cloud-showers-water-solid.svg'
    if(id <= 321) return 'cloud-sun-rain-solid.svg'
    if(id <= 531) return 'cloud-rain-solid.svg'
    if(id <= 622) return 'snowflake-solid.svg'
    if(id <= 781) return 'smog-solid.svg'
    if(id <= 800) return 'sun-solid.svg'
    else return 'cloud-solid.svg'
}


function getCurrentDate(){
    const currentDate = new Date()
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short'
    }
    
    return currentDate.toLocaleDateString('en-GB', options) // toLocaleDateString will display the date as a string
}


async function updateWeatherInfo(city){
    const weatherData = await getFetchData('weather', city)

    if(weatherData.cod != 200){
        showDisplaySection(notFoundSection)
        return
    }
    console.log(weatherData)

    const{
        name: country,
        main: { temp, humidity },
        weather: [{ id, main }],
        wind: { speed }
    } = weatherData

    cityNow.textContent = country
    tempTxt.textContent = Math.round(temp) + '°C'
    conditionTxt.textContent = main
    humidityValueText.textContent = humidity + '%'
    windValueText.textContent = speed + 'm/s'

    currentDateTxt.textContent = getCurrentDate()
    weatherSummaryImg.src=`assests/weather/${getWeatherIcon(id)}`

    await updateForecastInfo(city)

    showDisplaySection(weatherInfoSection)
}


async function updateForecastInfo(city){
    const forecastData = await getFetchData('forecast', city)
    const timeTaken = '12:00:00'
    const todayDate = new Date().toISOString().split('T')[0] // returns the date in the iso format: YYYY/MM/DDTHH/MM/SS so we'll make it  split at the T so we get the date and time separate

    forecastItemsContainer.innerHTML = ''
    forecastData.list.forEach(forecastWeather => {
        if(forecastWeather.dt_txt.includes(timeTaken) && !forecastWeather.dt_txt.includes(todayDate)){
            updateForecastItems(forecastWeather)
        }
    })
}


function updateForecastItems(weatherData){
    console.log(weatherData)

    const {
        dt_txt: date,
        weather: [{ id }],
        main: { temp }
    } = weatherData

    const dateTaken = new Date(date)
    const dateOption = {
        day: '2-digit',
        month: 'short'
    }

    const dateResult = dateTaken.toLocaleDateString('en-US', dateOption)

    const forecastItem = `
        <div class="forecast-item">
            <h5 class="forecast-item-date regular-txt">${dateResult}</h5>
            <img src="assests/weather/${getWeatherIcon(id)}" class="weather-summary-img">
            <h5 class="forecast-item-temp">${Math.round(temp)}°C</h5>
        </div>
    `
    
    forecastItemsContainer.insertAdjacentHTML('beforeend', forecastItem)
}


function showDisplaySection(section){
    [weatherInfoSection, searchCitySection, notFoundSection]
        .forEach(section => section.style.display = 'none');

    section.style.display = 'flex' 
    }


