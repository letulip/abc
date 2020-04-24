const tabs = document.querySelectorAll(`.tabs__tab--second`);
const url = new URL(window.location.href);
const urlPathname = url.pathname.split('/');

let urlPageParam = ``;

const assignUrl = (tab, index) => {
  tabOnClick(tab, index);
  url.searchParams.set(urlPathname[2], index);
  window.location.assign(url.href);
};

const removePrevActive = () => {
  tabs.forEach((tab) => {
    if (tab.classList.contains(`tabs__tab--second-active`)) {
      tab.classList.remove(`tabs__tab--second-active`);
    }
  })
};

const tabOnClick = (tab) => {
  removePrevActive();
  tab.classList.add(`tabs__tab--second-active`);
  
};

tabs.forEach((tab, index) => {
  tab.addEventListener(`click`, (evt) => {
    // assignUrl(evt.target, index);
    urlPageParam = `${urlPathname[2]}=${index}`
    generateUrlParam(urlPageParam);
    tabOnClick(evt.target, index);
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
} else {
  const params = document.referrer.split('?');
  generateUrlParam(params[1]);
  const updatedUrl = new URL(window.location.href);
  tabOnClick(tabs[updatedUrl.searchParams.get(urlPathname[2])]);
}