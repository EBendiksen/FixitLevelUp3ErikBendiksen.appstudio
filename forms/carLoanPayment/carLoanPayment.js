  let rate = parseFloat(prompt(`Please enter the interest rate of your loan (percent without "%").`));
    let rateAdj = (rate / 12) / 100;
    let amount = parseInt(prompt(`Please enter the amount of your loan.`));
    let months = parseInt(prompt(`Please enter how many months your loan's duration is.`));
    alert(`A car loan for ${amount} over ${months} months at ${rate}% interest would have a monthly payment of $${carLoanPayment(amount, rateAdj, months).toFixed(2)}.`);
  
  
function clPayment (p, r, n) {
  return p * (r*((1+r)**n))/(((1+r)**n)-1)
}
  
 
  