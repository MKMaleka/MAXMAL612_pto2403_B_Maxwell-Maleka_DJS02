const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // To check for empty inputs
  if(!dividend || !divider){
    result.innerText = "Division not performed. Both values are required in inputs. Try again."
    return;
  }
  
  // To check and validate if inputs are numeric
  const numDividend = Number(dividend);
  const numDivider = Number(divider);

  // To actually check if inputs are values
  if (isNaN(numDividend) || isNaN(numDivider)) {
    document.body.innerText = "Non-numeric value entered. Please reload the page and try again";
    console.error(new Error("Invalid input: Non-numeric value entered."));
    return;
  }

  // Handle division by zero
  if (numDivider === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error(new Error("Division by zero error"));
    return;
  }

  // Display whole number result without decimals
  result.innerText = Math.floor(numDividend / numDivider);
});