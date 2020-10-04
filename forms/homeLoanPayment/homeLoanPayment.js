let carLoanAmount = Number(prompt("Please enter your loan amount (leave out the $ sign)."));
let carLoanMonths = Number (prompt("Please enter the length of your desired loan (months)."));
let carInterestRate = Number(prompt("Please enter your interest rate (leave out the % sign)."));

function carLoanPayment(carLoanAmount, carLoanMonths, carInterestRate) {
  let carPaymentEquation = (carLoanAmount / carLoanMonths) * ((carInterestRate / 100) + 1);
  return carPaymentEquation;
  };
  
  let monthlyCarPayment = carLoanPayment (carLoanAmount, carLoanMonths, carInterestRate);
  alert(`A car loan for $${carLoanAmount} over ${carLoanMonths} months at a ${carInterestRate}% interest rate would have a monthly payment of $${monthlyCarPayment.toFixed(2)}.`);
  
  