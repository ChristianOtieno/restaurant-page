const contantContent = document.querySelector('#content');


const contactHeader = (text) => {
  const contact = document.createElement('h1');
  contact.textContent = text;

  return contact;
};

const contactDetails = (text) => {
  const addressDetails = document.createElement('h2');
  addressDetails.innerHTML = text;

  return addressDetails;
};

const contactNumber = (text) => {
  const number = document.createElement('p');
  number.textContent = text;

  return number;
};

const contactPage = () => {
  const contact = contactHeader('Contact us');
  const addressDetails = contactDetails('We are located in: <br> Foothil, West, 22786 - 3534, <br> riverside drive.');
  const number = contactNumber('For deliveries or queries. Call us on: +122345567');


  contantContent.innerHTML = '';
  // contantContent.classList.remove('backddrop');
  contantContent.appendChild(contact);
  contantContent.appendChild(addressDetails);
  contantContent.appendChild(number);
};
export default contactPage;