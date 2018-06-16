import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';
import momnet from 'moment';

test('should setup set text filter action object with provided text', ()=> {
    const action = setTextFilter('text');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'text'
    });
});

test('should setup set text filter action object with default text value', ()=> {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should setup start date action object', () => {
    const action = setStartDate(momnet(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: momnet(0)
    });
});

test('should setup end date action object', () => {
    const action = setEndDate(momnet(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: momnet(0)
    });
});

test('should setup sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should setup sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});