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
formButton = document.getElementById('formButton');
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
    how.value = response;
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
for (let index = 0; index < starsRow.length; index++) {
    starsRow[index].addEventListener('click', stepTwo);

}
function stepTwo(e){
    e.preventDefault();
    var starValue = e.target.getAttribute('href');
    sendStarsValues(starValue);
}
function sendStarsValues(starValue){
    stars.value = starValue;
    hiddeStepTwo();
}
function hiddeStepTwo(){
    blockTwo.style.display='none';
    showStepThree();
}
function showStepThree(){
    blockThree.style.display='inline-block';
    blockThree.setAttribute('class', 'card animated slideInDown');
}
function sendData(){
    if (userName.value!="" && work.value !="" && age.value!="") {
        return true;
    }
}
form.addEventListener('submit', showData);
function showData(){
    console.log(how);
    console.log(stars);
    console.log(userName);
    console.log(work);
    console.log(age);
    alert("Como obtuvo los zapatos: "+how.value+"\nClasificacion del zapato: "+stars.value+"\nNombre: "+userName.value+"\nTrabaja en: "+work.value+"\nDe edad: "+age.value);
}