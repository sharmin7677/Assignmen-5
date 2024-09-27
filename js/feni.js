// Step-1: add eventlistener

document.getElementById('button-donation-feni').addEventListener('click', function(event){
    event.preventDefault();
    
    const donateAmountFeni = document.getElementById('donate-amount-feni').value;
    console.log(donateAmountFeni);


       // Check if the donation amount is a number and positive
       
       if (isNaN(donateAmountFeni)
         || donateAmountFeni <= 0) {
        alert('Please enter a valid and positive donation amount.') ;
            return;
       

    } else {
        // Proceed with donation process

        const balance = document.getElementById('past-balance').innerText;
        console.log(balance);


        const addDonateAmount = parseFloat(donateAmountFeni);
        const balanceNumber = parseFloat(balance);
        const newBalance = addDonateAmount + balanceNumber;
        console.log(newBalance);

        // update the balance in the UI/DOM
        document.getElementById('past-balance').innerText = newBalance;


         // add to history

         const p = document.createElement('p');
         p.innerText = `${donateAmountFeni} Taka is Donated for Flood at Feni, Bangladesh` ;
         console.log(p);
         document.getElementById('history-container').appendChild(p);


        // alert("Thank you for your donation!");
        document.getElementById('my_modal_1').showModal() ;


    }

});






// Subtract part


// Step-1: add eventlistener

document.getElementById('button-donation-feni').addEventListener('click', function(event){
    event.preventDefault();
    
    const donateAmountFeni = document.getElementById('donate-amount-feni').value;
    console.log(donateAmountFeni);


       // Check if the donation amount is a number and positive
       
       if (isNaN(donateAmountFeni)
         || donateAmountFeni <= 0) {
        console.log('Please enter a valid and positive donation amount.') ;

       

    } else {
        // Proceed with donation process

        const balance = document.getElementById('remaining-balance').innerText;
        console.log(balance);


        const addDonateAmount = parseFloat(donateAmountFeni);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - addDonateAmount;
        console.log(newBalance);

        // update the balance in the UI/DOM
        document.getElementById('remaining-balance').innerText = newBalance;

        // alert("Thank you for your donation!");
        document.getElementById('my_modal_1').showModal() ;


    }

})