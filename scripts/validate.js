  function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(
      `.popup__input-error_${inputElement.id}`);
    inputElement.classList.add(content.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(content.errorClass);
  }
  
  function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(
      `.popup__input-error_${inputElement.id}`);
    inputElement.classList.remove(content.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(content.errorClass);
  }
  
  function checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  }
  
  function setEventListeners(formElement) {
    const inputList = Array.from(
      formElement.querySelectorAll(content.inputSelector));
    const buttonElement = formElement.querySelector(
      content.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }
  
  function enableValidation() {
    const formList = Array.from(
      document.querySelectorAll(content.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  }
  
  function hasInvalidInput(inputList) {
    return inputList.some((input) => {
      return !input.validity.valid;
    });
  }
  
  function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(content.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(content.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  const content = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_disabled",
    inputErrorClass: "popup__input_error",
    errorClass: "popup__input-error_active",
  };
  
  enableValidation(content);
  