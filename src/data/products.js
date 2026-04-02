const makeProductArt = ({
  bottle = "#f7d0da",
  cap = "#d9879e",
  label = "#fffaf8",
  accent = "#f1b6b4",
  bg1 = "#fff0f2",
  bg2 = "#fff6ee",
  shape = "bottle"
}) => {
  const bottleMarkup =
    shape === "jar"
      ? `
        <rect x="88" y="84" width="124" height="22" rx="10" fill="${cap}" opacity="0.92"/>
        <rect x="72" y="104" width="156" height="112" rx="34" fill="${bottle}" />
        <rect x="92" y="130" width="116" height="54" rx="16" fill="${label}" />
        <rect x="107" y="147" width="86" height="10" rx="5" fill="${accent}" opacity="0.65" />
      `
      : `
        <rect x="118" y="52" width="64" height="34" rx="14" fill="${cap}" opacity="0.96"/>
        <rect x="102" y="82" width="96" height="154" rx="34" fill="${bottle}" />
        <rect x="114" y="118" width="72" height="64" rx="18" fill="${label}" />
        <rect x="126" y="140" width="48" height="10" rx="5" fill="${accent}" opacity="0.68" />
      `;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="bgGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${bg1}" />
          <stop offset="100%" stop-color="${bg2}" />
        </linearGradient>
        <radialGradient id="glow" cx="30%" cy="20%" r="70%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="300" rx="40" fill="url(#bgGrad)" />
      <circle cx="60" cy="58" r="82" fill="url(#glow)" opacity="0.8" />
      <circle cx="250" cy="50" r="46" fill="#ffffff" opacity="0.32" />
      <ellipse cx="150" cy="248" rx="78" ry="18" fill="#e8d6d2" opacity="0.4"/>
      ${bottleMarkup}
      <path d="M80 242C118 226 195 226 224 242" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.72"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const instagramUrl =
  "https://www.instagram.com/mysticalabyss_?igsh=bDZvMWtqejh3YXB1";

export const products = [
  {
    name: "Nivea Essential Care Lip Balm",
    description:
      "An everyday moisture-balancing lip essential that keeps lips smooth, soft, and selfie-ready throughout the day.",
    price: "Daily care",
    badge: "Lip Care",
    tags: ["Hydrating", "Travel friendly"],
    link: "https://www.nykaa.com/nivea-essential-care/p/2219?se=0",
    image: makeProductArt({
      bottle: "#f6dfd6",
      cap: "#d88f84",
      accent: "#efb6aa",
      bg1: "#fff5f1",
      bg2: "#ffebe3"
    })
  },
  {
    name: "The Body Shop Vitamin E Moisture Cream",
    description:
      "A comfort-first moisturizer made for soft, nourished skin with a plush finish that layers beautifully under makeup.",
    price: "Moisture cream",
    badge: "Barrier Boost",
    tags: ["Cream", "Soft finish"],
    link: "https://www.nykaa.com/the-body-shop-vitamin-e-moisture-cream/p/1396398?skuId=25260&se=0",
    image: makeProductArt({
      bottle: "#f1d6e5",
      cap: "#c881a2",
      accent: "#e3acc4",
      bg1: "#fff4f8",
      bg2: "#fff8f2",
      shape: "jar"
    })
  },
  {
    name: "AXIS-Y Dark Spot Correcting Glow Serum",
    description:
      "A glow-focused serum that fits dark spot care routines while keeping the texture lightweight and easy to layer.",
    price: "Glow serum",
    badge: "Brightening",
    tags: ["Serum", "Even tone"],
    link: "https://www.nykaa.com/axis-y-dark-spot-correcting-glow-serum/p/17888341?se=0",
    image: makeProductArt({
      bottle: "#dff0dc",
      cap: "#88b38f",
      accent: "#b5d9b5",
      bg1: "#f4fbf1",
      bg2: "#fff8f3"
    })
  },
  {
    name: "AXIS-Y Dark Spot Correcting Glow Toner",
    description:
      "A refreshing toner step for glow routines that helps prep skin for serums and moisturizers without feeling heavy.",
    price: "Prep toner",
    badge: "Toning Step",
    tags: ["Toner", "Layering"],
    link: "https://maccaron.in/en/products/axis-y_dark-spot-correcting-glow-toner/96599/",
    image: makeProductArt({
      bottle: "#e5f4e1",
      cap: "#8aa885",
      accent: "#c1ddb9",
      bg1: "#f6fcf2",
      bg2: "#fdf6ee"
    })
  },
  {
    name: "AXIS-Y New Skin Resolution Gel Mask",
    description:
      "A cooling gel mask designed for reset days when your routine needs a fresh, calm, hydrated-looking finish.",
    price: "Wash-off mask",
    badge: "Reset Ritual",
    tags: ["Mask", "Cooling"],
    link: "https://www.nykaa.com/axis-y-new-skin-resolution-gel-mask/p/17888346?se=0",
    image: makeProductArt({
      bottle: "#d9ecd7",
      cap: "#7fa379",
      accent: "#b1d0a8",
      bg1: "#f1f9ef",
      bg2: "#fff6ef",
      shape: "jar"
    })
  },
  {
    name: "The Body Shop Deep Cleansing Seaweed Facial Wash",
    description:
      "A fresh facial wash pick for cleansing routines that want a lightweight, clarified, just-washed feel.",
    price: "Cleanser",
    badge: "Fresh Cleanse",
    tags: ["Face wash", "Daily use"],
    link: "https://www.nykaa.com/the-body-shop-deep-cleansing-seaweed-facial-wash/p/25284?se=0",
    image: makeProductArt({
      bottle: "#d8efe4",
      cap: "#76a694",
      accent: "#a4d0bf",
      bg1: "#f1faf6",
      bg2: "#eff9f4"
    })
  },
  {
    name: "Klairs Gentle Black Deep Cleansing Oil",
    description:
      "A beloved first-cleansing oil for melting makeup, sunscreen, and buildup while keeping the finish comfortable.",
    price: "Cleansing oil",
    badge: "Best Seller",
    tags: ["Oil cleanse", "Makeup melt"],
    link: "https://www.nykaa.com/klairs-gentle-black-deep-cleansing-oil/p/262938?se=0",
    image: makeProductArt({
      bottle: "#e3d7cb",
      cap: "#ab8e78",
      accent: "#d5b9a0",
      bg1: "#faf5ef",
      bg2: "#f7ece2"
    })
  }
];
