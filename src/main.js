window.onload = () => {
  console.log("main");
  addPopstateEvent();
  showPage(mainPageId);
};

function showDetail() {
  showPage(detailPageId);
}
