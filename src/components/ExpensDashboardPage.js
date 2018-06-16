import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './ExpensesListFilters';

const ExpensDashboardPage = () => (
    <div>
        <ExpensesListFilters />
        <ExpensesList />
    </div>
);

export default ExpensDashboardPage;