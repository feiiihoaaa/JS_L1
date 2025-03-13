function cache(fn) {
    const cacheStore = new Map(); 

    return function (...args) {
        const key = JSON.stringify(args); 

        if (cacheStore.has(key)) {
            return cacheStore.get(key);
        }

        const result = fn(...args); 
        cacheStore.set(key, result); 
        return result; 
    };
}

var complexFunction = function(arg1, arg2) {
    console.log(`Executing complexFunction with args: ${arg1}, ${arg2}`);
    return `${arg1}-${arg2}`;
};

var cachedFunction = cache(complexFunction);

console.log(cachedFunction('foo', 'bar')); 
console.log(cachedFunction('foo', 'bar')); 
console.log(cachedFunction('foo', 'baz')); 

const chai = require("chai");
const assert = chai.assert;

describe("Solution", function() {
    it("should cache results based on arguments", function() {
        const testFunction = (x, y) => x + y;
        const cachedTestFunction = cache(testFunction);

        assert.strictEqual(cachedTestFunction(1, 2), 3, "Should execute function for 1, 2");
        assert.strictEqual(cachedTestFunction(1, 2), 3, "Should return cached result for 1, 2");
        assert.strictEqual(cachedTestFunction(2, 3), 5, "Should execute function for 2, 3");
        assert.strictEqual(cachedTestFunction(2, 3), 5, "Should return cached result for 2, 3");
    });

    it("should handle different argument types", function() {
        const testFunction = (x) => x * 2;
        const cachedTestFunction = cache(testFunction);

        assert.strictEqual(cachedTestFunction(5), 10, "Should execute function for 5");
        assert.strictEqual(cachedTestFunction(5), 10, "Should return cached result for 5");
        assert.strictEqual(cachedTestFunction(10), 20, "Should execute function for 10");
    });

    it("should not interfere with different arguments producing the same result", function() {
        const testFunction = (x) => Math.abs(x);
        const cachedTestFunction = cache(testFunction);

        assert.strictEqual(cachedTestFunction(-5), 5, "Should execute function for -5");
        assert.strictEqual(cachedTestFunction(5), 5, "Should execute function for 5");
        assert.strictEqual(cachedTestFunction(-5), 5, "Should return cached result for -5");
    });
});
