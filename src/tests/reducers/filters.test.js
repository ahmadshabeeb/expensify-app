import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
        });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentstate = {
        sortBy: 'amount',
        text:'',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filterReducer(currentstate, action );
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'test' };
    const state = filterReducer(undefined, action );
    expect(state.text).toBe('test');
});

test('should set startDate filter', () => {
    const date = moment();
    const action = { type: 'SET_START_DATE', date };
    const state = filterReducer(undefined, action );
    expect(state.startDate).toEqual(date);
});

test('should set endDate filter', () => {
    const date = moment();
    const action = { type: 'SET_END_DATE', date };
    const state = filterReducer(undefined, action );
    expect(state.endDate).toEqual(date);
});