import React from 'react';

import './styles.scss';

export default class SearchBox extends React.Component {
    render () {
        return (
            <div className='search-box'>
                <input className='search-box__input' placeholder='Nunca dejes de buscar' />
                <button className='search-box__button' >
                    <div className='search-box__icon' />
                </button>
            </div>
        );
    }
}