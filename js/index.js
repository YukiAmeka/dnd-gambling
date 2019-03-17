function difficultyRoll(modifier){
  return Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1) + modifier;
}

function playerRoll(modifier){
  return Math.floor((Math.random() * 20) + 1) + modifier;
}

function firstRoll(){  
  // const roll = playerRoll(10);
  // const dc = difficultyRoll(5);
  // console.log(`Player roll 1: ${roll} vs DC: ${dc}`);
  // return roll >= dc;
  return playerRoll(10) >= difficultyRoll(5);
}

function secondRoll(){
  // const roll = playerRoll(10);
  // const dc = difficultyRoll(5);
  // console.log(`Player roll 2: ${roll} vs DC: ${dc}`);
  // return roll >= dc;
  return playerRoll(10) >= difficultyRoll(5);  
}

function thirdRoll(){
  // const roll = playerRoll(2);
  // const dc = difficultyRoll(5);
  // console.log(`Player roll 3: ${roll} vs DC: ${dc}`);
  // return roll >= dc;
  return playerRoll(2) >= difficultyRoll(5);
}

function playerBet(betAmount){
  const firstRollResult = firstRoll();
  const secondRollResult = secondRoll();
  const thirdRollResult = thirdRoll();
  if (firstRollResult && secondRollResult && thirdRollResult) {
    playerCash += betAmount;
    wins++;
  } else if (!firstRollResult && !secondRollResult && !thirdRollResult){
    playerCash -= 2 * betAmount;
    losses++;
  } else if ((firstRollResult && secondRollResult) || (secondRollResult && thirdRollResult) || (thirdRollResult && firstRollResult)){
    playerCash += betAmount / 2;
    halfwins++;
  } else if (firstRollResult || secondRollResult || thirdRollResult){
    playerCash -= betAmount / 2;
    halflosses++;
  }
}

for (let i = 0; i < 10; i++) {
  var playerCash = 1000;
  var losses = 0;
  var wins = 0;
  var halflosses = 0;
  var halfwins = 0;
  for (let j = 0; j < 10000; j++) {
    playerBet(1);
  }
  console.log(`Wins: ${wins}, halfwins: ${halfwins}, halflosses: ${halflosses}, losses: ${losses}`);
  console.log(playerCash);
}