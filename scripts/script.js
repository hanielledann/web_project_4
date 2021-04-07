let profileName = document.querySelector(".profile__name");

let profileTitle = document.querySelector(".profile__title");

let editButton = document.querySelector(".profile__edit-button");

let closeButton = document.querySelector(".popup__close");

let profileEditor = document.querySelector(".popup");

let profileEditorForm = document.querySelector(".popup__form");


let profile = {};
updateProfile();


function updateProfile() {
    profile = {
    name: profileName.textContent,
    title: profileTitle.textContent
  }
}

function editProfile() {
  updateProfile();
  popupName.value = profile.name;
  popupTitle.value = profile.title;
  profileEditor.classList.add(".popup__opened");
  body.addEventListener('keyup', function escOut(e) {
    if (e.key === 'Escape') {
      closeEditor();
    }
  });
}

function saveProfile(e) {
  e.preventDefault();
  profileName.textContent = popupName.value;
  profileTitle.textContent = popupTitle.value;
  updateProfile();
  closeEditor();
}

function closeEditor() {
  profileEditor.classList.remove(".popup__opened");
}

editButton.addEventListener('click', editProfile);
closeButton.addEventListener('click', closeEditor);
profileEditorForm.addEventListener('submit', saveProfile);






