var randomSFCPyramid = function(n){

var message = "";
var counter = 0;

while(counter < n){
  message = message +"SFC ";
  counter = counter + 1;

}
  return message;
};

var output;
var number = 1;
var n = Math.random() * 100;
Math.floor(n);

while(number <= n){
  output = sfcPyramid (number);
  console.log(output);
  number = number + 1;
}
