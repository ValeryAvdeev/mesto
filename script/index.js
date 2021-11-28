const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: './images/Image.png',
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
];

const btnPopupEdit = document.querySelector(".button_item_edit");
const popupProfile = document.querySelector(".popup_profile");
const popupCloseBtnEdit = popupProfile.querySelector(".popup__close_edit");

const nameProfile = document.querySelector(".profile__title_popup_name");
const jodProfile = document.querySelector(".profile__subtitle_popup_job");

const formElementProfile = document.querySelector(".form_profile");
const nameInput = formElementProfile.querySelector(".form__input_popup_name");
const jobInput = formElementProfile.querySelector(".form__input_popup_job");

const btnPopupAdd = document.querySelector('.button_item_add');
const popupPlace = document.querySelector('.popup_place');
const popupCloseBtnPlace = popupPlace.querySelector('.popup__close_place');

// const formElementPlace = document.querySelector('.form_place');
// const titleForm = formElementPlace.querySelector('.form__input_popup_title');
// const imgForm = formElementPlace.querySelector('.form__input_popup_image');

const placeTemplate = document.querySelector('.place-template');
const placesList = document.querySelector('.places');

const popupImg = document.querySelector('.popup_image');
const popupCloseBtnImg = popupImg.querySelector('.popup__close_place-img');

function render() {
  const html = initialCards.map((item) => {
        return getItem(item);
      })
  placesList.append(...html);
}

function getItem(item) {
  const newItem = placeTemplate.cloneNode(true).content;
  const titleElement = newItem.querySelector('.place__title');
  const imageElement = newItem.querySelector('.place__image');

  titleElement.textContent = item.name;
  imageElement.src = item.link;

  const btnLikePlase = newItem.querySelector('.button_item_like');
  btnLikePlase.addEventListener('click', handleLike);

  const btnDelPlase = newItem.querySelector('.button_item_delete');
  btnDelPlase.addEventListener('click', handleDelete);

  imageElement.addEventListener('click', function () {
      openPopup(popupImg);
      // popupImg.classList.add('popup_open');
      const img = document.querySelector('.place__image-popup');
      const tit = document.querySelector('.place__title-popup');
      tit.textContent = titleElement.textContent;
      img.src = imageElement.src;

  })

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

function openPopup(item) {
  if(item === popupProfile) {
    popupProfile.classList.add("popup_open");
    nameInput.value = nameProfile.textContent;
    jobInput.value = jodProfile.textContent;
  } else if(item === popupPlace) {
    popupPlace.classList.add('popup_open');
  } else {
    popupImg.classList.add('popup_open');
  }
}

function closePopup() {
  popupProfile.classList.remove("popup_open");
  popupPlace.classList.remove("popup_open");
  popupImg.classList.remove('popup_open');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jodProfile.textContent = jobInput.value;

  closePopup();
}

formElementProfile.addEventListener("submit", formSubmitHandler);
btnPopupEdit.addEventListener("click", () => {openPopup(popupProfile)});
btnPopupAdd.addEventListener('click', () => {openPopup(popupPlace)});
popupCloseBtnEdit.addEventListener("click", closePopup);
popupCloseBtnPlace.addEventListener("click", closePopup);
popupCloseBtnImg.addEventListener('click', closePopup)

render();

// function HandlerAddPlace (evt) {
//     evt.preventDefault();
//
//     const titleElement = placeTemplate.querySelector('.place__title');
//     const imageElement = placeTemplate.querySelector('.place__image');
//
//     titleElement.textContent = titleForm.value;
//     imageElement.src = imgForm.value;
//
//     titleForm.value = '';
//     imgForm.value = '';
//     placesList.prepend(titleElement, imageElement);
//     closePopup();
// }