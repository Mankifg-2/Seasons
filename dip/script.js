document.onkeydown = checkKey;

var i = 1
var source = "./dip"

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       i = i - 1
       if (i<1) {i = i +1}
       work(i)

    }
    else if (e.keyCode == '39') {
        i = i + 1
        if(i>6) {i = i - 1}
        work(i)
    }

}
function work(index) {
    console.log(i);
    document.getElementById("img").src = source.concat(index.toString(), ".jpg");
    console.log(source.concat(index.toString(), ".jpg"));
}