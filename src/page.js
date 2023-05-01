const homePageId = "#page-home";
const mainPageId = "#page-main";
const detailPageId = "#page-detail";
const patentPageId = "#page-patent";
const aboutusPageId = "#page-aboutus";

const pages = [
  homePageId,
  mainPageId,
  detailPageId,
  patentPageId,
  aboutusPageId,
];

const goToSharedUrl = () => {
  let isSharedUrl = false;
  const hashValue = window.location.hash;
  const hashData = hashValue.split("/");
  const page = hashData[0];
  const type = hashData[1];
  const id = hashData[2];

  if (page == detailPageId) {
    showDetail(id);
    isSharedUrl = true;
  } else {
    isSharedUrl = false;
  }

  return isSharedUrl;
};

const showPage = (pageId) => {
  history.pushState(pageId, pageId);
  pages.forEach((page) => {
    if (page === pageId) {
      $(`${page}`).removeClass("hidden");
    } else {
      $(`${page}`).addClass("hidden");
    }
  });
  this.initScroll();
};

const addPopstateEvent = () => {
  window.addEventListener("popstate", (event) => {
    if (event.state === detailPageId) {
      showMain();
    } else if (event.state === mainPageId) {
      showHome();
    } else if (event.state === patentPageId) {
      showHome();
    } else if (event.state === aboutusPageId) {
      showHome();
    }
  });
};

function showHome() {
  window.location.hash = homePageId;
  changeTheme("dark");
  showPage(homePageId);
}

function showMain() {
  window.location.hash = mainPageId;
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
  window.location.hash = `#page-detail/id/${id}`;

  let detailInfo = {};

  let detailTitle = "교육용 LED 키트";
  let detailText = "교육용 LED 키트";
  let detailLink = "http://www.voicechip.co.kr/self-relience/diy.htm";
  let detailImages = [
    "./resources/main/1_img-main-detail-1.png",
    "./resources/main/1_img-main-detail-2.png",
    "./resources/main/1_img-main-detail-3.png",
    "./resources/main/1_img-main-detail-4.png",
  ];

  try {
    if (typeof id === "string") {
      id = parseInt(id);
    }
  } catch (error) {
    console.log("Failed to convert id");
  }

  switch (id) {
    case 1:
      detailImages = [
        "./resources/main/1_img-main-detail-1.png",
        "./resources/main/1_img-main-detail-2.png",
        "./resources/main/1_img-main-detail-3.png",
        "./resources/main/1_img-main-detail-4.png",
      ];
      detailTitle = "고산지대 쉼터용 태양열 산소공급기";
      detailText =
        "현재 이 제품은 개발 단계의 제품으로 판매중인 제품이 아님을 밝힙니다.<br>This product is currently in the development stage and is not for sale.";
      detailLink = "";
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
      detailTitle = "태양열 집열 시스템";
      detailText =
        "현재 이 제품은 개발 단계의 제품으로 판매중인 제품이 아님을 밝힙니다.<br>This product is currently in the development stage and is not for sale.";
      detailLink = "";
      break;

    case 3:
      detailImages = ["./resources/main/3_img-main-detail-1.png"];
      detailTitle = "폐플라스틱 연소 엔진";
      detailText =
        "해당 제품은 폐플라스틱 연소기의 핵심 기술 부품으로서, 판매 하는 제품이 아님을 밝힙니다.<br>This product is a key technical component of waste plastic combustion and is not sold.";
      detailLink = "http://www.voicechip.co.kr/self-relience/diy.htm";
      break;

    case 4:
      detailImages = [
        "./resources/main/img-main-detail-1.png",
        "./resources/main/img-main-detail-2.png",
        "./resources/main/img-main-detail-3.png",
        "./resources/main/img-main-detail-4.png",
      ];
      detailTitle = "방수 모터 및 배터리 시스템";
      detailText =
        "해당 제품은 국가 연구 개발 사업으로 개발 진행중이며, 판매 하는 제품이 아님을 밝힙니다.<br>This product is being developed as a national research and development project, and it is not sold.";
      detailLink = "";
      break;

    case 5:
      detailImages = [
        "./resources/main/5_img-main-detail-1.png",
        "./resources/main/5_img-main-detail-2.png",
        "./resources/main/5_img-main-detail-3.png",
        "./resources/main/5_img-main-detail-4.png",
        "./resources/main/5_img-main-detail-5.png",
      ];
      detailTitle = "구난용 자동사다리";
      detailText =
        "해당 제품은 해양 경찰에 개별 납품하고 있는 제품으로서, 온라인에서 판매하는 제품이 아님을 밝힙니다. 구매를 희망할 경우 회사로 문의 바랍니다.<br>This product is supplyed individually to the Korea Coast Guard and is not sold online. If you wish to purchase, please contact our company.";
      detailLink = "";
      break;

    case 6:
      detailImages = [
        "./resources/main/6_img-main-detail-1.png",
        "./resources/main/6_img-main-detail-2.png",
        "./resources/main/6_img-main-detail-3.png",
        "./resources/main/6_img-main-detail-4.png",
        "./resources/main/6_img-main-detail-5.png",
      ];
      detailTitle = "태양광경광등";
      detailText =
        "지금 바로 솔라인 스마트스토어에서 태양광 경광등을 만나보세요";
      detailLink = "https://smartstore.naver.com/solarin/products/6849253187";
      break;

    case 7:
      detailImages = [
        "./resources/main/7_img-main-detail-1.png",
        "./resources/main/7_img-main-detail-2.png",
        "./resources/main/7_img-main-detail-3.png",
        "./resources/main/7_img-main-detail-4.png",
        "./resources/main/7_img-main-detail-5.png",
        "./resources/main/7_img-main-detail-6.png",
      ];
      detailTitle = "어망절단기";
      detailText =
        "해당 제품은 해양 경찰에 개별 납품하고 있는 제품으로서, 온라인에서 판매하는 제품이 아님을 밝힙니다. 구매를 희망할 경우 회사로 문의 바랍니다.<br>This product is supplyed individually to the Korea Coast Guard and is not sold online. If you wish to purchase, please contact our company.";
      detailLink = "";
      break;

    case 8:
      detailImages = [
        "./resources/main/8_img-main-detail-1.png",
        "./resources/main/8_img-main-detail-2.png",
        "./resources/main/8_img-main-detail-3.png",
        "./resources/main/8_img-main-detail-4.png",
      ];
      detailTitle = "에너지 교육용 페달 발전기";
      detailText =
        "지금 바로 솔라인 스마트스토어에서 에너지 교육용 페달 발전기를 만나보세요";
      detailLink = "https://smartstore.naver.com/solarin/products/8394192118";
      break;

    case 9:
    default:
      detailImages = [
        "./resources/main/9_img-main-detail-1.jpg",
        "./resources/main/9_img-main-detail-2.jpg",
        "./resources/main/9_img-main-detail-3.jpg",
      ];
      detailTitle = "교육용 LED 키트";
      detailText =
        "지금 바로 솔라인 스마트스토어에서 교육용 LED키트를 만나보세요";
      detailLink = "https://smartstore.naver.com/solarin/products/8345236689";
      break;
  }

  detailInfo.images = detailImages;
  detailInfo.title = detailTitle;
  detailInfo.text = detailText;
  detailInfo.link = detailLink;

  const bigDetailImage = new BigDetailImage("technology-detail", detailInfo);
  bigDetailImage.init();
}

