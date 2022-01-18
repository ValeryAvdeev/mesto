import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  // перезаписывать родительский метод open
  open() {
    console.log(`class PopupWithImage`)
    // вставлять в попап картинку с src изображения и подписью к картинке.
    const imgPopupPlace = document.querySelector('.figure__image');
    const titlePopupPlace = document.querySelector('.figure__title');
    titlePopupPlace.textContent = this._title;
    imgPopupPlace.src = this._image;
    imgPopupPlace.alt = this._title;
    super.open();
  }
}

export default PopupWithImage;