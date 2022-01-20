import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._image = this._popup.querySelector('.figure__image');
    this._title = this._popup.querySelector('.figure__title');
  }
  // перезаписывать родительский метод open
  open(obj) {
    this._image.src = obj.link ;
    this._title.alt = obj.name;
    this._title.textContent = obj.name;
    super.open();
  }
}

export default PopupWithImage;

// вставлять в попап картинку с src изображения и подписью к картинке.
// const imgPopupPlace = document.querySelector('.figure__image');
// const titlePopupPlace = document.querySelector('.figure__title');
// titlePopupPlace.textContent = title;
// imgPopupPlace.src = image;
// imgPopupPlace.alt = title;