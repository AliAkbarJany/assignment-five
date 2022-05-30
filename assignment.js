
// income input====
function getIncomeValue() {
    const incomeInput = document.getElementById('income-input');
    const incomeText = incomeInput.value;
    const incomeAmount = parseFloat(incomeText);
    return incomeAmount;

}
// food , rent , clothes input====
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputamount = parseFloat(inputText);
    return inputamount;
}

function getTotalExpenses() {

    const foodAmount = getInputValue('food-input');
    const rentAmount = getInputValue('rent-input');
    const clothesAmount = getInputValue('clothes-input');

    const expensesTotal = document.getElementById('total-expences');
    const expencesText = expensesTotal.innerText;
    const expensesAmount = parseFloat(expencesText);
    expensesTotal.innerText = foodAmount + rentAmount + clothesAmount;
    const currentExpensesAmount = foodAmount + rentAmount + clothesAmount;
    return currentExpensesAmount;

}



document.getElementById('calculate-button').addEventListener('click', function () {

    // console.log('click button');

    // income======

    const incomeAmount = getIncomeValue();

    // food=====
    const foodAmount = getInputValue('food-input');
    console.log(foodAmount);

    // rent=======
    const rentAmount = getInputValue('rent-input');
    console.log(rentAmount);

    // clothes=========
    const clothesAmount = getInputValue('clothes-input');
    console.log(clothesAmount);

    // total expenses===
    const currentExpensesAmount = getTotalExpenses();

    // balance=========
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    balance.innerText = incomeAmount - currentExpensesAmount;

    console.log(balanceAmount);
})

document.getElementById('save-button').addEventListener('click', function () {
    // console.log('click save');

    // income=====
    const incomeAmount = getIncomeValue();

    const saveInput = document.getElementById('save-input');
    const saveText = saveInput.value;
    const saveAmount = parseFloat(saveText);
    console.log(saveAmount);

    const save = (incomeAmount * saveAmount) / 100;
    console.log(save);

    // saving amount======
    const saving = document.getElementById('saving-amount')
    const savingText = saving.innerText;
    const savingAmount = parseFloat(savingText);
    saving.innerText = save;
    // console.log(savingAmount);

    // food=====
    const foodAmount = getInputValue('food-input');


    // rent=======
    const rentAmount = getInputValue('rent-input');


    // clothes=========
    const clothesAmount = getInputValue('clothes-input');

    // total expences=====
    const expensesTotal = document.getElementById('total-expences');
    const expencesText = expensesTotal.innerText;
    const expensesAmount = parseFloat(expencesText);
    expensesTotal.innerText = foodAmount + rentAmount + clothesAmount;
    const currentExpensesAmount = foodAmount + rentAmount + clothesAmount;


    // balance=========
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    // balance.innerText = incomeAmount - totalAmount;
    const totalBalanceAmount = incomeAmount - currentExpensesAmount;

    // remaining balance=====
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingText = remainingBalance.innerText;
    const remainingAmount = parseFloat(remainingText);
    remainingBalance.innerText = totalBalanceAmount - save;
    // console.log(remainingAmount);



})