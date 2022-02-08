
class Card {
  constructor({ card, userId, handleCardClick, handleDeleteCard }, selector) {
    this._name = card.name;
    this._link = card.link;
    this._likes = card.likes;
    this._id = card._id;
    this._ownerId = card.owner._id;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard =handleDeleteCard;
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
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => {
      this._like.classList.toggle('button_item_like-active')
    });
    this._image.addEventListener('click', this._handleCardClick);

    this._delete.addEventListener('click', this._handleDeleteCard);
    // // this._сardElement.remove()
    // );
  }

  _checkingForeignerCards () {
    if(this._ownerId !== this._userId){
      this._delete.classList.add('button_item_delete-none');
    }
  }

  generateCard() {
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;
    this._amountLike.textContent = this._likes.length;
    this._checkingForeignerCards();
    this._setEventListeners();

    return this._сardElement;
  }
}

export default Card;