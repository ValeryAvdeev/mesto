class UserInfo {
  // Принимает в конструктор объект с селекторами двух элементов:
  // элемента имени пользователя и элемента информации о себе.
  constructor({ nameSelector, infoSelector }) {
    this._nameSelector = nameSelector;
    this._infoSelector = infoSelector;
  }

  // Возвращает объект с данными пользователя
  getUserInfo({nameInput, infoInput}) {
    nameInput.value = this._nameSelector.textContent;
    infoInput.value = this._infoSelector.textContent;
  }

  // принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({name, info}) {
    this._nameSelector.textContent = name;
    this._infoSelector.textContent = info;
  }
}

export default UserInfo;