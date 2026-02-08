function checkAge() {
  const inputBox = document.getElementById("ageInput");
  const display = document.getElementById("result");
  const rawValue = inputBox.value;

  console.log("Age entered:", rawValue);
  display.className = "";

  if (!rawValue) {
    display.textContent = "Please enter your age";
    display.className = "invalid";
    return;
  }

  const age = Number(rawValue);

  if (Number.isNaN(age)) {
    display.textContent = "Invalid age - please enter a number";
    display.className = "invalid";
    return;
  }

  if (age < 0 || age > 150) {
    display.textContent =
      "Invalid age - please enter a realistic age (0-150)";
    display.className = "invalid";
    return;
  }

  let message =
    age >= 18
      ? `You are ${age} years old - You are an adult`
      : `You are ${age} years old - You are a minor`;

  display.textContent = message;
  display.className = age >= 18 ? "adult" : "minor";
}
