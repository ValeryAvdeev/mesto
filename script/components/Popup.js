class Popup {
  // селектор попапа.
  constructor(selector) {
    this._selector = document.querySelector(selector);
  }

  _handleEscClose = (evt) => {
    console.log(`class Popup metod _handleEscClose`);
    if (evt.key === 'Escape') this.close();
  }

  // добавляет слушатель клика иконке закрытия попапа и на затемнённую область вокруг формы
  setEventListeners() {
    console.log(`class Popup metod setEventListeners`);

    const popupCloseBtnPlace = document.querySelector('.popup__close_element_place');
    popupCloseBtnPlace.addEventListener("click", () => this.close());
    const popupOverlayPlace = document.querySelector('.popup__overlay_select_place');
    popupOverlayPlace.addEventListener('click', () => this.close());

    const popupCloseBtnImg = document.querySelector('.popup__close_place_img');
    popupCloseBtnImg.addEventListener('click', () => this.close());
    const popupOverlayImg = document.querySelector('.popup__overlay_select_image');
    popupOverlayImg.addEventListener('click', () => this.close());

    const popupCloseBtnEdit = document.querySelector(".popup__close_element_edit");
    popupCloseBtnEdit.addEventListener("click", () => this.close());
    const popupOverlayProfile = document.querySelector('.popup__overlay_select_profile');
    popupOverlayProfile.addEventListener('click', () => this.close());
  }

  open() {
    console.log(`class Popup metod open`);
    this._selector.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    console.log(`class Popup metod close`)
    document.removeEventListener('keydown', this._handleEscClose);
    this._selector.classList.remove('popup_open');
  }
}

export default Popup;