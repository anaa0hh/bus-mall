'use strict';
//we need an array of images
//we need a constructor function for the products --- methods in constructor function
//we need an event listener
//we need an image repository
//we need to randomize the images
//we need a counter
//we need an event handler
//we need to display the list with DOM manipulation
//make sure images to not repeat
//DOM appending


Product.names = ['bag','banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu' ,'dog-duck', 'dragon', 'pen', 'pet-sweep', 'tauntaun', 'unicorn', 'usb' , 'water-can.jpg', 'wine-glass'];

Product.all =[];
Product.container = document.getElementById('image_container');
Product.justViewed = [];
Product.pics = [document.getElementById('left'), document.getElementById('center'), document.getElementById('right')];

//to keep tally of clicks
Product.tally = document.getElementById('tally');
Product.totalClicks = 0;


//the constructor function is below
function Product(name) {
  this.name = name;
  this.path = 'img/' +name+ '.jpg';
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}

for (var i = 0; i <Product.name.length; i++) {
  new Product(Product.name[i]);
}

//This is how we select randomize the images//
function makeRandom() {
  return Math.floor(Math.random() * Product.name.length);
}

//This is how we display the random images//
function displayPics() {

  var currentlyShowing = [];

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  //this will make the left image unique
  currentlyShowing[0] = makeRandom();
  while (Product.justViewed.indexOf(currentlyShowing[0]) !== -1) {
    console.error('Duplicate, or in prior view! Re Run!!');
    currentlyShowing[0] = makeRandom();
  }
  //make center image unique
  currentlyShowing[1] = makeRandom();
  while(currentlyShowing[0] === currentlyShowing[1] || Product.justViewed.indexOf(currentlyShowing[1]) !== -1)
    console.error('Duplicate, at center, or in prior view! Re Run!');
  currentlyShowing[1] = makeRandom();

  //make right image unique
  currentlyShowing[2] = makeRandom();
  while(currentlyShowing[2] === currentlyShowing[2] || Product.justViewed.indexOf(currentlyShowing[2]) !== -1)
    console.error('Duplicate, at right, or in prior view! Re Run!');
  currentlyShowing[2] = makeRandom();
  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  //take it to the DOM
  for(i = 0; i < 3; i++) {
    Product.pics[i].src = Product.all[currentlyShowing[i]].path;
    Product.pics[i].id = Product.all[currentlyShowing[i]].name;
    Product.all[currentlyShowing[i]].views += 1;
    Product.justViewed[i] = currentlyShowing[i];

  }

  //handle click events
  function handleClick(event) {
    console.log(Product.totalClicks, 'total clicks');
    if(Product.totalClicks > 24) {
      Product.container.removeEventListener('click', handleClick);
      showTally();
    //show the list
    }
    if (event.target.id === 'image_container') {
      return alert('Nope, you need to click on an image.');
    }
    Product.totalClicks +=1;
    for(var i = 0; i < Product.name.length; i++) {
      if(event.target.id === Product.all[i].names) //attaching name so you know the name of what was clicked on
        Product.all[i].votes += 1;
      console.log(event.target.id + 'has ' + Product.all[i].votes + 'votes in ' + Product.all[i].views + 'views.');
    }
}
  displayPics();
}

console.log(displayPics);

//show tally using the list in the DOM
function showTally() {
  for(var i = 0; i < Product.all.length; i++) {
    var liEl =document.createElement('li');
    liEl.textContent = Product.all[i].name + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views.';
    Product.tally.appendChild(liEl);
  }

  //event listener
  Product.container.addEventListener('click', handleClick);
  displayPics();

























////////////////////////This is our Chart.JS demo///////////////////////