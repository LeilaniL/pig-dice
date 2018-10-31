var player1 = {
  id: 1,
  score: 0,
}
var player2 = {
  id: 2,
  score: 0,
}

var turnTotal = 0;
var turnIndicator = 0
var diceRoll = 0;

function holdDice() {
  if (turnIndicator % 2 == 0) {
    player1.score += turnTotal;
    $("#player1Display").toggleClass("currentPlayer");
    $("#player2Display").toggleClass("currentPlayer");

  }
  else {
    player2.score += turnTotal;
    $("#player1Display").toggleClass("currentPlayer");
    $("#player2Display").toggleClass("currentPlayer");
  }
  turnTotal = 0;
  turnIndicator ++;
  if(player1.score >= 50) {
    alert ("Player 1 wins!")
  }
  if(player2.score >= 50) {
    alert ("Player 2 wins!")
  }
}

function playGame (){
  if(player1.score < 50 && player2.score < 50){
    diceRoll = Math.ceil((Math.random()) * 6);
    if (diceRoll != 1) {
      turnTotal += diceRoll;
      }
      else {
        turnTotal = 0;
        turnIndicator ++;
        $("#player1Display").toggleClass("currentPlayer");
        $("#player2Display").toggleClass("currentPlayer");
      }
  }
  else {
    if (player1.score > player2.score) {
      alert("Player 1 wins!");
    }
    else {
      alert("Player 2 wins!");
    }
  }
}
$(document).ready(function(){

  $("#player1Display").toggleClass("currentPlayer");

  $("#rollDice").click(function(event) {
    playGame();
    $("#currentDiceRoll").text(diceRoll);
    $("span#turnTotal").text(turnTotal);
  });

  $("#holdDice").click(function(event) {
    holdDice();
    $("span#player1Score").text(player1.score);
    $("span#player2Score").text(player2.score);
  });

  $("#newGame").click(function(event) {
    location.reload();
  });
})
