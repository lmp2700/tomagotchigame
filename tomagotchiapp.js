// make a commit after you finish each one of the following
// Instatiate your Tomagotchi
// Display a character of your choice on the screen to represent your pet
// Add the ability to name your pet.
// Style the page.
// Animate your pet across the screen while it's alive.

// ============================================
// CLASS HERE
// ============================================
console.log("start")
class Tomagotchi {
    constructor(hunger, sleepiness, boredom, age) {
      this.hunger = hunger;
      this.sleepiness = sleepiness;
      this.boredom = boredom;
      this.age = age;
    }
}
const pet = new Tomagotchi();

// ============================================
// TIMER HERE -- MAKE A SET INTERVAL OF TIME
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// ============================================

let seconds = 0;
let years = 0;
let hunger = 4; //hunger
let sleepiness = 2; 
let boredom = 7; //play
let count = 0;
const timeRunning = () => {
    $('.timerSpan').text(seconds++);
    if(seconds === 60 && seconds === 120 && seconds === 180) // does not seem to recognize this action
    $('.age_toma').text(years++) // not counting into button but not erroring out in console
}; countdownTimer = setInterval(timeRunning, 1000);

$('#start').on('click', function() {
    timeRunning();
    $('#feed_toma').on('click', function () {
        $('.feed_toma_count').text(hunger+=2)
        if(hunger === 10) {
        alert("you overate and died")
        }
    });
    $('#sleep_toma').on('click', function () {
        $('.sleep_count').text(sleepiness++)
        if(sleepiness === 10) {
            alert("you fell asleep and never woke up")
        }
    });
    $('#play_toma').on('click', function () {
        $('.playbox_count').text(boredom-=1)
        if(boredom === 10) {
            alert("you got bored and wandered off")
        }
    });
    $('#lights_toma').on('dblclick', function() {
        alert("Don't you know I have epilepsy?");
        });
    $('#lights_toma').on('click', function() {
        $('.lightbox_count').text(count++);
    });
})

$('#feed_toma').on('dblclick', function() {
    alert("I can't eat that fast!");
    });

$('#play_toma').on('dblclick', function() {
        alert("You're crazy. I don't need to play right now.");
});
   


// ============================================
// EVENT LISTENERS HERE
// Animate your pet across the screen while it's alive.
// Morph your pet at certain ages.
// ============================================

// $('#submitName').on('click', function(){
//     // need to grab name input
//     // IDEAL: create automatically disappearing pop up to show "Hi 'name'!""
//     alert('Hello ' + $('.nameInput') + '. What would you like to do?');
// });




// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!