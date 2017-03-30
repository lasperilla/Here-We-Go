var city = "";
function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

$("#destination-submit").on("click", function(event) {
    event.preventDefault();
    //get city from input field
    city = $("#destination-input").val().trim();
    console.log(city)
    console.log('destination input ' + $("#destination-input").val().trim())


    var APIKEY = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?" +
        "q=" + city + "&units=imperial&appid=" + APIKEY;

    //ajax request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {

        var weather = response.weather[0].main
        var temp = response.main.temp
        var humidity = response.main.humidity
        var low = response.main.temp_min
        var high = response.main.temp_max

        console.log(response)
        console.log('json url ' + queryURL)

        city = toTitleCase(city);

        $("#weather").html("<div class=\"panel panel-default\"><div class=\"panel-heading panel-title\">"+city+" Weather</div>" +
            "<div class=\"panel-body\">" +
            "Current Weather: " + weather + "<br>" +
            "Current Temperature: " + temp + "°F<br>" +
            "High: " + high + "°F / Low: " + low + "°F</div></div>");
    });
});
