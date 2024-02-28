let input=document.getElementById("input");
let btn=document.getElementById("btn");
let wrng=document.querySelector(".wrng");
let guesses = document.getElementById("guesses");

let answer=Math.floor(Math.random()*100)+1;
console.log(answer);

let numGuesses=0;
btn.addEventListener("click",()=>{
    guessNumber();
})

function guessNumber(){
    if(input.value<1 || input.value>100 || isNaN(input.value))
    {
            wrng.innerHTML="Enter the number 1 to 100";
    }
    else
    {
        numGuesses++;
        guesses.innerHTML="No.of Guesses: "+numGuesses;
        if(input.value>answer)
        {
            wrng.innerHTML="You guesssed too high";
            input.value="";
        }
        else if(input.value < answer)
        {
            wrng.innerHTML="You guesssed too low";
            input.value="";
        }
        else
        {
            wrng.innerHTML="Congratulation you got right";
            //btn.disabled=true;
            setTimeout(()=>{
                resetGame();
            },5000)
        }

    }
}
function resetGame()
{
    numGuesses=0;
    answer=Math.floor(Math.random()*100)+1;
    input.value="";
    //btn.disabled=false;
    guesses.innerHTML="No. of Guess: 0";
}