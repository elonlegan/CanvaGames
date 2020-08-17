let games = [
  { name: "arkanoid", runGame: false },
  { name: "donkeyKong", runGame: false },
  { name: "pong", runGame: false },
  { name: "pacman", runGame: false },
  { name: "frogger", runGame: false },
  { name: "spaceInvaders", runGame: false },
  { name: "tetris", runGame: false },
  { name: "Galaga", runGame: false },
  { name: "centipede", runGame: false },
];

function changeGame(gameChoose) {
  for (let index = 0; index < games.length; index++) {
    games[index].runGame = false;
  }
  games[gameChoose].runGame = true;
  console.log(
    `si funciona, si muestra el ${games[gameChoose].name} y si esta corriendo ${games[gameChoose].runGame}`
  );
}
