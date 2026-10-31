/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];
    let board = Array.from(
        {length : n},
        ()=>Array(n).fill('.')
    );
    function isSafe(row,col){
        for(let i =0;i<row;i++){
            if(board[i][col]==='Q'){
                return false;
            }
        }
        let i = row -1;
        let j = col -1;
        while(i>=0 && j>=0){
            if(board[i][j]==='Q')
            {
                return false;
            }
            i--;
            j--
        }
        i = row - 1;
        j = col +1;
        while(i>=0 && j<n){
            if(board[i][j]==='Q'){
                return false;
            }
            i--;
            j++;
        }
        return true;
    }
    function backTrack(row){
        if(row === n){
            result.push(board.map(r=>r.join('')));
            return;
        }
        for(let col =0;col <n;col++){
            if(isSafe(row,col)){
                board[row][col] = 'Q';
                backTrack(row+1);
                board[row][col]='.'
            }
        }
    }
    backTrack(0)
    return result;

    
};