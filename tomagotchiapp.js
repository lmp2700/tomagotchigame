// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.

// ============================================
// CLASS HERE
// ============================================

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
// ============================================

const timeRunning = () => {
seconds++
// HUNGER
// hunger = () => {
    for(let hunger = 0; hunger <= 10; h +=2){
        $('#feed_toma').on('click', function() { 
            count++;
            $('#feed_toma_count').html(count);   
        });
        if(hunger === 10) {
            alert("You overate and died")
    }
// SLEEPINESS
     // sleepiness = () => {
    //     for(let s = 0; s <= 10; s++){
    //         if(sleepiness === 10) {
    //             alert("You fell asleep and never woke up")
    //     }
    // }

// BOREDOM
    // boredom = () => {
    //     for(let b = 0; b <= 10; b -= 1){
    //         if(boredom === 10) {
    //             alert(`You bored me to death`)
    //     }
    // }

// DIES
    // age = () => {
    //     for(let a = 0; a <= 10000; a++){
    //         if(a === 100);
    //         // put in new gif here??
    //             }
    //         }
}
countdownTimer = setInterval(GameTimer, 1000);




// ============================================
// EVENT LISTENERS HERE
// ============================================
$('#submitName').on('click', function(){
    // need to grab name input
    // IDEAL: create automatically disappearing pop up to show "Hi 'name'!""
    alert('Hello ' + $('.nameInput') + '. What would you like to do?');
});

let count = 0;
$('#feed_toma').on('dblclick', function() {
    alert("I can't eat that fast!");
    });
$('#feed_toma').on('click', function() { 
    count++;
    $('#feed_toma_count').html(count);   
});

$('#play_toma').on('dblclick', function() {
        alert("You're crazy. I don't need to play right now.");
});
$('#play_toma').on('click', function() {
    count++;
    $('#playbox_count').html(count);
});   
$('#lights_toma').on('dblclick', function() {
    alert("Don't you know I have epilepsy?");
});
$('#lights_toma').on('click', function() {
    count++;
    $('#lightbox_count').html(count);
});


// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!