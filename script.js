function calculate() {
  const weightVal = document.getElementById("weight");
  const heightVal = document.getElementById("height");
  let bmi;
  let weight = parseInt(weightVal.value);
  let height = parseInt(heightVal.value);
  let result = document.querySelector(".result");
  let category = document.querySelector(".category");
  document.getElementById("weight-val").innerText = weight + "kg";
  document.getElementById("height-val").innerText = height + "cm";
  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  console.log(bmi);
  result.textContent = bmi;
  //   assign a category based on bmi
  if (bmi < 18.5) {
    category.textContent = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.5) {
    category.textContent = "Normal Weight";
  } else if (bmi >= 25 && bmi <= 29.5) {
    category.textContent = "Over Weight";
  }
}
