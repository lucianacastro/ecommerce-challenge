import React from 'react';
import PropTypes from 'prop-types';
import slug from 'slug';
import Link from 'next/link';
import { useRouter } from 'next/router';

import './styles.scss';


const Card = ({ itemId, imageUrl, price, freeShipping, description, city, title }) => (
    <div className='card'>
        <Link href={`/product/[id-title]`} as={`/product/${itemId}-${slug(title)}`}>
            <a className='card__link'>
                <img className='card__image' src={imageUrl} title={title} />
                
                <div className='card__description-wrapper'>
                    <div className='card__price-wrapper'>
                        <div className='card__price'>
                            <div className='card__value'>{`$ ${Math.trunc(price.amount)}`}</div>
                            { freeShipping 
                                ? <div className='card__shipping-icon' title='Free shipping'/>
                                : false
                            }
                        </div>
                        <div className='card__description'>{title}</div>
                    </div>
                    <div className='card__city'>{city}</div>
                </div>
            </a>
        </Link>
    </div>
);

Card.propTypes = {
    'itemId': PropTypes.string,
    'imageUrl': PropTypes.string,
    'price': PropTypes.object,
    'freeShipping': PropTypes.bool,
    'description': PropTypes.string,
    'city': PropTypes.string,
}

Card.defaultProps = {
    'imageUrl': '',
    'price': NaN,
    'freeShipping': true,
    'description': '',
    'city': '',
}

Card.displayName = 'Card';

export default Card;
