const chai = require('chai')
const expect = chai.expect
const main = require('../src/main')

describe('calculator', function () {
    it('is an object', function () {
        expect(main.calculator).to.be.a('object')
    })
})