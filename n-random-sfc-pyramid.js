var nRandomSFCPyramid = function(n){

var message = "";
var counter = 0;

while(counter < n){
  message = message +"sfc ";
  counter = counter + 1;

}
  return message;
};

var output;
var number = 1;
var n = Math.random() * 100;
Math.floor(n);

while(counter<3){
  output = nRandomSFCPyramid(number);
  console.log(output);
  number = number + 1;

};
