
function updateCasePrice (isIncreaseing){
    const caseField = document.getElementById('case-field');
    const caseValueString = caseField.value;
  
    const previousCaseValue = parseInt(caseValueString);
  
    let newCaseValue;

    caseField.value = newCaseValue;


    if(isIncreaseing===true){
        
   newCaseValue = previousCaseValue + 1;
    }
    else{
        
    newCaseValue = previousCaseValue - 1;
    }
         caseField.value =newCaseValue;
         return newCaseValue;
}

function updateCaseTotalPrice (newCaseValue){

    const newCaseField = newCaseValue * 59;
    const casePrice = document.getElementById('case-price');
    casePrice.innerText= newCaseField;
}

document.getElementById('case-btn-plus').addEventListener('click',function(){
 const newCaseValue = updateCasePrice(true);
 updateCaseTotalPrice(newCaseValue);
 

})

document.getElementById('case-btn-minus').addEventListener('click',function(){
    const newCaseValue =  updateCasePrice(false);
    updateCaseTotalPrice(newCaseValue);
    
   
   })
   



