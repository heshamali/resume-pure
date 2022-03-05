// Save Color To Local Storage
let saveColor = localStorage.getItem("opt-color");
if (saveColor !== null) {
    document.documentElement.style.setProperty("--mainColor", saveColor);

    //Remove Class Active
    document.querySelectorAll(".color-list li").forEach(el => {
        el.classList.remove("active");
        if (el.dataset.color === saveColor) {
            el.classList.add("active");
        }
    });
}
// Start Settings Box
let settingsBtn = document.querySelector(".night");
let optionBox = document.querySelector(".options");

settingsBtn.onclick = function () {
    optionBox.classList.toggle("open");
}
    // The Color Switches
const colorsBox = document.querySelectorAll(".color-list li");
colorsBox.forEach(box => {
    box.addEventListener("click", (e) => {
        e.stopPropagation();
        document.documentElement.style.setProperty('--mainColor', e.target.dataset.color);

        // Save Color To Localstorage
        localStorage.setItem("opt-color", e.target.dataset.color);

        //Toggle Class Active
        let colorActive = e.target.parentElement.querySelectorAll(".active");
        colorActive.forEach(el => {
            el.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});
document.addEventListener("click", (e) => {
    if(e.target !== settingsBtn && e.target !== optionBox) {
        if(optionBox.classList.contains("open")) {
            optionBox.classList.toggle("open");
        }
    }
});
optionBox.onclick = function (e) {
    e.stopPropagation();
}
//-----------------------------------------------------------
// Start Header
let links = document.querySelectorAll(".links");
links.forEach(link=> {
    link.addEventListener("click", function() {
        links.forEach(navs=> navs.classList.remove("active"));
        this.classList.add("active");
    });
});

// Start Hesham section
let developer = document.querySelector(".frontend");
let i = 0;

window.onload = function () {
    let typeWriter = setInterval(function () {
        developer.textContent += developer.dataset.text[i];
        i++;
        if ( i > (developer.dataset.text.length - 1)) {
            clearInterval(typeWriter);
        }

    }, 50);
}
// Start Scroll To Elements
let navLinks = document.querySelectorAll(".links a");
navLinks.forEach((item) => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        let section = document.getElementById(item.getAttribute("data-scr"));
        section.scrollIntoView({behavior: "smooth"});
    });
});

// Start Scroll Top Button
// let sbtn = document.querySelector(".up");
// window.onscroll = function () {
//     if (this.scrollY >= 540) {
//         sbtn.classList.add("show");
//     } else {
//         sbtn.classList.remove("show");
//     }
// }
//
// sbtn.onclick = function () {
//     window.scroll({
//         top: 0,
//         behavior: "smooth"
//     });
// }


// Start Scroll Top Button & Skills & Resume Animation
let sbtn = document.querySelector(".up");

let skills = document.querySelector(".skills");
let spans = document.querySelectorAll(".skills .skill .progress1 span");

let resume = document.querySelector(".resume");
let timeLineRight = document.querySelectorAll(".resume .timeline .right-content");
let timeLineLeft = document.querySelectorAll(".resume .timeline .left-content");
window.onscroll = function () {
    // Scroll Top Button
    if (this.scrollY >= 540) {
        sbtn.classList.add("show");
    } else {
        sbtn.classList.remove("show");
    }

    //Skills:
    if (window.scrollY >= skills.offsetTop) {
        spans.forEach(span => {
            span.style.width = span.dataset.progress;
        });
    }

    //Resume
    if (window.scrollY >= resume.offsetTop) {
        timeLineRight.forEach(lineR => {
            lineR.style.transform = "translateX(0%)";
        });
        timeLineLeft.forEach(lineL => {
            lineL.style.transform = "translateX(0%)";
        });
    }
}

// Start Toggle Button
let toggleBtn = document.querySelector(".toggle .toggle-icon");
let navMenu = document.querySelector(".nav-menu");
toggleBtn.onclick = function (e) {
    e.stopPropagation();
    navMenu.classList.toggle("open");
}

document.addEventListener("click", (e) => {
    if(e.target !== toggleBtn && e.target !== navMenu) {
        if(navMenu.classList.contains("open")) {
            navMenu.classList.toggle("open");
        }
    }
});
navMenu.onclick = function (e) {
    e.stopPropagation();
}

// Scroll Top Button
sbtn.onclick = function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
}