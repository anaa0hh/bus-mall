'use strict';
//array to store the objects
Picture.allPictures = [];
var totalClicks = 0;

// console.log(Picture.allPictures);



//make my constructor function
function Picture(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.pictureShown = 0;
  this.pictureClicked = 0;

  Picture.allPictures.push(this);
}

//use my constructor function to create new Picture instances
new Picture('Bag','images/bag.jpg');
new Picture('Banana', 'images/banana.jpg');
new Picture('Bathroom', 'images/bathroom.jpg');
new Picture('Boots', 'images/boots.jpg');
new Picture('Breakfast', 'images/breakfast.jpg');
new Picture('Bubblegum', 'images/bubblegum.jpg');
new Picture('Bhair', 'images/chair.jpg');
new Picture('Bthulhu', 'images/cthulhu.jpg');
new Picture('Dog-Duck', 'images/dog-duck.jpg');
new Picture('Dragon', 'images/dragon.jpg');
new Picture('Pen', 'images/pen.jpg');
new Picture('Pet-Sweep', 'images/pet-sweep.jpg');
new Picture('Tauntaun', 'images/tauntaun.jpg');
new Picture('Unicorn', 'images/unicorn.jpg');
new Picture('USB', 'images/usb.gif');
new Picture('Water-Can', 'images/water-can.jpg');
new Picture('Wine-Glass', 'images/wine-glass.jpg');

var imgEl1 = document.getElementById('random1');
var imgEl2 = document.getElementById('random2');
var imgEl3 = document.getElementById('random3');

// console.log(Picture.allPictures);


/////////////////////////////////EVENT LISTENERS////////////////////////////////////////
imgEl1.addEventListener('click', function(){
  randomIndexes(imgEl1);
}, false);
imgEl2.addEventListener('click', function(){
  randomIndexes(imgEl2);
}, false);
imgEl3.addEventListener('click', function(){
  randomIndexes(imgEl3);
}, false);


////////////////////////////////////////////FUNCTION TO DISPLAY IMAGES//////////////////////
function generatePictures(one, two, three) {

  Picture.allPictures[one].pictureShown += 1;
  Picture.allPictures[two].pictureShown += 1;
  Picture.allPictures[three].pictureShown += 1;

  imgEl1.src = Picture.allPictures[one].filepath;
  imgEl2.src = Picture.allPictures[two].filepath;
  imgEl3.src = Picture.allPictures[three].filepath;

  imgEl1.title = one;
  imgEl2.title = two;
  imgEl3.title = three;

}


//creating this function for the random index, allows us to use the length of the array Picture.allPictures at whatever moment we are calling that function(makes it more dynamic in case you want to add or remove things in the array)
function randomNumber(length) {
  return Math.floor(Math.random() * length);
}


function showTally() {
  var tally = document.getElementById('tally');
  for(var i = 0; i < Picture.allPictures.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Picture.allPictures[i].name + ' has ' + Picture.allPictures[i].pictureClicked + ' votes in ' + Picture.allPictures[i].pictureShown + ' views.';
    console.log(liEl);

    tally.appendChild(liEl);

  }

}


//randomly display one of the pictures
function randomIndexes(htmlObject) {
  if (htmlObject === undefined) {
    htmlObject = imgEl1;
  } else {
    var pictureChosen = Picture.allPictures[Number(htmlObject.title)];
    pictureChosen.pictureClicked += 1;
    totalClicks +=1;
  }


  // console.log(imgEl1.pictureShown, imgEl2.pictureShown, imgEl3.pictureShown)

  // console.log(pictureChosen);


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

  if (totalClicks === 25) {
    imgEl1.removeEventListener('click', generatePictures);
    //console.log('IMG EL1 FROM REMOVE EVENTS' + imgEl1);
    imgEl2.removeEventListener('click', generatePictures);
    imgEl3.removeEventListener('click', generatePictures); 
    showTally();
  }

}
randomIndexes();


//////////////////////////////////////////CHART IS BELOW///////////////////////////////////////////////
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});