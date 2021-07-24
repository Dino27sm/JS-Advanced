const describe = require('mocha').describe;
const assert = require('chai').assert;
const expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

describe(`retrieves character at index from string parameter`, () => {
    it(`valid input -> (a, 0) -> a`, () => {
        expect(lookupChar('a', 0)).to.eq('a')
    })
    it(`valid input -> (ab, 1) -> b`, () => {
        expect(lookupChar('ab', 1)).to.eq('b')
    })
    it(`invalid input - second param not Integer -> (a, 1.1) -> undefined`, () => {
        expect(lookupChar('a', 1.1)).to.be.undefined
    })
    it(`invalid input - first param not string -> (0,0) -> undefined`, () => {
        expect(lookupChar(0, 0)).to.be.undefined
    })
    it(`invalid input - second param not number -> (a,a) -> undefined`, () => {
        expect(lookupChar('a', 'a')).to.be.undefined
    })
    it(`invalid input - index negative -> (a,-1) -> 'Incorrect index'`, () => {
        expect(lookupChar('a', -1)).to.eq('Incorrect index')
    })
    it(`invalid input - index out of bounds -> (a,1) -> 'Incorrect index'`, () => {
        expect(lookupChar('a', 1)).to.eq('Incorrect index')
    })
})
