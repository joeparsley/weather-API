var fahrenheit = require('./../js/scripts.js').fahrenheitModule;
var celsius = require('./../js/scripts.js').celsiusModule;

var apiKey = "942042f4ecc3efb9fb9a8c4c152efb64";

$(document).ready(function() {

  $('#selector').submit(function(e) {
    e.preventDefault();
    var city = $('#location').val();
    var typeOfTemp = $("input:radio[name=temperature]:checked").val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
        if (typeOfTemp === "kelvin") {
        $('#output').text("The temperature in Kelvin " + city + " is " + response.main.temp);
      } else if (typeOfTemp === "fahrenheit") {
        $('#output').text("The temperature in fahrenheit" + city + ' is ' + fahrenheit(response.main.temp) + '.');
      } else if (typeOfTemp === "celsius") {
        $('#output').text("The temperature in celsius " + city + ' is ' + celsius(fahrenheit(response.main.temp)) + '.');
      }
    });
  });
});
// $('#temperature-location').click(function(){
//   var city = $('#location').val();
//   $('#location').val('');
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
//     $('.showTemperature').text("The temperature in " + city + ' is ' + fahrenheit(response.main.temp) + '.');
//   });
// });
//
// $('#temperature-celsius').click(function(){
//   var city = $('#location').val();
//   $('#location').val('');
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
//     $('.showCelsius').text("The temperature in " + city + ' is ' + celsius(fahrenheit(response.main.temp)) + '.');
//
//   });
// });
