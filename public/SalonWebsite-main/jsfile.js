

function submitForm(event) {
    event.preventDefault();
    alert("Thank you for booking! We will get in touch with you shortly.");
}

function ContactUsForm(event) {
    event.preventDefault();
    alert("Thank you for contacting us! we'll get back as soon as we can.");
}


const wrapper= document.querySelector('.wrapper');
const loginLink= document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');
const btnPopup= document.querySelector('.hero-btn');
const iconClose= document.querySelector('.icon-close');
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});



document.addEventListener("DOMContentLoaded", function () {
    var loginBtn = document.getElementById("lgn");
    var registerBtn = document.getElementById("rgstr");

    loginBtn.addEventListener("submit", function (e){
        
       
            location.href = "booking.html";
            e.preventDefault();
    });

    registerBtn.addEventListener("submit", function (e) {
        

        location.href = "booking.html";
        e.preventDefault();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const imagePairs = document.querySelectorAll('.image-pair');

    setInterval(() => {
        const activePair = document.querySelector('.image-pair.active');
        const nextPair = activePair.nextElementSibling || imagePairs[0];

        activePair.classList.remove('active');
        nextPair.classList.add('active');
    }, 1000); 
});

var hair_button = document.getElementById("hair_button");
var hair_menu = document.getElementById("hair_menu");
hair_button.addEventListener("click", function () {
    if (hair_menu.style.display === "none") {
        hair_menu.style.display = "block";
    } else {
        hair_menu.style.display = "none";
    }
})
var hair_buttonC = document.getElementById("hair_buttonC");
var hair_menuC = document.getElementById("hair_menuC");
hair_button.addEventListener("click", function () {
    if (hair_menuC.style.display === "none") {
        hair_menuC.style.display = "block";
    } else {
        hair_menuC.style.display = "none";
    }
})
function handleMouseOver(elementId) {
    document.getElementById(elementId).style.color = 'brown';
}

function handleMouseOut(elementId) {
    document.getElementById(elementId).style.color = 'rgb(71, 43, 33)';
}
function toggleTextColor(elementId) {
    var element = document.getElementById(elementId);
    var currentColor = element.style.color;

    element.style.color = currentColor ===  'black' ? ' #f9f8f8' : 'black';
 }

 function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
}

function showMessage() {
    var userInput = prompt("Enter Your Review:");
    if (userInput !== null) {
        alert("Thank You!");
    }
}