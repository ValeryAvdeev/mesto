class Popup {
  // селектор попапа.
  constructor(selector) {
    this._selector = document.querySelector(selector);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();

    }
  }

  // добавляет слушатель клика иконке закрытия попапа и на затемнённую область вокруг формы
  setEventListeners() {
    const popupCloseBtnPlace = popupPlace.querySelector('.popup__close_element_place');
    popupCloseBtnPlace.addEventListener("click", () => this.close());

    const popupOverlayPlace = popupPlace.querySelector('.popup__overlay_select_place');
    popupOverlayPlace.addEventListener('click', () => this.close());

    // this.close();
    // сразу открывает попап
    // popupCloseBtnEdit.addEventListener("click", () => this.close(popupProfile));
    // popupCloseBtnImg.addEventListener('click', () => this.close(popupImg));
    // popupOverlayProfile.addEventListener('click', () => this.close());
    // popupOverlayImg.addEventListener('click', () => this.close(popupImg));
  }

  open() {
    console.log(`class Popup`)
    this._selector.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._selector.classList.remove('popup_open');
  }
}

export default Popup;