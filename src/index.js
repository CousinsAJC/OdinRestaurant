import "./styles.css";
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

homeButton.addEventListener('click', (e)=>{
    loadHome();
});

menuButton.addEventListener('click', (e)=>{
    loadMenu();
});

contactButton.addEventListener('click', (e)=>{
    loadContact();
});

loadHome();