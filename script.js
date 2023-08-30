let choose = document.getElementById("choose");
let p1score = document.getElementById("p1score");
let p2score = document.getElementById("p2score");
let roll1 = document.getElementById("roll1");
let roll2 = document.getElementById("roll2");
let reset = document.getElementById("reset");
let img = document.getElementById("img");

let score1 = 0;
let score2 = 0;

roll1.addEventListener("click", player1);
roll2.addEventListener("click", player2);
reset.addEventListener("click", reset1);

function player1() {
  roll1.style.backgroundColor = "grey";
  roll2.style.backgroundColor = "green";

  const randomnumber = Math.floor(Math.random() * 6) + 1;
  score1 = score1 + randomnumber;
  p1score.textContent = score1;

  image = `Images\\dice${randomnumber}.png`;
  img.src = image;

  document.querySelector("#roll1").disabled = true;
  document.querySelector("#roll2").disabled = false;
  choose.textContent = "Player-2 to Play";

  if (score1 >= 30) {
    document.querySelector("#roll1").disabled = true;
    document.querySelector("#roll2").disabled = true;
    roll2.style.backgroundColor = "grey";
    roll1.style.backgroundColor = "grey";
    reset.style.backgroundColor = "rgb(212, 50, 104)";
    choose.textContent = "Player-1 Wins";
    document.querySelector("#reset").disabled = false;
  }
}

function player2() {
  roll2.style.backgroundColor = "grey";
  roll1.style.backgroundColor = "green";

  const randomnumber = Math.floor(Math.random() * 6) + 1;
  score2 = score2 + randomnumber;
  p2score.textContent = score2;

  image = `Images\\dice${randomnumber}.png`;
  img.src = image;

  document.querySelector("#roll2").disabled = true;
  document.querySelector("#roll1").disabled = false;
  choose.textContent = "Player-1 to Play";

  if (score2 >= 30) {
    document.querySelector("#roll1").disabled = true;
    document.querySelector("#roll2").disabled = true;
    roll2.style.backgroundColor = "grey";
    roll1.style.backgroundColor = "grey";
    reset.style.backgroundColor = "rgb(212, 50, 104)";
    choose.textContent = "Player-2 Wins";
    document.querySelector("#reset").disabled = false;
  }
}

function reset1() {
  score1 = 0;
  score2 = 0;
  p1score.textContent = score1;
  p2score.textContent = score2;
  document.querySelector("#reset").disabled = true;
  document.querySelector("#roll1").disabled = false;
  document.querySelector("#roll2").disabled = false;
  roll2.style.backgroundColor = "green";
  roll1.style.backgroundColor = "green";
  reset.style.backgroundColor = "grey";
  choose.textContent = "Any Player can Start";
  image = `Images\\dice${1}.png`;
  img.src = image;
}
