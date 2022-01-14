import Popup from "./Popup.js";
import {imgPopupPlace, titlePopupPlace} from "../utils/constants.js";

class PopupWithImage extends Popup {
  // перезаписывать родительский метод open
  open() {
    console.log(`class PopupWithImage`)
    // вставлять в попап картинку с src изображения и подписью к картинке.
    titlePopupPlace.textContent = this._title;
    imgPopupPlace.src = this._image;
    imgPopupPlace.alt = this._title;
    super.open();
  }
}

export default PopupWithImage;