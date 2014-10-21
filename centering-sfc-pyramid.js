var centeringSfcPyramid = function(n){
  var message = "";
  var counter = 0;
  var a = 1;
  var b = 5;
  var lec = "  ";

  while(counter < n){
    var info = b - a;
    var project = lec.repeat(info);
    message = message + "SFC ";
    counter = counter + 1;
    a = a + 1;
  }
  return  project + message;
};

var output;
var counter = 1;
var a = 1;
var b = 5;

while(counter <= b){
  output= centeringSfcPyramid(counter);
  console.log(output);
  counter = counter + 1;
}
