const validateForm = (formSelector) => {
  const formElement = document.querySelector(formSelector);
  const validationOptions = [
    {
      attribute: "pattern",
      isValid: (input) => {
        const patternRegex = new RegExp(input.pattern);
        return patternRegex.test(input.value);
      },
      errorMessage: (input, label) =>
        `Not a valid ${label.textContent.substring(
          0,
          label.textContent.length - 1
        )}, it must contain at least one uppercase letter, one lowercase letter, one digit, and one of these symbols: ${"`"} ~ ! @ # $ % ^ & * ( ) _ + - = { } | [ ] \ : " ; ' < > ? , . /`,
    },
    {
      attribute: "minlength",
      isValid: (input) =>
        input.value && input.value.length >= parseInt(input.minLength, 10),
      errorMessage: (input, label) =>
        `${label.textContent.substring(
          0,
          label.textContent.length - 1
        )} needs to be at least ${input.minLength} characters`,
    },
    {
      attribute: "custommaxlength",
      isValid: (input) =>
        input.value &&
        input.value.length <=
          parseInt(input.getAttribute("custommaxlength"), 10),
      errorMessage: (input, label) =>
        `${label.textContent.substring(
          0,
          label.textContent.length - 1
        )} needs to be less than ${input.getAttribute(
          "custommaxlength"
        )} characters`,
    },
    {
      attribute: "match",
      isValid: (input) => {
        const matchSelector = input.getAttribute("match");
        const matchedElement = form.querySelector(`#${matchSelector}`);
        return (
          matchedElement && matchedElement.value.trim() === input.value.trim()
        );
      },
      errorMessage: (input, label) => {
        const matchSelector = input.getAttribute("match");
        const matchedElement = form.querySelector(`#${matchSelector}`);
        const matchedLabel =
          matchedElement.parentElement.querySelector("label");
        return `${label.textContent.substring(
          0,
          label.textContent.length - 1
        )} should match ${matchedLabel.textContent.substring(
          0,
          matchedLabel.textContent.length - 1
        )}`;
      },
    },
    {
      attribute: "min",
      isValid: (input) => input.value && +input.value >= +input.min,
      errorMessage: (input, label) =>
        `${label.textContent.substring(
          0,
          label.textContent.length - 1
        )} value needs to be bigger than ${input.min}`,
    },
    {
      attribute: "max",
      isValid: (input) => input.value && +input.value <= +input.max,
      errorMessage: (input, label) =>
        `${label.textContent.substring(
          0,
          label.textContent.length - 1
        )} value needs to be less than ${input.max}`,
    },
    {
      attribute: "required",
      isValid: (input) => input.value.trim() !== "",
      errorMessage: (input, label) =>
        `${label.textContent.substring(
          0,
          label.textContent.length - 1
        )} is required`,
    },
  ];

  const validateSingleFormGroup = (formGroup) => {
    const label = formGroup.querySelector("label");
    const input = formGroup.querySelector("input, textarea");
    const errorContainer = formGroup.querySelector(".error");

    let formGroupError = false;

    for (const option of validationOptions) {
      if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
        input.classList.add("error-border");
        input.classList.remove("success");
        errorContainer.textContent = option.errorMessage(input, label);
        formGroupError = true;
      }

      if (!formGroupError) {
        errorContainer.textContent = "";
        input.classList.remove("error-border");
        input.classList.add("success");
      }
    }
  };

  formElement.setAttribute("noValidate", "");

  Array.from(formElement.elements).forEach((element) => {
    element.addEventListener("blur", (event) => {
      validateSingleFormGroup(event.srcElement.parentElement);
    });
  });

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    validateAllFormGroups(formElement);
  });

  const validateAllFormGroups = (formToValidate) => {
    const formGroups = Array.from(
      formToValidate.querySelectorAll(".form-control")
    );

    formGroups.forEach((formGroup) => {
      validateSingleFormGroup(formGroup);
    });
  };
};

validateForm("#form");
