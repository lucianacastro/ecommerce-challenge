import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Price from './components/Price';
import Description from './components/Description';

import './styles.scss';


const VerticalCard = ({ imageUrl, price, condition, soldQuantity, description, title }) => (
    <div className='vertical-card'>
        <div className='vertical-card__top-wrapper'>
            <img className='vertical-card__image' src={imageUrl} title={title}/>
            <Price price={price} condition={condition} soldQuantity={soldQuantity} title={title} />
        </div>
        <Description descriptionText={description}/>
    </div>
);

VerticalCard.propTypes = {
    'imageUrl': PropTypes.string,
    'price': PropTypes.object,
    'condition': PropTypes.string,
    'soldQuantity': PropTypes.number,
    'title': PropTypes.string,
    'description': PropTypes.string,
}

VerticalCard.defaultProps = {
    'imageUrl': '',
    'price': {},
    'condition': '',
    'soldQuantity': NaN,
    'title': '',
    'description': '',
    
}

VerticalCard.displayName = 'VerticalCard';

export default VerticalCard;