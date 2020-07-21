const assert = require("assert")
const Decorator = require("../decorator")

describe("Decorator", function () {
    let decorator;

    beforeEach( function () {
        decorator = new Decorator();
    });

    it("should start with an empty paint stock", function () {
        assert.deepStrictEqual([], decorator.stock);
    });
});
