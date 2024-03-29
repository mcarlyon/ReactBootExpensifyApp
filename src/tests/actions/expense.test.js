import { TestWatcher } from "@jest/core";
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('Should setup remove expense action object' , () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', {description: 'Testing'});
    expect(action).toEqual({
        id: '123abc', 
        type: 'EDIT_EXPENSE',
        updates: {
            description: 'Testing'
        }
    });
})

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 1900,
        createdAt: 1000,
        note: 'Last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
});