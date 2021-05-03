function showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass) { 

    const errorElement = formElement.querySelector( 
      `.popup__input-error_${inputElement.id}`); 
    inputElement.classList.add(formSelector.inputErrorClass); 
    errorElement.textContent = errorMessage; 
    errorElement.classList.add(formSelector.errorClass); 
  } 
   
  function hideInputError(formElement, inputElement, inputErrorClass, errorClass) { 
    const errorElement = formElement.querySelector( 
      `.popup__input-error_${inputElement.id}`); 
    inputElement.classList.remove(formSelector.inputErrorClass); 
    errorElement.textContent = ""; 
    errorElement.classList.remove(formSelector.errorClass); 
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
      formElement.querySelectorAll(formSelector.inputSelector)); 
    const buttonElement = formElement.querySelector( 
        formSelector.submitButtonSelector); 
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
      document.querySelectorAll(formSelector.formSelector)); 
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
      buttonElement.classList.add(formSelector.inactiveButtonClass); 
      buttonElement.disabled = true; 
    } else { 
      buttonElement.classList.remove(formSelector.inactiveButtonClass); 
      buttonElement.disabled = false; 
    } 
  } 
 

  const formSelector = { 
    formSelector: ".popup__form", 
    inputSelector: ".popup__input", 
    submitButtonSelector: ".popup__save-button", 
    inactiveButtonClass: "popup__save-button_disabled", 
    inputErrorClass: "popup__input-error", 
    errorClass: "popup__input-error_active", 
  }; 
   
  enableValidation(formSelector); 