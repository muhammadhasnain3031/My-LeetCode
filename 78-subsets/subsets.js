/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];
    for(let num of nums){
        let currentLength = res.length;
        for(let i =0; i<currentLength; i++){
            let newSubSet = [...res[i],num];
            res.push(newSubSet);
        }
    }
    return res;
    
};