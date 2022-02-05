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
  buttonAvatar, formElementAvatar,
} from '../script/utils/constants.js'
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

let section = null;

const userInfo = new UserInfo({
  nameSelector: ".profile__title_popup_name",
  infoSelector: ".profile__subtitle_popup_job",
  avatarSelector: '.avatar__imege'
});

const api = new Api(
  {
    address: 'https://mesto.nomoreparties.co/v1/cohort-35',
    token: 'f1517d9d-d32e-439e-a468-1c652ea303d1'
  })

api.getCards()
  .then( (cards) => {
    section = new Section({
      items: cards,
      renderer: renderCard,
      userId: userInfo._id
    }, '.places');
    section.renderSection();
  })
  .catch(err => console.log(`Ошибка в index.js при создании карточек ${err}`));

api.getUser()
  .then(user => {
    userInfo.setUserInfo({
      name: user.name,
      info: user.about,
    });
    userInfo.setUserId(user._id);
  })
  .catch(err => console.log(`Ошибка в index.js при запросе информации о user ${err}`));

const editFormValidator = new FormValidator(validationConfig, formElementProfile);
const cardFormValidator = new FormValidator(validationConfig, formElementPlace);
const avatarFormValidator = new FormValidator(validationConfig, formElementAvatar)

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
  api.addCard({name: title, link: image})
    .then(() => {
      const cardAdd = renderCard({name: title, link: image});
      section.addItem(cardAdd);
      cardFormValidator.disabledButton();
    })
    .catch(err => console.log(`Ошибка в index.js при добавлении карточки ${err}`))
};

const popupPlaceClass = new PopupWithForm('.popup_element_place', placeSubmitHandler);

const profileSubmitHandler = ({name, info}) => {
  api.editProfile({name, info})
    .then(user => userInfo.setUserInfo({name: user.name, info: user.about}))
    .catch(err => console.log(`Ошибка в index.js при редактировании информации о user ${err}`));
};
const popupEditClass = new PopupWithForm('.popup_element_profile', profileSubmitHandler);

const avatarSubmitHandler = (avatar) => {
  api.editAvatar({avatar})
    .then( avatar => {
      console.log(avatar)
      // userInfo.setUserAvatar(avatar);
      // avatarFormValidator.disabledButton();
    })
    .catch(err => console.log(`Ошибка в index.js при редактировании avatar ${err}`))
}

const popupAvatar = new PopupWithForm('.popup_element_avatar', avatarSubmitHandler)

//валидация форм

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

buttonAvatar.addEventListener('click', () => popupAvatar.open());
btnPopupAdd.addEventListener('click', () => popupPlaceClass.open());
btnPopupEdit.addEventListener("click", () => {
  const user = userInfo.getUserInfo();

  nameInput.value = user.name;
  infoInput.value = user.info;
  popupEditClass.open();
});
