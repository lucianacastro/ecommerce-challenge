import SearchBox from '.';
import React from 'react';
import { mount, shallow } from 'enzyme';

describe('SearchBox', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<SearchBox searchText="iphone"/>);
    });

    it('should map snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have a link', () => {
        expect(wrapper.find('Link')).toExist();
    });

    it('should initialize the link with the given searchText prop', () => {
        expect(wrapper.find('Link')).toHaveProp('href', '/search?q=iphone');
    });

    it('should update the link with the given input value', () => {
        wrapper.find('input').simulate('change', { target: { value: 'plancha'} });
        expect(wrapper.find('Link')).toHaveProp('href', '/search?q=plancha');
    });
});