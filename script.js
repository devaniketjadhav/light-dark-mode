const toggleSwitch = document.querySelector('input[type = "checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Change Mode Styles
function changeMode(mode){
    nav.style.backgroundColor = (mode === 'Dark') ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = (mode === 'Dark') ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = `${mode} Mode`;
    toggleIcon.children[1].classList.replace((mode === 'Dark') ? 'fa-sun' : 'fa-moon', (mode === 'Dark') ? 'fa-moon' : 'fa-sun');
    image1.src = `./img/undraw_proud_coder_${mode}.svg`;
    image2.src = `./img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `./img/undraw_conceptual_idea_${mode}.svg`;
}

//Switch theme dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        changeMode('Dark');
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
        changeMode('Light');
    }
}

//Event Listener
toggleSwitch.addEventListener('change',switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    if(currentTheme === 'dark'){
        document.documentElement.setAttribute('data-theme','dark');
        toggleSwitch.checked = true;
        changeMode('Dark');
    } else{
        document.documentElement.setAttribute('data-theme','light');
        toggleSwitch.checked = false;
        changeMode('Light');
    }
}