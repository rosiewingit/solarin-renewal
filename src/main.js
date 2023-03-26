window.onload = () => {
  console.log("main");
  showMain();
};

function showMain() {
  console.log("click main");
  $("#page-main").css("display", "block");
  $("#page-detail").css("display", "none");
}

function showDetail() {
  console.log("click detail");
  $("#page-detail").css("display", "block");
  $("#page-main").css("display", "none");
}
