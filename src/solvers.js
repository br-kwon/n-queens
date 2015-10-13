/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var count = 0;

  // // if (n === 4) {
  // //   debugger;
  // // }

  // (function recursiveSearch (colNum, board) {
  //   if (colNum >= n) {
  //     count++;
  //     return;
  //   }
  //   for (var i = 0; i < n; i++) {
  //     board.togglePiece(i, colNum);
  //     if (!board.hasAnyRooksConflicts()) {
  //       recursiveSearch(colNum + 1, new Board(board.rows()));
  //     }
  //     board.togglePiece(i, colNum);
  //   }
  // })(0, new Board({n: n}));

  // console.log('Number of solutions for ' + n + ' queens:', count);
  // return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined;
  var test = undefined;

  (function recursiveSearch (colNum, board) {
    // if (n === 1) {
    //   debugger;
    // }
    if (colNum >= n) {
      solution = board.rows();
      test = board.rows();
      console.log(solution === test);
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

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var count = 0;

  (function recursiveSearch (colNum, board) {
    if (colNum >= n) {
      count++;
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
