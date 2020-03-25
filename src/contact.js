const contantContent = document.querySelector('#Content');


const contactHeader = (text) => {
  const contact = document.createElement('h3');
  contact.textContent = text;

  return contact;
};

const contactDetails = (text) => {
  const addressDetails = document.createElement('p');
  addressDetails.innerHTML = text;

  return addressDetails;
};

const contactNumber = (text) => {
  const number = document.createElement('p');
  number.textContent = text;

  return number;
};

const contactPage = () => {
  const contact = contactHeader('Contact Us');
  const addressDetails = contactDetails('foothil 22786 - 3534 riverside drive.');
  const number = contactNumber('+122345567');


  contantContent.innerHTML = '';
  contantContent.classList.remove('backddrop');
  contantContent.appendChild(contact);
  contantContent.appendChild(addressDetails);
  contantContent.appendChild(number);
};
export default contactPage;