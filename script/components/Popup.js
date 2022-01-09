class Popup {
  constructor(selector) {
  this._selector = selector;
  }
  _handleEscClose() {
    if (evt.key === 'Escape') {
      const onPopup = document.querySelector('.popup_open')
      closePopup(onPopup);
  }
  setEventListeners() {
      popupCloseBtnEdit.addEventListener("click", () => closePopup(popupProfile));
      popupOverlayProfile.addEventListener('click', () => closePopup(popupProfile));
  }
  open() {
      popup.classList.add("popup_open");
      document.addEventListener('keydown', closePopupEsc);
  }
  close() {
      popup.classList.remove("popup_open");
      document.removeEventListener('keydown', closePopupEsc);
  }
}

export default Popup;

// function openPopup(popup) {
//   popup.classList.add("popup_open");
//   document.addEventListener('keydown', closePopupEsc);
// }

// function closePopup(popup) {
//   popup.classList.remove("popup_open");
//   document.removeEventListener('keydown', closePopupEsc);
// }

// function closePopupEsc(evt) {
//   if (evt.key === 'Escape') {
//     const onPopup = document.querySelector('.popup_open')
//     closePopup(onPopup);
//   }
// }

  // popupCloseBtnEdit.addEventListener("click", () => closePopup(popupProfile));
  // popupCloseBtnPlace.addEventListener("click", () => closePopup(popupPlace));
  // popupCloseBtnImg.addEventListener('click', () => closePopup(popupImg));
  //
  // popupOverlayProfile.addEventListener('click', () => closePopup(popupProfile));
  // popupOverlayPlace.addEventListener('click', () => closePopup(popupPlace));
  // popupOverlayImg.addEventListener('click', () => closePopup(popupImg));