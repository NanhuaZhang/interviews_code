const obj1 = {
    value: "vortesnail",
};

function fn() {
    console.log(this.value);
    console.log(...arguments)
}

// fn.call(obj,1,2,3,4);
// fn.apply(obj,['apply'])

Function.prototype.myCall = function (context){
    if(typeof this !== 'function'){
        throw new Error('not a function');
    }

    const args = [...arguments].slice(1);
    const symbol = Symbol();

    context = context ?? {};
    context[symbol] = this;

    const result = context[symbol](...args);
    delete context[symbol];

    return result;
}

Function.prototype.myApply = function (context){
    if (typeof this !== 'function'){
        throw new Error('not a function');
    }

    const args = arguments[1]
    const symbol = Symbol();

    context = context ?? {};
    context[symbol] = this;

    let result =null;

    if(args){
       result = context[symbol](...args);
    }
    else {
        result = context[symbol]();
    }

    delete context[symbol];
    return result;
}

Function.prototype.myBind = function (context){
    if (typeof this !== 'function'){
        throw new Error('not a function');
    }

    const fn = this;
    const args = [...arguments].slice(1);

    return function Fn(){
        return fn.myApply(this instanceof Fn ? this : context, [...args,...arguments])
    }
}

let foo = {
    value: 1
};
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';

let bindFoo = bar.myBind(foo, 'Jack');
let obj = new bindFoo(20);
// undefined
// Jack
// 20

console.log(obj.habit);
// shopping

console.log(obj.friend);
// kevin

// fn.myCall(obj,1,2,3,4)
// fn.myApply(obj,['myapply'])
// fn.myBind(obj,'myBind',1,2)(3,4)

