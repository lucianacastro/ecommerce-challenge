import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import './styles.scss';

export default class Layout extends React.Component {
    
    static displayName = 'Layout';

    static propTypes = {
        searchText: PropTypes.string
    }
    
    render () {
        return (
            <div className='Layout'>
                <Header searchText={this.props.searchText}/>
                {this.props.children}
            </div>
        );
    }
}