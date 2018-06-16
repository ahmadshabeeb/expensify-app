import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    handelClick = (e) => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
        }

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.handelClick}
            > Remove expense</button>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find( (expense) => props.match.params.id === expense.id )
    };
};

const mapDispatchTpProps = (dispatch) => ({ 
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchTpProps)(EditExpensePage);