document.getElementById('blog-btn').addEventListener('click', function() {
    window.location.href = 'blog.html';


})




// Step-1: add eventlistener

document.getElementById('button-donation').addEventListener('click', function(event){
    event.preventDefault();
    
    const donateAmount = document.getElementById('donate-amount').value;
    // console.log(donateAmount);


       // Check if the donation amount is a number and positive
       
       if (isNaN(donateAmount)
         || donateAmount <= 0) {
        alert('Please enter a valid and positive donation amount.') ;
            return;
       

    } else {
        // Proceed with donation process

        const balance = document.getElementById('account-balance').innerText;
        // console.log(balance);


        const addDonateAmount = parseFloat(donateAmount);
        const balanceNumber = parseFloat(balance);
        const newBalance = addDonateAmount + balanceNumber;
        // console.log(newBalance);

        // update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;

        // add to history

        const p = document.createElement('p');
        p.innerText = `${addDonateAmount} Taka is Donated for Flood at Noakhali, Bangladesh` ;
        console.log(p);
        document.getElementById('history-container').appendChild(p);

      

      
        document.getElementById('my_modal_1').showModal() ;


    }

})



// Subtract part


// Step-1: add eventlistener

document.getElementById('button-donation').addEventListener('click', function(event){
    event.preventDefault();
    
    const donateAmount = document.getElementById('donate-amount').value;
    console.log(donateAmount);


       // Check if the donation amount is a number and positive
       
       if (isNaN(donateAmount)
         || donateAmount <= 0) {
        console.log('Please enter a valid and positive donation amount.') ;

       

    } else {
        // Proceed with donation process

        const balance = document.getElementById('remaining-balance').innerText;
        console.log(balance);


        const addDonateAmount = parseFloat(donateAmount);
        const balanceNumber = parseFloat(balance);
        const newBalance =  balanceNumber - addDonateAmount;
        console.log(newBalance);

        // update the balance in the UI/DOM
        document.getElementById('remaining-balance').innerText = newBalance;

        // alert("Thank you for your donation!");
        document.getElementById('my_modal_1').showModal() ;


    }

})




