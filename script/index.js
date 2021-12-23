import initialCards from './initialCards.js';

const btnPopupEdit = document.querySelector(".button_item_edit");
const popupProfile = document.querySelector(".popup_element_profile");
const popupCloseBtnEdit = popupProfile.querySelector(".popup__close_element_edit");
const popupOverlayProfile = popupProfile.querySelector('.popup__overlay_select_profile');

const nameProfile = document.querySelector(".profile__title_popup_name");
const jobProfile = document.querySelector(".profile__subtitle_popup_job");

const formElementProfile = document.querySelector(".form_profile");
const nameInput = formElementProfile.querySelector(".form__input_popup_name");
const jobInput = formElementProfile.querySelector(".form__input_popup_job");

const btnPopupAdd = document.querySelector('.button_item_add');
const popupPlace = document.querySelector('.popup_element_place');
const popupCloseBtnPlace = popupPlace.querySelector('.popup__close_element_place');
const popupOverlayPlace = popupPlace.querySelector('.popup__overlay_select_place');

const formElementPlace = document.querySelector('.form_element_place');
const titleForm = formElementPlace.querySelector('.form__input_popup_title');
const imgForm = formElementPlace.querySelector('.form__input_popup_image');

const placeTemplate = document.querySelector('.place-template');
const placesList = document.querySelector('.places');

const popupImg = document.querySelector('.popup_element_image');
const popupCloseBtnImg = popupImg.querySelector('.popup__close_place_img');
const popupOverlayImg = popupImg.querySelector('.popup__overlay_select_image');

function render() {
  const cards = initialCards.map((item) => {
    return getItem(item);
  })
  placesList.append(...cards);
}

function getItem(item) {
  const newItem = placeTemplate.cloneNode(true).content;
  const titleElement = newItem.querySelector('.place__title');
  const imageElement = newItem.querySelector('.place__image');

  titleElement.textContent = item.name;
  imageElement.src = item.link;
  imageElement.alt = titleElement.textContent;

  const btnLikePlase = newItem.querySelector('.button_item_like');
  btnLikePlase.addEventListener('click', handleLike);

  const btnDelPlase = newItem.querySelector('.button_item_delete');
  btnDelPlase.addEventListener('click', handleDelete);

  const imgPopupPlace = document.querySelector('.figure__image');
  const titlePopupPlace = document.querySelector('.figure__title');
  imageElement.addEventListener('click', function () {
    titlePopupPlace.textContent = titleElement.textContent;
    imgPopupPlace.src = imageElement.src;
    imgPopupPlace.alt = titlePopupPlace.textContent;

    openPopup(popupImg);
  });

  return newItem;
}

function handleLike(evt) {
  evt.target.classList.toggle('button_item_like-active');
}

function handleDelete(evt) {
  const delTarget = evt.target;
  const placeItem = delTarget.closest('.place');
  placeItem.remove();
}

function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener('keydown', (evt) => closePopupEsc(evt, popup));
}

function buttonDoDisabled() {
  const buttonCreatePlace =   document.querySelector('.form__submit_btn_add');
  buttonCreatePlace.classList.add('form__submit_disabled');
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener('keydown', (evt) => closePopupEsc(evt, popup));

}

function handleProfileSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  closePopup(popupProfile);
}

function handleAddPlace(evt) {
  evt.preventDefault();

  const inputFormTitle = titleForm.value;
  const inputFormImg = imgForm.value;
  const placeItem = getItem({
    name: inputFormTitle,
    link: inputFormImg
  })

  placesList.prepend(placeItem);

  titleForm.value = '';
  imgForm.value = '';

  buttonDoDisabled();
  closePopup(popupPlace);
}

function closePopupEsc(evt, popup) {
  if (evt.key === 'Escape') {
    closePopup(popup);
  }
}

formElementPlace.addEventListener('submit', handleAddPlace);
formElementProfile.addEventListener("submit", handleProfileSubmit);

btnPopupEdit.addEventListener("click", () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupProfile)
});

btnPopupAdd.addEventListener('click', () => openPopup(popupPlace));

popupCloseBtnEdit.addEventListener("click", () => closePopup(popupProfile));
popupCloseBtnPlace.addEventListener("click", () => closePopup(popupPlace));
popupCloseBtnImg.addEventListener('click', () => closePopup(popupImg));

popupOverlayProfile.addEventListener('click', () => closePopup(popupProfile));
popupOverlayPlace.addEventListener('click', () => closePopup(popupPlace));
popupOverlayImg.addEventListener('click', () => closePopup(popupImg));

render();