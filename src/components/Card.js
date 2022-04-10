import React from 'react';

function Card(props) {
function handleClick(){
    props.onCardClick(props.card);
}
 return(
    <li className="elements__item">
        <img src={props.card.link} alt="Описание карточки" className="elements__img" onClick={handleClick} />
        <button type="button" className="elements__trash-btn"></button>
        <div className="elements__description">
            <h2 className="elements__name">{props.card.name}</h2>
            <div className="elements__button">
            <button type="button" className="elements__btn-like"></button>
                <span className="elements__like-count">{props.card.likes.length}</span> 
            </div>
        </div>
    </li>
 );
};

export default Card;