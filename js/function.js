
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmountValue = parseFloat(inputAmountText);
      // clear the deposit input field
      inputField.value = '';
      return inputAmountValue;

}

function updateTotalField(totalFieldId,amount){
    const depositTotal = document.getElementById(totalFieldId);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + amount;

    depositTotal.innerText = newDepositTotal;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance (totalamount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
   /*  const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd==true){
        const newBalanceTotal = previousBalanceTotal + totalamount;
    balanceTotal.innerText = newBalanceTotal;
    }
    else{
        const newBalanceTotal = previousBalanceTotal - totalamount;
    balanceTotal.innerText = newBalanceTotal;
    }

}





// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    /* const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText)
     */;
    // update deposit total
    /* const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal; */
   


    // update account balance from deposite
 /*    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal; */
    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount>0){
        updateTotalField('deposit-total',newDepositAmount);
        updateBalance(newDepositAmount,true);
    }
   
    
    
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
     */
    

    // set withdraw total
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal; */
    


    // update balance from withdraw
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal; */
    const newWithdrawAmount = getInputValue('withdraw-input');
    const curentBalance = getCurrentBalance();
    if(newWithdrawAmount>0 && newWithdrawAmount<=curentBalance){
        updateTotalField('withdraw-total',newWithdrawAmount);
        updateBalance(newWithdrawAmount,false);
    }
    if(newWithdrawAmount>curentBalance){
        document.body.style.backgroundColor='red';
        alert('your balance is insufficent');
        document.body.style.backgroundColor='white';

        
    }
   



});