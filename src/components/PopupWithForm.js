import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  // принимает в конструктор колбэк сабмита формы и элемент формы
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._elementForm = this._popup.querySelector('.form');
    this._button = this._popup.querySelector('.form__submit');
    // достаём все элементы полей
    this._inputs = this._elementForm.querySelectorAll('.form__input');
  }

  // собирает данные всех полей формы.
  _getInputValues() {
    // создаём пустой объект
    this._formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputs.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    // возвращаем объект значений
    return this._formValues;
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues(), this._button);
    this._elementForm.reset();
    // this.close();
  }

  _removeListener() {
    this._elementForm.removeEventListener('submit', this._handleSubmit)
    super._removeListener();
  }

  // Перезаписывает родительский метод setEventListeners
  _setEventListeners() {
    this._elementForm.addEventListener('submit', this._handleSubmit);
    super._setEventListeners();
  }

  // Перезаписывает родительский метод close
  close() {
    this._elementForm.reset();
   // this._removeListener();
    super.close();
  }
}

export default PopupWithForm;