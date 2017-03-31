var city = "";

$("#destination-submit").on("click", function(event) {
    event.preventDefault();
    //get city from input field
    city = $("#destination-input").val().trim();
    console.log(city)
    console.log('destination input ' + $("#destination-input").val().trim())


    var APIKEY = "bdb324a30b314e7592c232435173003";
    var queryURL = "https://api.apixu.com/v1/current.json?key=" + APIKEY+
        "&q=" + city;
    console.log('queryURL ' +queryURL);

    //ajax request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {

        var weather = response.current.condition.text
        var weatherImg = response.current.condition.icon
        var temp = response.current.temp_f
        var humidity = response.current.humidity
        var feelsLike = response.current.feelslike_f
        city = response.location.name

        console.log(response)
        console.log('json url ' + queryURL)

       

        $("#weather").html(
            "<div class=\"panel panel-default\"><div class=\"panel-heading panel-title\">"+
            city+" Weather</div>" +
            "<div class=\"panel-body\">" + 
            "<img src=\"https:"+weatherImg+"\">"+ "<br>"+
            "Current Weather: " + weather + "<br>" +
            "Current Temperature: " + temp + "°F / " +
            "Feels Like: " + feelsLike + "°F<br>" +
            "Humidity: " + humidity + "</div></div>");
    });
});
