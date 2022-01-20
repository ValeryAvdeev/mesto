class Popup {
  // селектор попапа.
  constructor(selector) {
    this._popup = document.querySelector(selector);
    // this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose = (evt) => {
    console.log(`class Popup metod _handleEscClose`);
    if (evt.key === 'Escape') this.close();
  }

  _handleClose(evt) {
    if (evt.target.classList('popup_open')) {
      this.close();
    }
    if (evt.target.classList('popup__close')) {
      this.close();
    }
  }

  _removeListener() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._handleClose);
  }
  // добавляет слушатель клика иконке закрытия попапа и на затемнённую область вокруг формы
  _setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._handleClose);
    // console.log(`class Popup metod setEventListeners`);
    //
    // popupCloseBtnPlace.addEventListener("click", () => this.close());
    // const popupOverlayPlace = document.querySelector('.popup__overlay');
    // popupOverlayPlace.addEventListener('click', () => this.close());
    //
    // const popupCloseBtnImg = document.querySelector('.popup__close_place_img');
    // popupCloseBtnImg.addEventListener('click', () => this.close());
    // const popupOverlayImg = document.querySelector('.popup__overlay_select_image');
    // popupOverlayImg.addEventListener('click', () => this.close());
    //
    // const popupCloseBtnEdit = document.querySelector(".popup__close_element_edit");
    // popupCloseBtnEdit.addEventListener("click", () => this.close());
    // const popupOverlayProfile = document.querySelector('.popup__overlay_select_profile');
    // popupOverlayProfile.addEventListener('click', () => this.close());
  }

  open() {
    console.log(`class Popup metod open`);
    this._popup.classList.add('popup_open');
    this._setEventListeners();
    // this._removeListener();
    // document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    console.log(`class Popup metod close`)
    this._popup.classList.remove('popup_open');
    this._removeListener();
    // this._setEventListeners();
    // document.removeEventListener('keydown', this._handleEscClose);
  }
}

export default Popup;