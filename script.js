let min=1;
let max=10;
let btn = document.querySelector("#btn");

btn.addEventListener("click",game);

function game(e)
{
    let corr_ans = getRandomIntInclusive(min,max);
    for(let i=1;i<=3;i++){
        let guessNumber = parseInt(prompt(`Level-${i}
        Please select a number between 1 and 10`));
        if(guessNumber>=1 && guessNumber<=10){
            if(guessNumber===corr_ans){
                alert("You Win!");
                break;
            }
            else if(guessNumber>corr_ans){
                alert("Correct answer is smaller!");
            }
            else if(guessNumber<corr_ans){
                alert("Correct answer is greater!");
            }
        }
        else{
        alert("Wrong input!");
        }
        if(i==3){
            alert("You lose!");
        }
    }
}


function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
