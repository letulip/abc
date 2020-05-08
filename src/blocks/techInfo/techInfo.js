const techInfo = document.querySelector(`.techInfo`);
const techInfoPreviews = techInfo.querySelectorAll(`.techInfo__data--preview`);
const techInfoPreviewHovers = techInfo.querySelectorAll(`.techInfo__data--previewHover`);

const removePrevVisiblePreviews = () => {
  const currentActivePreviews = techInfo.querySelectorAll(`.techInfo__preview--visible`);
  if (currentActivePreviews) {
    currentActivePreviews.forEach((item) => {
      item.classList.remove(`techInfo__preview--visible`);
    });
  }
};

const previewCloseOnCLick = (evt) => {
  evt.target.closest(`.techInfo__preview--visible`).classList.remove(`techInfo__preview--visible`);
};

const techInfoPreviewOnClick = (evt) => {
  const preview = evt.target.nextElementSibling;
  removePrevVisiblePreviews();
  
  if (preview) {
    evt.target.nextElementSibling.classList.add(`techInfo__preview--visible`);
    // evt.target.nextElementSibling.addEventListener(`click`, previewOnClick);
  }
};

const techInfoPreviewOnEnter = (evt) => {
  const previewImg = evt.target.querySelector(`.techInfo__preview`);
  previewImg.style.display = `block`;
};

const techInfoPreviewOnOut = (evt) => {
  const previewImg = evt.target.closest(`.techInfo__preview`);
  if (previewImg) {
    previewImg.style.display = `none`;
  }
};

techInfoPreviews.forEach((previewItem) => {
  previewItem.addEventListener(`click`, techInfoPreviewOnClick);
  const previewClose = previewItem.querySelector(`.techInfo__previewClose`);
  previewClose.addEventListener(`click`, previewCloseOnCLick);
});

techInfoPreviewHovers.forEach((previewItem) => {
  previewItem.addEventListener(`mouseenter`, techInfoPreviewOnEnter);
  previewItem.addEventListener(`mouseout`, techInfoPreviewOnOut);
});