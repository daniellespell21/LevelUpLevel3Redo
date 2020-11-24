  
btnCar.onclick=function(){
  let carPrinciple = Number(inptPrincipal.value)
  let begInterest = Number(inptMonthlyInterest.value)
  let carInterest = begInterest/12/100
  let totalMonths = Number(inptTotalMonths.value)
  
  function carLoanPayment(principle, interest, months) {
  return (principle * (interest*((1+interest)**months)) / (((1 + interest)**months)-1))
}

let payment = carLoanPayment(carPrinciple, carInterest, totalMonths)
let roundedPayment = payment.toPrecision(5)

lblResult.value = `A car loan for $${carPrinciple} over ${totalMonths} months at ${begInterest}% interest would have a monthly payment of $${roundedPayment}.`

}


btnHome.onclick=function(){
  ChangeForm(homePage)
}