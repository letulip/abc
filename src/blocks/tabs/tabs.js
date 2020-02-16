const tabs = document.querySelector(`.tabs`);
const tabsFirst = tabs.querySelectorAll(`.tabs__tab--first`);
const tabsContentFirst = tabs.querySelectorAll(`.tabs__tabContent--first`);

const setActiveTab = (tabs, index) => {
  tabs.forEach((tab) => {
    tab.classList.remove(`tabs__tab--active`);
  })
  tabs[index].classList.add(`tabs__tab--active`);
};

const setActiveTabContent = (index) => {
  tabsContentFirst.forEach((tabContent) => {
    tabContent.classList.remove(`tabs__tabContent--active`);
  })
  tabsContentFirst[index].classList.add(`tabs__tabContent--active`);
};

const tabFirstEventListner = (tabs, index) => {
  setActiveTab(tabs, index);
  setActiveTabContent(index);
};

tabsFirst.forEach((tab, index) => {
  tab.addEventListener(`click`, () => {
    console.log(`tab ${index} first level click`);
    tabFirstEventListner(tabsFirst, index);
  });
});
