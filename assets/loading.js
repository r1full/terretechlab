window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  setTimeout(() => {
    loadingScreen.classList.add("fadeOut");
    setTimeout(() => {
      loadingScreen.remove();
    }, 1000);
  }, 500);
});
