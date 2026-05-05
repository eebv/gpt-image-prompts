const state = {
  cases: [],
  category: "all",
  style: "all",
  search: "",
  filtered: [],
};

const els = {
  gallery: document.getElementById("gallery"),
  resultCount: document.getElementById("resultCount"),
  categoryChips: document.getElementById("categoryChips"),
  styleChips: document.getElementById("styleChips"),
  searchInput: document.getElementById("searchInput"),
  modalBackdrop: document.getElementById("modalBackdrop"),
  modalClose: document.getElementById("modalClose"),
  modalImage: document.getElementById("modalImage"),
  modalTitle: document.getElementById("modalTitle"),
  modalCategory: document.getElementById("modalCategory"),
  modalStyle: document.getElementById("modalStyle"),
  modalKeywords: document.getElementById("modalKeywords"),
  modalSourceWrap: document.getElementById("modalSourceWrap"),
  modalSource: document.getElementById("modalSource"),
  modalPrompt: document.getElementById("modalPrompt"),
  modalNegative: document.getElementById("modalNegative"),
  copyPromptBtn: document.getElementById("copyPromptBtn"),
  copyNegativeBtn: document.getElementById("copyNegativeBtn"),
};

async function loadCases() {
  const res = await fetch("./data/site-cases.json");
  if (!res.ok) throw new Error("Failed to load site-cases.json");
  state.cases = await res.json();
  buildFilters();
  applyFilters();
}

function uniqueBy(list, key, labelKey) {
  const map = new Map();
  list.forEach((item) => {
    if (!map.has(item[key])) map.set(item[key], item[labelKey]);
  });
  return [...map.entries()].map(([value, label]) => ({ value, label }));
}

function renderChip(container, items, activeValue, onClick) {
  container.innerHTML = "";
  items.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = `chip ${item.value === activeValue ? "active" : ""}`;
    btn.textContent = item.label;
    btn.addEventListener("click", () => onClick(item.value));
    container.appendChild(btn);
  });
}

function buildFilters() {
  const categories = [{ value: "all", label: "全部" }, ...uniqueBy(state.cases, "category", "categoryLabel")];
  const styles = [{ value: "all", label: "全部" }, ...uniqueBy(state.cases, "style", "styleLabel")];
  renderChip(els.categoryChips, categories, state.category, (value) => {
    state.category = value;
    buildFilters();
    applyFilters();
  });
  renderChip(els.styleChips, styles, state.style, (value) => {
    state.style = value;
    buildFilters();
    applyFilters();
  });
}

function applyFilters() {
  const q = state.search.trim().toLowerCase();
  state.filtered = state.cases.filter((item) => {
    if (state.category !== "all" && item.category !== state.category) return false;
    if (state.style !== "all" && item.style !== state.style) return false;
    if (q && !item.searchText.includes(q)) return false;
    return true;
  });
  renderGallery();
}

function renderGallery() {
  els.resultCount.textContent = String(state.filtered.length);
  els.gallery.innerHTML = "";
  state.filtered.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-image-wrap">
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        <img class="card-image" src="${item.imageUrl}" alt="${escapeHtml(item.title)}" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="pill">${item.categoryLabel}</span>
          <span class="pill">${item.styleLabel}</span>
        </div>
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <p class="card-keywords">${escapeHtml(item.keywords || "")}</p>
        <div class="card-source">${escapeHtml(item.sourceLabel || "")}</div>
      </div>
    `;
    card.addEventListener("click", () => openModal(item));
    els.gallery.appendChild(card);
  });
}

function openModal(item) {
  els.modalImage.src = item.imageUrl;
  els.modalImage.alt = item.title;
  els.modalTitle.textContent = item.title;
  els.modalCategory.textContent = item.categoryLabel;
  els.modalStyle.textContent = item.styleLabel;
  els.modalKeywords.textContent = item.keywords || "";
  if (item.sourceUrl) {
    els.modalSourceWrap.style.display = "flex";
    els.modalSource.textContent = item.sourceLabel || item.sourceUrl;
    els.modalSource.href = item.sourceUrl;
  } else {
    els.modalSourceWrap.style.display = "none";
    els.modalSource.textContent = "";
    els.modalSource.removeAttribute("href");
  }
  els.modalPrompt.textContent = item.prompt || "";
  els.modalNegative.textContent = item.negativePrompt || "";
  els.copyPromptBtn.onclick = () => copyText(item.prompt || "");
  els.copyNegativeBtn.onclick = () => copyText(item.negativePrompt || "");
  els.modalBackdrop.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  els.modalBackdrop.classList.add("hidden");
  document.body.style.overflow = "";
}

function copyText(text) {
  navigator.clipboard.writeText(text || "").catch(() => {});
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

els.searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  applyFilters();
});
els.modalClose.addEventListener("click", closeModal);
els.modalBackdrop.addEventListener("click", (e) => {
  if (e.target === els.modalBackdrop) closeModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

loadCases().catch((error) => {
  console.error(error);
  els.gallery.innerHTML = `<div class="card"><div class="card-body"><h3 class="card-title">加载失败</h3><p class="card-keywords">${escapeHtml(error.message)}</p></div></div>`;
});
