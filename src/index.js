import "./styles.css";
import createIntroduction from "./introduction.js";
import createMenu from "./menu.js";

console.log("Welcome to my restaurant!");

const navBtn = (function() {
    const content = document.getElementById("content");

    function clearContent() {
        content.innerHTML = "";
    }

    function loadSection(sectionCreator) {
        clearContent();
        const sectionHTML = sectionCreator();
        content.appendChild(sectionHTML);
    }

    return {
        loadSection
    }

})();

document.getElementById("nav-btn__home").addEventListener("click", () => navBtn.loadSection(createIntroduction));
document.getElementById("nav-btn__menu").addEventListener("click", () => navBtn.loadSection(createMenu));



   
