let runDefault = true;
let games = [
  { name: "arkanoid", runGame: false, gameExist: false },
  { name: "donkeyKong", runGame: false, gameExist: false },
  { name: "pong", runGame: false, gameExist: true },
  { name: "pacman", runGame: false, gameExist: false },
  { name: "frogger", runGame: false, gameExist: false },
  { name: "spaceInvaders", runGame: false, gameExist: false },
  { name: "tetris", runGame: false, gameExist: false },
  { name: "Galaga", runGame: false, gameExist: false },
  { name: "centipede", runGame: false, gameExist: false },
];

const canvas = document.getElementById("canvas");
const gif = document.getElementById("gif");
const gifError = document.getElementById("gifError");

function changeGame(gameChoose) {
  for (let index = 0; index < games.length; index++) {
    games[index].runGame = false;
  }
  games[gameChoose].runGame = true;
  runDefault = false;

  if (!games[gameChoose].gameExist) {
    gifError.classList.remove("none");
    gif.classList.add("none");
    canvas.classList.add("none");
  } else {
    gif.classList.add("none");
    gifError.classList.add("none");
    canvas.classList.remove("none");
  }

  console.log(
    `si funciona, si muestra el ${games[gameChoose].name} y si esta corriendo ${games[gameChoose].runGame}`
  );
}
