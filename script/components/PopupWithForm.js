import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  // принимает в конструктор колбэк сабмита формы и элемент формы
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._elementForm = this._popup.querySelector('.form');
  }

  // собирает данные всех полей формы.
  _getInputValues() {
    // достаём все элементы полей
    this._elementForm.querySelectorAll('.form__input');
    // создаём пустой объект
    this._formValues = {};
    // добавляем в этот объект значения всех полей
    this._elementForm.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    // возвращаем объект значений
    console.log(this._formValues)
    return this._formValues;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.close();
  }

  _removeListener() {
    this._elementForm.removeEventListener('submit', this._handleSubmit)
    super._removeListener();
  }

  // Перезаписывает родительский метод setEventListeners
  _setEventListeners() {
    this._elementForm.addEventListener('submit', this._handleSubmit);
    super._setEventListeners();
    // console.log(`_setEventListeners ${this._elementForm}`)
    console.log(this._elementForm)
  }

  // Перезаписывает родительский метод close
  close() {
    this._elementForm.reset();
    this._removeListener();
    super.close();
  }
}

export default PopupWithForm;