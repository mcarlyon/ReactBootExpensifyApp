import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from "../../actions/filters";

test('Should generate set start date action object', () => {
    const date = new Date()
    const action = setStartDate(date);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: date
    });
});

test('Should generate set end date action object', () => {
    const date = new Date()
    const action = setEndDate(date);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: date
    })
});

test('Should generatre sort by amount action', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
})


test('Should generatre sort by date action', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
})

test('Should generatre text filter object with text value', () => {
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    });
})

test('Should generatre text filter object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
})