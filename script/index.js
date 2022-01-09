import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
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
} from './utils/constants.js'
import Section from "./components/Section.js";

const cardElement = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card('.place-template', item.name, item.link);
    console.log(card)
    const cardItem = card.generateCard();

    cardElement.addItem(cardItem);
  }
}, placesList);

cardElement.renderer();

const editFormValidator = new FormValidator(validationConfig, formElementProfile);
const cardFormValidator = new FormValidator(validationConfig, formElementPlace);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

// initialCards.forEach(element => {
//   const card = new Card('.place-template', element.name, element.link, openPopup);
//   const cardEl = card.generateCard();
//
//   placesList.append(cardEl);
// })


function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const onPopup = document.querySelector('.popup_open')
    closePopup(onPopup);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener('keydown', closePopupEsc);
}

function handleProfileSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  closePopup(popupProfile);
}

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