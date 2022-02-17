// Catch the neccessary element by calling this common function which accepts id as a perameter 
function idCatcher(id){
    return document.getElementById(id)
}

function calculateBalance(){
    //Income input field
    const myIncome = idCatcher('income').value;
    const incomeInput = parseFloat(myIncome);
}