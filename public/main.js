(function () {
  // Menu mobile
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Année du footer
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Agenda des sorties
  var list = document.getElementById("sorties-list");
  if (!list) return;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  var sorties = (window.SORTIES || [])
    .map(function (s) { return Object.assign({}, s, { _d: new Date(s.date + "T00:00:00") }); })
    .filter(function (s) { return !isNaN(s._d) && s._d >= today; })
    .sort(function (a, b) { return a._d - b._d; });

  if (!sorties.length) {
    list.innerHTML =
      '<div class="empty">' +
      '<svg aria-hidden="true"><use href="#edelweiss"/></svg>' +
      "<h3>Les prochaines sorties arrivent bientôt</h3>" +
      '<p>En attendant, on annonce tout sur <a href="https://www.instagram.com/womenbeyondsummits/" target="_blank" rel="noopener">Instagram</a>.</p>' +
      "</div>";
    return;
  }

  var fmt = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long" });

  list.innerHTML = sorties.map(function (s) {
    var date = fmt.format(s._d);
    return (
      '<article class="sortie">' +
        '<div class="sortie__head">' +
          '<p class="sortie__date">' + esc(date) + "</p>" +
          '<h3 class="sortie__title">' + esc(s.titre) + "</h3>" +
          (s.lieu ? '<p class="sortie__place">' + esc(s.lieu) + "</p>" : "") +
        "</div>" +
        '<div class="sortie__stats">' +
          "<div><strong>" + esc(s.distance) + " km</strong><span>distance</span></div>" +
          "<div><strong>" + esc(s.dplus) + " m</strong><span>D+</span></div>" +
          "<div><strong>" + esc(s.heure || "–") + "</strong><span>départ</span></div>" +
        "</div>" +
        '<div class="sortie__foot">' +
          '<span class="sortie__level">' + esc(s.niveau || "Tous niveaux") + "</span>" +
          (s.lien ? '<a class="sortie__link" href="' + esc(s.lien) + '" target="_blank" rel="noopener">Je viens →</a>' : "") +
        "</div>" +
      "</article>"
    );
  }).join("");
})();
