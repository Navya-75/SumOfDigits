function calculateSum() {
  const num = document.getElementById("number").value;
  if (num === "" || isNaN(num)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }
  let sum = 0;
  for (let digit of num) {
    sum += parseInt(digit);
  }
  document.getElementById("result").innerText = "Sum of digits: " + sum;
}
