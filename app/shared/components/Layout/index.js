import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import './styles.scss';

export default class Layout extends React.Component {
    render () {
        return (
            <Header/>
        );
    }
}