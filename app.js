const products = [
  {
    name: "Best Hmt Rice",
    family: "Hmt Rice",
    type: "Hmt",
    image: "RICE/HMT/Hmt RAW.jpg",
    cutout: "RICE_CUTOUTS_WEBP_V4/HMT__HMT_RAW.webp?v=top-design-4",
    description: "Premium Hmt rice with a clean polished presentation for daily and dealer supply.",
    grain: "Hmt Rice Old 12+ Months",
    packing: "26 kg bags",
    tone: "#d66d2f",
  },
  {
    name: "Hmt Raw Rice",
    family: "Hmt Rice",
    type: "Raw",
    image: "RICE/HMT/Hmt Raw New.jpg",
    cutout: "RICE_CUTOUTS_WEBP_V4/HMT__HMT_RAW_NEW.webp?v=top-design-4",
    description: "Hmt raw rice packed for consistent grain quality and dealer-ready supply.",
    grain: "Hmt Rice New",
    packing: "26 kg bags",
    tone: "#32b6bd",
  },
  {
    name: "Hmt Steam Rice",
    family: "Hmt Rice",
    type: "Steam",
    image: "RICE/HMT/Hmt Steam.jpg",
    cutout: "RICE_CUTOUTS_WEBP_V4/HMT__HMT_STEAM.webp?v=top-design-4",
    description: "Steam processed Hmt rice with consistent cooking character and export-ready sack appeal.",
    grain: "Medium Grain Steam Rice",
    packing: "26 kg bags",
    tone: "#e6842d",
  },
  {
    name: "Jai Sri Ram Rice",
    family: "Jai Sri Ram Rice",
    type: "Classic",
    image: "RICE/JAI SRI RAM/JAI SRI RAM RAW.jpg",
    cutout: "RICE_CUTOUTS_WEBP_V4/JAI_SRI_RAM__JAI_SRI_RAM_RAW.webp?v=top-design-4",
    description: "Signature Jai Sri Ram rice with a refined regional and export-ready presence.",
    grain: "Jai Sri Ram Raw Old Rice 12+ Months",
    packing: "26 kg bags",
    tone: "#d9a13c",
  },
  {
    name: "Jai Sri Ram Raw Rice",
    family: "Jai Sri Ram Rice",
    type: "Raw",
    image: "RICE/JAI SRI RAM/JAI SRI RAM RAW NEW.jpg",
    cutout: "RICE_CUTOUTS_WEBP_V4/JAI_SRI_RAM__JAI_SRI_RAM_RAW_NEW.webp?v=top-design-4",
    description: "Jai Sri Ram raw rice with a clean grain profile and premium trade presentation.",
    grain: "Jai Sri Ram Rice New",
    packing: "26 kg bags",
    tone: "#c7a35e",
  },
  {
    name: "Jai Sri Ram Steam Rice",
    family: "Jai Sri Ram Rice",
    type: "Steam",
    image: "RICE/JAI SRI RAM/JAI SRI RAM STEAM.jpg",
    cutout: "RICE_CUTOUTS_WEBP_V4/JAI_SRI_RAM__JAI_SRI_RAM_STEAM.webp?v=top-design-4",
    description: "A refined steam rice pack with rich brand presence and dependable grain quality.",
    grain: "Steam Processed Rice",
    packing: "26 kg bags",
    tone: "#c99536",
  },
  {
    name: "Kesar Lachkari Kolam Rice",
    family: "Jai Sri Ram Rice",
    type: "Kesar Lachkari",
    image: "RICE/JAI SRI RAM/KESAR LACHKARI KOLAM.jpg",
    cutout: "RICE_CUTOUTS_WEBP_V4/JAI_SRI_RAM__KESAR_LACHKARI_KOLAM.webp?v=top-design-4",
    description: "Premium Kolam rice with vibrant pack colors and a refined food-brand catalog look.",
    grain: "Kolam Rice",
    packing: "26 kg bags",
    tone: "#25b6bd",
  },
  {
    name: "Mini Kolam Rice",
    family: "Mini Kolam Rice",
    type: "Mini Kolam",
    image: "RICE/MINI KOLAM RICE.jpg",
    cutout: "RICE_CUTOUTS_WEBP_V4/MINI_KOLAM_RICE.webp?v=top-design-4",
    description: "Compact full-bodied Mini Kolam rice presented with sharp, luxury product framing.",
    grain: "Mini Kolam Rice",
    packing: "26 kg bags",
    tone: "#7b3e96",
  },
  {
    name: "Sona Masoori Rice",
    family: "Sona Masoori Rice",
    type: "Sona",
    image: "RICE/SONA MASOORI/Sona Masoori Steam New.jpg",
    cutout: "RICE_CUTOUTS_WEBP_V4/SONA_MASOORI__SONA_MASOORI_STEAM_NEW.webp?v=top-design-4",
    description: "Sona Masoori rice with a soft premium finish and balanced everyday grain profile.",
    grain: "Sona Masoori Old 12+ Months Rice",
    packing: "26 kg bags",
    tone: "#68b76b",
  },
  {
    name: "Sona Masoori Steam Rice",
    family: "Sona Masoori Rice",
    type: "Steam",
    image: "RICE/SONA MASOORI/Sona Masoori Steam.jpg",
    cutout: "RICE_CUTOUTS_WEBP_V4/SONA_MASOORI__SONA_MASOORI_STEAM.webp?v=top-design-4",
    description: "Steam processed Sona Masoori rice for modern households, dealers, and bulk buyers.",
    grain: "Sona Masoori Steam Rice",
    packing: "26 kg bags",
    tone: "#4f9e63",
  },
];

