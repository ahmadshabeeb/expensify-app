import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import selectExpenses from './selectors/Expenses'
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 30000, createdAt: 100000}));
store.dispatch(addExpense({ description: 'Gas bill', amount: 50000, createdAt: 239800000}));
store.dispatch(addExpense({ description: 'Rent', amount: 1950000, createdAt: 200000}));

const state = store.getState();
const visibleExpenses = selectExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
//console.log(store.getState().expenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));