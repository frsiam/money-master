// Catch the neccessary element by calling this common function which accepts id as a perameter 
function idCatcher(id){
    return document.getElementById(id)
}

function calculateBalance(){
    //Income input field
    const incomeField = idCatcher('income').value;
    const incomeInput = parseFloat(incomeField);
    if(isNaN(incomeField)){
        idCatcher('income-error').style.display = 'block';
    }
    //Expensess input field
    //For food cost
    const foodField = idCatcher('food').value;
    const foodInput = parseFloat(foodField);
    if(isNaN(foodField)){
        idCatcher('food-error').style.display = 'block';
    }
    //For rent cost
    const rentField = idCatcher('rent').value;
    const rentInput = parseFloat(rentField);
    if(isNaN(rentField)){
        idCatcher('rent-error').style.display = 'block';
    }

    //For cloth cost
    const clothField = idCatcher('cloths').value;
    const clothInput = parseFloat(clothField);
    if(isNaN(clothField)){
        idCatcher('cloth-error').style.display = 'block';
    }
    // Total Expenses 
    const totalCost = foodInput + rentInput + clothInput;
    const balance = incomeInput - totalCost;
    if(incomeInput < totalCost){
        idCatcher('total-error').style.display = 'block';
    }
    else{
        idCatcher('total-expenses').innerText = totalCost;
        idCatcher('balance').innerText = balance;
    }




    // idCatcher('income').value = '';
    // idCatcher('food').value = '';
    // idCatcher('rent').value = '';
    // idCatcher('cloths').value = '';
}