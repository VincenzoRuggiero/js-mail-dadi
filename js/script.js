//Gioco dei dadi
const dicePlayer1 = Math.floor(Math.random() * 6) + 1;
const dicePlayer2 = Math.floor(Math.random() * 6) + 1;

const score1 = document.getElementById('player1');
const score2 = document.getElementById('player2');

const vincitore = document.querySelector(".winner");
score1.innerHTML = `${dicePlayer1}`;
score2.innerHTML = `${dicePlayer2}`;

if (dicePlayer1 > dicePlayer2) {
  vincitore.innerHTML = "Vince il Giocatore 1 ";

} else if (dicePlayer1 < dicePlayer2) {
  vincitore.innerHTML = "Vince il Giocatore 2";

} else if (dicePlayer1 === dicePlayer2) {
  vincitore.innerHTML = "Pareggio: nessun vincitore!";
}

//Verifica eMail
const mailList = [
  "donatello@ninja.pizza",
  "raffaello@ninja.com",
  "michelangelo@artist.com",
  "leonardo@banzai.jp",
  "splinter@sensei.ok",
  "shredder@boss.ko",
];
const buttonElem = document.getElementById("send");

buttonElem.addEventListener("click", function () {
  const userMailElem = document.getElementById("userMail").value;
  const checkResult = document.querySelector(".check");

  let result;

  for (i = 0; i < mailList.length; i++) {
    if (userMailElem == mailList[i]) {
      result = true;
    }    

    if (result){
      checkResult.innerHTML = "Questa email è già presente nel sistema. Usane un'altra.";
    } else {
      checkResult.innerHTML =
        "Ti sei registrato, benvenuto!";
    }
  }
});
