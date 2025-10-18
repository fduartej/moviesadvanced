let score = 0; // Puntaje global
let gameStarted = false;

// Función para iniciar el juego
function startGame() {
  if (gameStarted) return;

  gameStarted = true;
  const startBtn = document.getElementById("start-game-btn");
  startBtn.textContent = "🎮 Juego Iniciado";
  startBtn.disabled = true;
  startBtn.classList.add("bg-gray-400", "cursor-not-allowed");
  startBtn.classList.remove("bg-green-500", "hover:bg-green-600");

  // Iniciar spawn de monedas
  spawnCoin();
  setInterval(spawnCoin, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  const player = document.querySelector(".game-player");
  const gameContainer = document.querySelector(".game-container");
  const gameWidth = gameContainer.clientWidth;
  const gameHeight = gameContainer.clientHeight;

  // Centra el player en el contenedor
  let playerX = gameWidth / 2 - 15; // 15 = la mitad del ancho del player
  let playerY = gameHeight / 2 - 15;
  player.style.left = `${playerX}px`;
  player.style.top = `${playerY}px`;

  // No iniciar automáticamente, esperar al botón
  // spawnCoin();
  // setInterval(spawnCoin, 3000);

  // Guarda los límites para uso global
  player.dataset.moveWidth = gameWidth;
  player.dataset.moveHeight = gameHeight;
});

document.addEventListener("keydown", function (event) {
  if (!gameStarted) return; // Solo permitir movimiento si el juego ha comenzado

  const player = document.querySelector(".game-player");
  const moveWidth = parseFloat(player.dataset.moveWidth);
  const moveHeight = parseFloat(player.dataset.moveHeight);
  collectCoins();
  let playerX = parseInt(player.style.left);
  let playerY = parseInt(player.style.top);

  switch (event.key) {
    case "ArrowUp":
      if (playerY > 0) {
        playerY -= 10;
      }
      break;
    case "ArrowDown":
      if (playerY < moveHeight - 30) {
        playerY += 10;
      }
      break;
    case "ArrowLeft":
      if (playerX > 0) {
        playerX -= 10;
      }
      break;
    case "ArrowRight":
      if (playerX < moveWidth - 30) {
        playerX += 10;
      }
      break;
    default:
      return;
  }

  player.style.left = `${playerX}px`;
  player.style.top = `${playerY}px`;
});

function spawnCoin() {
  if (!gameStarted) return; // Solo crear monedas si el juego ha comenzado

  const coin = document.createElement("div");
  coin.classList.add("coin");
  const gameContainer = document.querySelector(".game-container");
  const gameWidth = gameContainer.clientWidth;
  const gameHeight = gameContainer.clientHeight;

  // Moneda en cualquier parte del contenedor
  const coinX = Math.random() * (gameWidth - 24);
  const coinY = Math.random() * (gameHeight - 24);
  coin.style.left = `${coinX}px`;
  coin.style.top = `${coinY}px`;

  gameContainer.appendChild(coin);

  setTimeout(() => {
    coin.remove();
  }, 5000);
}

function collectCoins() {
  const player = document.querySelector(".game-player");
  const coins = document.querySelectorAll(".coin");
  const scoreBox = document.getElementById("score-box");

  coins.forEach((coin) => {
    const coinRect = coin.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();

    if (
      playerRect.x < coinRect.x + coinRect.width &&
      playerRect.x + playerRect.width > coinRect.x &&
      playerRect.y < coinRect.y + coinRect.height &&
      playerRect.y + playerRect.height > coinRect.y
    ) {
      coin.remove();
      score++;
      if (scoreBox) scoreBox.value = score;
    }
  });
}
