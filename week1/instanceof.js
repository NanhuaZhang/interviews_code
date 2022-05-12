function myInstanceof(target, origin) {
    if(!target || typeof target !== 'object') return false;
    if(typeof origin !== 'function') return false

    let proto = Object.getPrototypeOf(target);
    while (proto){
        if(proto === origin.prototype) return true;

        proto = Object.getPrototypeOf(target);
    }
    return false;
}


class People {}
class Student extends People {}

const vortesnail = new Student();

console.log(myInstanceof(vortesnail,Student))


// if (typeof target !== "object" || target === null) return false;
// if (typeof origin !== "function")
//     throw new TypeError("origin must be function");
// let proto = Object.getPrototypeOf(target); // 相当于 proto = target.__proto__;
// while (proto) {
//     if (proto === origin.prototype) return true;
//     proto = Object.getPrototypeOf(proto);
// }
// return false;
