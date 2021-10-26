import * as React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('Button component', () => {
	it('should render component', () => {
		const component = shallow(<Button content='start' />);
		expect(component).toMatchSnapshot();
	});

	it('should call onClick method', () => {
		const mockCallBack = jest.fn();
		const component = shallow(<Button content='start' onClick={mockCallBack} />);
		expect(mockCallBack.mock.calls.length).toBe(0);
		component.simulate('click');
		expect(mockCallBack.mock.calls.length).toBe(1);
	});
});
