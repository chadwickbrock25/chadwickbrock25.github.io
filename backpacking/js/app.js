/////////////////////////////////
//Varibles
/////////////////////////////////
const baseURL = "http://api.openweathermap.org/data/2.5/weather?"
const apiKey = "&APPID=ab680529730b171d229d833b949afad3"
const queryType = "q="
let $cityQuery = $("location").val()
let $dateQuery = $("#date").val()
let queryURL = baseURL + queryType 

// API Call ex.
// api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}

/////////////////////////////////
//Weather query inputing city FUNCTION
/////////////////////////////////
$("#container").css("opacity", "0")
// Hides table div until table is created
const getCity = () => {
    $.ajax({
        url: queryURL + $cityQuery + apiKey
    }).then((weatherData) => {
        console.log(weatherData)
        // let num = weatherData.main.temp
        // tempF = Math.ceil((weatherData.main.temp)/4)
        // console.log(tempF)
        //?Ask why tempF can't be read in append below?
        $("#container").html(`
            <h5>${weatherData.name}</h5>
            <table><thead><tr><th>Temperature</th><td>
            ${weatherData.main.temp}</td></tr></thead>
            <tbody><tr><th>Humidity</th><td>
            ${weatherData.main.humidity}</td></tr></tbody></table>
        `)
        $("#container").css("opacity", "1")
    }), (error) => {
        console.log(error)
    }
}

$( () => {
    //Listener for user input city
    $('form').on('submit', (event) => {
        event.preventDefault()
        $cityQuery = $('#location').val()
        getCity()
    })
});//?Ask why object troubles listener?
// const EventHandlers = {
//     //Listener for user input city
//     $('form').on('submit', (event) => {
//         event.preventDefault()
//         $cityQuery = $('#location').val()
//         getCity()
//     }),


/////////////////////////////////
//Table growth templet 
/////////////////////////////////
// $container.append($table) 
// $table.append("<thead><tr><th>A0</th><th>B0</th></tr></thead>")
// $table.append("<tbody><tr><td>A1</td><td>B1</td></tr></tbody>")
// $table.append("<tfoot><tr><td>A2</td><td>B2</td></tr></tfoot>")
// $table.append("<tbody><tr><td>A3</td><td>B3</td></tr></tbody>")
// $table.append("<tfoot><tr><td>A4</td><td>B4</td></tr></tfoot>")
// $table.append("<tfoot><tr><td>A5</td><td>B5</td></tr></tfoot>")