
let myROCK = document.getElementById("ROCK");
let myPAPER = document.getElementById("PAPER");
let mySCISSORS = document.getElementById("SCISSORS");
let myResults = document.getElementById("WINNER");
let playerScore = 0;
let computerScore = 0;




function gameRound(player, computer){

    if(player=="rock"){
        if(computer=="paper"){

        document.getElementById('WINNER').textContent = "Computer Entered Paper, Computer Wins!";
        computerScore++;
        document.getElementById('SCORE1').textContent = "Player Score: " + playerScore;
        document.getElementById('SCORE2').textContent = "Computer Score: " + computerScore;

        }
        else if(computer=="rock"){
            document.getElementById('WINNER').textContent = "Computer Entered Rock, It's a draw!";
            document.getElementById('SCORE1').textContent = "Player Score: " + playerScore;
            document.getElementById('SCORE2').textContent = "Computer Score: " + computerScore;
        }
        else{
            document.getElementById('WINNER').textContent =  "Computer Entered Scissors, Player Wins!";
            playerScore++
            document.getElementById('SCORE1').textContent = "Player Score: " + playerScore;
            document.getElementById('SCORE2').textContent = "Computer Score: " + computerScore;
        };
     }


    
    if(player=="paper"){
        if(computer=="rock"){
            document.getElementById('WINNER').textContent =  "Computer Entered Rock,Player Wins!";
            playerScore++;
            document.getElementById('SCORE1').textContent = "Player Score: " + playerScore;
            document.getElementById('SCORE2').textContent = "Computer Score: " + computerScore;
        }
        else if(computer=="paper"){
            document.getElementById('WINNER').textContent =  "Computer Entered Paper, It's a draw!";
        }
        else{
            document.getElementById('WINNER').textContent = "Computer Entered Scissors, Computer Wins!";
            computerScore++; 
            document.getElementById('SCORE1').textContent = "Player Score: " + playerScore;
            document.getElementById('SCORE2').textContent = "Computer Score: " + computerScore;
        }

    }
    
    if(player=="scissors"){
        if(computer=="rock"){
            document.getElementById('WINNER').textContent = "Computer Entered Rock, Computer Wins";
            computerScore++; 
            document.getElementById('SCORE1').textContent = "Player Score: " + playerScore;
            document.getElementById('SCORE2').textContent = "Computer Score: " + computerScore;
        }
        else if(computer=="paper"){
            document.getElementById('WINNER').textContent = "Computer Entered Paper, Player Wins!";
            playerScore++;
            document.getElementById('SCORE1').textContent = "Player Score: " + playerScore;
            document.getElementById('SCORE2').textContent = "Computer Score: " + computerScore;
        }
        else{
            document.getElementById('WINNER').textContent =  "Computer Entered Scissors, It's a draw!";
            document.getElementById('SCORE1').textContent = "Player Score: " + playerScore;
            document.getElementById('SCORE2').textContent = "Computer Score: " + computerScore;
        }};


        if(playerScore === 5){
              alert("GAME OVER! Player WINS!");
            playerScore = 0;
            computerScore = 0;
            document.getElementById('SCORE1').textContent = "Player Score: " + playerScore;
            document.getElementById('SCORE2').textContent =  "Computer Score: " + computerScore;
    
            
        }
        else if(computerScore ===5){

            alert("GAME OVER! Computer WINS!");
            playerScore = 0;
            computerScore = 0;
            document.getElementById('SCORE1').textContent = "Player Score: " + playerScore;
            document.getElementById('SCORE2').textContent =  "Computer Score: " + computerScore;
        }

        };
        




myROCK.addEventListener("click", 
function(){

    function computerPlay(){
        let items = ['rock', 'paper', 'scissors'];
    return items[Math.floor(Math.random() * items.length)];
    };

    let player = "rock";
  gameRound("rock", computerPlay());

});


myPAPER.addEventListener("click", 
function(){

    function computerPlay(){
        let items = ['rock', 'paper', 'scissors'];
    return items[Math.floor(Math.random() * items.length)];
    };

    let player = "paper";
    gameRound("paper", computerPlay());

});


mySCISSORS.addEventListener("click", 
function(){
    function computerPlay(){
        let items = ['rock', 'paper', 'scissors'];
    return items[Math.floor(Math.random() * items.length)];
    };
    let player = "scissors";
    gameRound("scissors", computerPlay());

});