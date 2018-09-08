var questionOne = document.getElementsByName("question1");
how = document.getElementById('how');
blockOne = document.getElementById('blockOne');
blockTwo = document.getElementById('blockTwo');
questionTwo = document.getElementsByName("question2");
starsRowOne = document.getElementById('starsRowOne');
starsRowTwo = document.getElementById('starsRowTwo');
starsToFill = document.getElementsByClassName('star-btn text-dark star-empty');
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
    alert(s);
    fillStars(s);

}
function fillStars(s){
    var btns = [];
    //console.log(starsToFill);
    for (let index = 0; index < s; index++) {
        btns.push(starsToFill[index]);
    }
    for (let index = 0; index < btns.length; index++) {
        btns[index].removeAttribute('class');
        btns[index].setAttribute('class', 'star-btn text-warning star-fill');
    }
}