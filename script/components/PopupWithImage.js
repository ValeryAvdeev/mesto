import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  // перезаписывать родительский метод open
  open = (title, image) => {
    console.log(`class PopupWithImage`)
    console.log(title)
    console.log(image)
    // вставлять в попап картинку с src изображения и подписью к картинке.
    const imgPopupPlace = document.querySelector('.figure__image');
    const titlePopupPlace = document.querySelector('.figure__title');
    titlePopupPlace.textContent = title;
    imgPopupPlace.src = image;
    imgPopupPlace.alt = title;
    console.log(imgPopupPlace.src)
    console.log(imgPopupPlace.alt)
    super.open();
  }
}

export default PopupWithImage;