'use strict';
//create list for all image to can chice it with out write new con

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

let images = document.getElementById('images');

let maxAttempts = 25;
let userAttemptsCounter = 0;



let temporaryArry = [];

let leftImageIndex;
let middleImageIndex;
let rightImageIndex;
const names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];
let shownArr = [];
let namesArr = [];
let votesArr = [];

// create constracter

function Mall(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.timesShowen = 0;

    Mall.allMall.push(this)
}
// create array
//Mall.firstarray=[];

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
new Mall('sweep', 'assets/sweep.png');
new Mall('tauntaun', 'assets/tauntaun.jpg');
new Mall('unicorn', 'assets/unicorn.jpg');
new Mall('usb', 'assets/usb.gif');
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

      leftImageIndex = generateRandomIndex();


    }

    console.log(Mall.allMall[leftImageIndex].source);
    console.log(Mall.allMall[middleImageIndex].source);
    console.log(Mall.allMall[rightImageIndex].source);
    // apeare the image in my bage when rendering it
    leftImageElement.src = Mall.allMall[leftImageIndex].source;
    middleImageElement.src = Mall.allMall[middleImageIndex].source;
    rightImageElement.src = Mall.allMall[rightImageIndex].source;

    Mall.allMall[leftImageIndex].timesShowen++;
    Mall.allMall[middleImageIndex].timesShowen++;
    Mall.allMall[rightImageIndex].timesShowen++;
    //create temporary array to push 3 images without repeat it 
    temporaryArry = [];
    temporaryArry.push(leftImageIndex, middleImageIndex, rightImageIndex);
    console.log("temporary", temporaryArry);

}

//console.log(leftImageIndex);



renderThreeImages();

//create event when click the image do afunction with one event for all images id not each id 


images.addEventListener('click', UserClick);

//creat the UserClick function 
function UserClick(event) {
    userAttemptsCounter++;
    // if (event.target.id !== 'images') {
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
       

        //let ctx = document.getElementById('myChart').getContext('2d');

        let results = document.getElementById('button');
        let button = document.createElement('button');
        results.appendChild(button);
      
        button.textContent = "View Results";
        button.addEventListener('click', selectClike);
//render the list
        function selectClike(event) {
            let list = document.getElementById('results-list');
            let mallResult = 0;
            for (let i = 0; i < Mall.allMall.length; i++) {
        
                mallResult = document.createElement('li');
                list.appendChild(mallResult);
                mallResult.textContent = `${Mall.allMall[i].name} has ${Mall.allMall[i].votes} votes,and was seen ${Mall.allMall[i].timesShowen} times.`;
            }

            for (let i = 0; i < Mall.allMall.length; i++) {
                votesArr.push(Mall.allMall[i].votes);
                shownArr.push(Mall.allMall[i].timesShowen);

            }
                button.removeEventListener('click', selectClike);

            
            //

        }

        images.removeEventListener('click', UserClick);


    }
}



// chart.js from  samer demo 
function chart() {
    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, {
        // what type is the chart
        type: 'bar',

        //  the data for showing
        data: {
            //  for the names
            labels: namesArr,

            datasets: [
                {
                    label: 'Mall votes',
                    data: votesArr,
                    backgroundColor: [
                        'rgb(251, 93, 76)',
                    ],

                    borderWidth: 1
                },

                {
                    label: 'Mall shown',
                    data: shownArr,
                    backgroundColor: [
                        'black',
                    ],

                    borderWidth: 1
                }

            ]
        },
        options: {}
    });

}
