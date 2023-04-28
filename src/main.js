window.onload = () => {
  if (goToSharedUrl()) {
    return;
  }
  addPopstateEvent();
  showHome();
};
