//listener for load
addEventListener('load', setBackground, false);
function setBackground(){
    document.body.style.backgroundImage = "url(images/1.png)";
}
//Background variables
var timeInSeconds = 6;
var time = timeInSeconds*1000;
var fotos = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'https://images.unsplash.com/photo-1536936319023-3d99613837e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5da2c676bc7885c4636b0c7b671355fd&auto=format&fit=crop&w=750&q=80'
];

var counter = 0;
var countUp = setInterval(function(){
    console.log(counter);
    console.log("set background"+fotos[counter]);
    document.body.style.backgroundImage = "url("+fotos[counter]+")";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    counter++
    if (counter === fotos.length) {
    //clearInterval(countUp);
    counter =0;
    }
}, 10000);
//Function to change background