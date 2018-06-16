import React from 'react';
import moment from 'moment'; // moment is the stadard for dates, always use it
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         description: props.expense ? props.expense.description : '',
    //         note: props.expense ? props.expense.note : '',
    //         amount: props.expense ? (props.expense.amount / 100).toString() : '',
    //         createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
    //         calendarFocused: false, 
    //         error: ''
    //     }
    // }

    state = {
        description: this.props.expense ? this.props.expense.description : '',
        note: this.props.expense ? this.props.expense.note : '',
        amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        calendarFocused: false, 
        error: ''
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    OnNoteChange = (e) => {
        //another way of using event
        //e.persist();
        //this.setState(() => ({ note: e.target.value }));
        const note = e.target.value;
        console.log(note);
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        console.log(amount);
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault(); // prevent page refresh

        if(!this.state.description || !this.state.amount){
            this.setState(() => ({ error: 'Please add a description and an amount!' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus={true}
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false }
                    />
                    <textarea 
                        placeholder="Add a note for your expense (optional)"
                        cols="30" 
                        rows="10"
                        onChange={this.OnNoteChange}
                        value={this.state.note}
                        >
                    </textarea>
                    {this.props.expense ? <button>Save Expense</button> : <button>Add Expense</button>}
                    
                </form>
            </div>
        );
    }
}

export default ExpenseForm;