let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option [randIdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost  ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    

    if(userChoice ===compChoice){
        // Draw Game
        drawGame();
    } else {
        let userwin =true;
        if(userChoice === "rock"){
            userwin = compChoice==="paper"? false : true;
        } else if (userChoice === "paper") {
            userwin = compChoice==="scissors"? false : true;
            } else {
                userwin = compChoice==="rock"? false : true;
              }
              showWinner(userwin, userChoice, compChoice);

    }  
         
}



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id")
        // console.log("choice was click", userChoice);
        playGame(userChoice);
    });
});
