// login button event hendlar
const loginBtn = document.getElementById('login_btn');
loginBtn.addEventListener('click', function(){
    document.getElementById('login_area').style.display = 'none';
    const transactionArea = document.getElementById('transaction_area')
    transactionArea.style.display ='block'
})

// deposit event hendlar
  const depositBtn = document.getElementById('deposit')
  depositBtn.addEventListener('click', function(){

  const depositNumber = getInputNum('depositAmount')
  updateSpanText('currentDeposit', depositNumber)
  updateSpanText('balance', depositNumber)
})


// withdraw event hendlar
const withdrawBtn = document.getElementById('withdeaw')
withdrawBtn.addEventListener('click' , function(){

const withdrawNumber = getInputNum('withdrawAmount')
updateSpanText('currentWithdraw' , withdrawNumber )
updateSpanText('balance' , -1 * withdrawNumber )


})

function getInputNum(id){
    const Amount = document.getElementById(id).value
    const amountNumber = parseFloat(Amount) 
    document.getElementById(id).value = "";
    return amountNumber
}

function updateSpanText(id , amountNumber){
    const currentAmount = parseFloat(document.getElementById(id).innerText);
    const tolalAmount = currentAmount +  amountNumber;
    document.getElementById(id).innerText = tolalAmount
}



