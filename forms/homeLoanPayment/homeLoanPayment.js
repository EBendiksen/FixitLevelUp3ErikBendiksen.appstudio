let rateOne = parseFloat(prompt(`Please enter the interest rate of your loan (without the "%").`));
    let rateAdjOne = (rateOne / 12) / 100;
    let amountOne = parseInt(prompt(`Please enter the amount of your loan.`));
    let yearsOne = parseInt(prompt(`Please enter how many years your loan's duration is (either 15 or 30).`));
    let monthsOne = yearsOne * 12;
    alert(`A home loan for ${amountOne} over ${yearsOne} years at ${rateOne}% interest would have a monthly payment of $${hlPayment(amountOne, rateAdjOne, monthsOne).toFixed(2)}.`);

function hlPayment(p, r, n) {
  return p * (r*((1+r)**n))/(((1+r)**n)-1)
}
  
  