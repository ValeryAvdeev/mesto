import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  // constructor(selector, image, title) {
  //   super(selector);
  //   this._image = image;
  //   this._title = title;
  // }
  // перезаписывать родительский метод open
  open(title, image) {
    console.log(`class PopupWithImage`)
    console.log(title)
    console.log(image)
    // вставлять в попап картинку с src изображения и подписью к картинке.
    const imgPopupPlace = document.querySelector('.figure__image');
    const titlePopupPlace = document.querySelector('.figure__title');
    // titlePopupPlace.textContent = this._title;
    titlePopupPlace.textContent = title;
    // imgPopupPlace.src = this._image;
    imgPopupPlace.src = image;
    // imgPopupPlace.alt = this._title;
    imgPopupPlace.alt = title;
    super.open();
  }
}

export default PopupWithImage;