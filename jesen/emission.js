var i = 1;                  //  set your counter to 1
var img = document.getElementById("img");
var source = "/SnowFrames/Frames/"
var num = 1

function myLoop() {         
  setTimeout(function() {   
    console.log('hello');   
    num = num + 1
    console.log(source.concat(num.toString(), ".png"));
    document.getElementById("img").src = source.concat(num.toString(), ".png");
    if (num < 260) { 
      myLoop();             
    }
    if (num > 260) {
      console.log("new")
      num = 0
      
      
    }
  }, 50)
}
 
myLoop();  



