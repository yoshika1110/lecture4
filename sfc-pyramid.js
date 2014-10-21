var sfcPyramid = function(n){
  var message = "";
  var counter = 0;

  while(counter < n){
    message = message + "SFC ";
    counter = counter + 1;
  }
  return message;
};

var output;
var counter = 0;
var number = 1;

while(counter < 5){
  output= sfcPyramid(number);
  console.log(output);
  number = number + 1;
  counter = counter + 1;
}
