const app = document.getElementById("app");
const crumbs = document.getElementById("crumbs");

function findTerm(termId) {
  return TERMS.find((t) => t.id === termId);
}

function setCrumbs(items) {
 
  crumbs.innerHTML = items
    .map((item, i) => {
      const isLast = i === items.length - 1;
      const sep = i > 0 ? '<span class="sep">/</span>' : "";
      const content = isLast
        ? `<span aria-current="page">${item.label}</span>`
        : `<a href="${item.href}">${item.label}</a>`;
      return sep + content;
    })
    .join("");
}

/* ---------------------------------------------------------------
   Views
   --------------------------------------------------------------- */

function renderHome() {
  document.title = "ECE Materials Hub";
  setCrumbs([{ label: "All terms" }]);

  const byYear = {};
  TERMS.forEach((t) => {
    byYear[t.year] = byYear[t.year] || [];
    byYear[t.year].push(t);
  });

  const yearBlocks = Object.keys(byYear)
    .sort()
    .map((year) => {
      const cards = byYear[year]
        .map((t) => {
          const empty = t.courses.length === 0;
          const tabLabel = `Y${t.year}T${t.term}`;
          if (empty) {
            return `
              <div class="term-card term-card--empty" aria-disabled="true">
                <div class="term-card__tab">${tabLabel}</div>
                <div class="term-card__body">
                  <span class="term-card__label">${t.label}</span>
                  <span class="term-card__count">Not available yet</span>
                </div>
              </div>`;
          }
          return `
            <a class="term-card" href="#/term/${t.id}">
              <div class="term-card__tab">${tabLabel}</div>
              <div class="term-card__body">
                <span class="term-card__label">${t.label}</span>
                <span class="term-card__count">${t.courses.length} course${t.courses.length === 1 ? "" : "s"}</span>
              </div>
            </a>`;
        })
        .join("");
      return `<div class="year-label">Year ${year}</div>${cards}`;
    })
    .join("");

  app.innerHTML = `
    <h1 class="view-title">ECE Materials Hub</h1>
    <p class="view-sub">Course notes, books, question banks and slides, organised by term. Pick a term, then a course, to open its Drive folder.</p>
    <div class="term-grid">${yearBlocks}</div>
  `;
}

function renderTerm(termId) {
  const term = findTerm(termId);
  if (!term) return renderNotFound();

  document.title = `${term.label} — ECE Materials Hub`;
  setCrumbs([{ label: "All terms", href: "#/" }, { label: term.label }]);

  const courseRows = term.courses.length
    ? term.courses
        .map((c) => {
          const ready = Boolean(c.url && c.url.trim());
          if (ready) {
            return `
              <a class="course-row" href="${c.url}" target="_blank" rel="noopener noreferrer">
                <span class="course-row__code">${c.code}</span>
                <span class="course-row__title">${c.title}</span>
                <span class="course-row__arrow">&rarr;</span>
              </a>`;
          }
          return `
            <div class="course-row course-row--empty" aria-disabled="true">
              <span class="course-row__code">${c.code}</span>
              <span class="course-row__title">${c.title}</span>
              <span class="course-row__arrow course-row__arrow--pending">Not added yet</span>
            </div>`;
        })
        .join("")
    : `<div class="empty-state">No courses added for this term yet.</div>`;

  const extraRows = (term.extras || [])
    .map((x) => {
      const ready = Boolean(x.url && x.url.trim());
      if (ready) {
        return `
          <a class="course-row course-row--extra" href="${x.url}" target="_blank" rel="noopener noreferrer">
            <span class="course-row__code"></span>
            <span class="course-row__title">${x.label}</span>
            <span class="course-row__arrow">&rarr;</span>
          </a>`;
      }
      return `
        <div class="course-row course-row--extra course-row--empty" aria-disabled="true">
          <span class="course-row__code"></span>
          <span class="course-row__title">${x.label}</span>
          <span class="course-row__arrow course-row__arrow--pending">Not added yet</span>
        </div>`;
    })
    .join("");

  app.innerHTML = `
    <h1 class="view-title">${term.label}</h1>
    <p class="view-sub">${term.courses.length} course${term.courses.length === 1 ? "" : "s"} this term. Click a course to open its Drive folder in a new tab.</p>
    <div class="course-list">
      ${courseRows}
      <div class="course-list__divider">Question Bank</div>
      ${extraRows}
    </div>
  `;
}

function renderNotFound() {
  document.title = "Not found — ECE Materials Hub";
  setCrumbs([{ label: "All terms", href: "#/" }, { label: "Not found" }]);
  app.innerHTML = `
    <h1 class="view-title">That page doesn't exist</h1>
    <p class="view-sub">The term you're looking for isn't in the data yet.</p>
    <p><a href="#/">&larr; Back to all terms</a></p>
  `;
}

/* ---------------------------------------------------------------
   Router
   --------------------------------------------------------------- */

function route() {
  const hash = location.hash.replace(/^#/, "") || "/";
  const parts = hash.split("/").filter(Boolean); // e.g. ["term", "y1t1"]

  if (parts.length === 0) return renderHome();
  if (parts[0] === "term" && parts[1]) return renderTerm(parts[1]);
  return renderNotFound();
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);
