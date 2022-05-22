/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    // 存储调用顺序
    this.cacheList = [];
    // 存储值
    this.capacityMap = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const value = this.capacityMap.get(key);
    if(value!==undefined){
        const index = this.cacheList.indexOf(key);
        this.cacheList.splice(index,1);
        this.cacheList.push(key);
        return value;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const mapValue = this.capacityMap.get(key);
    // 已经存在
    if(mapValue !== undefined){
        const index = this.cacheList.indexOf(key);
        this.cacheList.splice(index,1);
        this.cacheList.push(key);
        this.capacityMap.set(key,value);
        return;
    }

    //已经到达缓存上限
    const length = Object.keys(this.cacheList).length;
    if(length === this.capacity){
        const oldKey = this.cacheList.shift();
        this.capacityMap.delete(oldKey);

        this.cacheList.push(key);
        this.capacityMap.set(key,value);
        return;
    }

    this.cacheList.push(key);
    this.capacityMap.set(key,value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
