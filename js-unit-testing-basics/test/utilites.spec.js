const expect = require('chai').expect;
const titleCase = require('./../utilities.js');

expect(titleCase('the great mouse detective')).to.be.a('string');

expect(titleCase('a')).to.equal('A');

expect(titleCase('vertigo')).to.equal('Vertigo');

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');
