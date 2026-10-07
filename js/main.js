(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  // Fade/slide elements in as they enter the viewport
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "work") initWork();
  if (page === "about") initAbout();
  if (page === "case") initReadProgress();

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
      window.location.href = `mailto:hello@yourname.com?subject=${subject}&body=${body}`;
    });
  }

  // ---------- Work ----------
  function initWork() {
    const tabsEl = document.querySelector("[data-filter-tabs]");
    const grid = document.querySelector("[data-project-grid]");
    const count = document.querySelector("[data-result-count]");
    const cats = window.CATEGORIES || [];
    const projects = window.PROJECTS || [];
    let active = cats[0];

    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

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
        <a class="project-card" href="${esc(p.link || "#")}" style="animation-delay:${Math.min(i, 8) * 50}ms">
          <div class="placeholder">
            <span>Thumbnail</span>
            ${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy" onerror="this.remove()">` : ""}
          </div>
          <div class="info">
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.categories.join(" · "))}</p>
          </div>
        </a>`).join("");
    }
    draw();
  }

  // ---------- Case study ----------
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
