function PopupWithForm(props) {
    
    return(
        <>
            {/* Popup - редактирование имени и описания пользователя */}

            <div className={`popup popup_${props.name} ${props.isOpen}`}>
                <div className={`popup__container popup__container_${props.name}`}>
                    <button className={`popup__close-btn popup__close-btn_${props.name}`} onClick={props.onClose}></button>
                    <h2 className={`popup__title popup__title_${props.name}`}>
                        {props.title}
                    </h2>
                    <form className={`popup__form popup__form_${props.name}`} name={props.name} noValidate>
                        {props.children}
                    </form>
                </div>
            </div>
        </>
    );
};

export default PopupWithForm;