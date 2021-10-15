import selectExpenses from '../../selectors/expenses';
import importExpenses from '../fixtures/expenses';

const date = new Date();
const expenses = importExpenses;

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([ expenses[2], expenses[1] ]);
})

test('should filter by amount value', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([ expenses[2], expenses[1], expenses[0] ]);
})

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: new Date(date.setTime(0)),
        endDate: undefined
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[2], expenses[0]]);
})

test('should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[2], expenses[0], expenses[1]]);
})