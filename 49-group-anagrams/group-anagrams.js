/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let box = new Map();
    for (let n of strs){
        const key = n.split('').sort().join('');
        if(!box.has(key)){
            box.set(key,[])
        }
        box.get(key).push(n)
    }
    return Array.from(box.values());
};