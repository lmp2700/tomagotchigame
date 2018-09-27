// make a commit after you finish each one of the following
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.


// kickflip() {
    //         console.log('kowabunga')
    //     }

class Tomagotchi {
    constructor(hunger, sleepiness, boredom, age) {
        // need a scale of 1-10 in loop
      this.hunger = hunger;
        hunger = () => {
            for(let h = 0; h <= 10; h +=2){
                if(hunger === 10) {
                    alert("You overate and died")
            }
      this.sleepiness = sleepiness;
            sleepiness = () => {
                for(let s = 0; s <= 10; s++){
                    if(sleepiness === 10) {
                        alert("You fell asleep and never woke up")
                }
            }
      this.boredom = boredom;
            boredom = () => {
                for(let b = 0; b <= 10; b -= 1){
                    if(boredom === 10) {
                        alert(`You bored me to death`)
                }
            }
      this.age = age;
            age = () => {
                for(let a = 0; a <= 10000; a++){
                    if(a === 100);
                    // put in new gif here??
                        }
                    }
                }
            }
        }
    }    
}
}
const petToma = new Tomagotchi();



$('img').attr('width', '700px');

$('#submitName').on('click', function(){
    // need to grab name input
    // IDEAL: create automatically disappearing pop up to show "Hi 'name'!""
    alert('Hello ' + $('.nameInput') + '. What would you like to do?');
})

const game = {}

// const isWaiting = false;
// const isRunning = false;
// const seconds = 60;
// const countdownTimer;
// const finalCountdown = false;

// const GameTimer = () => {
//     const minutes = Math.round((seconds - 30) / 60);
//     const remainingSeconds = seconds % 60;
//     if (remainingSeconds < 10) {
//         remainingSeconds = "0" + remainingSeconds;
//     }
//     $('.timerSpan').text(remainingSeconds); 
//     if (seconds == 0) {
//         isRunning = true;
//         seconds += 2;
//         if (finalCountdown) {
//             clearInterval(countdownTimer);
//         } else {
//             finalCountdown = true;
//         }
//     } else {
//         isWaiting = true;
//         seconds--;
//     }
// }
// countdownTimer = setInterval(GameTimer, 1000);


// $("#update").click(function() {
//     count++;
//     $("#counter").html("My current count is: "+count);
// });


// $("#update").click(function() {
//     count += 120; // increase by 120
//     $("#counter").html("My current count is: "+count);
// });


// need to put in function for hunger
const count = 0;
$('#feed_toma').on('dblclick', function() {
    alert("I can't eat that fast!");
    });
$('#feed_toma').on('click', function(count) { 
    count++;
    $("#feed_toma_count").html(count);   
    // const counter = $('#feed_toma').val();
    // counter++;
    // $('#feedbox').val(counter);
});

$('#play_toma').on('dblclick', function() {
        alert("You're crazy. I don't need to play right now.");
});
$('#play_toma').on('click', function() {
    const counter = $('#play_toma').val();
    counter++;
    $('#playbox').val(counter);
});   


$('#lights_toma').on('dblclick', function() {
    alert("Don't you know I have epilepsy?");
});
$('#lights_toma').on('click', function() {
    const counter = $('#lights_toma').val();
    counter++;
    $('#lightbox').val(counter);
});




// const die = (reason) => {
//     pet-alive = false;
//     setInterval
//     $('msg').text("pet die of ${reason}")
// }

// $("<button class='alert'>Alert!</button>").appendTo(body.nameBox);

// $('.feed_toma').on('click', () => {
//     // Grab the inputs VALUE
//     // console.log('here') --> losing code here
//     const $input = $('input').val();
//     console.log($input);
//     // First select the input
//     createTodo($input)
//     // Then maybe find its VALUE
//   });




// let seconds = 0;
// const timePassing = setInterval(() => {
//     seconds++;
//     if(seconds % 5 === 0) {
//         console.log('every 5 seconds')
//     }
//     if(seconds % 20) {
//         console.log('every 20 seconds')
//         clearInterval(timePassing);
//     }
//     // if(seconds > 10){
//     // clearInterval(timePassing);
//     // console.log('done')
//     // return;
//     //}
//     console.log('time is passing')
// }, 1000);


// HINT FOR TIMER
// can grab span with jQuery $('timer').text()
// <span class="timer">0</span>

// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!