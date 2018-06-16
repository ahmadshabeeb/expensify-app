import React from 'react';
import { Link } from 'react-router-dom';

const ExpensesListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} SEK - {createdAt}</p>
    </div>
);
export default ExpensesListItem;

// Any components which may communicate with the store
// should be connected to the store
