class Card {
  constructor(selector, title, image) {
    this._selector = selector;
    this._title = title;
    this._image = image;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.place')
      .cloneNode(true);

    return cardElement;
  }

  _handleLike(evt) {
    evt.target.classList.toggle('button_item_like-active');
  }

  _handleDelete(evt) {
    const delTarget = evt.target;
    const placeItem = delTarget.closest('.place');
    placeItem.remove();

  }

  getView() {
    this._element = this._getTemplate();
    this._element.querySelector('.place__title').textContent = this._title;
    this._element.querySelector('.place__image').src = this._image;

    this._element.querySelector('.button_item_like').addEventListener('click', this._handleLike);
    this._element.querySelector('.button_item_delete').addEventListener('click', this._handleDelete);

    return this._element;
  }
}

export default Card;