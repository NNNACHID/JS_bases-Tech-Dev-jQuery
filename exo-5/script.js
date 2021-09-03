console.log("exercice 5");

/*

// 3
$("img").click(function () {

    var id = $(this).attr("id");
    console.log(id);

}); 



// 4 

$("img").click(function () {

    var id = $(this).attr("id");
    $("#userChoice").append("<b> Vous jouez " + id + "</b>"+ "</br>");
    console.log(id);
}); 
*/

//var playerInput = prompt("Your choice ( rock, paper, scissors) ?");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getPlayerChoice(playerChoice) {
  var isPlayerChoice = playerChoice.toLowerCase();

  if (
    isPlayerChoice === "pierre" ||
    isPlayerChoice === "papier" ||
    isPlayerChoice === "ciseaux"
  ) {
    console.log("Vous jouez " + isPlayerChoice);

    $("#userChoice").append("<b> Vous jouez " + isPlayerChoice + "</b>"+ "</br>");

    return isPlayerChoice;
    
  } else {
    console.log("error !");
  }
}

function getComputerChoice() {
  var dice = getRandomInt(3);

  switch (dice) {
    case 0:
      dice = "pierre";
      console.log("l'ordinateur joue " + dice);
      $("#userChoice").append("<b>l'ordinateur joue " + dice + "</b>"+ "</br>");
      break;
    case 1:
      dice = "feuille";
      console.log("l'ordinateur joue " + dice);
      $("#userChoice").append("<b>l'ordinateur joue " + dice + "</b>"+ "</br>");
      break;
    case 2:
      dice = "ciseaux";
      console.log("l'ordinateur joue " + dice);
      $("#userChoice").append("<b>l'ordinateur joue " + dice + "</b>"+ "</br>");
      break;
  }
  return dice;
}

function findWinner(playerChoi, comDice) {
  if (playerChoi === comDice) {
    console.log("Tied !");
    $("#userChoice").append("<b>Ex aequo !</b>"+ "</br>");
    $("#userChoice").css('color', 'grey');
  } else if (
    (playerChoi === "pierre" && comDice === "ciseaux") ||
    (playerChoi === "feuille" && comDice === "pierre") ||
    (playerChoi === "ciseaux" && comDice === "feuille")
  ) {
    console.log("You Win !");
    $("#userChoice").append("<b>Vous gagnez</b>"+ "</br>");
    $("#userChoice").css('color', 'green');
  } else {
    console.log("You loose !");
    $("#userChoice").append("<b>Vous perdez</b>"+"</br>");
    $("#userChoice").css('color', 'red');
  }
}

function playGame() {

  $("img").click(function () {

    var id = $(this).attr("id");
    var thePlayerChoice = getPlayerChoice(id);
    var theComputerChoice = getComputerChoice();
    findWinner(thePlayerChoice, theComputerChoice);

  });

}

playGame();

console.log("exo-3");
