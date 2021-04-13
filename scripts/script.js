let profileName = document.querySelector(".profile__name");

let profileTitle = document.querySelector(".profile__title");

let editButton = document.querySelector(".profile__edit-button");

let closeButton = document.querySelector(".popup__close");

let profileEditor = document.querySelector(".popup");

let profileEditorForm = document.querySelector(".popup__form");

let popupName = document.querySelector(".popup__input_role_name");

let popupTitle = document.querySelector(".popup__input_role_title");


function editProfile() {
  popupName.value = profileName.textContent;
  popupTitle.value = profileTitle.textContent; 
  profileEditor.classList.add("popup_opened");
}

function closeEditor() {
  profileEditor.classList.remove("popup_opened");
}

function saveProfile(e) {
  e.preventDefault();
  profileName.textContent = popupName.value;
  profileTitle.textContent = popupTitle.value;
  closeEditor();
}

editButton.addEventListener('click', editProfile);
closeButton.addEventListener('click', closeEditor);
profileEditorForm.addEventListener('submit', saveProfile);

// Ah! I finally understand what you've been trying to get me to fix all along.
// Thank you for pushing me till I got it right!! 
// - Dan :)