let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getCompChoice() {
  const choices = ['r', 'p', 's'];
  const randomNo = Math.floor(Math.random() * 3);
  return choices[randomNo];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(user, comp){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const user_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(user) + smallUserWord + " beats " + convertToWord(comp) + smallCompWord + ". You win!";
    user_div.classList.add('green-glow');
    setTimeout(function() {user_div.classList.remove('green-glow') }, 300);
}

function lose(user, comp){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const user_div = document.getElementById(user);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(user) + smallUserWord + " loses to " + convertToWord(comp) + smallCompWord + ". You lost...";
    user_div.classList.add('red-glow');
    setTimeout(function() {user_div.classList.remove('red-glow') }, 300);
}

function draw(user, comp){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const user_div = document.getElementById(user);
    result_p.innerHTML = convertToWord(user) + smallUserWord + " equals " + convertToWord(comp) + smallCompWord + ". It's a draw.";
    user_div.classList.add('grey-glow');
    setTimeout(function() {user_div.classList.remove('grey-glow') }, 300);
}

function game(userchoice) {
    const compChoice = getCompChoice(); 
    switch (userchoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice, compChoice);
            break;
    }
}

function main(){
rock_div.addEventListener('click', function() {
    game("r");
})

paper_div.addEventListener('click', function() {
   game("p");
})

scissor_div.addEventListener('click', function() {
   game("s");
})
}

main(); 