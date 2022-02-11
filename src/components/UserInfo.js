class UserInfo {
  // Принимает в конструктор объект с селекторами двух элементов:
  // элемента имени пользователя и элемента информации о себе.
  constructor({ name, info, avatar }) {
    this._name = document.querySelector(name);
    this._info = document.querySelector(info);
    this._avatar = document.querySelector(avatar);
  }

  // Возвращает объект с данными пользователя
  getUserInfo() {
    this.inputValue = {};

    this.inputValue.id = this._id;
    this.inputValue.avatar = this._avatar.src;
    this.inputValue.name = this._name.textContent;
    this.inputValue.info = this._info.textContent;

    return this.inputValue;
  }

  // принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({name, info}) {
    this._name.textContent = name;
    this._info.textContent = info;
  }

  setUserId(id) {
    this._id = id;
  }

  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }

}

export default UserInfo;