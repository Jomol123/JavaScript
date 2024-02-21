function callBack(cb){
    console.log("This is main function");
    callBackFunction()
}
function callBackFunction(){
    console.log(" CallBack Function");
}
callBack(callBackFunction);


var a=5
function squareAndCube(cb,callback) {
    var square = a*a;
    var cube = a*a*a;
    callback(square);
    callback(cube);
  } 
  function Square(result) {
    console.log(`Square: ${result}`);
  } 
  function Cube(result) {
    console.log(`Cube: ${result}`);
  }
  squareAndCube(a, Square, Cube);
  

var a=[5,6,7,8];
var sum=0;
  function sumofArray(cb,callback) {
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
      }
    callback(sum);
  }
  
  function display(result) {
    console.log(`Sum of Array: ${result}`);
  }
   
  sumofArray(a, display);
  

  function input(callback) {
    var userInput = prompt("Enter your input:");
    callback(userInput);
  }
  function userInput(input) {
    console.log("Input is:", input);
  }
  input(userInput);
  