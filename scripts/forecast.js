// unique api key for authorization
const key = "OvaKNeLXiPgA6CRvd6JOpnCaPlHdGueG"

// async funtction for getting city details
const getCity = async (city) => {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search"
  const query = `?apikey=${key}&q=${city}`
  const response = await fetch(base + query)
  const data = await response.json()
  return data[0]
}

// async function for getting weather info for selected city
const getWeather = async (id) => {
  const base = "https://dataservice.accuweather.com/currentconditions/v1/"
  const query = `${id}?apikey=${key}`
  const response = await fetch(base + query)
  const data = await response.json()
  return data[0]
}
