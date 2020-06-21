/////////////////////////////////
//API Varibles
/////////////////////////////////
const baseURL = "https://api.openweathermap.org/data/2.5/weather?"
const apiKey = "&APPID=ab680529730b171d229d833b949afad3"
const queryType = "q="
let $cityQuery = $("location").val()
let $dateQuery = $("#date").val()
let queryURL = baseURL + queryType 

// API Call ex.
// api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}

/////////////////////////////////
//Food & Clothes Recommendations
/////////////////////////////////
const foodHot = ["If you want to include fresh food on the trail such as fruits and vegetables, eat it earlier in the trip (to lighten your load and prevent it from wilting or spoiling)"]
const foodCold = ["To stay warm, think of taking “just-add-water” meals that do not take much time to cook or clean up after. These are some good choices for hot meals on cold weather hikes"]
const clothHot = ["Lose the midlayer today & lighten up your base. Shorts will be more comfortable."]
const clothCold = ["Make sure to keep your midlayer then cover your hands & head."]



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
        let temp = weatherData.main.temp
        tempF = Math.ceil((weatherData.main.temp)/4)
        console.log(tempF)

        if(temp < 280) {
            $("#container").html(`
            <h3>${weatherData.name}</h3>
            <table><thead><tr><th>Temperature</th><td>
            ${tempF}</td></tr></thead>
            <tbody><tr><th>Humidity</th><td>
            ${weatherData.main.humidity}</td></tr></tbody>
            <tfoot><tr><th>Recommendation<br>Food & Clothes</th><td>${foodCold}</td><td>${clothCold}</td></tr></tfoot></table>
        `)
        } else if (temp > 280)
            $("#container").html(`
            <h5>${weatherData.name}</h5>
            <table><thead><tr><th>Temperature</th><td>
            ${tempF}</td></tr></thead>
            <tbody><tr><th>Humidity</th><td>
            ${weatherData.main.humidity}</td></tr></tbody>
            <tfoot><tr><th>Recommendation<br>Food & Clothes</th><td>${foodHot}</td><td>${clothHot}</td></tr></tfoot></table>
        `)
        $("#container").css("opacity", "1")
    }), (error) => {
        console.log(error)
    }
}
 //Listener for user input city
 $('form').on('submit', (event) => {
    event.preventDefault()
    $cityQuery = $('#location').val()
    getCity()
})

$( () => {
   
});
/////////////////////////////////
//List Function
/////////////////////////////////
let $clotharr = []
let $foodarr = []
let $equip_arr = []
$('#equip-button').on('click', () => {
    let value = $('#bringing_input-box').val();
    $equip_arr.push(value)
    let $equip_item = $("<div class ='equip-item' type='div'>" + $equip_arr[$equip_arr.length - 1] + "</div>")
    $("#equip_list").append($equip_item);
    $('#bringing_input-box').val("");
})
$('#food-button').on('click', () => {
    let value = $('#bringing_input-box').val();
    $foodarr.push(value)
    let $food_item = $("<div class ='food-item' type='div'>" + $foodarr[$foodarr.length - 1] + "</div>")
    $("#food_list").append($food_item);
    $('#bringing_input-box').val("");
})
$('#cloth-button').on('click', () => {
    let value = $('#bringing_input-box').val();
    $clotharr.push(value)
    let $cloth_item = $("<div id ='cloth-item' type='div'>" + $clotharr[$clotharr.length - 1] + "</div>")
    $("#cloth_list").append($cloth_item);
    $('#bringing_input-box').val("");

        // $(document).on('click', "#remove-btn", function (event) {
        //     let id = this.id;
        //     $(event.currentTarget).attr("id", "btn-completed").removeClass("remove-btn")
        //     $("#btn-completed").remove()
        
        // });
});

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
