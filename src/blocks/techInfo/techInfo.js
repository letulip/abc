const techInfo = document.querySelector(`.techInfo`);
const techInfoPreviews = techInfo.querySelectorAll(`.techInfo__data--preview`);

const techInfoPreviewOnClick = () => {
  alert(`АРТЕМ ПОШЛИ УЖИНАТЬ!`);
};

techInfoPreviews.forEach((previewItem) => {
  previewItem.addEventListener(`click`, techInfoPreviewOnClick);
});