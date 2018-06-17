import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('should render Expenses summary with no expenses', ()=> {
    const wrapper = shallow(<ExpensesSummary expenses={[]} expenseCount={0} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Expenses summary with multipe expenses', ()=> {
    const expensesTotal = getExpensesTotal(expenses);
    const wrapper = shallow(<ExpensesSummary expensesTotal={expensesTotal} expenseCount={expenses.length} />);
    expect(wrapper).toMatchSnapshot();
});