import Card from "../script/components/Card.js";
import FormValidator from "../script/components/FormValidator.js";
import {
  placesList,
  btnPopupEdit,
  popupProfile,
  popupCloseBtnEdit,
  popupOverlayProfile,
  nameProfile,
  jobProfile,
  formElementProfile,
  nameInput,
  jobInput,
  btnPopupAdd,
  popupPlace,
  popupCloseBtnPlace,
  popupOverlayPlace,
  formElementPlace,
  titleInput,
  imgForm,
  popupImg,
  popupCloseBtnImg,
  popupOverlayImg,
  validationConfig,
  initialCards
} from '../script/utils/constants.js'
import Section from "../script/components/Section.js";
import Popup from "../script/components/Popup.js";
import PopupWithImage from "../script/components/PopupWithImage.js";

// Popup
const popupPlaceClass = new Popup('.popup_element_place');

//валидация форм
const editFormValidator = new FormValidator(validationConfig, formElementProfile);
const cardFormValidator = new FormValidator(validationConfig, formElementPlace);

//отрисовка элементов на странице
const cardElement = new Section({
  items: initialCards,
  renderer: (item) => {
    // с НЕ реализованным классом ПОПАП
    // const card = new Card('.place-template', item.name, item.link, openPopup);
    // с реализованным классом ПОПАП
    const card = new Card('.place-template', item.name, item.link);
    const cardItem = card.generateCard();

    cardElement.addItem(cardItem);
  }
}, placesList);

// открытие попап картинки
const popupWithImg = new PopupWithImage('.popup_element_image');
popupWithImg.open();

cardElement.renderer();
editFormValidator.enableValidation();
cardFormValidator.enableValidation();

function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener('keydown', closePopupEsc);
}
// в class Popup
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const onPopup = document.querySelector('.popup_open')
    closePopup(onPopup);
  }
}
// в class Popup
function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener('keydown', closePopupEsc);

}
// сабмит формы принимает в PopupWithForm
function handleProfileSubmit(evt) {

  evt.preventDefault();
  nameProfile.textContent = nameInput.value;

  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);

}
// сабмит формы принимает в PopupWithForm
function handleAddPlace(evt) {

  evt.preventDefault();
  const placeItem = new Card('.place-template', titleInput.value, imgForm.value, openPopup);

  const placeEl = placeItem.generateCard();
  placesList.prepend(placeEl);
  titleInput.value = '';
  imgForm.value = '';
  cardFormValidator.disabledButton();
  closePopup(popupPlace);
}
//попап профиля слушатель
btnPopupEdit.addEventListener("click", () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupProfile)
});

//попап место слушатель
btnPopupAdd.addEventListener('click', () => popupPlaceClass.open());
popupPlaceClass.setEventListeners();



// form
formElementPlace.addEventListener('submit', handleAddPlace);
// form
formElementProfile.addEventListener("submit", handleProfileSubmit);

// в Popup close
popupCloseBtnEdit.addEventListener("click", () => closePopup(popupProfile));

popupCloseBtnImg.addEventListener('click', () => closePopup(popupImg));
popupOverlayProfile.addEventListener('click', () => closePopup(popupProfile));

popupOverlayImg.addEventListener('click', () => closePopup(popupImg));


// старая логика

// initialCards.forEach(element => {
//   const card = new Card('.place-template', element.name, element.link, openPopup);
//   const cardEl = card.generateCard();
//
//   placesList.append(cardEl);
// })

// btnPopupAdd.addEventListener('click', () => openPopup(popupPlace));
// popupOverlayPlace.addEventListener('click', () => closePopup(popupPlace));
// popupCloseBtnPlace.addEventListener("click", () => closePopup(popupPlace));
