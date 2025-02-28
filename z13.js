function longest(arr, n) {
    const sorted = arr.slice().sort((a, b) => b.length - a.length || arr.indexOf(a) - arr.indexOf(b));
    return sorted[n - 1];
}

const { assert } = require("chai");

describe("Tests", () => {
    it("test", () => {
        assert.equal(longest(['Hello', 'World', 'Codewars', 'Katas'], 3), 'World');
        assert.equal(longest(['Hello', 'World', 'Codewars', 'Katas'], 4), 'Katas');
        assert.equal(longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'], 4), 'aa');
        assert.equal(longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'], 1), 'a');
        assert.equal(longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l'], 1), 'a');
    });
});
