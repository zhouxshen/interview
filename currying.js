const sum = (a, b, c, d) => a + b + c + d;

function currying(fn, ...args) {
    return function(...rest) {
        const allArgs = [...args, ...rest];
        if (allArgs.length === fn.length) return fn.apply(this, allArgs)
        return currying(fn, ...allArgs);
    }
}

console.log(currying(sum)(1)(2)(3)(4))