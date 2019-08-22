import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from './components/Header';
import './styles.scss';

export default class Layout extends React.Component {
    
    static displayName = 'Layout';

    static propTypes = {
        searchText: PropTypes.string
    }
    
    render () {
        return (
            <>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap" rel="stylesheet"/>
                </Head>
                <div className='Layout'>
                    <Header searchText={this.props.searchText}/>
                    {this.props.children}
                </div>
            </>
        );
    }
}