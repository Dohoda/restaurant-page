import "./styles.css";
import loadPage from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";



loadPage();

const content = document.querySelector("#content");

const homeButton = document.querySelector("#btn1");
homeButton.addEventListener("click",function(e){
    content.innerHTML = "";
    loadPage();
});
const menuButton = document.querySelector("#btn2");
menuButton.addEventListener("click",function(e){
    content.innerHTML = "";
    loadMenu();
});
const contactButton = document.querySelector("#btn3");
contactButton.addEventListener("click",function(e){
    content.innerHTML = "";
    loadContact();
});