//business logic stuff for a particular module


var fahrenheit = function(x){
  return 1.8 * (x - 273) + 32;
};

var celsius = function(x) {
  return (x - 32) * 5 / 9;
};

exports.fahrenheitModule = fahrenheit;
exports.celsiusModule = celsius;




// Deduct 32, then multiply by 5, then divide by 9
