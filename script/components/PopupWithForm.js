import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor() {
    super();
  }

  // собирает данные всех полей формы.
  _getInputValues() {

  }
  // Перезаписывает родительский метод setEventListeners
  setEventListeners() {
    // класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия,
    // но и добавлять обработчик сабмита формы.
  }

  // Перезаписывает родительский метод close
  close() {
    // при закрытии попапа форма должна ещё и сбрасываться
  }
}

export default PopupWithForm;