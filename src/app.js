import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 1500,
    createdAt: new Date('July 17, 2021').valueOf()
}));
store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 500,
    createdAt: new Date('October 17, 2021').valueOf()
}));
store.dispatch(addExpense({
    description: 'Rent',
    amount: 1950,
    createdAt: new Date('September 12, 2021').valueOf()
}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));