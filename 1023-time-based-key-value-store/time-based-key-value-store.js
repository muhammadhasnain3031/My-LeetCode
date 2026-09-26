
var TimeMap = function() {
    this.store = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.store[key]){
        this.store[key]= [];
    }
    this.store[key].push({timestamp:timestamp, value:value})
    
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.store[key]){
        return ""
    }
    const values = this.store[key];
    let left=0;
    let right = values.length -1;
    let res = '';
    while(left<=right){
        const mid = Math.floor((left + right )/2);
        if(values[mid].timestamp<=timestamp){
            res=values[mid].value;
            left = mid +1;
        }
        else{
            right = mid -1;
        }
    }
    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */