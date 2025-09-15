const dobInput = document.querySelector(".dob-input");
const btn = document.querySelector(".btn");
const errorDiv = document.querySelector(".error");
const resultDiv = document.querySelector(".result");

btn.addEventListener("click", () => {
  errorDiv.textContent = "";
  resultDiv.textContent = "";

  const dobValue = dobInput.value;
  if (!dobValue) {
    errorDiv.textContent = "⚠️ Please select your Date of Birth.";
    return;
  }

  const dob = new Date(dobValue);
  const today = new Date();

  if (dob > today) {
    errorDiv.textContent = "⚠️ Date of Birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultDiv.textContent = `🎉 You are ${years} years, ${months} months, and ${days} days old.`;
});
