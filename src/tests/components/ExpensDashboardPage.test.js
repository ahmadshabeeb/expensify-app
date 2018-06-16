import React from 'react';
import { shallow } from 'enzyme'
import ExpensDashboardPage  from '../../components/ExpensDashboardPage';

test('should render ExpensDashboardPage', () => {
    const wrapper = shallow(<ExpensDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});