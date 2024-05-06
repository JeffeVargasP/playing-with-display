const box = document.querySelector(".box");
const div = document.querySelector(".div");
const buttons = document.querySelectorAll("li");
const option = document.querySelector(".option");
const justifyContentText = document.querySelector(".justify-content-text");
const alignItemsText = document.querySelector(".align-items-text");

function updateJustifyContentText(text) {
  justifyContentText.textContent = `justify-content: ${text.replace('Align', '').toLowerCase()};`;
}

function updateAlignItemsText(text) {
  alignItemsText.textContent = `align-items: ${text.replace('Align', '').toLowerCase()};`;
}

function updateButtonClassForJustifyContent(button) {
  const parent = button.parentElement.parentElement;
  const children = parent.querySelectorAll("li");
  children.forEach((child) => {
    child.classList.remove("active");
  });
  button.classList.add("active");
}

function updateButtonClassForAlignItems(button) {
  const parent = button.parentElement.parentElement;
  const children = parent.querySelectorAll("li");
  children.forEach((child) => {
    child.classList.remove("active");
  });
  button.classList.add("active");
}

function applyJustifyContentStyle(buttonValue) {
  if (buttonValue === "Align Left") {
    box.style.justifyContent = "flex-start";
  } else if (buttonValue === "Align Center") {
    box.style.justifyContent = "center";
  } else if (buttonValue === "Align Right") {
    box.style.justifyContent = "flex-end";
  } else {
    box.style.justifyContent = "space-between";
  }
}

function applyAlignItemsStyle(buttonValue) {
  if (buttonValue === "Align Top") {
    box.style.alignItems = "flex-start";
  } else if (buttonValue === "Align Center") {
    box.style.alignItems = "center";
  } else {
    box.style.alignItems = "flex-end";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    box.style.display = "flex";
    button.parentElement.parentElement.querySelector("h2").textContent ===
    "Justify Content"
      ? updateButtonClassForJustifyContent(button)
      : updateButtonClassForAlignItems(button);
    const buttonValue = button.textContent;

    button.parentElement.parentElement.querySelector("h2").textContent ===
    "Justify Content"
      ? updateJustifyContentText(buttonValue)
      : updateAlignItemsText(buttonValue);

    const optionType = button.parentElement.parentElement
      .querySelector("h2")
      .textContent.replace(/\s/g, "");

    if (optionType === "JustifyContent") {
      applyJustifyContentStyle(buttonValue);
    } else {
      applyAlignItemsStyle(buttonValue);
    }
  });
});
