const folder = document.querySelector(`.folder`);
const folderHeadings = folder.querySelectorAll(`.folder__heading`);

const folderHeadingOnClick = (evt, heading) => {
  const files = folder.querySelectorAll(`.folder__file`);
  files.forEach((file) => {
    const dropdownIcon = file.querySelector(`.folder__dropdownIcon--dropped`);
    if (dropdownIcon) {
      dropdownIcon.classList.remove(`folder__dropdownIcon--dropped`);
    }

    const dropdown = folder.querySelector(`.dropdown--visible`);
    if (dropdown) {
      dropdown.classList.remove(`dropdown--visible`);
    }
  });

  const targetDropdown = evt.target.querySelector(`.folder__dropdownIcon`);
  targetDropdown.classList.toggle(`folder__dropdownIcon--dropped`);
}

folderHeadings.forEach((heading) => {
  heading.addEventListener(`click`, (evt, heading) => {
    folderHeadingOnClick(evt, heading);
  });
});