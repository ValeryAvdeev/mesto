import initialCards from './initialCards.js';
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";


const enableValidation = ({formSelector, ...rest}) => {
  const forms = document.querySelectorAll(formSelector);
  forms.forEach((form) => {
    const validForm = new FormValidator(rest, form);
    validForm.enableValidation();
  })
};

const placesList = document.querySelector('.places');

const btnPopupEdit = document.querySelector(".button_item_edit");
const popupProfile = document.querySelector(".popup_element_profile");
const popupCloseBtnEdit = popupProfile.querySelector(".popup__close_element_edit");
const popupOverlayProfile = popupProfile.querySelector('.popup__overlay_select_profile');
const nameProfile = document.querySelector(".profile__title_popup_name");
const jobProfile = document.querySelector(".profile__subtitle_popup_job");

const formElementProfile = document.querySelector(".form_element_profile");
const nameInput = document.querySelector(".form__input_popup_name");
const jobInput = document.querySelector(".form__input_popup_job");

const btnPopupAdd = document.querySelector('.button_item_add');
const popupPlace = document.querySelector('.popup_element_place');
const popupCloseBtnPlace = popupPlace.querySelector('.popup__close_element_place');
const popupOverlayPlace = popupPlace.querySelector('.popup__overlay_select_place');

const formElementPlace = document.querySelector('.form_element_place');
const titleForm = document.querySelector('.form__input_popup_title');
const imgForm = document.querySelector('.form__input_popup_image');

const popupImg = document.querySelector('.popup_element_image');
const popupCloseBtnImg = popupImg.querySelector('.popup__close_place_img');
const popupOverlayImg = popupImg.querySelector('.popup__overlay_select_image');

initialCards.forEach(element => {
  const card = new Card('.place-template', element.name, element.link, openPopup);
  const cardEl = card.generateCard();

  placesList.append(cardEl);
})

function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener('keydown', (evt) => closePopupEsc(evt, popup));
}

function closePopupEsc(evt, popup) {
  if (evt.key === 'Escape') {
    closePopup(popup);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener('keydown', (evt) => closePopupEsc(evt, popup));
}

function buttonDoDisabled() {
  const buttonCreatePlace = document.querySelector('.form__submit_btn_add');
  buttonCreatePlace.classList.add('form__submit_disabled');
}

function handleProfileSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  closePopup(popupProfile);
}

function handleAddPlace(evt) {
  evt.preventDefault();

  const placeItem = new Card('.place-template', titleForm.value, imgForm.value, openPopup);
  const placeEl = placeItem.generateCard();

  placesList.prepend(placeEl);

  titleForm.value = '';
  imgForm.value = '';

  buttonDoDisabled();
  closePopup(popupPlace);
}

btnPopupEdit.addEventListener("click", () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupProfile)
});

formElementPlace.addEventListener('submit', handleAddPlace);

formElementProfile.addEventListener("submit", handleProfileSubmit);

btnPopupAdd.addEventListener('click', () => openPopup(popupPlace));

popupCloseBtnEdit.addEventListener("click", () => closePopup(popupProfile));
popupCloseBtnPlace.addEventListener("click", () => closePopup(popupPlace));
popupCloseBtnImg.addEventListener('click', () => closePopup(popupImg));

popupOverlayProfile.addEventListener('click', () => closePopup(popupProfile));
popupOverlayPlace.addEventListener('click', () => closePopup(popupPlace));
popupOverlayImg.addEventListener('click', () => closePopup(popupImg));

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
});