import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/Expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
    render() {
        return (
            <div>
            {
                this.props.expenseCount ? (
                    <p>You have {this.props.expenseCount} expenses of total {numeral(this.props.expensesTotal / 100).format('$0,00.00')}</p>
                ) : (
                    <p>You have no expenses</p>
                )
            }
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    const visiblieExpenses = selectExpenses(state.expenses , state.filters);
    return {
        expenseCount: visiblieExpenses.length,
        expensesTotal: getExpensesTotal(visiblieExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);