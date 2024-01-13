let sun=document.getElementById("sun");
let div=document.querySelector(".toggle");
let circle=document.getElementById("circle");
let body=document.querySelector("body");
let h1=document.getElementById("head");

body.style.backgroundColor="white";
div.addEventListener('click', ()=>{
if(body.style.backgroundColor==="white"){
    body.style.backgroundColor="black";
    h1.style.color="white";

    circle.style.left="53%";
    circle.style.transitionDuration="0.5s";
}else{
    body.style.backgroundColor="white";
    circle.style.left="4%"
    circle.style.transitionDuration="0.5s";
    circle.style.backgroundColor="green";
    h1.style.color="black";

}

// var element = document.body;
//    element.classList.toggle("dark-mode");

});