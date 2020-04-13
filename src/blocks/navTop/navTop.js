const navTop = document.querySelector(`.navTop`);
const navTopLinkLong = navTop.querySelector(`.navTop__link--long`);
const navTopLinkPopup = navTop.querySelector(`.navTop__linkPopUp`);

const navTopLinkLongOnMouseOver = (evt) => {
  navTopLinkPopup.style.display = `block`;
};

const navTopLinkLongOnMouseOut = (evt) => {
  navTopLinkPopup.style.display = `none`;
};

navTopLinkLong.addEventListener(`mouseover`, navTopLinkLongOnMouseOver);
navTopLinkLong.addEventListener(`mouseout`, navTopLinkLongOnMouseOut);