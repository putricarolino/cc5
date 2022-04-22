const rockPlayer_div = document.getElementById("rock-player")
const paperPlayer_div = document.getElementById("paper-player")
const scissorsPlayer_div = document.getElementById("scissors-player")
const result_p = document.querySelector(".result > p")


function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3 );
    return choices [randomNumber];
}

function playerwin(userChoice, computerChoice){
	compButton(computerChoice);
    result_p.innerHTML = "PLAYER WINS";
	setTimeout("normCompButton()", 1000);
}

function computerwin(userChoice, computerChoice){
    compButton(computerChoice);
    result_p.innerHTML = "COMPUTER WINS";
	setTimeout("normCompButton()", 1000);
}

function draw(userChoice, computerChoice){
    compButton(computerChoice);
    result_p.innerHTML = "DRAW";
	setTimeout("normCompButton()", 1000);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            playerwin(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            computerwin(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break;
    
    }
}

function compButton(computerChoice)
{
	if (computerChoice == "p")
	{
		//alert("paper");
		document.getElementById("paper-comp").style.backgroundColor = 'rgba(255, 255, 255, 0.437)';
		document.getElementById("paper-comp").style.transform = 'scale(1.2)';
		document.getElementById("paper-comp").style.transition = '100ms';
		//setTimeout(10);
	}
	else if (computerChoice == "r")
	{
		//alert("rock");
		document.getElementById("rock-comp").style.backgroundColor = 'rgba(255, 255, 255, 0.437)';
		document.getElementById("rock-comp").style.transform = 'scale(1.2)';
		document.getElementById("rock-comp").style.transition = '100ms';
		//setTimeout(10);
	}
	else if (computerChoice == "s")
	{
		//alert("scicorsss");
		document.getElementById("scissors-comp").style.backgroundColor = 'rgba(255, 255, 255, 0.437)';
		document.getElementById("scissors-comp").style.transform = 'scale(1.2)';
		document.getElementById("scissors-comp").style.transition = '100ms';
		//setTimeout(10);
	}
}

function normCompButton()
{
	document.getElementById("paper-comp").style.backgroundColor = '';
	document.getElementById("paper-comp").style.transform = 'scale(1)';
	document.getElementById("paper-comp").style.transition = '100ms';
	document.getElementById("rock-comp").style.backgroundColor = '';
	document.getElementById("rock-comp").style.transform = 'scale(1)';
	document.getElementById("rock-comp").style.transition = '100ms';
	document.getElementById("scissors-comp").style.backgroundColor = '';
	document.getElementById("scissors-comp").style.transform = 'scale(1)';
	document.getElementById("scissors-comp").style.transition = '100ms';
}

function main(){
    rockPlayer_div.addEventListener('click', function() {
        game("r");
    })
    paperPlayer_div.addEventListener('click', function() {
        game("p");
    })

    scissorsPlayer_div.addEventListener('click', function() {
        game("s")
    })
}
 main();
