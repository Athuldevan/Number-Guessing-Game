let checkButton=document.querySelector('.Check-button ');
let msg=document.querySelector('.message-information');
let againButton=document.querySelector('.again-button');

let randomNumber=Math.floor(Math.random()*21);
console.log(randomNumber);

let score=6;

// when user click the check button 

checkButton.addEventListener('click',function() {
    let userNumber=Number(document.querySelector('.number-input-box').value);
    
    //When the userguess is greater than the random NUmber 
    
    if(userNumber>randomNumber && score>0){

        msg.innerHTML='📉High';
        score--;
        document.querySelector('.score-value').textContent=score;
            if(score==0){
            msg.innerHTML=`you lost the game `
            }
          

        // When there is userNumber is less than random Number
    }else if (userNumber<randomNumber && score>0){

       msg.innerHTML='📉Low';
        score--;
        document.querySelector('.score-value').textContent=score;

            if(score==0){

            msg.innerHTML=`you lost the game `;
            document.body.style.color="red";
            document.body.style.backgroundColor="red";
            document.body.style.color="black";
            

            
        }
        return;
    }


    // when the userNumber and random number is correct
    if(userNumber==randomNumber){
        
        msg.innerHTML='🎊Correct';
        document.body.style.backgroundColor="green";
        console.log(score);
    }
    
    
});


// AGAIN BUTTON FUNCTIONALITY;
againButton.addEventListener('click',function(){
    score=6;
    randomNumber=Math.floor(Math.random()*21);
    console.log(randomNumber);
    document.body.style.backgroundColor="#222";
    document.body.style.color="#fff";
    msg.innerHTML="Start guessing";
    

});