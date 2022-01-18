import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  // перезаписывать родительский метод open
  open(title, image) {
    console.log(`class PopupWithImage`)
    // console.log(title)
    // const popupImg = document.querySelector('.popup_element_image');

    const imgPopupPlace = document.querySelector('.figure__image');
    const titlePopupPlace = document.querySelector('.figure__title');
    titlePopupPlace.textContent = title;
    imgPopupPlace.src = image;
    imgPopupPlace.alt = title;
    super.open();
  }
}

export default PopupWithImage;