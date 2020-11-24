   function homeLoanPayment15(p, r) {
   return (p*(r*((1+r)**180))/(((1+r)**180)-1))
 }
    function homeLoanPayment30(p, r) {
   return (p*(r*((1+r)**360))/(((1+r)**360)-1))
 }

 
btnHome15.onclick=function calcHomeLoanPayment15() {
  let principalValue = inptPrincipalValue.value
  let monthlyInterest = inptMonthlyInterest2.value
  let homePayment =  homeLoanPayment15(Number(principalValue),Number(monthlyInterest)/100)
  lblResult2.hidden = false
  lblResult2.textContent = ("A home loan for $" + principalValue + " over 15 years at " + monthlyInterest +
  "% interest would have a monthly payment of $" + homePayment)
}


 btnHome30.onclick=function calcHomeLoanPayment30(){
  let principalValue = inptPrincipalValue.value
  let monthlyInterest = inptMonthlyInterest2.value
  let homePayment =  homeLoanPayment30(Number(principalValue),Number(monthlyInterest)/100)
  lblResult2.hidden = false
  lblResult2.textContent = ("A home loan for $" + principalValue + " over 30 years at " + monthlyInterest +
  "% interest would have a monthly payment of $" + homePayment)
}





btnBack.onclick=function(){
   ChangeForm(homePage)
}
