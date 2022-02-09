import Popup from "./Popup.js";

class PopupConfig extends Popup {
  constructor(selector, { clickHandleCallBack }) {
    super(selector); //наследование
    this._clickHandleCallBack = clickHandleCallBack; //колбек функция
    this._buttonDelete = this._popup.querySelector('.form__delete-card');
  }

  _handleClick = () => {
    this._clickHandleCallBack(this.card);
  }

  _setEventListeners(){
    this._buttonDelete.addEventListener('click', this._handleClick);
    super._setEventListeners();
  }
  _removeListener() {
    this._buttonDelete.removeEventListener('click', this._handleClick);
    super._removeListener();
  }

  close() {
    this._removeListener();
    super.close();
  }

  open(card) {
    this.card = card;
    super.open();
  }
}

export default PopupConfig;