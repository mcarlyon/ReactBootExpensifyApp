import filtersReducer from '../../reducers/filters';
import expenses from '../fixtures/expenses';

const date = new Date();

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: new Date(date.getFullYear(), date.getMonth(), 1),
        endDate: new Date(date.getFullYear(), date.getMonth() + 1, 0)
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date');
})

test('should set text filters', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'e'});
    expect(state.text).toBe('e');
})

test('should set start date filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: new Date(date.setTime(2000))})
    expect(state.startDate).toEqual(new Date(date.setTime(2000)));
})

test('should set end date filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: new Date(date.setTime(1000))})
    expect(state.endDate).toEqual(new Date(date.setTime(1000)));
})