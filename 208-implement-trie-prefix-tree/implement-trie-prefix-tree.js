
var Trie = function() {
    this.root = {
        children : new Map(),
        isEnd : false
    }
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.root;
    for(let char of word){
        if(!current.children.has(char)){
            current.children.set(char,{
                children : new Map(),
                isEnd : false,
            })
        }
        current = current.children.get(char)
    }
     current.isEnd = true;
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this.root;
    for (let char of word){
        if(!current.children.has(char)){
            return false;
        }
        current = current.children.get(char)
    }
    return current.isEnd;
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this.root;
    for(let char of prefix){
        if(!current.children.has(char)){
            return false;
        }
        current = current.children.get(char)
    }
    return true;
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */