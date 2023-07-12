// Event listeners for button
document.getElementById("attack-button").addEventListener("click", attack);
document.getElementById("retreat-button").addEventListener("click", retreat);



// Make A Ship Class

class SpaceShip {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    
  }
}

// Your spaceship, the USS Assembly should have the following properties:
// hull - 20
// firepower - 5
// accuracy - .7

let ussAssembly = new SpaceShip("USS Assembly", 20, 5, 0.7);

// There are six alien ships, each labeled with Alien Ship 1 to Alien Ship 6.
// The alien ships should each have the following ranged properties determined randomly:
// hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8
// Make a loop that calls the Class and generates alien ships. Push those constructed objects into a predefined array. 
//Start with 6 ships (the loop should run 6 times)
let alienShips = [];

for (let i = 1; i <= 6; i++) {
alienShips.push(new SpaceShip("Alien Ship " + i, 
this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3, 
this.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2, 
this.accuracy = Math.random() * (0.8 - 0.6) + 0.6));

}

// Function for retreat button

function retreat() {
console.log("You have successfully retreated from the battle.");
}

// Function for attack

function attack() {
  if (alienShips.length === 0) {
    console.log("All the ships went kabloo-ey! You won!");
    return;
  }
  
// Player attacks first.

let hitChance = Math.random();

if (hitChance <= ussAssembly.accuracy) {

  // The player hits the current alien ship.

  alienShips[0].hull -= ussAssembly.firepower;

  if (alienShips[0].hull <= 0) {

    console.log("The " + alienShips[0].name + " went kabloo-ey!");

// Remove the destroyed alien ship

    alienShips.shift();

    if (alienShips.length > 0) {
      console.log("Choose your next target: " + alienShips[0].name);
      alienShipAttack();
    } else {
      console.log("You destroyed all alien ships. You are victorious!");
    }
  } else {
    console.log("Your ship hit " + alienShips[0].name + "!");
    alienShipAttack();
  }
} else {
  console.log("Your ship missed the attack.");
  alienShipAttack();
}
}

// Function for the alien ship's attack
function alienShipAttack() {
if (alienShips.length === 0) {
  return;
}

let hitChance = Math.random();

if (hitChance <= alienShips[0].accuracy) {

  ussAssembly.hull -= alienShips[0].firepower;

   // console logs for Alien ship attacks
  if (ussAssembly.hull <= 0) {
    console.log("Your ship was destroyed. Game over.");

  } else {
    console.log(alienShips[0].name + " attacked your ship!");
  }

 } else {
  console.log(alienShips[0].name + " missed the attack.");
}
}


