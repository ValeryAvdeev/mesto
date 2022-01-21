class Popup {
  // селектор попапа.
  constructor(selector) {
    this._popup = document.querySelector(selector);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') this.close();
  }

  _handleClose = (evt) => {
    if (evt.target.classList.contains('popup__overlay')) {
      this.close();
    }
    if (evt.target.classList.contains('popup__close')) {
      this.close();
    }
  }

  _removeListener() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._handleClose);
  }

  _setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._handleClose);
  }

  open() {
    this._popup.classList.add('popup_open');
    this._setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_open');
    this._removeListener();
  }
}

export default Popup;