const homePageId = "#page-home";
const mainPageId = "#page-main";
const detailPageId = "#page-detail";

const pages = [homePageId, mainPageId, detailPageId];

const showPage = (pageId) => {
  history.pushState(pageId, pageId);
  pages.forEach((page) => {
    if (page === pageId) {
      $(`${page}`).removeClass("hidden");
    } else {
      $(`${page}`).addClass("hidden");
    }
  });
};

const addPopstateEvent = () => {
  window.addEventListener("popstate", (event) => {
    if (event.state === mainPageId) {
      showPage(mainPageId);
    }
  });
};

function showHome() {
  changeTheme("dark");
  showPage(homePageId);
}

function showMain() {
  changeTheme("light");
  showPage(mainPageId);
}

function showDetail() {
  changeTheme("light");
  showPage(detailPageId);
}

function changeTheme(theme) {
  const bodyElement = $("body");
  const headerLogoElement = $("#header-logo");
  const darkLogo = "./resources/logo-dark.png";
  const lightLogo = "./resources/logo-light.png";

  let image;
  switch (theme) {
    case "dark":
      bodyElement.addClass("container-fluid");
      bodyElement.addClass("text-bg-dark");
      image = darkLogo;
      break;
    case "light":
    default:
      bodyElement.removeClass("container-fluid");
      bodyElement.removeClass("text-bg-dark");
      image = lightLogo;
      break;
  }

  headerLogoElement.attr("src", image);
}
