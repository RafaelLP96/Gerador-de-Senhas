let _theme = 0;

export function swapTheme() {
  const button = document.getElementById("swaptheme");
  const body = document.body;
  const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (defaultTheme.matches) {
    body.classList.remove("root");
    body.classList.add("dark");
    _theme = 1;
  } else {

    body.classList.remove("dark");
    body.classList.add("root");
    _theme = 0;
  }

  button.addEventListener("click", () => {
    if (_theme) {

      body.classList.remove("dark");
      body.classList.add("light");
    } else {
      
      body.classList.remove("light");
      body.classList.add("dark");
    }
    _theme = !_theme;
  });
}
