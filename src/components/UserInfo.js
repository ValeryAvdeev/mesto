class UserInfo {
  // Принимает в конструктор объект с селекторами двух элементов:
  // элемента имени пользователя и элемента информации о себе.
  constructor({ nameSelector, infoSelector }) {
    // this._nameSelector = nameSelector;
    // this._infoSelector = infoSelector;
    this._nameSelector = document.querySelector(nameSelector);
    this._infoSelector = document.querySelector(infoSelector);
  }

  // Возвращает объект с данными пользователя
  getUserInfo() {
    this.inputValue = {};

    this.inputValue.name = this._nameSelector.textContent;
    this.inputValue.info = this._infoSelector.textContent;

    return this.inputValue;
  }


  // принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({name, info}) {
    this._nameSelector.textContent = name;
    this._infoSelector.textContent = info;
  }
}

export default UserInfo;