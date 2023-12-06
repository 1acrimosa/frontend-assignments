<template>
  <div class="game-board">
    <h1>Tic Tac Toe</h1>
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
      <div v-for="(cell, colIndex) in row" :key="colIndex" class="cell" @click="makeMove(rowIndex, colIndex)">
        {{ cell }}
      </div>
    </div>
    <div v-if="winner" class="winner-message">
      <p>Player {{ winner }} wins!</p>
    </div>
    <div v-else-if="isBoardFull()" class="draw-message">
      <p>It's a draw! Play again.</p>
    </div>
    <div v-else class="current-player">
      <p>Current Player: {{ currentPlayer }}</p>
    </div>
    <button @click="restartGame">Restart</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      currentPlayer: 'X',
      winner: null
    };
  },
  methods: {
    makeMove(row, col) {
      if (!this.board[row][col] && !this.winner) {
        this.board[row][col] = this.currentPlayer;

        if (this.checkWinner(row, col)) {
          this.winner = this.currentPlayer;
        } else {
          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    },
    checkWinner(row, col) {
      if (
          this.board[row][0] === this.currentPlayer &&
          this.board[row][1] === this.currentPlayer &&
          this.board[row][2] === this.currentPlayer
      ) {
        return true;
      }

      if (
          this.board[0][col] === this.currentPlayer &&
          this.board[1][col] === this.currentPlayer &&
          this.board[2][col] === this.currentPlayer
      ) {
        return true;
      }

      return (row === col &&
              this.board[0][0] === this.currentPlayer &&
              this.board[1][1] === this.currentPlayer &&
              this.board[2][2] === this.currentPlayer) ||
          (row + col === 2 &&
              this.board[0][2] === this.currentPlayer &&
              this.board[1][1] === this.currentPlayer &&
              this.board[2][0] === this.currentPlayer);

    },

    isBoardFull() {
      return this.board.every(row => row.every(cell => cell !== ''));
    },

    restartGame() {
      this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      this.currentPlayer = 'X';
      this.winner = null;
    }
  }
};
</script>

<style scoped>
* {
  font-family:'Courier New', Courier, monospace;
}

h1 {
  text-align: center;
  color: #333;
}

.row {
  display: flex;
}

.cell {
  width: 125px;
  height: 125px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  cursor: pointer;
}

button {
  width: auto;
  padding: 10px;
  border-radius: 10px;
  background-color: #333;
  border: 1px solid #333;
  box-shadow: 1px 1px 2px black;
  font-size: 20px;
  color: white;
  transition: 0.3s;
}

button:active {
  box-shadow: none;
}

button:hover {
  color: #333;
  background-color: white;
}

.winner-message, .draw-message, .current-player {
  margin-top: 20px;
  font-size: 1.2em;
  text-align: center;
}

.winner-message {
  color: green;
}

.draw-message {
  color: #333;
}

.current-player {
  color: #555;
}

.game-board {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>
