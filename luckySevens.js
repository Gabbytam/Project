function luckySevens(){
var dice1;
var dice2;
var diceTotal;
var highestRoll=0;
var numberRoll=0;
var maxMoney=0;
var startingBet=document.forms["placeBets"]["betNumber"].value;
var money= startingBet;

if (startingBet == ""||isNaN(startingBet)||startingBet<=0){
  alert("Starting Bet must be filled with a positive number.");
}
else {
  while (money>0){
    dice1= Math.floor(Math.random()*6)+1;
    dice2= Math.floor(Math.random()*6)+1;
    diceTotal= dice1 + dice2;
    numberRoll=numberRoll+1;

    if (diceTotal==7){
      money= money+4;
    } else {
      money= money-1;
}
if(money>maxMoney){
  maxMoney=money;
  highestRoll=numberRoll;
 }
}
}
/*console.log(startingBet);
console.log(numberRoll);
console.log(maxMoney);
console.log(highestRoll);
*/
document.getElementById("playButton").innerText= "Play Again";
document.getElementById("numberStart").innerText= startingBet;
document.getElementById("totalRolls").innerText= numberRoll;
document.getElementById("highestWin").innerText= maxMoney;
document.getElementById("highestRoll").innerText= highestRoll;
return false;
}
