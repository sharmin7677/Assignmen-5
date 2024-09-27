function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber; 
}

function showBtnById(id){
    // hide all the sctions
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    // show the section with the provided id as parameter 
    document.getElementById(id).classList.remove('hidden');
}