/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid || grid.length === 0){
        return 0;
    }
    let rows = grid.length;
    let cols = grid[0].length;
    let islands = 0;
    const dfs = (r,c)=>{
        if(c<0 || r<0 || c>=cols || r>=rows || grid[r][c]==='0'){
            return;
        }
        grid[r][c]='0';
        dfs(r+1,c);
        dfs(r-1,c);
        dfs(r,c+1);
        dfs(r,c-1)
    }
    for(let r=0; r<rows;r++){
        for(let c = 0; c<cols;c++){
            if(grid[r][c]==='1'){
                islands++;
                dfs(r,c)
            }
        }
    }
    return islands
    
};