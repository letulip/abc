const techInfo = document.querySelector(`.techInfo`);
const techInfoPreviews = techInfo.querySelectorAll(`.techInfo__data--preview`);
const techInfoPreviewHovers = techInfo.querySelectorAll(`.techInfo__data--previewHover`);

const previewOnClick = (evt) => {
  evt.preventDefault();
  evt.target.classList.remove(`techInfo__preview--visible`);
  evt.target.removeEventListener(`click`, previewOnClick);
};

const techInfoPreviewOnClick = (evt) => {
  const preview = evt.target.nextElementSibling;
  if (preview) {
    evt.target.nextElementSibling.classList.add(`techInfo__preview--visible`);
    evt.target.nextElementSibling.addEventListener(`click`, previewOnClick);
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
});

techInfoPreviewHovers.forEach((previewItem) => {
  previewItem.addEventListener(`mouseenter`, techInfoPreviewOnEnter);
  previewItem.addEventListener(`mouseout`, techInfoPreviewOnOut);
});
