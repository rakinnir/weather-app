// declaring variables
const form = document.querySelector(".change-location")
const outputInfo = document.querySelector(".details")
const card = document.querySelector(".card")
const time = document.querySelector(".time")
const icon = document.querySelector(".icon img")

const updateUi = (data) => {
  const { cityDetails, weather } = data

  const info = `
          <h5 class="my-3">${cityDetails.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
          <span>${weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
          </div>
          `
  outputInfo.innerHTML = info
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none")
  }

  // ternali condition for checking time
  let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg"
  time.setAttribute("src", timeSrc)

  // icons corresponding to weather
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
  icon.setAttribute("src", iconSrc)
}

// starting function
const updateCity = async (city) => {
  const cityDetails = await getCity(city)
  const weather = await getWeather(cityDetails.Key)
  return { cityDetails, weather }
}

// input field function
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const city = form.city.value.trim()
  form.reset()

  updateCity(city)
    .then((data) => {
      updateUi(data)
    })
    .catch((err) => {
      console.log(err, "can't fetch data")
    })
})
