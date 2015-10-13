/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

window.findNRooksSolution = function(n) {
  var solution = undefined;

  (function recursiveSearch (colNum, board) {
    if (colNum >= n) {
      solution = JSON.parse(JSON.stringify(board.rows()));
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(i, colNum);
      if (!board.hasAnyRooksConflicts()) {
        recursiveSearch(colNum + 1, board);
      }
      board.togglePiece(i, colNum);
    }
  })(0, new Board({n: n}));

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution === undefined ? new Board({n: n}).rows() : solution;
};

window.countNRooksSolutions = function(n) {
  var count = 0;

  (function recursiveSearch (colNum, board) {
    if (colNum >= n) {
      count++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(i, colNum);
      if (!board.hasAnyRooksConflicts()) {
        recursiveSearch(colNum + 1, new Board(board.rows()));
      }
      board.togglePiece(i, colNum);
    }
  })(0, new Board({n: n}));

  console.log('Number of solutions for ' + n + ' rooks:', count);
  return count;
};

window.findNQueensSolution = function(n) {
  var solution = undefined;

  (function recursiveSearch (colNum, board) {
    if (colNum >= n) {
      solution = JSON.parse(JSON.stringify(board.rows()));
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(i, colNum);
      if (!board.hasAnyQueensConflicts()) {
        recursiveSearch(colNum + 1, board);
      }
      board.togglePiece(i, colNum);
    }
  })(0, new Board({n: n}));

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution === undefined ? new Board({n: n}).rows() : solution;
};

window.countNQueensSolutions = function(n) {
  var count = 0;

  (function recursiveSearch (colNum, board) {
    if (colNum >= n) {
      count++
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(i, colNum);
      if (!board.hasAnyQueensConflicts()) {
        recursiveSearch(colNum + 1, board);
      }
      board.togglePiece(i, colNum);
    }
  })(0, new Board({n: n}));

  console.log('Number of solutions for ' + n + ' queens:', count);
  return count;
};
