import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboard from "../../components/ExpenseDashboard";

test('should render ExpenseListItem with expense data', () => {
    const wrapper = shallow(<ExpenseDashboard />)
    expect(wrapper).toMatchSnapshot();
});