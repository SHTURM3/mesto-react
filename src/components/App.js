import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  // Стейт переменная карточки места
  const [selectedCard, setSelectedCard] = React.useState({});

  // Стейт переменные состояния для открытия и закрытия попапов
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

  // Функция обработчик клика по карточке места
  function handleCardClick(element) {
    setImagePopupOpen(true);
    setSelectedCard(element);
    console.log(element);
  } 

  // Функции открытия и закрытия попапов
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="App">
       <div className="page">
            <Header />
            <Main 
              onEditProfile={handleEditProfileClick} 
              onAddPlace={handleAddPlaceClick} 
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
            />
            <Footer />

            <PopupWithForm
              title='Редактировать профиль' 
              name='profile'
              button='Сохранить'  
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              >
              <input name="name" id="input__name" type="text" placeholder="Имя" className="popup__input popup__input_profile-name" minLength={2} maxLength={40} required={true} />
              <span className="popup__error" id="input__name-error"></span>
              <input name="about" id="input__about" type="text" placeholder="О себе" className="popup__input popup__input_profile-about" minLength={2} maxLength={200} required={true} />
              <span className="popup__error" id="input__about-error"></span>
            </PopupWithForm>

            <PopupWithForm 
              title='Новое место' 
              name='card'
              button='Создать'  
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups} 
            >
              <input name="name"  id="input__call" type="text" placeholder="Название" className="popup__input popup__input_card-name" minLength={2} maxLength={30} required={true} />
              <span className="popup__error" id="input__call-error"></span>
              <input name="link" id="input__link" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_card-link" required={true} />
              <span className="popup__error" id="input__link-error"></span>
            </PopupWithForm>

            <PopupWithForm 
              title='Обновить аватар' 
              name='profile-avatar'
              button='Сохранить'  
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups} 
            >
              <input name="avatar" id="input-avatar__link" type="url" placeholder="Ссылка на аватар" className="popup__input popup__input_profile-avatar" required={true} />
              <span className="popup__error" id="input-avatar__link-error"></span>
            </PopupWithForm>

            <PopupWithForm 
              title='Вы уверены?' 
              name='question'
              button='Да' 
            ></PopupWithForm>

            <ImagePopup
              card={selectedCard}
              isOpen={isImagePopupOpen} 
              onClose={closeAllPopups}
            />
      </div>
    </div>  
  );
}

export default App;
