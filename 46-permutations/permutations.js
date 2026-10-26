/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    function backTrack(currentPrem){
        if(currentPrem.length === nums.length){
            result.push([...currentPrem])
            return;
        }
        for(let i =0; i<nums.length; i++){
            if(currentPrem.includes(nums[i]))continue;
            currentPrem.push(nums[i]);
            backTrack(currentPrem);
            currentPrem.pop()
        }        
    }
    backTrack([])
    return result;
    
};