import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/Expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) =>  {
    const expenseWord = (expenseCount === 1) ? 'expense' : 'expenses'; 
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00');
    return (
        <div className="page-header" >
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>

                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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