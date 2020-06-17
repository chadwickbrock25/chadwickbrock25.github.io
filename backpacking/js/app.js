console.log("GOod luck")

const baseURL = "http://api.openweathermap.org/data/2.5/weather?"
let $dateQuery = $("#date")
const apiKey = "ab680529730b171d229d833b949afad3"
const queryType = "q="
let cityQuery = "Atlanta,US"
let queryURL = baseURL + queryType + cityQuery + "&APPID=" + apiKey

// api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
$( () => {
    const getCity = () => {
        $.ajax({
            url: queryURL
        }).then((weatherData) => {
            console.log(weatherData.main)
            $("#container").html(`
            <thead><tr><th>Temp</th><td>${weatherData.main.temp}</td></tr></thead>
            <tbody><tr><th>Humidity</th><td>${weatherData.main.humidity}</td></tr></tbody>
            `)
        }), (error) => {
            console.log(error)
        }
    }
    getCity()
});
// const weatherData = $.ajax({
//     url: queryURL
// })
// console.log(weatherData);
console.log(cityQuery);
console.log($dateQuery);

const generateTable = (cityQuery,$dateQuery) => {
};
generateTable();

const $container = $("#container")
const $h5 = $("<h5>").text(cityQuery)
const $table = $("<table>")
const $thead1 = $("<thead>")
const $th1 = $("<th>").text("A0")
const $th2 = $("<th>").text("B0")
const $tr1 = $("<tr>")
const $tr2 = $("<tr>")
const $tr3 = $("<tr>")
const $td1 = $("<td>").text("A1")
const $td2 = $("<td>").text("Charms")
const $td3 = $("<td>").text("A5")
const $td4 = $("<td>").text("B5")
const $td5 = $("<td>").text("A2")
const $td6 = $("<td>").text("B2")
const $td7 = $("<td>").text("A3")
const $td8 = $("<td>").text("B3")
const $td9 = $("<td>").text("A4")
const $td10 = $("<td>").text("B4")
$container.append($h5)
$container.append($table) 
$table.append("<thead><tr><th>A0</th><th>B0</th></tr></thead>")
$table.append("<tbody><tr><td>A1</td><td>B1</td></tr></tbody>")
$table.append("<tfoot><tr><td>A2</td><td>B2</td></tr></tfoot>")
$table.append("<tbody><tr><td>A3</td><td>B3</td></tr></tbody>")
$table.append("<tfoot><tr><td>A4</td><td>B4</td></tr></tfoot>")
$table.append("<tfoot><tr><td>A5</td><td>B5</td></tr></tfoot>")


// window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 15,cityid: '2643743',appid: 'e2ca4411c901d2716d51f99ef7e64b67',units: 'imperial',containerid: 'openweathermap-widget-15',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();

