const buttons = document.querySelectorAll('.btn');


for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", bindClick(i));
}

function bindClick(i) {
 return function() {
     console.log(i);
 };
}

function showDiv() {
    document.getElementById('a').style.display = "block";
 }

 function showDiv1() {
    document.getElementById('a').style.display = "block";
 }




