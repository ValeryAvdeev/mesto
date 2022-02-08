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
  buttonAvatar,
  formElementAvatar,
} from '../script/utils/constants.js'
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupConfig from "../components/PopupConfig.js";
import {logPlugin} from "@babel/preset-env/lib/debug";

const userInfo = new UserInfo({
  nameSelector: ".profile__title_popup_name",
  infoSelector: ".profile__subtitle_popup_job",
  avatarSelector: '.avatar__image'
});

let section = null;

const api = new Api(
  {
    address: 'https://mesto.nomoreparties.co/v1/cohort-35',
    token: 'f1517d9d-d32e-439e-a468-1c652ea303d1'
  })

//получение данных use
api.getUser()
  .then(user => {
    userInfo.setUserInfo({
      name: user.name,
      info: user.about,
    });

    userInfo.setUserId(user._id);
  })
  .then(api.getCards()
    .then( (cards) => {
      section = new Section({
        items: cards,
        // userId: userInfo._id,
        renderer: renderCard
      }, '.places');
      section.renderSection();
    })
    .catch(err => console.log(`Ошибка в index.js при создании карточек ${err}`))
  )
  .catch(err => console.log(`Ошибка в index.js при запросе информации о пользователе ${err}`));

//получение карточек


//Валидация
const editFormValidator = new FormValidator(validationConfig, formElementProfile);
const cardFormValidator = new FormValidator(validationConfig, formElementPlace);
const avatarFormValidator = new FormValidator(validationConfig, formElementAvatar)

//экземпляр класса открытия попап картинки
const popupWithImg = new PopupWithImage('.popup_element_image');

//функция при открытии попап с редактированием профиля
const profileSubmitHandler = ({name, info}) => {
  //закрузка с сервера данных профиля
  api.editProfile({name, info})
    .then(user => {
      userInfo.setUserInfo({name: user.name, info: user.about})
    })
    .catch(err => console.log(`Ошибка в index.js при редактировании информации о user ${err}`));
};
//экземпляр класса для редактирования профиля
const popupEditClass = new PopupWithForm('.popup_element_profile', profileSubmitHandler);

//аватар
const avatarSubmitHandler = (avatar) => {
  //для редактирования аватара
  api.editAvatar(avatar)
    .then( avatar => {
      userInfo.setUserAvatar(avatar.avatar);
      avatarFormValidator.disabledButton();
    })
    .catch(err => console.log(`Ошибка в index.js при редактировании avatar ${err}`))
};
//экземпляр класса для редактирования аватара
const popupAvatar = new PopupWithForm('.popup_element_avatar', avatarSubmitHandler);




const deleteCardHandler = (card) => {
  api.deleteCard(card._id)
    .then((cardPost) => {
      console.log(cardPost);
      popupDeleteCard.close();
    })
    .catch(err => console.log(`Ошибка в index.js при удалении карточки ${err}`))
};
const popupDeleteCard = new PopupConfig('.popup_element_delete-card', {
  clickHandleCallBack: deleteCardHandler
});

//функция для рендара карточек
function renderCard(objectCard) {
  const card = new Card({
    card: objectCard,
    userId: userInfo._id,
    handleCardClick: () => {
      popupWithImg.open(objectCard);
    },
    handleDeleteCard: () => {
      popupDeleteCard.open(objectCard);
    }
  }, '.place-template');

  return card.generateCard();
};

//функция для добавления карточки
const placeSubmitHandler = (obj) => {
  //добавления на сервер карточки

  api.addCard({name: obj.title, link: obj.image})
    .then((obj) => {
      const cardAdd = renderCard(obj);
      section.addItem(cardAdd);
      cardFormValidator.disabledButton();
    })
    .catch(err => console.log(`Ошибка в index.js при добавлении карточки ${err}`))
};
//экземпляр класса для добавления карточки
const popupPlaceClass = new PopupWithForm('.popup_element_place', placeSubmitHandler);


//слушатели на клик для открытия попап
btnPopupEdit.addEventListener("click", () => {
  const user = userInfo.getUserInfo();

  nameInput.value = user.name;
  infoInput.value = user.info;
  popupEditClass.open();
});
buttonAvatar.addEventListener('click', () => popupAvatar.open());
btnPopupAdd.addEventListener('click', () => popupPlaceClass.open());
//валидация форм
editFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();
