const navTop = document.querySelector(`.navTop`);
const navTopItemLong = navTop.querySelector(`.navTop__item--long`);

const navTopItemLongOnMouseOver = (evt) => {
  navTopItemLong.style.maxWidth = `none`;
};

const navTopItemLongOnMouseOut = (evt) => {
  navTopItemLong.style.maxWidth = `100px`;
};

navTopItemLong.addEventListener(`mouseover`, navTopItemLongOnMouseOver);
navTopItemLong.addEventListener(`mouseout`, navTopItemLongOnMouseOut);