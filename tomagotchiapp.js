// Create a repo for your tomagotchi pet - REPO works...
// make a commit after you finish each one of the following
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// Add the ability to name your pet.
// Style the page.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.
// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!

class Tomagotchi {
    constructor(hunger, sleepiness, boredom, age) {
        // need a scale of 1-10
      this.hunger = hunger;
      this.sleepiness = sleepiness;
      this.boredom = boredom;
      // no end to age as of now
      this.age = age;
    }
  }


let seconds = 0;
const timePassing = setInterval(() => {
    seconds++;
    if(seconds % 5 === 0) {
        console.log('every 5 seconds')
    }
    if(seconds % 20) {
        console.log('every 20 seconds')
        clearInterval(timePassing);
    }
    // if(seconds > 10){
    // clearInterval(timePassing);
    // console.log('done')
    // return;
    //}
    console.log('time is passing')
}, 500);