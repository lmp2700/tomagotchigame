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
      this.hunger = 4;
      this.sleepiness = 2;
      this.boredom = 7; //play
      this.age = 0;
    }
}
const pet = new Tomagotchi();

// ============================================
// TIMER HERE -- MAKE A SET INTERVAL OF TIME
// Increase your pet's age every x minutes
// ============================================

let seconds = 0;
let years = 0;
let hunger = 4; //hunger
let sleepiness = 2; 
let boredom = 7; 
let count = 0;
const timeRunning = () => {
    seconds++
    if(seconds === 60) {// does not seem to recognize this action
    $('.age_toma').text(years++)}; // not counting into span but not erroring out in console 
}; timer = setInterval(timeRunning, 1000);

const petTime = () => {
    seconds++
    $('.feed_toma_count').text(hunger+=2)
    if(hunger === 10 || hunger === 0) {
        alert("you overate and died")
        clearInterval(timeRunning)
        clearInterval(petTime) // not stopping petTime
        };
    $('.sleep_count').text(sleepiness+=3)
    if(sleepiness === 10 || sleepiness === 0) {
        alert("you fell asleep and never woke up")
        clearInterval(timeRunning)
        clearInterval(petTime) // not stopping petTime
    };
    $('.playbox_count').text(boredom+=1)
    if(boredom === 10 || boredom === 0) {
        alert("you got bored and died")
        clearInterval(timeRunning)
        clearInterval(petTime) // not stopping petTime
    };
}; setInterval(petTime, 3000);

// ============================================
// EVENT LISTENERS HERE
// Animate your pet across the screen while it's alive.
// Morph your pet at certain ages.
// ============================================

$('#submitName').on('click', function(){
    // IDEAL: create automatically disappearing pop up to show "Hi 'name'!""
    alert(`Hello ' + ${'.form-control'} + '. What would you like to do?`); // need to grab name input
});

// ALL THE BELOW CLICK ACTIONS WORK
$('#start').on('click', function() {
    timeRunning();
    petTime(); // timer starts automatically grrr
    $('.timerSpan').text(seconds++);
    $('#feed_toma').on('click', function () {
        $('.feed_toma_count').text(hunger -= 2)
    });
    $('#sleep_toma').on('click', function () {
        $('.sleep_count').text(sleepiness--)
    });
    $('#play_toma').on('click', function () {
        $('.playbox_count').text(boredom -= 1)
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

$('#lights_toma').on('dblclick', function() {
    alert("Don't you know I have epilepsy?");
    });




// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!