import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1> Check out these EPIC recipes!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="images/img-dinner.jpg"
                        text="Explore your tastebuds through the depths of your PANTRY"
                        label='FOOD'
                        path='/services'
                    />
                    <CardItem 
                        src="images/img-2.jpg"
                        text="Cook through the ingedients on your grill"
                        label='GRILL'
                        path='/services'
                    />
                </ul>
                {/*<ul className="cards__items">
                    <CardItem 
                        src="images/img-9.jpg"
                        text="Explore your tastebuds in the hidden jungle of your PANTRY"
                        label='FOOD'
                        path='/services'
                    />
                    <CardItem 
                        src="images/img-2.jpg"
                        text="Cook through the ingedients on your grill"
                        label='GRILL'
                        path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src="images/img-9.jpg"
                        text="Explore your tastebuds in the hidden jungle of your PANTRY"
                        label='FOOD'
                        path='/services'
                    />
                    <CardItem 
                        src="images/img-2.jpg"
                        text="Cook through the ingedients on your grill"
                        label='GRILL'
                        path='/services'
                    />
                    <CardItem 
                        src="images/img-2.jpg"
                        text="Cook through the ingedients on your grill"
                        label='GRILL'
                        path='/services'
                    />
                </ul>*/}
            </div>
        </div>
    </div>
  )
}

export default Cards;