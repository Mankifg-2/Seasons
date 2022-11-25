var i = 1;                  //  set your counter to 1
var img = document.getElementById("img");
var source = "/SnowFrames/Frames/"
var num = 10

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    console.log('hello');   //  your code here
    num = num + 1
    console.log(source.concat(num.toString(), ".png"));
    num = (4 - num.length) * "0" + num //! bad code
    document.getElementById("img").src = source.concat(num.toString(), ".png");
    if (num < 260) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 50)
}
 
myLoop();                   //  start the loop