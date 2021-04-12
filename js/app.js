'use strict';
//create list for all image to can chice it with out write new con

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

let images = document.getElementById('images');

let maxAttempts = 25;

let userAttemptsCounter = 0;

let leftImageIndex;
let middleImageIndex;
let rightImageIndex;
const names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];


// create constracter

function Mall(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.timesShowen = 0;
    Mall.allMall.push(this)
}
// create array
Mall.allMall = [];
new Mall('bag', 'assets/bag.jpg');
new Mall('banana', 'assets/banana.jpg');
new Mall('bathroom', 'assets/bathroom.jpg');
new Mall('boots', 'assets/boots.jpg');
new Mall('breakfast', 'assets/breakfast.jpg');
new Mall('bubblegum', 'assets/bubblegum.jpg');
new Mall('cthulhu', 'assets/cthulhu.jpg');
new Mall('dog-duck', 'assets/dog-duck.jpg');
new Mall('dragon', 'assets/dragon.jpg');
new Mall('pen', 'assets/pen.jpg');
new Mall('pet-sweep', 'assets/pet-sweep.jpg');
new Mall('chair', 'assets/chair.jpg');
new Mall('scissors', 'assets/scissors.jpg');
new Mall('shark', 'assets/shark.jpg');
new Mall('sweep', 'assets/sweep.jpg');
new Mall('tauntaun', 'assets/tauntaun.jpg');
new Mall('unicorn', 'assets/unicorn.jpg');
new Mall('usb', 'assets/usb.jpg');
new Mall('water-can', 'assets/water-can.jpg');
new Mall('wine-glass', 'assets/wine-glass.jpg');




console.log(Mall.allMall);

//create random function

function generateRandomIndex() {
    return (Math.floor(Math.random() * Mall.allMall.length));
}

console.log(generateRandomIndex);

function renderThreeImages() {
    leftImageIndex = generateRandomIndex();
    middleImageIndex = generateRandomIndex();
    rightImageIndex = generateRandomIndex();
    while (leftImageIndex === middleImageIndex || leftImageIndex === rightImageIndex || rightImageIndex === middleImageIndex) {
        rightImageIndex = generateRandomIndex();
        middleImageIndex = generateRandomIndex();
     

    }
    console.log(Mall.allMall[leftImageIndex].source);
    console.log(Mall.allMall[middleImageIndex].source);
    console.log(Mall.allMall[rightImageIndex].source);
    // apeare the image in my bage when rendering it
    leftImageElement.src = Mall.allMall[leftImageIndex].source;
    middleImageElement.src = Mall.allMall[middleImageIndex].source;

    rightImageElement.src = Mall.allMall[rightImageIndex].source;

}


renderThreeImages();

//create event when click the image do afunction with one event for all images id not each id 


images.addEventListener('click', UserClick);

//creat the UserClick function 
function UserClick(event) {
    userAttemptsCounter++;
    if (event.target.id !== 'images') {
        if (userAttemptsCounter <= maxAttempts) {
            if (event.target.id === 'left-image') {
                Mall.allMall[leftImageIndex].votes++;
            } else if (event.target.id === 'middle-image') {
                Mall.allMall[middleImageIndex].votes++;
            }
            else { Mall.allMall[leftImageIndex].votes++; }
            console.log(Mall.allMall);
            renderThreeImages();
        }
        else {
            

            }

        }

        leftImageElement.removeEventListener('click', UserClick);
        middleImageElement.removeEventListener('click', UserClick);
        rightImageElement.removeEventListener('click', UserClick);
    }

}


 UserClick();








//craete button

let button = document.getElementById('button-event');

   button.addEventListener('click',selectClike);
  function selectClike(event) {
    let list = document.getElementById('results-list');
    let mallResult;
    for (let i = 0; i < Mall.allMall.length; i++) {
        votes.push(Mall.allMall[i].votes);
        timesShowen.push(Mall.allMall[i].timesShowen);
        mallResult = document.createElement('li');

        list.appendChild(mallResult);
        mallResult.textContent = `${Mall.allMall[i].name} has ${Mall.allMall[i].votes} votes,and was seen ${Mall.all[i].views} times.`
        
}
 
