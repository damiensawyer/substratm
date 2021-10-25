import {add} from './maths'
describe('maths tests', () => {
    it('should add numbers', () => {
        expect(add(1,2)).toEqual(3);
    });
})
describe('simple tests', () => {
    it('should add numbers', () => {
        expect(true).toBe(true);
    });
})