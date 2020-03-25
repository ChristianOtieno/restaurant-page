import './main.scss';
import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

// header child-nodes
const toggles = document.querySelectorAll('.nav-item');
const homeToggle = document.querySelector('#home-toggle');
const menuToggle = document.querySelector('#menu-toggle');
const contactToggle = document.querySelector('#contact-toggle');
const contentDiv = document.querySelector('#content');

const selectToggle = (toggleButton) => {
  toggles.forEach(toggle => {
    if (toggle === toggleButton) {
      toggle.classList.add('nav-item-selected');
    } else {
      toggle.classList.remove('nav-item-selected');
    }
  });
};

// event handlers
homeToggle.addEventListener('click', function () {
  selectToggle(this);
  homePage();
});
menuToggle.addEventListener('click', function () {
  selectToggle(this);
  menuPage();
});
contactToggle.addEventListener('click', function () {
  selectToggle(this);
  contactPage();
});
contentDiv.addEventListener('animationend', function () {
  this.classList.remove('down-enter-active');
});

homePage();
