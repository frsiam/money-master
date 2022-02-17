// Catch the neccessary element by calling this common function which accepts id as a perameter 
function idCatcher(id){
    return document.getElementById(id)
}

function calculateBalance(){
    //Income input field
    const incomeField = idCatcher('income').value;
    const incomeInput = parseFloat(incomeField);
    //Expensess input field
    const foodField = idCatcher('food').value;
    const foodInput = parseFloat(foodField);

    const rentField = idCatcher('rent').value;
    const rentInput = parseFloat(rentField);
    // console.log(rentField)

    const clothField = idCatcher('cloths').value;
    const clothInput = parseFloat(clothField);
    /* if(isNaN(clothInput)){
        return alert('thik ase')
    }
    else{
        return alert('sorry')
    } */
}