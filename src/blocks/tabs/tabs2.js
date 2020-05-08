const tabsSecond = document.querySelector(`.tabs__second`);
const tabs = tabsSecond.querySelectorAll(`.tabs__tab--second`);
const url = new URL(window.location.href);
const urlPathname = url.pathname.split('/');

let urlPageParam = ``;

const removePrevActive = () => {
  tabs.forEach((tab) => {
    if (tab.classList.contains(`tabs__tab--second-active`)) {
      tab.classList.remove(`tabs__tab--second-active`);
    }
  })
};

const setActiveTabInput = (index) => {
  const tabInput = tabsSecond.querySelector(`#tab${index}`);
  tabInput.checked = true;
};

const tabOnClick = (tab) => {
  removePrevActive();
  tab.classList.add(`tabs__tab--second-active`);
};

tabs.forEach((tab, index) => {
  tab.addEventListener(`click`, (evt) => {
    urlPageParam = `${urlPathname[2]}=${index}`
    generateUrlParam(urlPageParam);
    tabOnClick(evt.target);
  });
});

const generateUrlParam = (urlParam) => {
  const stateObj = {
    param: `0`,
  }
  history.pushState(stateObj, `ignored title`, `?${urlParam}`);
};

if (document.referrer.split('?').length === 1 ||
    !document.referrer.split('/').includes(urlPathname[2]) ||
    !document.referrer.split('/').includes(urlPathname[3])) {
  urlPageParam = `${urlPathname[2]}=0`
  generateUrlParam(urlPageParam);
  tabOnClick(tabs[0]);
  setActiveTabInput(0);
} else {
  const params = document.referrer.split('?');
  generateUrlParam(params[1]);
  const updatedUrl = new URL(window.location.href);
  const tabIndex = updatedUrl.searchParams.get(urlPathname[2]);
  if (tabs[tabIndex]) {
    tabOnClick(tabs[tabIndex]);
    setActiveTabInput(tabIndex);
  } else {
    tabOnClick(tabs[0]);
    setActiveTabInput(0);
  }
}