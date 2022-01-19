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

  // constructor(selector, title, image, handleCardClick) {
  //   this._selector = selector;
  //   this._title = title;
  //   this._image = image;
  //   this._handleCardClick = handleCardClick;
  // }
//
  // _getTemplate() {
  //   const cardElement = document
  //     .querySelector(this._selector)
  //     .content
  //     .querySelector('.place')
  //     .cloneNode(true);
  //
  //   return cardElement;
  // }
//
  // _handleLike(evt) {
  //   evt.target.classList.toggle('button_item_like-active');
  // }
//
  // _handleDelete = () => this._element.remove()
//
  // _openPopup = () => {
  //   console.log('class Card');
  //   this._handleCardClick();
  //   //   const popupImg = document.querySelector('.popup_element_image');
  // //   const imgPopupPlace = document.querySelector('.figure__image');
  // //   const titlePopupPlace = document.querySelector('.figure__title');
  // //   titlePopupPlace.textContent = this._title;
  // //   imgPopupPlace.src = this._image;
  // //   imgPopupPlace.alt = this._title;
  // }
  // console.log(`class Card metod _setEventListeners`)
  // const buttonLikePlace = this._element.querySelector('.button_item_like');
  // buttonLikePlace.addEventListener('click', this._handleLike);
  //
  // const buttonDeletePlace = this._element.querySelector('.button_item_delete');
  // buttonDeletePlace.addEventListener('click', () => this._handleDelete);
  //
  // const imageCard = this._element.querySelector('.place__image');
  // imageCard.addEventListener('click', this._handleCardClick);
  // this._element = this._getTemplate();
  // this._setEventListeners();
  //
  // this._element.querySelector('.place__title').textContent = this._name;
  // this._element.querySelector('.place__image').src = this._link;
  // this._element.querySelector('.place__image').alt = this._name;
  //
  // return this._element;

}

export default Card;