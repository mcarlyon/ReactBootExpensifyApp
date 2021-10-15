import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

const date = new Date();

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([]);
})

test('should remove an expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'Hello'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'Computer',
            amount: 10000,
            createdAt: new Date(date.setTime(3000))
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            amount: 15000
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[2].amount).toEqual(15000);
});

test('should not edit any expenses', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '24',
        updates: {
            amount: 15000
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});