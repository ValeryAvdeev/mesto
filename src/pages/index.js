import './index.css'
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  validationConfig,
  formElementProfile,
  btnPopupAdd,
  btnPopupEdit,
  formElementPlace,
  nameInput,
  infoInput,
  // token,
  initialCards
} from '../script/utils/constants.js'
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const api = new Api(
  {
    address: 'https://mesto.nomoreparties.co/v1/cohort-35',
    token: 'f1517d9d-d32e-439e-a468-1c652ea303d1'
  })

const section = new Section({
  items: initialCards,
  renderer: renderCard
}, '.places');

const editFormValidator = new FormValidator(validationConfig, formElementProfile);
const cardFormValidator = new FormValidator(validationConfig, formElementPlace);

const popupWithImg = new PopupWithImage('.popup_element_image');

function renderCard(objectCard) {
  const card = new Card({
    name: objectCard.name,
    link: objectCard.link,
    handleCardClick: () => popupWithImg.open(objectCard)//func open popup
  }, '.place-template');

  return card.generateCard();
}

const placeSubmitHandler = ({ title, image }) => {
  const cardAdd = renderCard({ name: title, link: image });
  section.addItem(cardAdd);
  cardFormValidator.disabledButton();
};

const popupPlaceClass = new PopupWithForm('.popup_element_place', placeSubmitHandler);

// const userInfo = new UserInfo( {nameSelector: nameProfile, infoSelector: jobProfile } )
const userInfo = new UserInfo( {
  nameSelector: ".profile__title_popup_name",
  infoSelector: ".profile__subtitle_popup_job" }
)

const profileSubmitHandler = ({name, info}) => {
  userInfo.setUserInfo({name, info})
};
const popupEditClass = new PopupWithForm('.popup_element_profile', profileSubmitHandler);

btnPopupEdit.addEventListener("click", () => {
  const user = userInfo.getUserInfo();

  nameInput.value = user.name;
  infoInput.value = user.info;
  popupEditClass.open();
});

btnPopupAdd.addEventListener('click', () => popupPlaceClass.open());
// //валидация форм
editFormValidator.enableValidation();
cardFormValidator.enableValidation();

section.renderSection();

// api.getCard()
//   .then( cards => {
//     // console.log(section.renderSection)
//     section.renderSection(cards);
//   })
//   .catch(err => console.log(`Ошибка в index.js ${err}`));

// const avatarSubmitHandler = () => {}

const avatar = document.querySelector('.popup_type_avatar')
const buttonAvatar = document.querySelector('.avatar__over')
// const popupAvatarClass =  new PopupWithForm('.popup_element_image', avatarSubmitHandler)
buttonAvatar.addEventListener('click', () => {

  avatar.classList.add('popup_open')
})
