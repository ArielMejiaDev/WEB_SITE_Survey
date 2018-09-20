var user = document.getElementById('userName');
code = document.getElementById('code');
user.addEventListener('blur', fillCode, false);
resp = document.getElementById('resp');
function fillCode(){
    var user = userName.value.charAt(0).toUpperCase();
    date = new Date();
    year = date.getFullYear().toString().substr(-2);
    month = date.getMonth();
    day = date.getDate();
    hour = date.getHours();
    minute = date.getMinutes();
    code.value = user+minute+''+hour+''+day+''+month+''+year;
    resp.innerHTML = user+minute+''+hour+''+day+''+month+''+year;
}
