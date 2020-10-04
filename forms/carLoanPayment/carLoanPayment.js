  let rate = parseFloat(prompt('Please enter the interest rate of your loan (without the "%" sign).'));
    let rateAdj = (rate / 12) / 100;
    let amount = Number(prompt('Please enter the amount of your loan.'));
    let months = Number(prompt('Please enter the duration of your loan in months.'));
    alert(`A car loan for ${amount} over ${months} months at ${rate}% interest would have a monthly payment of $${clPayment(amount, rateAdj, months).toFixed(2)}.`);
  
  
function clPayment (p, r, n) {
  return p * (r*((1+r)**n))/(((1+r)**n)-1)
}
  
 
  