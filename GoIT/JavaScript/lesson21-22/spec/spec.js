var pow = require('../js/script.js');

describe("Pow", function() {

    var i = 1;
    var result;

    beforeEach(function() {
        result = pow(2, i);
    });

    afterEach(function() {
        i = i + 1;
    });

    it("return 2^1", function() {
        expect(result).toBe(2);
    });

    it("return 2^2", function() {
        expect(result).toBe(4);
    });

    it("return 2^3", function() {
        expect(result).toBe(8);
    });

    it("return 2^4", function() {
        expect(result).toBe(16);
    });

});