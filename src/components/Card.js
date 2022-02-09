
class Card {
  constructor({
                card,
                userId,
                handleCardClick,
                handleDeleteCard,
                deleteLikeCard,
                addLikeCard
              }, selector) {
    this._card = card;
    this._name = card.name;
    this._link = card.link;
    this._likes = card.likes;
    this._id = card._id;
    this._ownerId = card.owner._id;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard =handleDeleteCard;
    this._addLikeCard = addLikeCard;
    this._deleteLikeCard = deleteLikeCard;
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
    this._setIsLike();
  }

  _setIsLike() {
    // console.log(this._card.likes)
    // console.log(this._userId)
    // console.log(this._card.likes.some(elem => console.log(elem._id === this._userId)));
    if (this._card.likes.some(elem => elem._id === this._userId)) {
      this._like.classList.add("button_item_like-active");
    }
  }
  _setEventListeners() {
    // this._like.addEventListener('click', () => {
    //   this._like.classList.toggle('button_item_like-active')
    // });

    this._like.addEventListener('click', () => this._likeToggle());

    this._image.addEventListener('click', this._handleCardClick);

    this._delete.addEventListener('click', this._handleDeleteCard);
    // this._сardElement.remove()
    // );
  }

  // deleteCard() {
  //   this._сardElement.remove();
  // }

  _checkingForeignerCards () {
    if(this._ownerId !== this._userId){
      this._delete.classList.add('button_item_delete-none');
    }
  }

  _likeToggle() {
    if(!this._like.classList.contains('button_item_like-active')) {
      this._addLikeCard(this._id)
        .then(res => {
          this._card = res;
          this._amountLike.textContent = res.likes.length;
          this._like.classList.add('button_item_like-active');
        })
        .catch(err => console.log(`Ошибка в index.js при лайку карточки ${err}`))
    } else {
      this._deleteLikeCard(this._id)
        .then(res => {
          this._card = res;
          this._amountLike.textContent = res.likes.length;
          this._like.classList.remove('button_item_like-active');
        })
        .catch(err => console.log(`Ошибка в index.js при удалении лайка карточки ${err}`))
    }
  }

  generateCard() {
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;
    this._amountLike.textContent = this._likes.length;
    this._checkingForeignerCards();
    this._setEventListeners();
    this._setIsLike();

    return this._сardElement;
  }
}

export default Card;