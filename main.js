const additionbtn = document.getElementById("addition");
const resetbtn = document.getElementById("reset");
const subtractionbtn = document.getElementById("subtraction");
const countLabel = document.getElementById("count");
let count = 0;

subtractionbtn.addEventListener("click", function() {
    count--;
    countLabel.textContent = count;
  });
  
  resetbtn.addEventListener("click", function() {
    count = 0;
    countLabel.textContent = count;
  });
  additionbtn.addEventListener("click", function() {
    count++;
    countLabel.textContent = count;
  });