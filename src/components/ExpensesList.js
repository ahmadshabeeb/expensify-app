import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import selectExpenses from '../selectors/Expenses';

export const ExpensesList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                    props.expenses.map ( (expense) => (
                        <ExpensesListItem key={expense.id} {...expense}/>
                        )   
                    )
                )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses , state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesList);