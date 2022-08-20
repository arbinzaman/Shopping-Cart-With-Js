document.getElementById('btn-phn-minus').addEventListener('click',function(){
    const phnField = document.getElementById('phn-field');
    const phnFieldString = phnField.value;
    const PreviousPhnField = parseInt(phnFieldString);


    const newPhnField = PreviousPhnField + 1;
    phnField.value= newPhnField;
})