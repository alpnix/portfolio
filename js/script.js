// define buttons 
let topButton = document.querySelector("#topBtn");
let visualButton = document.querySelector("#visuallink");

// defining top functionality 
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// defining all sections
var sections = document.querySelectorAll("section")
var about = document.getElementById("aboutlink")
var education = document.getElementById("educationlink")
var skills = document.getElementById("skillslink")
var experience = document.getElementById("experiencelink")
var visual = document.getElementById("visuallink")

// avoiding button's # to get into URL
$(document).on("click", ".navbar ul li a", function(event){
    $(this).addClass("active").siblings().removeClass("active");
    setTimeout(() => {
        history.pushState("", document.title, window.location.pathname);
    },1)
})

// adding 'go top' button and section highlights on scroll
onscroll = function() {    
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
    var scrollPosition = document.documentElement.scrollTop
    console.log(scrollPosition);

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - section.offsetHeight*0.25 && 
            scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight*0.25) {
            // inside the if statement
            var currentId = section.attributes.id.value
            removeAllActiveClasses()
            addActiveClass(currentId)
        }
    })
}

// helpers for scrolling
var removeAllActiveClasses = function() {
    document.querySelectorAll(".navbar ul li a").forEach((el) => {
        el.classList.remove("active")
    })
}
var addActiveClass = function(id) {
    var selector = '.navbar ul li a[href="#' + String(id) + '"]'
    document.querySelector(selector).classList.add("active")
}

// avoid the url hashing
var navLinks = document.querySelectorAll(".navlist li");
for (const link of navLinks) {
    link.addEventListener("click", () => {
        return false;
    })
}

// define related DOM elements for menu toggling
var menuButton = document.querySelector(".navlist input");
var menu = document.querySelector(".navbar");
var sectionsList = document.querySelector(".navlist ul");
var buttonSection = document.querySelector(".navbar .contact");

// create function for menu toggling 
var toggleMenu = function() {
    menu.classList.toggle("full-menu");
    sectionsList.classList.toggle("toggle-menu");
    buttonSection.classList.toggle("button-menu");
    document.querySelector(".contact>a").classList.toggle("showBlock");
}

// toggle menu when the burger icon is clicked 
// (on 'change' because it's a checkbox)
menuButton.addEventListener("change", () => {
    toggleMenu();
    for (const link of navLinks) {
        link.addEventListener("click", () => {
            document.querySelector(".navlist .burger-menu").click();
            document.querySelector(".navlist input").click();
        })
    }    
})