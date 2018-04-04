const expect = require('chai').expect;
const app = require('../src/app');

describe('Site', () => {
	// stryker shows 50% coverage w/o this test
	it('can be visited by an 18 yo', () => {
		expect(app.userIsOldEnough({ age: 18 })).to.be.true;
	});

	it('can be visited by an 23 yo', () => {
		expect(app.userIsOldEnough({ age: 23 })).to.be.true;
	});

	it('can not be visited by a 13 yo', () => {
		expect(app.userIsOldEnough({ age: 13 })).to.be.false;
	});
});