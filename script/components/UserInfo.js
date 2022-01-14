class UserInfo {
  // Принимает в конструктор объект с селекторами двух элементов:
  // элемента имени пользователя и элемента информации о себе.
  constructor({ selectorName, selectorInfo }) {
    this._selectorName = selectorName;
    this._selectorInfo = selectorInfo;
  }

  // Возвращает объект с данными пользователя
  getUserInfo() {
    // будет подставить в форму при открытии
  }

  // принимает новые данные пользователя и добавляет их на страницу
  setUserInfo() {}
}

export default UserInfo;