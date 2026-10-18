/* Portfolio renderer. UPD 2026-10-18. No build step, no dependencies. */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  var LANGS = ["ru", "ua", "en"];
  var HTML_LANG = { ru: "ru", ua: "uk", en: "en" };
  var PAGE = document.body.getAttribute("data-page") || "home";

  function detectLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(q) >= 0) return q;
    try {
      var s = localStorage.getItem("pf-lang");
      if (LANGS.indexOf(s) >= 0) return s;
    } catch (e) { /* storage blocked */ }
    var n = (navigator.language || "").toLowerCase();
    if (n.indexOf("uk") === 0) return "ua";
    if (n.indexOf("ru") === 0) return "ru";
    return "en";
  }

  var lang = detectLang();

  function t(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] != null ? v[lang] : (v.en || v.ru || "");
  }
  function ui(k) { return t(D.ui[k]); }

  // Tiny DOM helper: text only, never innerHTML.
  function h(tag, props) {
    var el = document.createElement(tag);
    var kids = Array.prototype.slice.call(arguments, 2);
    if (props) {
      Object.keys(props).forEach(function (k) {
        var v = props[k];
        if (v == null || v === false) return;
        if (k === "class") el.className = v;
        else if (k === "text") el.textContent = v;
        else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v);
      });
    }
    kids.forEach(function add(c) {
      if (c == null || c === false) return;
      if (Array.isArray(c)) { c.forEach(add); return; }
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return el;
  }

  function withLang(href) {
    var parts = href.split("#");
    var base = parts[0] || "index.html";
    return base + "?lang=" + lang + (parts[1] ? "#" + parts[1] : "");
  }
  function homeLink(hash) {
    return PAGE === "home" ? "#" + hash : withLang("index.html#" + hash);
  }

  var REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function demoItems(pred) {
    return (D.demos ? D.demos.items : []).filter(pred);
  }

  // Muted looping preview; with reduced motion it waits for the viewer to press play.
  function videoPreview(item, cls) {
    var v = h("video", {
      class: cls, src: item.src, poster: item.poster, muted: "", loop: "", playsinline: "",
      preload: "metadata", autoplay: REDUCED ? null : "", controls: REDUCED ? "" : null,
      "aria-label": t(item.title)
    });
    v.muted = true;
    v.addEventListener("error", function () { v.style.display = "none"; });
    return v;
  }

  // W-ids live on the "in progress" page, the rest on the home page.
  function caseHref(id) {
    if (id.charAt(0) === "W") return PAGE === "inwork" ? "#case-" + id : withLang("inwork.html#case-" + id);
    return homeLink("case-" + id);
  }

  function linkButtons(items) {
    if (!items.length) return null;
    return h("div", { class: "links" }, items.map(function (it) {
      return h("a", { class: "btn btn--sm", href: it.href, target: "_blank", rel: "noopener" },
        t(it.kind) + " ↗");
    }));
  }

  function chips(list) {
    return h("ul", { class: "chips" }, list.map(function (s) { return h("li", { text: s }); }));
  }

  /* ---------- header ---------- */
  function renderHeader() {
    var nav = h("nav", { class: "bar__nav", "aria-label": "Sections" },
      h("a", { href: homeLink("demos"), text: ui("navDemos") }),
      h("a", { href: homeLink("cases"), text: ui("navCases") }),
      h("a", { href: withLang("journey.html"), text: ui("navJourney"), "aria-current": PAGE === "journey" ? "page" : null }),
      D.inwork ? h("a", { href: withLang("inwork.html"), text: ui("navInwork"), "aria-current": PAGE === "inwork" ? "page" : null }) : null,
      h("a", { href: homeLink("prototypes"), text: ui("navPrototypes") }),
      h("a", { href: homeLink("about"), text: ui("navAbout") }),
      h("a", { href: homeLink("contacts"), text: ui("navContacts") })
    );
    var switcher = h("div", { class: "lang", role: "group", "aria-label": "Language" },
      LANGS.map(function (l) {
        return h("button", {
          type: "button", class: "lang__btn", "aria-pressed": String(l === lang),
          text: l.toUpperCase(), onclick: function () { setLang(l); }
        });
      })
    );
    var bar = h("div", { class: "bar wrap" },
      h("a", { class: "brand", href: withLang("index.html") },
        h("span", { class: "brand__mark", "aria-hidden": "true", text: "AM" }),
        h("span", { class: "brand__name", text: D.person.name })
      ),
      switcher,
      nav
    );
    var header = document.getElementById("top");
    header.replaceChildren(bar);
  }

  /* ---------- home ---------- */
  function sectionHead(code, title, lead, count) {
    return h("header", { class: "sec-head" },
      h("span", { class: "sec-head__code", "aria-hidden": "true", text: code }),
      h("div", { class: "sec-head__text" },
        h("h2", { text: title }),
        lead ? h("p", { text: lead }) : null
      ),
      count != null ? h("span", { class: "sec-head__count", text: String(count).padStart(2, "0") }) : null
    );
  }

  function renderHero() {
    var nCases = D.cases.length;
    return h("section", { class: "hero wrap", "aria-labelledby": "hero-title" },
      h("p", { class: "kicker", text: "> " + ui("kicker") }),
      h("h1", { id: "hero-title", text: D.person.name }),
      h("p", { class: "hero__role", text: t(D.person.role) }),
      h("p", { class: "hero__lead", text: ui("heroLead") }),
      h("div", { class: "hero__cta" },
        h("a", { class: "btn btn--primary", href: "#cases", text: ui("ctaCases") }),
        h("a", { class: "btn", href: "https://t.me/" + D.person.telegram, target: "_blank", rel: "noopener", text: ui("ctaTelegram") })
      ),
      h("dl", { class: "stats" },
        stat(String(nCases), ui("statCases")),
        stat(D.journey.rows.length + "+", ui("statNiches")),
        stat(String(D.prototypes.length), ui("statPrototypes")),
        stat("4+", ui("statYears"))
      )
    );
    function stat(v, l) { return h("div", { class: "stat" }, h("dt", { text: l }), h("dd", { text: v })); }
  }

  function renderAbout() {
    var A = D.about;
    var jobs = h("ol", { class: "timeline" }, A.jobs.map(function (j) {
      return h("li", { class: "job" },
        h("div", { class: "job__top" },
          h("strong", { text: j.company }),
          h("span", { class: "job__years", text: t(j.years) })
        ),
        h("p", { class: "job__role", text: t(j.role) }),
        h("ul", { class: "bullets" }, t(j.points).map(function (p) { return h("li", { text: p }); }))
      );
    }));
    var stack = h("dl", { class: "kv" }, A.stack.map(function (r) {
      return h("div", null, h("dt", { text: r.k }), h("dd", { text: r.v }));
    }));
    return h("section", { id: "about", class: "section wrap", "aria-labelledby": "about-title" },
      h("header", { class: "sec-head" },
        h("span", { class: "sec-head__code", "aria-hidden": "true", text: "~" }),
        h("div", { class: "sec-head__text" }, h("h2", { id: "about-title", text: ui("navAbout") }), h("p", { text: t(A.summary) }))
      ),
      h("div", { class: "about" },
        h("div", { class: "panel" }, h("h3", { class: "label", text: ui("experience") }), jobs),
        h("div", { class: "about__side" },
          h("div", { class: "panel" }, h("h3", { class: "label", text: ui("coreStack") }), stack),
          h("div", { class: "panel" },
            h("h3", { class: "label", text: ui("format") }), h("p", { text: t(A.format) }),
            h("h3", { class: "label", text: ui("languages") }), h("p", { text: t(A.languages) }),
            h("h3", { class: "label", text: ui("education") }), h("p", { text: t(A.education) })
          )
        )
      )
    );
  }

  function renderCase(c) {
    var wip = c.status === "wip";
    var vids = demoItems(function (it) { return it.caseId === c.id && it.type === "video"; });
    var links = demoItems(function (it) { return it.caseId === c.id && it.type === "link"; });
    return h("article", { class: "case" + (wip ? " case--wip" : ""), id: "case-" + c.id },
      h("header", { class: "case__head" },
        h("span", { class: "case__id", text: c.id }),
        h("div", { class: "case__titles" },
          h("h3", { text: t(c.title) }),
          h("p", { class: "case__client", text: t(c.client) })
        ),
        wip ? h("span", { class: "badge badge--wip", text: ui("wip") }) : null
      ),
      h("div", { class: "case__body" },
        h("div", { class: "case__main" },
          h("h4", { class: "label", text: ui(c.taskLabel || "task") }),
          h("p", { text: t(c.task) }),
          h("h4", { class: "label", text: ui("solution") }),
          h("ul", { class: "bullets" }, t(c.solution).map(function (s) { return h("li", { text: s }); }))
        ),
        h("div", { class: "case__side" },
          vids.map(function (it) { return videoPreview(it, "case__video"); }),
          c.metric ? h("div", { class: "metric" },
            h("span", { class: "metric__v", text: c.metric.v }),
            h("span", { class: "metric__l", text: t(c.metric.l) })
          ) : null,
          h("h4", { class: "label", text: ui("result") }),
          h("p", { text: t(c.result) }),
          h("h4", { class: "label", text: ui("stack") }),
          chips(c.stack),
          linkButtons(links)
        )
      )
    );
  }

  function renderDemos() {
    var M = D.demos;
    if (!M) return null;
    var head = sectionHead("▶", t(M.title), t(M.lead), M.items.length);
    head.querySelector("h2").id = "demos-title";
    return h("section", { id: "demos", class: "section wrap", "aria-labelledby": "demos-title" },
      head,
      h("div", { class: "demos" }, M.items.map(function (it) {
        var isVideo = it.type === "video";
        var body = h("div", { class: "demo__body" },
          h("span", { class: "badge", text: t(it.kind) }),
          h("h3", { text: t(it.title) }),
          h("p", { text: t(it.caption) }),
          h("div", { class: "links" },
            it.href ? h("a", { class: "btn btn--sm btn--primary", href: it.href, target: "_blank", rel: "noopener" }, t(M.open) + " ↗") : null,
            it.caseId ? h("a", { class: "btn btn--sm", href: caseHref(it.caseId), text: t(M.toCase) + " " + it.caseId }) : null
          )
        );
        return h("article", { class: "demo" + (isVideo ? " demo--video" : "") },
          isVideo ? videoPreview(it, "demo__video") : null,
          body
        );
      }))
    );
  }

  function renderCatNav() {
    var items = D.categories.map(function (cat) {
      return h("li", null, h("a", { href: "#cat-" + cat.id },
        h("b", { text: cat.id }), " ", t(cat.title)));
    });
    if (D.qa) items.push(h("li", null, h("a", { href: "#qa" }, h("b", { text: "QA" }), " ", t(D.qa.title))));
    items.push(h("li", null, h("a", { href: withLang("journey.html") }, h("b", { text: "G" }), " ", t(D.journey.title))));
    items.push(h("li", null, h("a", { href: "#prototypes" }, h("b", { text: "H" }), " ", ui("navPrototypes"))));
    if (D.inwork) items.push(h("li", null, h("a", { href: withLang("inwork.html") }, h("b", { text: "W" }), " ", t(D.inwork.title))));
    return h("nav", { class: "catnav", "aria-label": ui("navCases") }, h("ul", null, items));
  }

  function renderCases() {
    var wrap = h("section", { id: "cases", class: "section wrap", "aria-label": ui("navCases") }, renderCatNav());
    D.categories.forEach(function (cat) {
      var list = D.cases.filter(function (c) { return c.cat === cat.id; });
      wrap.appendChild(h("section", { id: "cat-" + cat.id, class: "cat", "aria-labelledby": "cat-title-" + cat.id },
        (function () {
          var head = sectionHead(cat.id, t(cat.title), t(cat.lead), list.length);
          head.querySelector("h2").id = "cat-title-" + cat.id;
          return head;
        })(),
        h("div", { class: "cases" }, list.map(renderCase))
      ));
    });
    return wrap;
  }

  function renderQA() {
    var Q = D.qa;
    if (!Q) return null;
    var head = sectionHead("QA", t(Q.title), t(Q.lead));
    head.querySelector("h2").id = "qa-title";
    return h("section", { id: "qa", class: "section wrap", "aria-labelledby": "qa-title" },
      head,
      h("div", { class: "qa" }, Q.blocks.map(function (b) {
        return h("article", { class: "panel" },
          h("h3", { class: "qa__title", text: t(b.title) }),
          h("ul", { class: "bullets" }, t(b.points).map(function (p) { return h("li", { text: p }); })),
          h("h4", { class: "label", text: ui("stack") }),
          chips(b.stack)
        );
      }))
    );
  }

  function renderJourneyTeaser() {
    var J = D.journey;
    return h("section", { id: "journey", class: "section wrap" },
      h("a", { class: "teaser", href: withLang("journey.html") },
        h("span", { class: "sec-head__code", "aria-hidden": "true", text: "G" }),
        h("div", { class: "teaser__body" },
          h("h2", { text: t(J.title) }),
          h("p", { text: ui("journeyTeaser") }),
          h("ul", { class: "chips chips--muted" }, J.rows.map(function (r) { return h("li", { text: t(r.niche) }); })),
          h("span", { class: "teaser__go", text: ui("journeyOpen") + " →" })
        )
      )
    );
  }

  function renderPrototypes() {
    return h("section", { id: "prototypes", class: "section wrap", "aria-labelledby": "proto-title" },
      (function () {
        var head = sectionHead("H", ui("navPrototypes"), ui("prototypesLead"), D.prototypes.length);
        head.querySelector("h2").id = "proto-title";
        return head;
      })(),
      h("div", { class: "protos" }, D.prototypes.map(function (p) {
        return h("article", { class: "proto", id: "case-" + p.id },
          h("header", { class: "case__head" },
            h("span", { class: "case__id", text: p.id }),
            h("div", { class: "case__titles" },
              h("h3", { text: t(p.title) }),
              h("p", { class: "case__client", text: t(p.client) })
            ),
            h("span", { class: "badge", text: ui("presale") })
          ),
          h("h4", { class: "label", text: ui("idea") }),
          h("p", { text: t(p.idea) }),
          p.result ? h("h4", { class: "label", text: ui("prototypeResult") }) : null,
          p.result ? h("p", { text: t(p.result) }) : null,
          h("h4", { class: "label", text: ui("stack") }),
          chips(p.stack)
        );
      }))
    );
  }

  function renderContacts() {
    var P = D.person;
    return h("section", { id: "contacts", class: "section wrap", "aria-labelledby": "contacts-title" },
      h("div", { class: "contact panel" },
        h("div", null,
          h("h2", { id: "contacts-title", text: ui("navContacts") }),
          h("p", { text: ui("contactsLead") })
        ),
        h("ul", { class: "contact__list" },
          h("li", null, h("span", { class: "label", text: "Telegram" }),
            h("a", { href: "https://t.me/" + P.telegram, target: "_blank", rel: "noopener", text: "@" + P.telegram })),
          h("li", null, h("span", { class: "label", text: "Email" }),
            h("a", { href: "mailto:" + P.email, text: P.email }))
        )
      )
    );
  }

  /* ---------- journey page ---------- */
  function renderJourneyPage() {
    var J = D.journey;
    var table = h("table", { class: "niches" },
      h("thead", null, h("tr", null,
        h("th", { scope: "col", text: ui("niche") }),
        h("th", { scope: "col", text: ui("goal") }),
        h("th", { scope: "col", text: ui("inside") })
      )),
      h("tbody", null, J.rows.map(function (r, i) {
        var links = demoItems(function (it) { return it.row === i; });
        return h("tr", null,
          h("th", { scope: "row", "data-label": ui("niche"), text: t(r.niche) }),
          h("td", { "data-label": ui("goal"), text: t(r.goal) }),
          h("td", { "data-label": ui("inside") }, t(r.inside), linkButtons(links))
        );
      }))
    );
    return [
      h("section", { class: "hero hero--sub wrap" },
        h("a", { class: "back", href: withLang("index.html#journey"), text: ui("back") }),
        h("p", { class: "kicker", text: "> G / " + ui("navJourney").toLowerCase() }),
        h("h1", { text: t(J.title) }),
        h("p", { class: "hero__lead", text: t(J.lead) })
      ),
      h("section", { class: "section wrap" },
        h("div", { class: "panel panel--accent" },
          h("h2", { class: "label", text: ui("whatICan") }),
          h("p", { class: "big", text: t(J.can) })
        ),
        h("div", { class: "table-wrap" }, table),
        h("div", { class: "panel" },
          h("h2", { class: "label", text: ui("stack") }),
          chips(J.stack)
        )
      ),
      renderContacts()
    ];
  }

  /* ---------- in-progress page ---------- */
  function renderInworkPage() {
    var W = D.inwork, L = W.labels;
    var list = W.items.map(function (c) {
      var bullets = function (arr) {
        return h("ul", { class: "bullets" }, t(arr).map(function (s) { return h("li", { text: s }); }));
      };
      return h("article", { class: "case case--wip", id: "case-" + c.id },
        h("header", { class: "case__head" },
          h("span", { class: "case__id", text: c.id }),
          h("div", { class: "case__titles" },
            h("h3", { text: t(c.title) }),
            h("p", { class: "case__client", text: t(c.client) })
          ),
          h("span", { class: "badge badge--" + c.stage, text: t(L.stage[c.stage]) })
        ),
        h("div", { class: "case__body" },
          h("div", { class: "case__main" },
            h("h4", { class: "label", text: ui("task") }),
            h("p", { text: t(c.task) }),
            h("h4", { class: "label", text: t(L.done) }),
            bullets(c.done)
          ),
          h("div", { class: "case__side" },
            h("h4", { class: "label", text: t(L.next) }),
            bullets(c.next),
            h("h4", { class: "label", text: ui("stack") }),
            chips(c.stack),
            c.links ? h("div", { class: "links" }, c.links.map(function (l) {
              return h("a", { class: "btn btn--sm", href: l.href, target: "_blank", rel: "noopener" }, t(l.label) + " ↗");
            })) : null
          )
        )
      );
    });
    return [
      h("section", { class: "hero hero--sub wrap" },
        h("a", { class: "back", href: withLang("index.html"), text: ui("back") }),
        h("p", { class: "kicker", text: "> wip / " + ui("navInwork").toLowerCase() }),
        h("h1", { text: t(W.title) }),
        h("p", { class: "hero__lead", text: t(W.lead) })
      ),
      h("section", { class: "section wrap" }, h("div", { class: "cases" }, list)),
      renderContacts()
    ];
  }

  function renderFooter() {
    var f = document.getElementById("foot");
    f.replaceChildren(h("div", { class: "wrap foot" },
      h("span", { text: "© 2026 " + D.person.name }),
      h("span", { text: ui("footer") })
    ));
  }

  function render() {
    document.documentElement.lang = HTML_LANG[lang];
    var main = document.getElementById("main");
    if (PAGE === "journey") {
      document.title = t(D.journey.title) + " — " + D.person.name;
      main.replaceChildren.apply(main, renderJourneyPage());
    } else if (PAGE === "inwork") {
      document.title = t(D.inwork.title) + " — " + D.person.name;
      main.replaceChildren.apply(main, renderInworkPage());
    } else {
      document.title = D.person.name + " — " + t(D.person.role);
      main.replaceChildren(renderHero(), renderDemos(), renderAbout(), renderCases(), renderQA(), renderJourneyTeaser(), renderPrototypes(), renderContacts());
    }
    renderHeader();
    renderFooter();
  }

  function setLang(l) {
    if (l === lang) return;
    lang = l;
    try { localStorage.setItem("pf-lang", l); } catch (e) { /* storage blocked */ }
    var url = new URL(location.href);
    url.searchParams.set("lang", l);
    history.replaceState(null, "", url);
    var y = window.scrollY;
    render();
    window.scrollTo(0, y);
  }

  render();
  // Hash targets are rendered by JS, so jump to them after the first render.
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
})();
