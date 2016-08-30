/**
 * Created by andy on 8/22/16.
 */


// Fetch user location.
    $.ajax({
        type: 'GET',
        url: 'http://ipinfo.io',
        dataType: 'json',
        success: function (data1) {
            getData(data1);
        }
    });


// Fetch Weather Data from remote Provider.
function getData(userLocation) {
    //fetch data;
    var url = 'http://api.openweathermap.org/data/2.5/weather?';
    var key = '&APPID=694ccf5ed9b548dcfb8db1a0c75a1e7a';
    var city = userLocation.city;
    var country = userLocation.country;
    var zipcode = ('zip=' + userLocation.postal + ',us');
    $.ajax({
        type: 'GET',
        url: url + zipcode + key,
        dataType: 'json',
        success: function (weatherDataIn) {
                //receive raw data from api and shape them to be displayed on website
                var tempF = Math.round((weatherDataIn.main.temp * (9 / 5)) - 459.67);
                var tempC = Math.round(weatherDataIn.main.temp  - 273.15);
                var description = weatherDataIn.weather[0].main;
                var icon = ("<img src='http://openweathermap.org/img/w/" + weatherDataIn.weather[0].icon + ".png'>");
                //update webpage with fresh info
                $('#temp').html(tempF + "°F");
                $('#icon').html(icon);
                $('#stat').html(description);
                $('#info').html(city + ", " + country);
        }
    })
}

