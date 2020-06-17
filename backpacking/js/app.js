console.log("GOod luck")

const baseURL = "http://history.openweathermap.org/data/2.5/history/                accumulated_temperature?"
let $dateQuery = $("#date")
const apiKey = "apikey=ab680529730b171d229d833b949afad3"
const queryType = "q="
let cityQuery = "atlanta, US"
let queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={ab680529730b171d229d833b949afad3}"

console.log(queryURL);
console.log(cityQuery);
console.log($dateQuery);

const generateTable = (cityQuery,$dateQuery) => {

};
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


$( () => {
    generateTable();
});
