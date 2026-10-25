/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    function findCombination(index,currentTarget,currentCombination){
        if(currentTarget ===0){
            result.push([...currentCombination])
            return;
        }
        if(currentTarget < 0 || index === candidates.length){
            return;
        }
        currentCombination.push(candidates[index]);
        findCombination(index,currentTarget-candidates[index],currentCombination);
        currentCombination.pop();
        findCombination(index+1,currentTarget,currentCombination)
    }
    findCombination(0,target,[])
    return result;
    
};