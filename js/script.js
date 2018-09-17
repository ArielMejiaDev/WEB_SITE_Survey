// Elements
//-----------------------------------------------------------
var questionOne = document.getElementsByName("question1");
how = document.getElementById('how');
stars = document.getElementById('stars');
blockOne = document.getElementById('blockOne');
blockTwo = document.getElementById('blockTwo');
blockThree = document.getElementById('blockThree');
questionTwo = document.getElementsByName("question2");
starsRow = document.getElementsByClassName('star');
userName = document.getElementById('userName');
work = document.getElementById('work');
age = document.getElementById('age');
shoe = document.getElementById('shoe');
country = document.getElementById('country');
formButton = document.getElementById('formButton');
//End Elements

//Background variables
var timeInSeconds = 6;
var time = timeInSeconds*1000;
var fotos = [
    'https://images.unsplash.com/photo-1536936343740-68cb2a95f935?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9531340b80f0715f6978b1e732020e09&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1536956570953-8124479796df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1295c1125fd6aeb7569d41e2afb79e07&auto=format&fit=crop&w=750&q=80',
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
}, 5000);
//Function to change background

//Event - click button first question
//-----------------------------------------------------------
for (let index = 0; index < questionOne.length; index++) {
    questionOne[index].addEventListener("click", stepOne);
}
//Get the value of the button selected
//-----------------------------------------------------------
function stepOne(r) {
    r.preventDefault();
    var response = r.target.getAttribute('response');
    sendValues(response);
}
//Set value to the how input
//-----------------------------------------------------------
function sendValues(response)
{
    how.value = response;
    hiddeStepOne();
}
//Hidde the card of first question
//-----------------------------------------------------------
function hiddeStepOne(){
    blockOne.style.display='none';
    showStepTwo();
}
//display the second card & add animation
//-----------------------------------------------------------
function showStepTwo(){
    blockTwo.style.display='inline-block';
    blockTwo.setAttribute('class', 'card animated slideInRight');
}
//Event #2 click on stars
//-----------------------------------------------------------
for (let index = 0; index < starsRow.length; index++) {
    starsRow[index].addEventListener('click', stepTwo);

}
//Get the value of href of the links
//-----------------------------------------------------------
function stepTwo(e){
    e.preventDefault();
    var starValue = e.target.getAttribute('href');
    sendStarsValues(starValue);
}
//Set the value of stars input
//-----------------------------------------------------------
function sendStarsValues(starValue){
    stars.value = starValue;
    hiddeStepTwo();
}
//Hidde the second card
//-----------------------------------------------------------
function hiddeStepTwo(){
    blockTwo.style.display='none';
    showStepThree();
}
//Display the second card & add animation
//-----------------------------------------------------------
function showStepThree(){
    blockThree.style.display='inline-block';
    blockThree.setAttribute('class', 'card animated slideInDown');
}
//Validate the form
//-----------------------------------------------------------
function sendData(){
    if (userName.value!="" && work.value !="" && age.value!="") {
        return true;
    }
}
//Third Event submit
//-----------------------------------------------------------
form.addEventListener('submit', showData);
//Show data
//-----------------------------------------------------------
function showData(){
    console.log(how);
    console.log(stars);
    console.log(userName);
    console.log(work);
    console.log(age);
    console.log(shoe);
    console.log(country);
    alert("Como obtuvo los zapatos: "
    +how.value+"\nClasificacion del zapato: "
    +stars.value+"\nNombre: "
    +userName.value+"\nTrabaja en: "
    +work.value+"\nDe edad: "
    +age.value+"\nZapato: "
    +shoe.value+"\nPais: "
    +country.value
    );
}