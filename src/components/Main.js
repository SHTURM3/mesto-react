import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
    //Стейт перменные состояния информации о пользователе
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    //Стейт переменные состояния информации по карточкам
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
       api.getProfile()
        .then(res => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
        })
        .catch( res => {
            console.log(res);
        })

       api.getInitialCards()
            .then( res => {
                setCards(res);
            })
            .catch( res => {
                console.log(res);
            }) 
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__wrapper">
                    <div className="profile__img-wrapper">
                        <img src={userAvatar} alt="Фотография пользователя" className="profile__avatar" />
                        <button className="profile__avatar-btn" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" onClick={props.onEditProfile}></button>
                        <p className="profile__description">{userDescription}</p>
                    </div>
                </div>
                <button type="submit" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Main;