function showPatent() {
  window.location.hash = patentPageId;
  changeTheme("light");
  showPage(patentPageId);
}

function showAboutus() {
  window.location.hash = aboutusPageId;
  changeTheme("light");
  showPage(aboutusPageId);

  let detailInfo = { images: ["./resources/aboutus/aboutus.png"] };

  const bigDetailImage = new BigDetailImage("aboutus-detail", detailInfo);
  bigDetailImage.init();

  drawMap("mainMap", { lat: 37.4363913419989, lng: 127.17004436645088 });
}

function initScroll() {
  $("html").animate({ scrollTop: 0 }, 0);
}

function changeTheme(theme) {
  const bodyElement = $("body");

  // logo
  const headerLogoElement = $("#header-logo");
  const darkLogo = "./resources/logo-dark.png";
  const lightLogo = "./resources/logo-light.png";

  const footerLogoElement = $("#footer-logo");

  // header
  const headerContainer = $("#header-container");

  // footer
  const footerNavs = $(".footer-nav");

  let image;
  switch (theme) {
    case "dark":
      bodyElement.addClass("text-bg-dark");
      headerContainer.addClass("header-nav-dark");
      headerContainer.removeClass("header-nav-light");
      footerNavs.addClass("footer-nav-dark");
      footerNavs.removeClass("footer-nav-light");
      image = darkLogo;
      break;
    case "light":
    default:
      bodyElement.removeClass("text-bg-dark");
      headerContainer.addClass("header-nav-light");
      headerContainer.removeClass("header-nav-dark");
      footerNavs.addClass("footer-nav-light");
      footerNavs.removeClass("footer-nav-dark");
      image = lightLogo;
      break;
  }

  headerLogoElement.attr("src", image);
  footerLogoElement.attr("src", image);
}
