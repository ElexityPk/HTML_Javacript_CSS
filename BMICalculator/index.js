const btnEL = document.getElementById("btn");
const bmiINputEL = document.getElementById("bmi-result");
const weightConditionEL = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;
  const bmiValue = weightValue / (heightValue * heightValue);
  bmiINputEL.value = bmiValue;
  if (bmiValue < 18.5) {
    weightConditionEL.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEL.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEL.innerText = "Over weight";
  } else if (bmiValue >= 30) {
    weightConditionEL.innerText = "Obesity";
  }
}
btnEL.addEventListener("click", calculateBMI);
