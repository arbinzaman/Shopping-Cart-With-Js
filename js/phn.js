
function upatingPhnField(isIncreaseing){
    const phnField = document.getElementById('phn-field');
    const phnFieldString = phnField.value;
    const PreviousPhnField = parseInt(phnFieldString);
let newPhnField;
    if(isIncreaseing === true){
       newPhnField = PreviousPhnField + 1;
    }

    else{
       newPhnField = PreviousPhnField - 1;
    }
    phnField.value= newPhnField;
    return newPhnField;
}

function updateTotalPhnPrice (newPhnField){

    const phnPrice = document.getElementById('phn-price');
    const newPhnPrice = newPhnField * 1219;
    phnPrice.innerText= newPhnPrice;
}

document.getElementById('btn-phn-plus').addEventListener('click',function(){
    const newPhnField = upatingPhnField(true);
    updateTotalPhnPrice(newPhnField);

    
})

document.getElementById('btn-phn-minus').addEventListener('click',function(){
    const newPhnField = upatingPhnField(false);
    updateTotalPhnPrice(newPhnField);
})