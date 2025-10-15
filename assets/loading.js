window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen");

  const hasVisited = document.cookie.includes("visited=true");

  if (!hasVisited) {
    setTimeout(() => {
      loadingScreen.classList.add("fadeOut");
      setTimeout(() => {
        loadingScreen.remove();
      }, 1000);
    }, 500);
    const expireDays = 30;
    const d = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    document.cookie = `visited=true; expires=${d.toUTCString()}; path=/`;
  } else {
    loadingScreen.remove();
  }
});
