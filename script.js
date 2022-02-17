// Catch the neccessary element by calling this common function which accepts id as a perameter 

function idCatcher(id){
    return document.getElementById(id)
}

//For diplay alert block and none by using this function
function nanChecking(field,id){
    if(isNaN(field)){
        idCatcher(id + '-error').style.display = 'block';
        idCatcher(id).value = '';
        return true
    }
    else{
        idCatcher(id + '-error').style.display = 'none';
        return false
    }
}

//Main calculation by using this function
function calculateBalance(){
    //Income input field
    const incomeField = idCatcher('income').value;
    const incomeInput = parseFloat(incomeField);
    nanChecking(incomeField,'income')
    //Expensess input field
    //For food cost
    const foodField = idCatcher('food').value;
    const foodInput = parseFloat(foodField);
    nanChecking(foodField,'food');
    //For rent cost
    const rentField = idCatcher('rent').value;
    const rentInput = parseFloat(rentField);
    nanChecking(rentField,'rent')
    //For cloth cost
    const clothField = idCatcher('cloths').value;
    const clothInput = parseFloat(clothField);
    nanChecking(clothField,'cloth')
    // Total Expenses 
    const totalCost = foodInput + rentInput + clothInput;
    const balance = incomeInput - totalCost;
    //check if one field have en erron than the total expenses and balance can't update
    if(nanChecking(incomeField,'income')==true || nanChecking(foodField,'food')==true || nanChecking(rentField,'rent')==true || nanChecking(clothField,'cloth')==true){
        idCatcher('total-error').style.display = 'none';
        idCatcher('total-expenses').innerText = '';
        idCatcher('balance').innerText = '';
    }
    else{
        if(incomeInput < totalCost){
            idCatcher('total-error').style.display = 'block';
        }
        else{
            idCatcher('total-error').style.display = 'none';
            idCatcher('total-expenses').innerText = totalCost;
            idCatcher('balance').innerText = balance;
        }
    }
    return balance;
}

//savings calculation
function savingsCalculate(){
    const saveField = idCatcher('save').value;
    const saveInput = parseFloat(saveField);

    nanChecking(saveField,'save-one')
    const savingsAmount = parseFloat(idCatcher('income').value) * (saveInput/100);
    const remainingBalance = calculateBalance() - savingsAmount;
    if(calculateBalance() < savingsAmount){
        idCatcher('save-error').style.display = 'block'
    }
    else{
        idCatcher('save-error').style.display = 'none'
        idCatcher('saving-amount').innerText = savingsAmount;
        idCatcher('remaining-amount').innerText = remainingBalance;
    }
}