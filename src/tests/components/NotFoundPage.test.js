import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage"

test('should render ExpenseListItem with expense data', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot();
});