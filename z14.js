function hexStringToRGB(hex) {
    hex = hex.replace('#', '').toUpperCase();

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return { r, g, b };
}

describe('Testing hexStringToRGB', () => {
    const { assert } = require('chai');

    function doTest(hexString, expected) {
        const actual = hexStringToRGB(hexString);
        assert.deepEqual(actual, expected, `hexStringToRGB('${hexString}')`);
    }

    it('Fixed tests', () => {
        doTest('#FF9933', { r: 255, g: 153, b: 51 });
        doTest('#beaded', { r: 190, g: 173, b: 237 });
        doTest('#000000', { r: 0, g: 0, b: 0 });
        doTest('#111111', { r: 17, g: 17, b: 17 });
        doTest('#Fa3456', { r: 250, g: 52, b: 86 });
    });
});
