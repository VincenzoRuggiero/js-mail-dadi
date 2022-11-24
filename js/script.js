//Gioco dei dadi
const dicePlayer1 = Math.floor(Math.random() * 6) + 1;
const dicePlayer2 = Math.floor(Math.random() * 6) + 1;

const vincitore = document.querySelector(".winner");

if (dicePlayer1 > dicePlayer2) {
  vincitore.innerHTML = "Vince il Giocatore 1 ";
} else if (dicePlayer2 > dicePlayer1) {
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

  for (i = 0; i <= mailList.length; i++) {
    if (userMailElem !== mailList.indexOf(i)) {
      checkResult.innerHTML = "Ti sei registrato, benvenuto!";
    } else {
      checkResult.innerHTML =
        "Questa email è già presente nel sistema. Usane un'altra.";
    }
  }
});
