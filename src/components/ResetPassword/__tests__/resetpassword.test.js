import React from 'react';
import { shallow } from 'enzyme';
import { ResetPass } from '../ResetPassword';

function setup() {
    const props = {
        resetPass: jest.fn(),
    };
    const enzymeWrapper = shallow(<ResetPass {...props} />);
    return {
        props,
        enzymeWrapper,
    };
}
describe('Reset Password components', () => {
    describe('reset', () => {
        it('should render elements for reset password', () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.find('#button').length).toBe(1);
        });
    });
});

describe('components', () => {
    describe('container outer', () => {
        it('It should find if the email textbox is present', () => {
            const { enzymeWrapper } = setup();

            expect(enzymeWrapper.find('div').length).toBe(1);
        });
    });
});
