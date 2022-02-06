class Card {
  constructor({ card, handleCardClick }, selector) {
    this._name = card.name;
    this._link = card.link;
    this._likes = card.likes;
    this._id =  card._id;
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
    this._amountLike = this._сardElement.querySelector('.place__like-amount');
    // this._popupDeleteCard = document.querySelector('.popup_element_delete-card');
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => {
      // console.log(this._likes)
      this._like.classList.toggle('button_item_like-active')
    });
    this._image.addEventListener('click', this._handleCardClick);
    this._delete.addEventListener('click', () => {
      // this._сardElement.remove()
      // this._popupDeleteCard.classList.add('popup_open');
      this._handleCardClick;
    });
  }

  generateCard() {
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;
    this._amountLike.textContent = this._likes.length;
    this._setEventListeners();

    return this._сardElement;
  }
}

export default Card;