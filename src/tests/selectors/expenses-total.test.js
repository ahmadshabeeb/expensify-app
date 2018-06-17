import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = getExpensesTotal([]) 
    expect(res).toBe(0);
});

test('should return the total of single expnese', () => {
    const res = getExpensesTotal([ expenses[0] ]);
    expect(res).toBe(195);
});

test('should return the total of multiple expneses', () => {
    const res = getExpensesTotal(expenses);
    expect(res).toBe(114195);
});