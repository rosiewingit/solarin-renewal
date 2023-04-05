const homePageId = "#page-home";
const mainPageId = "#page-main";
const detailPageId = "#page-detail";
const patentPageId = "#page-patent";

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

  const buttons = $(".show-detail-btn");
  for (const button of buttons) {
    button.onclick = (e) => {
      const id = parseInt(e.target.id.split("-").at(-1));
      showDetail(id);
    };
  }
  /*
  // card 동적 생성
  const technology = new Technology();
  technology.addTechnologyCard();
  technology.addTechnologyCard();
  technology.addTechnologyCard();
  technology.addTechnologyCard();
  technology.addTechnologyCard();
  technology.addTechnologyCard();
  technology.addTechnologyCard();
  technology.addTechnologyCard();
  technology.addTechnologyCard();
  */
}

function showDetail(id) {
  changeTheme("light");
  showPage(detailPageId);

  let detailImages = [
    "./resources/main/img-main-detail-1.png",
    "./resources/main/img-main-detail-2.png",
    "./resources/main/img-main-detail-3.png",
    "./resources/main/img-main-detail-4.png",
  ];

  switch (id) {
    case 1:
      detailImages = [
        "./resources/main/img-main-detail-1.png",
        "./resources/main/img-main-detail-2.png",
        "./resources/main/img-main-detail-3.png",
        "./resources/main/img-main-detail-4.png",
      ];
      break;

    case 2:
      detailImages = [
        "./resources/main/img-main-detail-1.png",
        "./resources/main/img-main-detail-2.png",
        "./resources/main/img-main-detail-3.png",
        "./resources/main/img-main-detail-4.png",
      ];
      break;

    case 3:
      detailImages = [
        "./resources/main/img-main-detail-1.png",
        "./resources/main/img-main-detail-2.png",
        "./resources/main/img-main-detail-3.png",
        "./resources/main/img-main-detail-4.png",
      ];
      break;

    case 4:
      detailImages = [
        "./resources/main/img-main-detail-1.png",
        "./resources/main/img-main-detail-2.png",
        "./resources/main/img-main-detail-3.png",
        "./resources/main/img-main-detail-4.png",
      ];
      break;

    case 5:
      detailImages = [
        "./resources/main/img-main-detail-1.png",
        "./resources/main/img-main-detail-2.png",
        "./resources/main/img-main-detail-3.png",
        "./resources/main/img-main-detail-4.png",
      ];
      break;

    case 6:
      detailImages = ["./resources/main/img-main-detail-1.png"];
      break;

    case 7:
      detailImages = ["./resources/main/img-main-detail-2.png"];
      break;

    case 8:
      detailImages = [
        "./resources/main/img-main-detail-1.png",
        "./resources/main/img-main-detail-4.png",
      ];
      break;

    case 9:
    default:
      detailImages = [
        "./resources/main/img-main-detail-1.png",
        "./resources/main/img-main-detail-2.png",
        "./resources/main/img-main-detail-4.png",
      ];
      break;
  }

  const technologyDetail = new TechnologyDetail(detailImages);
  technologyDetail.init();
}

function showPatent() {
  changeTheme("light");
  showPage(patentPageId);
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
