// Step-1: add eventlistener

document.getElementById('button-donation-aid').addEventListener('click', function(event){
    event.preventDefault();
    
    const donateAmountAid = document.getElementById('donate-amount-aid').value;
    console.log(donateAmountAid);


       // Check if the donation amount is a number and positive
       
       if (isNaN(donateAmountAid)
         || donateAmountAid <= 0) {
        alert('Please enter a valid and positive donation amount.') ;
            return;
       

    } else {
        // Proceed with donation process

        const balance = document.getElementById('main-balance').innerText;
        console.log(balance);


        const addDonateAmount = parseFloat(donateAmountAid);
        const balanceNumber = parseFloat(balance);
        const newBalance = addDonateAmount + balanceNumber;
        console.log(newBalance);

        // update the balance in the UI/DOM
        document.getElementById('main-balance').innerText = newBalance;


        // add to history

        const p = document.createElement('p');
        p.innerText = `${donateAmountAid} Taka is Donated for Aid for Injured in the Quota Movement` ;
        console.log(p);
        document.getElementById('history-container').appendChild(p);



        // alert("Thank you for your donation!");
        document.getElementById('my_modal_1').showModal() ;


    }

})





// Subtract part


// Step-1: add eventlistener

document.getElementById('button-donation-aid').addEventListener('click', function(event){
    event.preventDefault();
    
    const donateAmountAid = document.getElementById('donate-amount-aid').value;
    console.log(donateAmountAid);


       // Check if the donation amount is a number and positive
       
       if (isNaN(donateAmountAid)
         || donateAmountAid <= 0) {
        console.log('Please enter a valid and positive donation amount.') ;

       

    } else {
        // Proceed with donation process

        const balance = document.getElementById('remaining-balance').innerText;
        console.log(balance);


        const addDonateAmount = parseFloat(donateAmountAid);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - addDonateAmount;
        console.log(newBalance);

        // update the balance in the UI/DOM
        document.getElementById('remaining-balance').innerText = newBalance;

        // alert("Thank you for your donation!");
        document.getElementById('my_modal_1').showModal() ;


    }

})