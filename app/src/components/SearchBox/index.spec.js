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

    it('should have a form', () => {
        expect(wrapper.find('form')).toExist();
    });

    it('should have the form action set to "/items"', () => {
        expect(wrapper.find('form')).toHaveProp('action', '/items');
    });

    it('should have the form method set to "GET"', () => {
        expect(wrapper.find('form')).toHaveProp('method', 'GET');
    });

    it('should have a button with type submit', () => {
        expect(wrapper.find('form').find('button')).toHaveProp('type', 'submit');
    });
});