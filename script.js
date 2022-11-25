const numberInput = document.querySelector("#number-input");
const submitButton = document.querySelector("button");
const outputField = document.querySelector("output");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (numberInput.value === "") {
    outputField.textContent = "Please choose a number";
  } else {
    outputField.textContent = calculateResult(Number(numberInput.value));
  }
});

function calculateResult(number) {
  let result = [];
  for (let i = 1; i <= number; i++) {
    if (i % 5 === 0) {
      result.push(i);
    } else if (i % 3 === 0) {
      result.push(i);
    }
  }
  return result.join(", ");
}
