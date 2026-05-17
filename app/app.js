/* FindRolês — UI logic */
(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const state = {
    filter: "TODOS",
    query: "",
  };

  const tipoSlug = (t) => {
    const map = {
      "RESTAURANTE": "restaurante",
      "BAR": "bar",
      "ASIÁTICO": "asiatico",
      "CAFÉ": "cafe",
      "ROOFTOP": "rooftop",
      "CULTURA": "cultura",
      "MERCADO": "mercado",
      "EXPERIÊNCIA": "experiencia",
      "VIAGEM": "viagem",
      "NATUREZA": "natureza"
    };
    return map[t] || "default";
  };

  /* ===== Filters bar ===== */
  function renderFilters() {
    const counts = {};
    LUGARES.forEach((p) => {
      counts[p.tipo] = (counts[p.tipo] || 0) + 1;
    });

    const wrap = $("#filters");
    wrap.innerHTML = TIPOS.map((t) => {
      const n = t === "TODOS" ? LUGARES.length : (counts[t] || 0);
      if (t !== "TODOS" && n === 0) return "";
      const active = state.filter === t ? "active" : "";
      return `<button class="chip ${active}" data-filter="${t}">${t} (${n})</button>`;
    }).join("");

  }

  /* ===== List ===== */
  function renderList() {
    const list = $("#list");
    const empty = $("#empty");
    const q = state.query.trim().toLowerCase();

    let items = LUGARES.slice();
    if (state.filter !== "TODOS") {
      items = items.filter((p) => p.tipo === state.filter);
    }
    if (q) {
      items = items.filter((p) =>
        p.nome.toLowerCase().includes(q) ||
        p.bairro.toLowerCase().includes(q) ||
        p.tipo.toLowerCase().includes(q)
      );
    }

    if (!items.length) {
      list.innerHTML = "";
      empty.hidden = false;
      return;
    }
    empty.hidden = true;

    list.innerHTML = items.map((p, i) => {
      const num = String(i + 1).padStart(2, "0");
      const star = p.especial ? `<span class="star" title="${p.especial}">★</span>` : "";
      return `
        <li class="row" data-id="${p.id}">
          <span class="num">${num}</span>
          <span class="name">${escapeHtml(p.nome)}${star}</span>
          <span class="bairro">${escapeHtml(p.bairro)}</span>
          <span class="col-tipo"><span class="tag t-${tipoSlug(p.tipo)}">${p.tipo}</span></span>
          <span class="preco">${p.preco}</span>
        </li>
      `;
    }).join("");

    $$(".row", list).forEach((row) => {
      row.addEventListener("click", () => {
        const id = Number(row.dataset.id);
        const place = LUGARES.find((x) => x.id === id);
        if (place) openModal(place);
      });
    });
  }

  /* ===== Modal ===== */
  const modal = $("#modal");

  function openModal(p) {
    $("#m-img").src = p.imagem;
    $("#m-img").alt = p.nome;
    $("#m-tipo").textContent = p.tipo;
    $("#m-tipo").className = `tag t-${tipoSlug(p.tipo)}`;
    $("#m-preco").textContent = p.preco;
    $("#m-bairro").textContent = p.bairro;
    $("#m-nome").textContent = p.nome;
    $("#m-desc").textContent = p.descricao;
    $("#m-maps").href = p.maps;

    const sp = $("#m-special");
    if (p.especial) {
      sp.textContent = "✶ " + p.especial;
      sp.hidden = false;
    } else {
      sp.hidden = true;
    }

    const vid = $("#m-video");
    if (p.tiktok) {
      vid.innerHTML = `<iframe src="${p.tiktok}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen scrolling="no"></iframe>`;
    } else {
      vid.innerHTML = "";
    }

    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.hidden = true;
    $("#m-video").innerHTML = ""; // stop iframe
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  /* ===== Search ===== */
  $("#search").addEventListener("input", (e) => {
    state.query = e.target.value;
    renderList();
  });

  /* ===== Helpers ===== */
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* ===== Init ===== */
  function rebindFilters() {
    const wrap = $("#filters");
    wrap.onclick = (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      state.filter = btn.dataset.filter;
      $$(".chip", wrap).forEach((c) => c.classList.toggle("active", c.dataset.filter === state.filter));
      renderList();
    };
  }

  $("#count-total").textContent = LUGARES.length;
  renderFilters();
  rebindFilters();
  renderList();
})();
