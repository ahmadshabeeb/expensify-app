import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abcTestId' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abcTestId'
    });
});

test('should setup edit expense action object', () => {
    const id = '123abcTestId';
    const updates = {
        note: 'new Note value'
    }
    const action = editExpense(id, updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abcTestId',
        updates: {
            note: 'new Note value'
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: '109500',
        createdAt: 1000,
        note: 'Last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});