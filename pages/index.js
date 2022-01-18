import Card from "../script/components/Card.js";
import FormValidator from "../script/components/FormValidator.js";
import {
  placesList,
  btnPopupEdit,
  nameProfile,
  jobProfile,
  formElementProfile,
  nameInput,
  jobInput,
  btnPopupAdd,
  formElementPlace,
  titleInput,
  imgForm,
  validationConfig,
  initialCards
} from '../script/utils/constants.js'
import Section from "../script/components/Section.js";
import Popup from "../script/components/Popup.js";
import PopupWithImage from "../script/components/PopupWithImage.js";
import PopupWithForm from "../script/components/PopupWithForm.js";

// Popup
const popupPlaceClass = new Popup('.popup_element_place');
const popupEditClass = new Popup('.popup_element_profile');

// открытие попап картинки
const popupWithImg = new PopupWithImage('.popup_element_image');

//валидация форм
const editFormValidator = new FormValidator(validationConfig, formElementProfile);
const cardFormValidator = new FormValidator(validationConfig, formElementPlace);

//отрисовка элементов на странице
const cardElement = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card( {
      title: item.name,
      image: item.link,
      handleCardClick: () => popupWithImg.open(item.name, item.link)
    },'.place-template');

    const cardItem = card.generateCard();

    cardElement.addItem(cardItem);
  }
}, placesList);

const popupWithFormPlace = new PopupWithForm('.popup_element_place', )
const popupWithFormEdit = new PopupWithForm('.popup_element_profile', )

//попап профиля слушатель
btnPopupEdit.addEventListener("click", () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popupEditClass.open()
});

//попап место слушатель
btnPopupAdd.addEventListener('click', () => popupPlaceClass.open());
// btnPopupEdit.addEventListener("click", () => popupEditClass.open());


editFormValidator.enableValidation();
cardFormValidator.enableValidation();

cardElement.renderer();

popupWithImg.setEventListeners();
popupEditClass.setEventListeners();
popupPlaceClass.setEventListeners();

// сабмит формы принимает в PopupWithForm
function handleProfileSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  popupEditClass.close();
}

// сабмит формы принимает в PopupWithForm
function handleAddPlace(evt) {
  evt.preventDefault();

  const placeItem = new Card({
    title: titleInput.value,
    image: imgForm.value,
    handleCardClick: () => popupWithImg.open(placeItem[titleInput.value], imgForm.textContent)
  },'.place-template');

  console.log(`handleAddPlace ${titleInput.value}`)
  console.log(`handleAddPlace ${imgForm.value}`)
  // console.log(titleInput.value)
  // console.log(imgForm.value)

  const placeEl = placeItem.generateCard();

  placesList.prepend(placeEl);
  titleInput.value = '';
  imgForm.value = '';

  cardFormValidator.disabledButton();
  popupPlaceClass.close();
}
// form
formElementPlace.addEventListener('submit', handleAddPlace);
// form
formElementProfile.addEventListener("submit", handleProfileSubmit);

// в Popup close
// popupCloseBtnEdit.addEventListener("click", () => closePopup(popupProfile));

// popupOverlayProfile.addEventListener('click', () => closePopup(popupProfile));




// старая логика
// function openPopup(popup) {
//   popup.classList.add("popup_open");
//   document.addEventListener('keydown', closePopupEsc);
// }
// // в class Popup
// function closePopupEsc(evt) {
//   if (evt.key === 'Escape') {
//     const onPopup = document.querySelector('.popup_open')
//     closePopup(onPopup);
//   }
// }
// // в class Popup
// function closePopup(popup) {
//   popup.classList.remove("popup_open");
//   document.removeEventListener('keydown', closePopupEsc);
// }
// initialCards.forEach(element => {
//   const card = new Card('.place-template', element.name, element.link, openPopup);
//   const cardEl = card.generateCard();
//
//   placesList.append(cardEl);
// })

// btnPopupAdd.addEventListener('click', () => openPopup(popupPlace));
// popupOverlayPlace.addEventListener('click', () => closePopup(popupPlace));
// popupCloseBtnPlace.addEventListener("click", () => closePopup(popupPlace));
// popupCloseBtnImg.addEventListener('click', () => closePopup(popupImg));
// popupOverlayImg.addEventListener('click', () => closePopup(popupImg));
