async function async1() {
    console.log("a");
    const res = await async2();
    console.log("b");
}

async function async2() {
    console.log("c");
    return 2;
}

console.log("d");

setTimeout(() => {
    console.log("e");
}, 0);

async1().then(res => {
    console.log("f")
})

new Promise((resolve) => {
    console.log("g");
    resolve();
}).then(() => {
    console.log("h");
});

console.log("i");
