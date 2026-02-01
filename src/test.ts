import { expect } from 'chai';

describe('Sample Test', () => {
    it('should return true for true', () => {
        expect(true).to.be.true;
    });

    it('should return 2 for 1 + 1', () => {
        expect(1 + 1).to.equal(2);
    });
});