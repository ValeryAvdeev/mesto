import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(selector, submitForm) {
    // принимает в конструктор колбэк сабмита формы
    super(selector);
    this._submitForm = submitForm;
  }

  // собирает данные всех полей формы.
  _getInputValues() {

  }
  // Перезаписывает родительский метод setEventListeners
  setEventListeners() {
    // класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия,
    // но и добавлять обработчик сабмита формы.

    super.setEventListeners();
  }

  // Перезаписывает родительский метод close
  close() {
    // при закрытии попапа форма должна ещё и сбрасываться
  }
}

export default PopupWithForm;