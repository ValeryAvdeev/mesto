import Popup from "./Popup.js";

class PopupConfig extends Popup {
  constructor(selector, {
    clickHandleCallBack
  }) {
    super(selector); //наследование
    this._clickHandleCallBack = clickHandleCallBack; //колбек функция
    this._buttonDelete = this._popup.querySelector('.popup__delete-card');
  }

  setSubmitAction(action) {
    this._clickHandleCallBack = action;
  }

  _setEventListeners(){
    this._buttonDelete.addEventListener('click', () => {
      this._clickHandleCallBack()
    });
    super._setEventListeners();
  }
  _removeListener() {
    this._buttonDelete.removeEventListener('click', () => {
      this._clickHandleCallBack()
    });
    super._removeListener();
  }

  close() {
    this._removeListener();
    super.close();
  }

  open() {
    super.open();
  }
}

export default PopupConfig;