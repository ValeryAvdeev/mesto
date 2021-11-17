let btnPoppu = document.querySelector(".button_popup");
let popup = document.querySelector(".popup");
let popupCloseBtn = popup.querySelector(".popup__close");

function openPopup() {
  popup.classList.add("popup_open");
}

btnPoppu.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_open");
}

popupCloseBtn.addEventListener("click", closePopup);

// Находим форму в DOM
const formElement = document.querySelector(".form_js"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector(".form__input_popup_name"); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector(".form__input_popup_job"); // Воспользуйтесь инструментом .querySelector()
let nameProfile = document.querySelector(".profile__title_name");
let jodProfile = document.querySelector(".profile__subtitle_job");

nameInput.value = nameProfile.textContent;
jobInput.value = jodProfile.textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jodProfile.textContent = jobInput.value;

  closePopup();
}

formElement.addEventListener("submit", formSubmitHandler);
