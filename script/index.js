let btnPoppu = document.querySelector(".button_item_edit");
let popup = document.querySelector(".popup");
let popupCloseBtn = popup.querySelector(".popup__close");

const formElement = document.querySelector(".form");
let nameInput = formElement.querySelector(".form__input_popup_name");
let jobInput = formElement.querySelector(".form__input_popup_job");

let nameProfile = document.querySelector(".profile__title_popup_name");
let jodProfile = document.querySelector(".profile__subtitle_popup_job");

function openPopup() {
  popup.classList.add("popup_open");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jodProfile.textContent;
}

btnPoppu.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_open");
}

popupCloseBtn.addEventListener("click", closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jodProfile.textContent = jobInput.value;

  closePopup();
}

formElement.addEventListener("submit", formSubmitHandler);
