class Card {
  constructor(selector, title, image, onPopup) {
    this._selector = selector;
    this._title = title;
    this._image = image;
    this._onPopup = onPopup;
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
    evt
      .target
      .closest('.place')
      .remove();
  }

  _openPopup = () => {

    const popupImg = document.querySelector('.popup_element_image');
    const imgPopupPlace = document.querySelector('.figure__image');
    const titlePopupPlace = document.querySelector('.figure__title');

    titlePopupPlace.textContent = this._title;
    imgPopupPlace.src = this._image;
    imgPopupPlace.alt = this._title;

    this._onPopup(popupImg);
  }

  _setEventListeners() {
    const btnLikePlase = this._element.querySelector('.button_item_like');
    btnLikePlase.addEventListener('click', this._handleLike);

    const btnDelPlase = this._element.querySelector('.button_item_delete');
    btnDelPlase.addEventListener('click', this._handleDelete);

    const imgOpenPopup = this._element.querySelector('.place__image');
    imgOpenPopup.addEventListener('click', this._openPopup);
  }


  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.place__title').textContent = this._title;
    this._element.querySelector('.place__image').src = this._image;
    this._element.querySelector('.place__image').alt = this._title;

    return this._element;
  }
}

export default Card;