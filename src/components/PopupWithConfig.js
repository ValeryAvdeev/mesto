import Popup from "./Popup.js";

class PopupWithConfig extends Popup {
  constructor(selector, { clickHandleCallBack }) {
    super(selector); //наследование
    this._clickHandleCallBack = clickHandleCallBack; //колбек функция
    this._buttonDelete = this._popup.querySelector('.popup__delete-card');
  }

  setSubmitAction(action) {
    this._clickHandleCallBack = action;
  }

  _setEventListeners(){
    this._buttonDelete.addEventListener('click', () => this._clickHandleCallBack());
    super._setEventListeners();
  }
}

export default PopupWithConfig;