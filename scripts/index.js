const body = document.querySelector(".page");
const profileAvatar = document.querySelector(".profile__avatar");
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__title");
const placesContainer = document.querySelector(".elements");
const editButton = document.querySelector(".profile__edit-button");
const closeProfileEditor = document.querySelector(".popup__close_role_edit");
const profileEditor = document.querySelector(".popup_role_edit");
const profileEditorForm = document.querySelector(".popup__form_role_edit");
const popupName = document.querySelector(".popup__input_role_name");
const popupTitle = document.querySelector(".popup__input_role_title");
const addButton = document.querySelector(".profile__add-button");
const closeImageAdder = document.querySelector(".popup__close_role_add");
const newPlaceAdder = document.querySelector(".popup_role_add");
const imageAdderForm = document.querySelector(".popup__form_role_add");
const popupImageTitle = document.querySelector(".popup__input_role_image-title");
const popupImageLink = document.querySelector(".popup__input_role_image-link");
const imagePreview = document.querySelector(".popup_role_image");
const closePreviewButton = document.querySelector(".popup__close_role_image");
const popupImage = document.querySelector(".popup__image");
const popupImageCaption = document.querySelector(".popup__caption");
let profile = {};
updateProfile();

const initialCards = [
  {
    name: "Amherstburg",
    link: "./images/Amherstburg.jpeg",
  },
  {
    name: "Cuba",
    link: "./images/Cuba.jpeg",
  },
  {
    name: "Dominican Republic",
    link: "./images/Dominican.jpeg",
  },
  {
    name: "Goderich Beach",
    link: "./images/Goderich.jpeg",
  },
  {
    name: "Maitland River",
    link: "./images/Maitland.jpeg",
  },
  {
    name: "Toronto",
    link: "./images/Toronto.jpeg"
  }
]; 

initialCards.forEach((place) => {
  addPlace(place.name, place.link);
});

function updateProfile() {
  profile = {
    name: profileName.textContent,
    title: profileTitle.textContent,
  };
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEsc);
  document.addEventListener("click", clickAway);
}

function closePopup() {
  const openPopup = document.querySelector(".popup_opened");
  openPopup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEsc);
  document.removeEventListener("click", clickAway);
}

function editProfile() {
  updateProfile();
  popupName.value = profile.name;
  popupTitle.value = profile.title;
  openPopup(profileEditor);
}

function openPlaceAdder() {
  openPopup(newPlaceAdder);
  popupImageTitle.value = "";
  popupImageLink.value = "";
}

function createCard(title, link) {
  const placeTemplate = document.querySelector("#place-template").content;
  const newPlace = placeTemplate.querySelector(".element").cloneNode(true);
  const deleteButton = newPlace.querySelector(".element__delete");
  deleteButton.addEventListener("click", (e) =>
    e.target.parentElement.remove()
    );
  const likeButton = newPlace.querySelector(".element__heart");
  likeButton.addEventListener("click", (e) =>
    e.target.classList.toggle("element__heart_liked")
  );
  const placeImage = newPlace.querySelector(".element__image");
  placeImage.addEventListener("click", openPreview);
  newPlace.querySelector(".element__name").textContent = title;
  placeImage.src = link;
  placeImage.alt = `${title}`;
  return newPlace;
}

function addPlace(title, link) {
  const newPlace = createCard(title, link);
  placesContainer.prepend(newPlace);
}

function savePlace(e) {
  e.preventDefault();
  addPlace(popupImageTitle.value, popupImageLink.value);
  closePopup();
}

function saveProfile(e) {
  e.preventDefault();
  profileName.textContent = popupName.value;
  profileTitle.textContent = popupTitle.value;
  updateProfile();
  closePopup();
}

function openPreview(e) {
  popupImage.src = e.target.src;
  popupImage.alt = e.target.alt;
  popupImageCaption.textContent = e.target.alt;
  openPopup(imagePreview);
}

function closeEsc(e) {
  if (e.key === "Escape") {
    closePopup();
  }
}

function clickAway(e) {
  if (e.target.classList.contains("popup_opened")) {
    closePopup();
  }
}

editButton.addEventListener("click", editProfile);
addButton.addEventListener("click", openPlaceAdder);
closeProfileEditor.addEventListener("click", closePopup);
closeImageAdder.addEventListener("click", closePopup);
closePreviewButton.addEventListener("click", closePopup);
profileEditorForm.addEventListener("submit", saveProfile);
imageAdderForm.addEventListener("submit", savePlace);

