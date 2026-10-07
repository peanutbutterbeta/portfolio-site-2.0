(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const FOLDER_COLORS = ["var(--coral)", "var(--blue)", "var(--yellow)", "var(--pink)"];
  const liveProjects = () => (window.PROJECTS || []).filter((p) => !p.draft);
  const caseUrl = (p) => `case-study.html?p=${encodeURIComponent(p.slug)}`;

  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "work") initWork();
  if (page === "about") initAbout();
  if (page === "case") initCase();
  if (page !== "case") initNavTheme();

  // Fade/slide elements in as they enter the viewport (runs after pages render their content)
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  // ---------- Home ----------
  function initHome() {
    initStack();
    initEnvelope();
    initContactForm();
  }

  function initStack() {
    const section = document.querySelector(".featured");
    const stack = document.querySelector("[data-stack]");
    if (!section || !stack) return;
    buildFolders(stack);
    const folders = [...stack.querySelectorAll(".folder")];
    const n = folders.length;
    const STACKED_AT = 0.85; // portion of the scroll used for stacking; the rest is a hold
    let front = null;
    let lifting = null;
    let autoScrolling = false;
    let ticking = false;

    function progress() {
      const r = section.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      return total > 0 ? clamp(-r.top / total, 0, 1) : 1;
    }

    function render() {
      ticking = false;
      const p = progress();
      const stacked = p >= STACKED_AT - 0.001;
      if (stacked) autoScrolling = false;
      if (!stacked && !autoScrolling) front = null;

      const travel = stack.offsetHeight + 120;
      const order = folders.map((_, i) => i);
      if (front !== null) order.push(order.splice(front, 1)[0]);

      folders.forEach((f, i) => {
        let y = 0;
        let rot = 0;
        if (i > 0) {
          const t = clamp((p / STACKED_AT) * (n - 1) - (i - 1), 0, 1);
          const e = 1 - Math.pow(1 - t, 3);
          y = (1 - e) * travel;
          rot = reduceMotion ? 0 : (1 - e) * (i % 2 ? 3 : -3);
        }
        if (lifting === i) y -= 16;
        f.style.transform = `translateY(${y.toFixed(1)}px) rotate(${rot.toFixed(2)}deg)`;
        f.style.zIndex = order.indexOf(i) + 1;
        f.querySelector(".folder-body").setAttribute("aria-hidden", stacked && order[n - 1] !== i ? "true" : "false");
      });
    }

    function requestRender() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(render);
      }
    }

    folders.forEach((f, i) => {
      f.querySelector(".folder-tab").addEventListener("click", () => {
        front = i;
        if (progress() < STACKED_AT) {
          autoScrolling = true;
          const top = window.scrollY + section.getBoundingClientRect().top;
          const total = section.offsetHeight - window.innerHeight;
          window.scrollTo({ top: top + total * 0.92, behavior: reduceMotion ? "auto" : "smooth" });
        }
        stack.classList.add("animate");
        lifting = i;
        render();
        setTimeout(() => { lifting = null; render(); }, 200);
        setTimeout(() => stack.classList.remove("animate"), 650);
      });
    });

    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    render();
  }

  // Switch the nav to cream once the dark top section scrolls out of view
  function initNavTheme() {
    const hero = document.querySelector("[data-hero]");
    if (!hero || !("IntersectionObserver" in window)) return;
    const navH = document.querySelector(".site-nav")?.offsetHeight || 64;
    new IntersectionObserver(([e]) => {
      document.body.classList.toggle("nav-light", !e.isIntersecting);
    }, { rootMargin: `-${navH}px 0px 0px 0px` }).observe(hero);
  }

  function buildFolders(stack) {
    const list = liveProjects().filter((p) => p.featured).slice(0, 4);
    stack.innerHTML = list.map((p, i) => `
      <article class="folder" style="--c: ${FOLDER_COLORS[i % 4]}; --i: ${i}">
        <button class="folder-tab" type="button" aria-label="Bring ${esc(p.title)} to the front">${esc(p.title)}</button>
        <div class="folder-body">
          <div class="cover placeholder"><span>Cover image</span><img src="${esc(p.featuredImage || p.thumbnail || p.cover)}" alt="${esc(p.title)} project cover" onerror="this.remove()"></div>
          <div class="folder-info">
            <p class="meta">${esc(p.role)}</p>
            <h3>${esc(p.title)}</h3>
            <p class="desc">${esc(p.summary)}</p>
            <a class="case-link" href="${caseUrl(p)}">View case study →</a>
          </div>
        </div>
      </article>`).join("");
  }

  function initEnvelope() {
    const env = document.querySelector("[data-envelope]");
    if (!env) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      env.classList.add("open");
      return;
    }
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        env.classList.add("open");
        io.disconnect();
      }
    }, { threshold: 0.25 });
    io.observe(env);
  }

  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;
    const err = form.querySelector("[data-form-error]");
    form.addEventListener("input", () => { err.textContent = ""; });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !message) {
        err.textContent = "Fill in your name, email and project details.";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        err.textContent = "That email doesn't look right. Check it and try again.";
        return;
      }
      // Opens the visitor's email app with the message filled in
      const subject = encodeURIComponent(`Project inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      window.location.href = `mailto:mirandajacobucci@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // ---------- Work ----------
  function initWork() {
    const tabsEl = document.querySelector("[data-filter-tabs]");
    const grid = document.querySelector("[data-project-grid]");
    const count = document.querySelector("[data-result-count]");
    const cats = window.CATEGORIES || [];
    const projects = liveProjects();
    let active = cats[0];

    cats.forEach((c) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "filter-tab";
      b.textContent = c;
      b.setAttribute("aria-pressed", String(c === active));
      b.addEventListener("click", () => {
        active = c;
        tabsEl.querySelectorAll(".filter-tab").forEach((t) => t.setAttribute("aria-pressed", String(t === b)));
        b.scrollIntoView({ block: "nearest", inline: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
        draw();
      });
      tabsEl.appendChild(b);
    });

    function draw() {
      const list = projects.filter((p) => active === cats[0] || p.categories.includes(active));
      count.textContent = `${list.length} ${list.length === 1 ? "project" : "projects"}`;
      grid.innerHTML = list.map((p, i) => `
        <a class="project-card" href="${caseUrl(p)}" style="animation-delay:${Math.min(i, 8) * 50}ms">
          <div class="placeholder">
            <span>Thumbnail</span>
            <img src="${esc(p.thumbnail || p.cover)}" alt="" loading="lazy" onerror="this.remove()">
          </div>
          <div class="info">
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.role)}</p>
          </div>
        </a>`).join("");
    }
    draw();
  }

  // ---------- Case study ----------
  function initCase() {
    const main = document.querySelector("[data-case]");
    const list = liveProjects();
    const slug = new URLSearchParams(location.search).get("p");
    const idx = slug ? list.findIndex((p) => p.slug === slug) : 0;
    const p = list[idx];

    if (!p) {
      main.innerHTML = `<section class="cs-hero wrap"><a class="cs-back" href="work.html">← All work</a><h1>Project not found</h1><p class="cs-intro">That project may have moved. Browse everything on the Work page.</p></section>`;
      return;
    }

    const accent = FOLDER_COLORS[idx % 4];
    const next = list[(idx + 1) % list.length];
    document.body.style.setProperty("--accent", accent);
    document.title = `${p.title} · Miranda Jacobucci`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", p.summary);

    const paras = (arr) => (arr || []).map((t) => `<p>${esc(t)}</p>`).join("");
    const img = (im, cls = "cs-photo") => `<img class="${cls}" src="${esc(im.src)}" alt="${esc(im.alt)}" loading="lazy">`;

    const highlights = (p.highlights || []).map((h, i) => `
      <section class="cs-section wrap">
        <div class="cs-section-text reveal">
          <p class="eyebrow">${String(i + 1).padStart(2, "0")}</p>
          <h2>${esc(h.heading)}</h2>
          ${paras(h.body)}
        </div>
        ${h.video ? `<div class="cs-video reveal"><iframe src="${esc(h.video)}" title="${esc(h.heading)} video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>` : ""}
        ${h.images && h.images.length ? `<div class="cs-images cols-${h.columns || 1}">${h.images.map((im) => `<figure class="reveal">${img(im)}</figure>`).join("")}</div>` : ""}
      </section>`).join("");

    const gallery = p.gallery && p.gallery.length
      ? `<section class="cs-section wrap"><div class="cs-images cols-${Math.min(p.gallery.length, 2)}">${p.gallery.map((im) => `<figure class="reveal">${img(im)}</figure>`).join("")}</div></section>`
      : "";

    const responsibilities = (p.responsibilities || []).length
      ? `<div><dt>Responsibilities</dt><dd><ul>${p.responsibilities.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></dd></div>`
      : "";

    main.innerHTML = `
      <div class="cs-dark" data-hero>
      <section class="cs-hero wrap">
        <a class="cs-back" href="work.html">← All work</a>
        <p class="eyebrow">${esc(p.categories.join(" · "))}</p>
        <h1>${esc(p.title)}</h1>
        <p class="cs-intro">${esc(p.summary)}</p>
      </section>

      <div class="cs-cover wrap reveal">${img({ src: p.cover, alt: `${p.title} cover image` }, "cs-photo cs-cover-img")}</div>
      </div>

      <div class="on-cream case-body">
      <div class="cs-sheet">

      <section class="cs-overview wrap">
        <div class="cs-text reveal">
          <h2>Overview</h2>
          ${paras(p.intro)}
          ${(p.myRole || []).length ? `<h3 class="cs-sub">My role</h3>${paras(p.myRole)}` : ""}
        </div>
        <aside class="cs-details index-card reveal" style="--r: 1.5deg" aria-label="Project details">
          <span class="num">Project file</span>
          <h3>Details</h3>
          <dl>
            <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
            ${responsibilities}
          </dl>
        </aside>
      </section>
      </div>

      <div class="on-white">
      ${highlights}
      ${gallery}

      <section class="cs-next wrap">
        <a class="cs-next-folder" href="${caseUrl(next)}" style="--c: ${FOLDER_COLORS[(idx + 1) % 4]}">
          <span class="cs-next-tab">Next project</span>
          <span class="cs-next-body">
            <span class="eyebrow">Up next</span>
            <span class="cs-next-title">${esc(next.title)} →</span>
          </span>
        </a>
      </section>
      </div>
      </div>`;

    initNavTheme();
    initReadProgress();
  }

  function initReadProgress() {
    const bar = document.querySelector(".read-progress");
    if (!bar) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.setProperty("--p", max > 0 ? clamp(window.scrollY / max, 0, 1).toFixed(4) : 0);
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  // ---------- About ----------
  function initAbout() {
    const board = document.querySelector("[data-board]");
    if (!board) return;
    const items = [...board.querySelectorAll("[data-drag]")];
    const KEY = "about-board-layout";
    let topZ = 30;

    const defaults = {};
    items.forEach((el) => {
      const cs = getComputedStyle(el);
      defaults[el.dataset.drag] = { x: parseFloat(cs.getPropertyValue("--x")), y: parseFloat(cs.getPropertyValue("--y")) };
    });

    function load() {
      try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
    }
    function save() {
      const data = {};
      items.forEach((el) => { data[el.dataset.drag] = { x: parseFloat(el.style.getPropertyValue("--x")), y: parseFloat(el.style.getPropertyValue("--y")) }; });
      try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* storage unavailable */ }
    }
    function place(el, x, y) {
      const maxX = 100 - (el.offsetWidth / board.clientWidth) * 100;
      const maxY = 100 - (el.offsetHeight / board.clientHeight) * 100;
      el.style.setProperty("--x", clamp(x, 0, Math.max(maxX, 0)).toFixed(2));
      el.style.setProperty("--y", clamp(y, 0, Math.max(maxY, 0)).toFixed(2));
    }

    const saved = load();
    items.forEach((el) => {
      const pos = saved[el.dataset.drag] || defaults[el.dataset.drag];
      place(el, pos.x, pos.y);
      // Graphics 3, 5 and 6 start overlapping the photo
      if (["3", "5", "6"].includes(el.dataset.drag)) el.style.zIndex = 25;

      let startX, startY, startPX, startPY;
      el.addEventListener("pointerdown", (e) => {
        if (e.button !== 0) return;
        el.setPointerCapture(e.pointerId);
        el.classList.add("dragging");
        el.style.zIndex = ++topZ;
        startX = e.clientX;
        startY = e.clientY;
        startPX = parseFloat(el.style.getPropertyValue("--x"));
        startPY = parseFloat(el.style.getPropertyValue("--y"));
      });
      el.addEventListener("pointermove", (e) => {
        if (!el.hasPointerCapture(e.pointerId)) return;
        const dx = ((e.clientX - startX) / board.clientWidth) * 100;
        const dy = ((e.clientY - startY) / board.clientHeight) * 100;
        place(el, startPX + dx, startPY + dy);
      });
      const end = (e) => {
        if (!el.hasPointerCapture(e.pointerId)) return;
        el.releasePointerCapture(e.pointerId);
        el.classList.remove("dragging");
        save();
      };
      el.addEventListener("pointerup", end);
      el.addEventListener("pointercancel", end);

      el.addEventListener("keydown", (e) => {
        const step = e.shiftKey ? 5 : 1;
        const moves = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
        if (!moves[e.key]) return;
        e.preventDefault();
        el.style.zIndex = ++topZ;
        place(el, parseFloat(el.style.getPropertyValue("--x")) + moves[e.key][0], parseFloat(el.style.getPropertyValue("--y")) + moves[e.key][1]);
        save();
      });
    });

    document.querySelector("[data-board-reset]")?.addEventListener("click", () => {
      try { localStorage.removeItem(KEY); } catch (e) { /* storage unavailable */ }
      items.forEach((el) => place(el, defaults[el.dataset.drag].x, defaults[el.dataset.drag].y));
    });

    window.addEventListener("resize", () => items.forEach((el) => place(el, parseFloat(el.style.getPropertyValue("--x")), parseFloat(el.style.getPropertyValue("--y")))));
  }
})();
