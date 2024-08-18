let checkButton=document.querySelector('.Check-button ');
let msg=document.querySelector('.message-information');

let randomNumber=Math.floor(Math.random()*21);
console.log(randomNumber);
let score=20;
checkButton.addEventListener('click',function() {

    let userNumber=Number(document.querySelector('.number-input-box').value);
    
    //When the userguess is greater than the random NUmber 
    
    if(userNumber>randomNumber){

        msg.innerHTML='📉High';

        //decrementing the score
        score--;
        //displaying teh score 
        document.querySelector('.score-value').textContent=score;
          

        // When there is userNumber is less than random Number
    }else if (userNumber<randomNumber){
        msg.innerHTML='📉Low';
        score--;
        document.querySelector('.score-value').textContent=score;
    }

    // when the userNumber and random number is correct
    else if(userNumber==randomNumber){
        msg.innerHTML='🎊Correct';
        document.body.style.backgroundColor="green";
    }
})