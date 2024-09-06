let bank_balance = 0;
function depositAmount() {
  let deposit = parseFloat(document.getElementById("deposit").value);
  if (isNaN(deposit) || deposit < 0) {
    alert("Enter a valid Number");
  }
  bank_balance += deposit;
  document.getElementById("deposit").value = "";
}
function withdrawMoney() {
  let withdraw = parseFloat(document.getElementById("withdraw").value);

  if (isNaN(withdraw) || withdraw < 0) {
    alert("Enter a valid Number");
  } else if (withdraw > bank_balance) {
    alert("Insufficient balance");
  } else {
    bank_balance -= withdraw;
  }
  document.getElementById("withdraw").value = "";
}

function showBalance() {
  document.getElementById(
    "showBalance"
  ).innerHTML = `Bank Balance : ₹${bank_balance}`;
}

