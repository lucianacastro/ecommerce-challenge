import React from 'react';
import PropTypes from 'prop-types';

import SellInfo from './components/SellInfo';
import Description from './components/Description';

import './styles.scss';


const VerticalCard = ({ imageUrl, price, condition, soldQuantity, description, title }) => (
    <div className='vertical-card'>
        <div className='vertical-card__top-wrapper'>
            <div className='vertical-card__image-wrapper'>
                <img className='vertical-card__image' src={imageUrl} title={title}/>
            </div>
            <SellInfo price={price} condition={condition} soldQuantity={soldQuantity} title={title} />
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
    'description': PropTypes.element,
}

VerticalCard.defaultProps = {
    'imageUrl': '',
    'price': {},
    'condition': '',
    'title': '',
    'description': '',
    
}

VerticalCard.displayName = 'VerticalCard';

export default VerticalCard;