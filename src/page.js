const homePageId = "#page-home";
const mainPageId = "#page-main";
const detailPageId = "#page-detail";
const patentPageId = "#page-patent";

const pages = [homePageId, mainPageId, detailPageId, patentPageId];

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
        "./resources/main/1_img-main-detail-1.png",
        "./resources/main/1_img-main-detail-2.png",
        "./resources/main/1_img-main-detail-3.png",
        "./resources/main/1_img-main-detail-4.png",
      ];
      break;

    case 2:
      detailImages = [
        "./resources/main/2_img-main-detail-1.jpeg",
        "./resources/main/2_img-main-detail-2.jpeg",
        "./resources/main/2_img-main-detail-3.jpeg",
        "./resources/main/2_img-main-detail-4.jpeg",
        "./resources/main/2_img-main-detail-5.jpeg",
        "./resources/main/2_img-main-detail-6.jpeg",
        "./resources/main/2_img-main-detail-7.jpeg",
        "./resources/main/2_img-main-detail-8.jpeg",
        "./resources/main/2_img-main-detail-9.jpeg",
      ];
      break;

    case 3:
      detailImages = [
        "./resources/main/3_img-main-detail-1.png",
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
      detailImages = [
        "./resources/main/6_img-main-detail-1.png",
        "./resources/main/6_img-main-detail-2.png",
        "./resources/main/6_img-main-detail-3.png",
        "./resources/main/6_img-main-detail-4.png",
        "./resources/main/6_img-main-detail-5.png",
      ];
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

  // logo
  const headerLogoElement = $("#header-logo");
  const darkLogo = "./resources/logo-dark.png";
  const lightLogo = "./resources/logo-light.png";

  // header
  const headerContainer = $("#header-container");

  // footer
  const footerNavs = $(".footer-nav");

  let image;
  switch (theme) {
    case "dark":
      bodyElement.addClass("container-fluid");
      bodyElement.addClass("text-bg-dark");
      headerContainer.addClass("header-nav-dark");
      headerContainer.removeClass("header-nav-light");
      footerNavs.addClass("footer-nav-dark");
      footerNavs.removeClass("footer-nav-light");
      image = darkLogo;
      break;
    case "light":
    default:
      bodyElement.removeClass("container-fluid");
      bodyElement.removeClass("text-bg-dark");
      headerContainer.addClass("header-nav-light");
      headerContainer.removeClass("header-nav-dark");
      footerNavs.addClass("footer-nav-light");
      footerNavs.removeClass("footer-nav-dark");
      image = lightLogo;
      break;
  }

  headerLogoElement.attr("src", image);
}
