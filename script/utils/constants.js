export const placesList = document.querySelector('.places');
export const btnPopupEdit = document.querySelector(".button_item_edit");
export const formElementProfile = document.querySelector(".form_element_profile");
export const btnPopupAdd = document.querySelector('.button_item_add');
export const formElementPlace = document.querySelector('.form_element_place');
export const nameProfile = document.querySelector(".profile__title_popup_name");
export const jobProfile = document.querySelector(".profile__subtitle_popup_job");
export const nameInput = document.querySelector(".form__input_popup_name");
export const infoInput = document.querySelector(".form__input_popup_job");
export const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
// export const popupImg = document.querySelector('.popup_element_image');
// export const popupCloseBtnImg = popupImg.querySelector('.popup__close_place_img');
// export const popupOverlayImg = popupImg.querySelector('.popup__overlay_select_image');
// export const popupProfile = document.querySelector(".popup_element_profile");
// export const popupCloseBtnEdit = popupProfile.querySelector(".popup__close_element_edit");
// export const popupOverlayProfile = popupProfile.querySelector('.popup__overlay_select_profile');
// export const popupPlace = document.querySelector('.popup_element_place');
// export const popupCloseBtnImg = popupImg.querySelector('.popup__close_place_img');
// export const popupOverlayImg = popupImg.querySelector('.popup__overlay_select_image');
// export const imgPopupPlace = document.querySelector('.figure__image');
// export const titlePopupPlace = document.querySelector('.figure__title');
];