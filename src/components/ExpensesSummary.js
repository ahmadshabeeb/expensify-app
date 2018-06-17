import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/Expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) =>  {
    const expenseWord = (expenseCount === 1) ? 'expense' : 'expenses'; 
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00');
    return (
        <div>
        {
            expenseCount ? (
                <p>{expenseCount} {expenseWord} of total {formattedExpensesTotal}</p>
            ) : (
                <p>Expenses total {formattedExpensesTotal}</p>
            )
        }
        </div>
    );
};

const mapStateToProps = (state) => {
    const visiblieExpenses = selectExpenses(state.expenses , state.filters);
    return {
        expenseCount: visiblieExpenses.length,
        expensesTotal: getExpensesTotal(visiblieExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);