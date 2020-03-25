const homeContent = document.querySelector('#content');
const homePageLogo = document.querySelector('#logo');


const logoName = (text) => {
  const logo = document.createElement('h1');
  logo.textContent = text;

  return logo;
};
const headlinerPhrase = (text) => {
  const headliner = document.createElement('h2');
  headliner.innerHTML = text;

  return headliner;
};

const miniHeadlinerPhrase = (text) => {
  const phrase = document.createElement('p');
  phrase.textContent = text;

  return phrase;
};

const homePage = () => {
  const logo = logoName('Gabriel\'s place');
  const headliner = headlinerPhrase('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  const phrase = miniHeadlinerPhrase(' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');


  homePageLogo.innerHTML = '';
  homePageLogo.classList.remove('backddrop');
  homePageLogo.appendChild(logo);

  homeContent.innerHTML = '';
  homeContent.classList.remove('backdrop');
  homeContent.appendChild(headliner);
  homeContent.appendChild(phrase);
};

export default homePage;