function productCard(product, index, featured = false) {
  return `
    <article class="product-card reveal" style="--tone: ${product.tone}; transition-delay: ${Math.min(index * 60, 360)}ms">
      <button class="product-select" type="button" data-product="${product.name}" aria-label="View ${product.name} details"></button>
      <div class="product-image">
        <img src="${product.cutout}" alt="SK Murali ${product.name} 26 kg rice bag by Sri Krishna Agro Industries" loading="lazy" decoding="async" />
      </div>
      <div class="product-content">
        <span class="product-badge">Export quality</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <ul class="spec-list">
          <li><span>Grain type</span><strong>${product.grain}</strong></li>
          <li><span>Packaging</span><strong>${product.packing}</strong></li>
        </ul>
      </div>
    </article>
  `;
}

const featuredSlider = document.getElementById("featuredSlider");
if (featuredSlider) {
  featuredSlider.innerHTML = products
    .slice(0, 6)
    .map((product, index) => productCard(product, index, true))
    .join("");
}

const productGroups = products.reduce((groups, product) => {
  groups[product.family] = groups[product.family] || [];
  groups[product.family].push(product);
  return groups;
}, {});

document.getElementById("productGrid").innerHTML = Object.entries(productGroups)
  .map(
    ([family, items], groupIndex) => `
      <section class="rice-family reveal" data-family="${family}" style="transition-delay: ${groupIndex * 80}ms">
        <div class="rice-family-heading">
          <p>${items.length} ${items.length === 1 ? "variety" : "varieties"}</p>
          <h3>${family}</h3>
        </div>
        <div class="rice-family-grid">
          ${items.map((product, index) => productCard(product, index)).join("")}
        </div>
      </section>
    `,
  )
  .join("");

function showProductFamily(family) {
  document.querySelectorAll("[data-family]").forEach((item) => item.classList.remove("is-active"));
  document.querySelector(`[data-family="${family}"]`)?.classList.add("is-active");

  document.querySelectorAll(".rice-family").forEach((group) => {
    const shouldShow = family === "all" || group.dataset.family === family;
    group.hidden = !shouldShow;
  });
}

document.querySelectorAll(".collection-tabs [data-family]").forEach((button) => {
  button.addEventListener("click", () => {
    showProductFamily(button.dataset.family);
  });
});

document.querySelectorAll("[data-footer-family]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showProductFamily(link.dataset.footerFamily);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#products");
  });
});

const currentYear = document.getElementById("currentYear");
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = products.find((item) => item.name === button.dataset.product);
    if (!product) return;
    document.querySelectorAll(".product-card").forEach((card) => card.classList.remove("is-selected"));
    button.closest(".product-card").classList.add("is-selected");
    document.querySelectorAll("[data-family]").forEach((item) => item.classList.remove("is-active"));
    const familyButton = document.querySelector(`[data-family="${product.family}"]`);
    familyButton?.classList.add("is-active");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const slider = document.getElementById("featuredSlider");
let isDown = false;
let startX = 0;
let scrollLeft = 0;

if (slider) {
  slider.addEventListener("pointerdown", (event) => {
    isDown = true;
    slider.setPointerCapture(event.pointerId);
    startX = event.clientX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("pointermove", (event) => {
    if (!isDown) return;
    slider.scrollLeft = scrollLeft - (event.clientX - startX);
  });

  slider.addEventListener("pointerup", () => {
    isDown = false;
  });

  slider.addEventListener("pointercancel", () => {
    isDown = false;
  });
}
