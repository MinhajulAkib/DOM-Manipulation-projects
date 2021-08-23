function updateProductNumber(product, price, isIncreasing){
    let productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}

//phone increase decrase events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1219,true);
});

//phone minus
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1219,false);
})


//handle case increase decrase event
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);

    
});

//minus 
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59,false);
    
    
});