const rotators = document.querySelectorAll(".rotator__case");
let previousNumber = 0;

function intervalFunc() {
   for (let i = 0; i < rotators.length; i++){
    rotators[i]. classList.remove("rotator__case_active");
   }
do {
    randomNumber = Math.floor(Math.random() * rotators.length);
} while (randomNumber === previousNumber);
previousNumber = randomNumber; 
   console.log(randomNumber);
   rotators[randomNumber].classList.add("rotator__case_active");
}
  setInterval(intervalFunc, 1000);