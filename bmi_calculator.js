const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const button = document.querySelector("button");
const bmiValueElement = document.querySelector("#bmiValue");
const bmiCategoryElement = document.querySelector("#bmiCategory");

button.addEventListener("click", () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const bmi = weight / (height / 100) ** 2;

  let bmiCategory;
  if (bmi < 15) {
    bmiCategory = "Very severely underweight";
  } else if (bmi < 16) {
    bmiCategory = "Severely underweight";
  } else if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi < 25) {
    bmiCategory = "Normal (healthy weight)";
  } else if (bmi < 30) {
    bmiCategory = "Overweight";
  } else if (bmi < 35) {
    bmiCategory = "Obese Class I (Moderately obese)";
  } else if (bmi < 40) {
    bmiCategory = "Obese Class II (Severely obese)";
  } else {
    bmiCategory = "Obese Class III (Very severely obese)";
  }

  bmiValueElement.textContent = bmi.toFixed(1);
  bmiCategoryElement.textContent = bmiCategory;
});
