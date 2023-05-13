import App from "./src/components/App.js";

const renderApp = () => {
  const rootElement = document.getElementById("root");
  rootElement.innerHTML = App.render();
};

document.addEventListener("DOMContentLoaded", renderApp);
