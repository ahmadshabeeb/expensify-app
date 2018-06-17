import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'

const ExpensesListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount / 100).format('$0,00.00')}
            {' - '} 
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);
export default ExpensesListItem;

// Any components which may communicate with the store
// should be connected to the store
