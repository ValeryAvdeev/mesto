class UserInfo {
  // Принимает в конструктор объект с селекторами двух элементов:
  // элемента имени пользователя и элемента информации о себе.
  constructor({ nameSelector, infoSelector, avatarSelector }) {
    this._nameSelector = document.querySelector(nameSelector);
    this._infoSelector = document.querySelector(infoSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  // Возвращает объект с данными пользователя
  getUserInfo() {
    this.inputValue = {};

    this.inputValue.id = this._id;
    this.inputValue.avatar = this._avatarSelector.src;
    this.inputValue.name = this._nameSelector.textContent;
    this.inputValue.info = this._infoSelector.textContent;

    return this.inputValue;
  }

  // принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({name, info}) {
    this._nameSelector.textContent = name;
    this._infoSelector.textContent = info;
  }

  setUserId(id) {
    this._id = id;
  }

  setUserAvatar(avatar) {
    this._avatarSelector.src = avatar;
  }

}

export default UserInfo;