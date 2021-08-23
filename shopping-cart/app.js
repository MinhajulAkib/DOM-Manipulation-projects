function updateCaseNumber(product, price, isIncreasing){
    let caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if(isIncreasing){
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    //update case total
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
}

//phone increase decrase events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateCaseNumber('phone',true);
});

//phone minus
document.getElementById('phone-minus').addEventListener('click', function(){
    updateCaseNumber('phone',false);
})


//handle case increase decrase event
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber('case', 59, true);

    
});

//minus 
document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber('case', 59,false);
    
    
});