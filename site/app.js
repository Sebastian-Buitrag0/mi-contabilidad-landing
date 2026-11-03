(() => {
  const tabs = Array.from(document.querySelectorAll(".demo-switch [role='tab']"));
  const panelDe = (vista) => document.getElementById(
    tabs.find((tab) => tab.dataset.vista === vista)?.getAttribute("aria-controls") ?? ""
  );

  const mostrar = (vista, enfocar) => {
    for (const tab of tabs) {
      const activa = tab.dataset.vista === vista;
      tab.setAttribute("aria-selected", String(activa));
      tab.tabIndex = activa ? 0 : -1;
      if (activa && enfocar) tab.focus();
    }

    for (const tab of tabs) {
      const panel = panelDe(tab.dataset.vista);
      if (!panel) continue;
      const activo = tab.dataset.vista === vista;
      panel.hidden = !activo;
      if (activo) {
        panel.classList.remove("entrando");
        void panel.offsetWidth;
        panel.classList.add("entrando");
      }
    }
  };

  tabs.forEach((tab, indice) => {
    tab.addEventListener("click", () => mostrar(tab.dataset.vista, false));

    tab.addEventListener("keydown", (evento) => {
      let destino;
      if (evento.key === "ArrowRight" || evento.key === "ArrowDown") {
        destino = (indice + 1) % tabs.length;
      } else if (evento.key === "ArrowLeft" || evento.key === "ArrowUp") {
        destino = (indice - 1 + tabs.length) % tabs.length;
      } else if (evento.key === "Home") {
        destino = 0;
      } else if (evento.key === "End") {
        destino = tabs.length - 1;
      } else {
        return;
      }
      evento.preventDefault();
      mostrar(tabs[destino].dataset.vista, true);
    });
  });

  const anio = document.getElementById("anio");
  if (anio) anio.textContent = String(new Date().getFullYear());
})();
