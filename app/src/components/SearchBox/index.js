import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';

import './styles.scss';

export default class SearchBox extends React.Component {

    static displayName = 'SearchBox';

    static propTypes = {
        searchText: PropTypes.string,
    }
    
    state = {
        textInput: this.props.searchText,
    };

    updateTextInput = (event) => {
        const { target } = event;
        if (target) {
            this.setState({ textInput: target.value });
        }
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter' || event.nativeEvent.keyCode === 13) {
            Router.push(`/items${this.state.textInput.length > 0 ? `?search=${this.state.textInput}` : ''}`);
        }
    }

    componentDidMount(){
        this.searchInput.focus(); 
    }

    render () {
        const { textInput = '' } = this.state;
        return (
            <form className='search-box' action='/items'>
                <input
                    name="search"
                    className='search-box__input'
                    placeholder='Nunca dejes de buscar'
                    type='text'
                    ref={(input) => { this.searchInput = input; }}
                    value={textInput}
                    onChange={this.updateTextInput}
                    onKeyPress={this.handleKeyPress}
                />
                <Link href={`/items?search=${textInput}`}>
                    <a>
                        <button className='search-box__button' type='submit' >
                            <div className='search-box__icon' />
                        </button>
                    </a>
                </Link>
            </form>
        );
    }
}