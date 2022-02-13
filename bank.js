let depositTotal = 0;
let withdrawTotal = 0;
let accountTotal = 1280;

document.getElementById('deposit-btn').addEventListener('click', ()=>{
    let inputDeposit = document.getElementById('input-diposit').value;
    let depositNumber = parseFloat(inputDeposit);
    depositTotal = depositTotal + depositNumber;
    let depositeShow = document.getElementById('depositShow');
    depositShow.innerText = depositTotal; 
    
    document.getElementById('input-diposit').value = '';

    accountTotal = accountTotal + depositNumber;
    document.getElementById('accountShow').innerText = accountTotal;

})

document.getElementById('withdraw-btn').addEventListener('click', ()=>{
    let inputWithdraw = document.getElementById('inputWithdraw').value;
    let withdrawNumber = parseFloat(inputWithdraw);
    withdrawTotal = withdrawTotal + withdrawNumber;

    document.getElementById('withdrawShow').innerText = withdrawTotal;
    document.getElementById('inputWithdraw').value = '';
    accountTotal = accountTotal - withdrawNumber;
    document.getElementById('accountShow').innerText = accountTotal;
})