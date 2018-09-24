// make a commit after you finish each one of the following
// Style the page.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.

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
const petToma = new Tomagotchi(2, 4, 8, 10);

// Add the ability to name your pet. - input box for pet name


// const createName = (inputName) => { 
//     //const $div = $('<div/>').addClass('name');
//     $div.append(inputName);
//     const $button = $('<button/>').on('click');
//     $button.text('Name me');
//     $div.append($button);
//     $('#nameInput').append($div);
//   } 

// buttons have been added - need to make them interactive

//   console.log('here')
// $('feed_toma').on('click', () => {
//     // Grab the inputs VALUE
//     const $input = $('input').val();
//     console.log($input);
//     // First select the input
//     createTodo($input)
//     // Then maybe find its VALUE
//   });

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
}, 1000);

// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!