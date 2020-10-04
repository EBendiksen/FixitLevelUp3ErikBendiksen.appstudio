
let i =0
	for (i; i < 10; i++) {
	alert("Welcome to the monthly loan payment calculator.");
	let chooseCalculator = prompt("Please enter which calculator you would like to use: 'car' or 'house'.");
	  if (chooseCalculator == "car") {
	    alert("Thank you for selecting the monthly car loan payment calculator.");

  let rate = parseFloat(prompt(`Please enter the interest rate of your loan (without the "%" sign).`));
    let rateAdj = (rate / 12) / 100;
    let amount = Number(prompt('Please enter the amount of your loan.'));
    let months = Number (prompt('Please enter the duration of your loan in months.'));
    alert(`A car loan for ${amount} over ${months} months at ${rate}% interest would have a monthly payment of $${clPayment(amount, rateAdj, months).toFixed(2)}.`);
  
function clPayment (p, r, n) {
  return p * (r*((1+r)**n))/(((1+r)**n)-1)
}
  
      let exitCommand = prompt("Thank you for using our calculator. Type in 'exit' if you wish to leave, or push ok to calculate another loan payment.");
        if (exitCommand == "exit") {
        break; }

    } else if (chooseCalculator == "house") {
    alert("Thank you for selecting the monthly house loan payment calculator.");
     
let rateOne = parseFloat(prompt(`Please enter the interest rate of your loan (without the "%" sign).`));
    let rateAdjOne = (rateOne / 12) / 100;
    let amountOne = Number(prompt('Please enter the amount of your loan.'));
    let yearsOne = Number(prompt('Please enter the duration of your loan (15 or 30 years)'));
    let monthsOne = yearsOne * 12;
    alert(`A home loan for ${amountOne} over ${yearsOne} years at ${rateOne}% interest would have a monthly payment of $${hlPayment(amountOne, rateAdjOne, monthsOne).toFixed(2)}.`);

function hlPayment(p, r, n) {
  return p * (r*((1+r)**n))/(((1+r)**n)-1)
}

 let exitCommand2 = prompt("Thank you for using our calculator. Type in 'exit' if you wish to leave, or push ok to calculate another loan.");
        if (exitCommand2 == "exit") {
        break; }
        
  
      } else {
        alert("Invalid Input. Please retry.");
    }};
    
alert("Thank you for using the monthly house loan payment calculator.");

      

