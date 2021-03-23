/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/



/*******************
 * EVENT LISTENERS *
 *******************/
const d6Roll = document.getElementById("d6-roll");
const doubleD6Roll1 = document.getElementById("double-d6-roll-1");
const doubleD6Roll2 = document.getElementById("double-d6-roll-2");
const d12Roll = document.getElementById("d12-roll");
const d20Roll = document.getElementById("d20-roll");


/******************
 * RESET FUNCTION *
 ******************/
function resetArrays() {
  sixes.splice(0, sixes.length);
  doubleSixes.splice(0, doubleSixes.length);
  twelves.splice(0, twelves.length);
  twenties.splice(0, twenties.length);
}

function resetImages() {
  d6Roll.src = `images/start/d6.png`;
  doubleD6Roll1.src = `images/start/d6.png`;
  doubleD6Roll2.src = `images/start/d6.png`;
  d12Roll.src = `images/start/d12.jpeg`;
  d20Roll.src = `images/start/d20.jpg`;
}

function resetAverages() {
document.getElementById("d6-rolls-mean").innerText = "NA";
document.getElementById("d6-rolls-median").innerText = "NA";
document.getElementById("d6-rolls-mode").innerText = "NA";
document.getElementById("double-d6-rolls-mean").innerText = "NA";
document.getElementById("double-d6-rolls-median").innerText = "NA";
document.getElementById("double-d6-rolls-mode").innerText = "NA";
document.getElementById("d12-rolls-mean").innerText = "NA";
document.getElementById("d12-rolls-median").innerText = "NA";
document.getElementById("d12-rolls-mode").innerText = "NA";
document.getElementById("d20-rolls-mean").innerText = "NA";
document.getElementById("d20-rolls-median").innerText = "NA";
document.getElementById("d20-rolls-mode").innerText = "NA";
}

const resetAllRolls = document.getElementById("reset-button");
resetAllRolls.addEventListener("click", function () {
	console.log("reset button clicked");
	resetArrays();
	resetImages();
	resetAverages();
});
/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

d6Roll.addEventListener("click", function () {
  rolledD6 = getRandomNumber(6);
  sixes.push(rolledD6);
  document.getElementById("d6-rolls-median").innerText = median(sixes);
  d6Roll.src = `images/d6/${rolledD6}.png`;
});

doubleD6Roll1.addEventListener("click", function () {
  rolledD6one = getRandomNumber(6);
  rolledD6two = getRandomNumber(6);
doubleSixes.push(rolledD6one + rolledD6two);
console.log("d6one:", rolledD6one , "d6two:", rolledD6two)
console.log("doubleD6:", sortByNumber(doubleSixes));
document.getElementById("double-d6-rolls-mean").innerText = mean(doubleSixes)
document.getElementById("double-d6-rolls-median").innerText = median(doubleSixes)
doubleD6Roll1.src = `images/d6/${rolledD6one}.png`
doubleD6Roll2.src = `images/d6/${rolledD6two}.png`
});
doubleD6Roll2.addEventListener("click", function () {
rolledD6one = getRandomNumber(6);
rolledD6two = getRandomNumber(6);
doubleSixes.push(rolledD6one + rolledD6two);
console.log("d6one:", rolledD6one , "d6two:", rolledD6two)
console.log("doubleD6:", sortByNumber(doubleSixes));
document.getElementById("double-d6-rolls-mean").innerText = mean(doubleSixes)
document.getElementById("double-d6-rolls-median").innerText = median(doubleSixes)
  doubleD6Roll1.src = `images/d6/${rolledD6one}.png`
  doubleD6Roll2.src = `images/d6/${rolledD6two}.png`
});

d12Roll.addEventListener("click", function () {
  rolledD12 = getRandomNumber(12);
  twelves.push(rolledD12);
console.log("d12:", sortByNumber(twelves));
document.getElementById("d12-rolls-mean").innerText = mean(twelves);
  document.getElementById("d12-rolls-median").innerText = median(twelves);
  d12Roll.src = `images/numbers/${rolledD12}.png`;
});

d20Roll.addEventListener("click", function () {
  rolledD20 = getRandomNumber(20);
  twenties.push(rolledD20);
console.log("d20:", sortByNumber(twenties));
document.getElementById("d20-rolls-mean").innerText = mean(twenties);
document.getElementById("d20-rolls-median").innerText = median(twenties);
d20Roll.src = `images/numbers/${rolledD20}.png`;
});
/****************
 * MATH SECTION *
 ****************/
function mean(arr){
  let sum = 0
  for (num of arr){
    sum += num
  }
  return sum / arr.length
}

function median(arr) {
	const sortedArr = sortByNumber(arr);
	let medianNum = Math.round(arr.length / 2 - 1);
return sortedArr[medianNum];
}

function mode(arr) {

}