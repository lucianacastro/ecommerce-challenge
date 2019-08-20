import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './styles.scss';

const Card = ({ imageUrl, price, freeShipping, description, city }) => (
    <div className='card'>
        <Link href=''>
            <a className='card__link'>
                <img className='card__image' src='http://mla-s2-p.mlstatic.com/798942-MLA31081758034_062019-O.jpg' title='' />
                
                <div className='card__description-wrapper'>
                    <div className='card__price-wrapper'>
                        <div className='card__price'>
                            <div className='card__value'>$ 1980</div>
                            { freeShipping 
                                ? <div className='card__shipping-icon' title='Free shipping'/>
                                : false
                            }
                        </div>
                        <div className='card__description'>Apple Touch Negro Igual a Nuevo Completo unico increíble!</div>
                    </div>
                    <div className='card__city'>Capital Federal</div>
                </div>
            </a>
        </Link>
    </div>
);

Card.propTypes = {
    'imageUrl': PropTypes.string,
    'price': PropTypes.number,
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
