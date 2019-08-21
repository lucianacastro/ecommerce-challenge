import React from 'react';
import PropTypes from 'prop-types';

import BreadCrumb from '../BreadCrumb';
import Card from '../Card';

export default class Results extends React.Component {
    static displayName = 'Results';
    static propTypes = {
        categories: PropTypes.array,
        items: PropTypes.array,
    };
    render() {
        const { categories, items } = this.props;
        return(
            <div className='results'>
                <BreadCrumb categories={categories}/>
                {items.map((item, idx) => <Card key={`item-${idx}`} imageUrl={item.picture} price={item.price} freeShipping={item.free_shipping} title={item.title} city={item.city}/> )}
            </div>
        );
    }
}