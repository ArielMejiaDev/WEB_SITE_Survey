alert('coso');
var questionOne = document.getElementsByName("question1");
how = document.getElementById('how');
blockOne = document.getElementById('blockOne');
blockTwo = document.getElementById('blockTwo');
questionTwo = document.getElementsByName("question2");
starsRowOne = document.getElementById('starsRowOne');
starsRowTwo = document.getElementById('starsRowTwo');
starsToFill = document.getElementsByClassName('fas fa-star fa-x7');
for (let index = 0; index < questionOne.length; index++) {
    questionOne[index].addEventListener("click", stepOne);
}
function stepOne(r) {
    r.preventDefault();
    var response = r.target.getAttribute('response');
    sendValues(response);
}
function sendValues(response)
{
    how.innerHTML = response;
    hiddeStepOne();
}
function hiddeStepOne(){
    blockOne.style.display='none';
    showStepTwo();
}
function showStepTwo(){
    blockTwo.style.display='inline-block';
    blockTwo.setAttribute('class', 'card animated slideInRight');
}
for (let index = 0; index < questionTwo.length; index++) {
    questionTwo[index].addEventListener("click", stepTwo);
}
function stepTwo(s)
{
    s.preventDefault();
    var star = s.target.getAttribute('response');
    replaceStars(star);
}
function replaceStars(s){
    starsRowOne.style.display = "none";
    starsRowTwo.style.display = "block";
    fillStars(s);
}
function fillStars(s){
    for (let index = 0; index < s; index++) {
        var btn = document.getElementById(index).addEventListener('click', fill);
        
    }
    alert(s);
}
function fill(e)
{
    e.target.setAttribute('class', 'text-warning');
}