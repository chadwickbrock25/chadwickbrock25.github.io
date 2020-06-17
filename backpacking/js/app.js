console.log("GOod luck")

const baseURL = "http://history.openweathermap.org/data/2.5/history/                accumulated_temperature?"

const apiKey = "apikey=ab680529730b171d229d833b949afad3"
const queryType = "q="
let cityQuery = "atlanta, US"
let queryURL = "http://history.openweathermap.org/data/2.5/history/accumulated_temperature?q={atlanta,USA}&start={1587805563}&end={1587805563}&threshold={284}&appid={ab680529730b171d229d833b949afad3}"

console.log(queryURL)