'use strict';
//array to store the objects
Picture.allPictures = [];
// console.log(Picture.allPictures);


//make my constructor function
function Picture(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.pictureShown = 0;
  this.pictureClicked = 0;

  Picture.allPictures.push(this);
//   console.log(Picture.allPictures);
}

//modulo is used for rotating through an array if you have a weird starting point, it returns the remainder


//use my constructor function to create new Picture instances
new Picture('Bag','images/bag.jpg');
new Picture('Banana', 'images/banana.jpg');
new Picture('bathroom', 'images/bathroom.jpg');
new Picture('boots', 'images/boots.jpg');
new Picture('breakfast', 'images/breakfast.jpg');
new Picture('bubblegum', 'images/bubblegum.jpg');
new Picture('chair', 'images/chair.jpg');
new Picture('cthulhu', 'images/cthulhu.jpg');
new Picture('dog-duck', 'images/dog-duck.jpg');
new Picture('dragon', 'images/dragon.jpg');
new Picture('pen', 'images/pen.jpg');
new Picture('pet-sweep', 'images/pet-sweep.jpg');
new Picture('tauntaun', 'images/tauntaun.jpg');
new Picture('unicorn', 'images/unicorn.jpg');
new Picture('usb', 'images/usb.gif');
new Picture('water-can', 'images/water-can.jpg');
new Picture('wine-glass', 'images/wine-glass.jpg');
// console.log(Picture.allPictures);

var imgEl1 = document.getElementById('random1');
var imgEl2 = document.getElementById('random2');
var imgEl3 = document.getElementById('random3');

imgEl1.addEventListener('click', randomIndexes);
imgEl2.addEventListener('click', randomIndexes);
imgEl3.addEventListener('click', randomIndexes);

function generatePictures(one, two, three) {
 //listener, something to be clicked...events!!!

  Picture.allPictures[one].pictureShown += 1;
  Picture.allPictures[two].pictureShown += 1;
  Picture.allPictures[three].pictureShown += 1;

  imgEl1.src = Picture.allPictures[one].filepath; //this is always going to work because there is no modulo involved so randomIndex will always be a number
  imgEl2.src = Picture.allPictures[two].filepath;// if first condition is 0, then the remainder 
  imgEl3.src = Picture.allPictures[three].filepath;

  console.log(Picture.allPictures);
}

// imgEl1.id = Picture.allPictures[0].name;
// imgEl2.id = Picture.allPictures[1].name;
// imgEl3.id = Picture.allPictures[2].name;

// imgEl1.src = Picture.allPictures[0].filepath;
// imgEl2.src = Picture.allPictures[1].filepath;
// imgEl3.src = Picture.allPictures[2].filepath;

//creating this function for the random index, allows us to use the length of the array Picture.allPictures at whatever moment we are calling that function(makes it more dynamic in case you want to add or remove)
function randomNumber(length) {
  return Math.floor(Math.random() * length); 
}

//randomly display one of the pictures
function randomIndexes() {
  // console.log(imgEl1.pictureShown, imgEl2.pictureShown, imgEl3.pictureShown)

  var len = Picture.allPictures.length;//created var len to not  have to keep using Picture.allPictures
  var randomIndex = randomNumber(len); //randomIndex is the first image that is displayed

  let secondIndex = randomNumber(len); //secondIndex is the second image that is displayed
  while (secondIndex === randomIndex) {
    secondIndex = randomNumber(len); //this assigns the secondIndex the value of function randomIndex(len)
  }

  let lastIndex = randomNumber(len); //lastIndex is the third image that is displayed
  while (lastIndex === secondIndex || lastIndex === randomIndex) {
    lastIndex = randomNumber(len); //this assigns lastIndex to the value of function(len)
  }

  generatePictures(randomIndex, secondIndex, lastIndex);
  // imgEl1.pictureShown+=1;
  // imgEl2.pictureShown+=1;
  // imgEl3.pictureShown+=1

  console.log(randomIndex,secondIndex, lastIndex);


  // if (randomIndex > 0) { // 0 is the edge case, anything % 0 = NaN beacuse no remainder so it breaks the code because we are unable to access an array item without a number
    // imgEl1.src = Picture.allPictures[randomIndex].filepath; //this is always going to work because there is no modulo involved so randomIndex will always be a number
    // imgEl2.src = Picture.allPictures[(len+1)%randomIndex].filepath;// if first condition is 0, then the remainder 
    // imgEl3.src = Picture.allPictures[(len+2)%randomIndex].filepath;
    // console.log(randomIndex, len%randomIndex, ((len%randomIndex)+1))
    // console.log(randomIndex, (len)%(randomIndex+1), (len)%(randomIndex+2))
  // } else { //if its 0, then run the code again
  //   randomPicture();
  // }
}


randomIndexes();

// //array to store objects//

// pictures.listOfImages = [];
// ////////////////////constructor function//////////////////
// function RandomImages(name, filepath, imageShown, imageClicked) {
//   this.name = name;
//   this.filepath = filepath;
//   this.imageShown = imageShown;
//   this.imageClicked = imageClicked;


// }