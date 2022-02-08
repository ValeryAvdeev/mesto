import Popup from "./Popup.js";

class PopupConfig extends Popup {
  constructor(selector, {formSubmit}) {
    super(selector); //наследование
    this._formSubmit = formSubmit; //колбек функция
    this._form = this._popup.querySelector('.form'); //поиск формы в попап
    this._submit = this._submit.bind(this); //присвание сабмиту this
  }

  //риватный метод поведения собмита
   _submit(evt) {
    evt.preventDefault();
    //при сабмите надо удалять карточку по в колбек передаем параметр id карточки
     this._formSubmit(this.id);
  }

  //метод открытия
  open(id) {
    //на форму вешаем слушатель
    this.id = id
    this._form.addEventListener('submit', this._submit)
    //наследуем открытие
    super.open();
  }
}

export default PopupConfig;