/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/



//Define Global Variables
const sections = document.querySelectorAll("section");
const UL = document.getElementById("navbar__list");



/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    for (let i = 0; i < sections.length; i++) {
        const newLi = document.createElement('li');
        const sectionName = sections[i].getAttribute('data-nav');
        const sectionID = sections[i].getAttribute('id');
        newLi.innerHTML = `<a class = "menu__link" data-id = "${sectionID}">${sectionName}</a>`;
        UL.appendChild(newLi);
    }
}

// Add class 'active' to section when near top of viewport
function addActiveClass() {
    for (let i = 0; i < sections.length; i++) {
        let sectionTop = sections[i].getBoundingClientRect().top;
        if (sectionTop >= 0 && sectionTop <= 400) {
            sections.forEach(function (sec) {
                if (sec.classList.contains("your-active-class")) {
                    sec.classList.remove("your-active-class");
                }
            });
            if (sections[i].classList.contains("your-active-class") === false) {
                sections[i].classList.add("your-active-class");
            }
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(event) {
    const ID = event.target.getAttribute('data-id');
    const selectedSection = document.getElementById(ID);
    selectedSection.scrollIntoView({ behavior: "smooth" });
}



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
buildNav();

// Scroll to section on link click
UL.addEventListener('click', function (event) { scrollToSection(event) });

// Set sections as active
document.addEventListener('scroll', function () { addActiveClass() });

