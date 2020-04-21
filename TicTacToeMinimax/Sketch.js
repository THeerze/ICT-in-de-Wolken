let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

let w;
let h;

// let players = ['X', 'O'];
let ai = 'X';
let human = 'O';

// let currentPlayer;
let currentPlayer = human;



function setup() {
  createCanvas(400, 400);
  w = width / 3;
  h = height / 3;
  bestMove();
}



function equals3(a, b, c) {
  return a == b && b == c && a != '';
}

function checkWinner() {
  let winner = null;

  //horizontaal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }
  //verticaal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];


    }
    //diagonaal
    if (equals3(board[0][0], board[1][1], board[2][2])) {
      winner = board[0][0];
    }
    if (equals3(board[2][0], board[1][1], board[0][2])) {
      winner = board[2][0];
    }
    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') {
          openSpots++;
        }
      }
    }

    if (winner == null && openSpots == 0) {
      return 'tie';
    } else {
      return winner;
    }
  }

}

// function nextTurn() {
//   let index = floor(random(available.length));
//   let spot = available.splice(index, 1)[0];
//   let i = spot[0];
//   let j = spot[1];
//   board[i][j] = players[currentPlayer];
//   currentPlayer = (currentPlayer + 1) % players.length;
// }

function bestMove() {
  //de beste zet voor de AI 
  let bestScore = -Infinity;
  let move;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == '') {
        board[i][j] = ai;
        let score = minimax(board, 0, false);
        board[i][j] = '';
        if (score > bestScore) {
          bestScore = score;
          move = {
            i,
            j
          };
        }
      }
    }
  }
  board[move.i][move.j] = ai;
  currentPlayer = human;
}

let score = {
  X: 10,
  O: -10,
  tie: 0
};

function minimax(board, depth, isMaximizing) {
  let result = checkWinner();
  if (result !== null) {
    return score[result];
  }



  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') {
          board[i][j] = ai;
          let score = minimax(board, depth + 1, false);
          board[i][j] = '';
          bestScore = max(score, bestScore);
        }

      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') {
          board[i][j] = human;
          let score = minimax(board, depth + 1, true);
          board[i][j] = '';
          bestScore = min(score, bestScore);

        }
      }
    }
    return bestScore;
  }

}




function mousePressed() {
  if (currentPlayer == human) {
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);

    if (board[i][j] == '') {
      board[i][j] = human;
      currentPlayer = ai;
      // nextTurn is veranderd in bestMove omdat we niet meer random een plek willen kiezen.
      bestMove();
    }
  }
}

function draw() {
  background(255);
  strokeWeight(4);

  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[i][j];
      textSize(32);
      let r = w / 4;
      if (spot == human) {
        noFill();
        ellipse(x, y, r * 2);
      } else if (spot == ai) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }

  let result = checkWinner();
  if (result != null) {
    noLoop();
    let resultP = createP('');
    resultP.style('font-size', '32pt');
    if (result == 'tie') {
      resultP.html("Tie!")
    } else {
      resultP.html(`${result} wins!`);
    }

  }

}
