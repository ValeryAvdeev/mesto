class Card {
  constructor({ name, link, handleCardClick }, selector) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._selector = selector;
    this._сardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.place')
      .cloneNode(true);
    this._like = this._сardElement.querySelector('.button_item_like');
    this._delete = this._сardElement.querySelector('.button_item_delete');
    this._image = this._сardElement.querySelector('.place__image');
    this._title = this._сardElement.querySelector('.place__title');
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => this._like.classList.toggle('button_item_like-active'));
    this._delete.addEventListener('click', () => this._сardElement.remove());
    this._image.addEventListener('click', this._handleCardClick);
  }

  generateCard() {
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;
    this._setEventListeners();

    return this._сardElement;
  }
}

export default Card;