const menuContent = document.querySelector('#content');

const FOODLIST = [
  ['Original Double ‘N Cheese Steakburger – Steak ‘N Shake',
    'You can’t go wrong with two Steakburgers topped with melted cheese, lettuce, tomato, grilled onions, jalapeños, and mayo all found on a sourdough bun. The original double ‘n cheese steakburger at Steak ‘N Shake comes with a side of fries and, when you wash it all down with a chocolate shake, you’re sure to walk away smiling.'],
  ['Cheese Biscuits – Red Lobster',
    'When you first sit down at Red Lobster, you’re in for a real treat almost immediately: cheese biscuits. Anyone who has ever been to this chain seafood restaurants knows that you go for the lobster, but stay for the biscuits. This is a simple dish, basically biscuits with cheese baked right into the batter, but sometimes the simplest things are what make us the happiest.'],
  ['Spicy Grilled Shrimp Tacos – Chili’s',
    'Head on down to Chili’s and order this delicious take on a traditional Mexican dish: the Spicy Grilled Shrimp Taco. When you do, you’ll experience three tortillas stuffed with grilled shrimp, pico de gallo salsa, and sliced avocados for balance. This unique take on a traditional Mexican dish will have you begging for seconds – guaranteed.'],
  ['Chang’s Chicken Lettuce Wraps – P.F. Chang’s',
    'Everyone loves a trip to P.F. Chang’s. Next time you stop by, be sure and give the chain’s Chicken Lettuce Wraps a try. You’ll be served crisp lettuce cups stuffed with chicken, mushrooms, green onions, and water chestnuts. You’ll almost certainly be fighting the rest of your party to get every bite of this unique and tasty dish.'],
];

const fillTableData = (foodListMenu) => {
  const tableData = document.createElement('td');
  tableData.textContent = foodListMenu;
  return tableData;
};

const fillTableRow = (food) => {
  const tableRow = document.createElement('tr');
  tableRow.appendChild(fillTableData(food[0]));
  tableRow.appendChild(fillTableData(food[1]));
  return tableRow;
};

const fillMenuItems = menuTable => {
  FOODLIST.forEach(food => {
    menuTable.appendChild(fillTableRow(food));
  });
};

const fillMenuHeadings = (menuTable) => {
  const tableRow = document.createElement('tr');
  const tableHeadingFood = document.createElement('th');
  const tableHeadingDescription = document.createElement('th');

  tableHeadingFood.textContent = 'Food';
  tableHeadingDescription.textContent = 'Description';

  tableRow.appendChild(tableHeadingFood);
  tableRow.appendChild(tableHeadingDescription);

  menuTable.appendChild(tableRow);
};

const fillMenuTable = () => {
  const menuTable = document.createElement('table');
  menuTable.classList.add('menu-table');
  fillMenuHeadings(menuTable);
  fillMenuItems(menuTable);

  return menuTable;
};

const fillMenuImg = () => {
  const img = document.createElement('img');
  img.setAttribute('src', './assets/food.jpg');

  return img;
};

const MenuPage = () => {
  const container = document.createElement('div');
  container.classList.add('menu-container');

  const menuTable = fillMenuTable();
  const menuImg = fillMenuImg();
  container.appendChild(menuImg);
  container.appendChild(menuTable);

  menuContent.classList.add('backdrop');
  menuContent.innerHTML = '';
  menuContent.appendChild(container);
};

export default MenuPage;