// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);
// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const item1 = document.createElement('li');
item1.textContent = 'one';
const item2 = document.createElement('li');
item2.textContent = 'two';
const item3 = document.createElement('li');
item3.textContent = 'three';
myList.appendChild(item1);
myList.appendChild(item2);
myList.appendChild(item3);
// put that list into the above wrapper
myDiv.appendChild(myList);
// create an image
const myPic = document.createElement('img');

// set the source to an image
myPic.src = 'https://picsum.photos/500';
// set the width to 250
myPic.width = 250;
// add a class of cute
myPic.classList.add('cute');
// add an alt of Cute Puppy
myPic.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(myPic);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `<div>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem inventore, sed ad esse libero aperiam laborum soluta fuga illo accusamus cupiditate. Quisquam nisi eos facere expedita praesentium enim quidem accusantium?  </p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem illo alias dolore saepe suscipit dignissimos ullam! Tenetur labore soluta delectus sequi praesentium aliquid incidunt facilis ipsa eos, quam eius?</p>
</div> `;
const myFragment = document.createRange().createContextualFragment(myHTML);
const myParagraphs = myFragment.firstElementChild;
myDiv.insertAdjacentElement('afterbegin', myParagraphs);

// add a class to the second paragraph called warning
myParagraphs.lastElementChild.classList.add('warning');

// remove the first paragraph
myParagraphs.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
        const AGEINDOGYEARS = Math.floor(age / 7);
        const myHTML = `
        <div class="playerCard" id = ${name}>
        <div class = "close-btn ${name}">X</div>
        <h2>${name} — ${age} </h2> 
   <p>They are ${height} and {age} years old. In Dog years this person would be ${AGEINDOGYEARS}. That would be a tall dog!</p>
 </div>`;
        const myFragment = document.createRange().createContextualFragment(myHTML);
        const myElement = myFragment.firstElementChild;
        return myElement;
}
// make a new div with a class of cards
const myDiv3 = document.createElement('div');
// make 4 player cards using generatePlayerCard
const card1 = generatePlayerCard('Ran', 15, 15);
const card2 = generatePlayerCard('Heli', 13, 165);
const card3 = generatePlayerCard('Steve', 135, 125);
const card4 = generatePlayerCard('Briean', 115, 153);
// append those cards to the div
myDiv3.appendChild(card1);
myDiv3.appendChild(card2);
myDiv3.appendChild(card3);
myDiv3.appendChild(card4);
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', myDiv3);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
function closeCard(event) {
        const targetElement = event.target || event.srcElement;
        const nameTmp = targetElement.classList[1];
        const elementTmp = document.getElementById(nameTmp);
        elementTmp.style.display = 'none';
        console.log('Removed Card');
}
const closeButtons = document.querySelectorAll('.close-btn');
const b0 = closeButtons[0];
b0.addEventListener('click', closeCard);
// select all the buttons!
// make out delete function
// loop over them and attach a listener
