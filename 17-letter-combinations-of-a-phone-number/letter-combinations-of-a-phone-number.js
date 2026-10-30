/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits || digits.length===0){
        return [];
    }
    let result = [];
    const phoneMap = {
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': "tuv",
        '9': "wxyz"
    };
    function backTrack(index,currentString){
        if(currentString.length===digits.length){
            result.push(currentString)
            return;
        }
        let currentDigit = digits[index];
        let letter = phoneMap[currentDigit];
        for(let i=0;i<letter.length;i++){
            backTrack(index+1,currentString+letter[i])
        }
    }
    backTrack(0,'')
    return result;
    
};