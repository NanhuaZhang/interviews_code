const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';

function cloneSymbol(targe) {
    return Object(Symbol.prototype.valueOf.call(targe));
}


function cloneReg(targe) {
    const reFlags = /\w*$/;
    const result = new targe.constructor(targe.source, reFlags.exec(targe));
    result.lastIndex = targe.lastIndex;
    return result;
}

function cloneOtherType(targe, type) {
    const Ctor = targe.constructor;
    switch (type) {
        case boolTag:
        case numberTag:
        case stringTag:
        case errorTag:
        case dateTag:
            return new Ctor(targe);
        case regexpTag:
            return cloneReg(targe);
        case symbolTag:
            return cloneSymbol(targe);
        default:
            return null;
    }
}

function deepClone(target, map = new WeakMap()){
    if(typeof target !== 'object'){
        // 这里需要根据类型判断，现在只是判断object 和数组
        const targetElement = Array.isArray(target) ? [] :{};

        // 循环引用
        if(map.get(target)){
            return map.get(target)
        }

        map.set(target,targetElement);

        let i = 0;
        const keys = Object.keys(target);
        while (i < keys.length){
            const key = keys[i];
            targetElement[key] = deepClone(target[key],map);
            i++;
        }

    }else {
        return target
    }
}

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;

console.log(deepClone(target))
