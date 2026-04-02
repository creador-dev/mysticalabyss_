import { useEffect } from "react";
import { instagramUrl, products } from "./data/products";
import { reels } from "./data/reels";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const featuredProduct = products[2];
  const instagramPreview = products.slice(2, 5);
  const latestReels = reels.slice(0, 6);
  const formatViews = (views) => new Intl.NumberFormat("en-IN").format(views);
  const formatDate = (timestamp) =>
    new Date(timestamp * 1000).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short"
    });

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav">
          <a className="brand-mini" href="#top" aria-label="Korean Glass Skin Products home">
            <div className="brand-mark">KG</div>
            <div>
              <strong>Korean Glass Skin Products</strong>
              <span>Curated K-beauty glow essentials</span>
            </div>
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#products">Show Products</a>
            <a href="#instagram">Instagram</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container">
            <div className="hero-card reveal">
              <div className="hero-grid">
                <div className="hero-copy">
                  <div className="pill eyebrow">Pastel-picked skincare favorites</div>
                  <h1>Korean Glass Skin Products</h1>
                  <p>
                    Achieve Glass Skin Glow. Discover viral skincare picks, curated
                    routines, and easy product links your Instagram audience can tap in seconds.
                  </p>
                  <div className="hero-actions">
                    <a className="button primary" href="#products">
                      Show Products
                    </a>
                    <a className="button secondary" href={instagramUrl} target="_blank" rel="noreferrer">
                      Visit Instagram
                    </a>
                  </div>
                  <div className="info-strip">
                    <div className="info-card">
                      <strong>{products.length}</strong>
                      <span>Curated picks</span>
                    </div>
                    <div className="info-card">
                      <strong>Soft</strong>
                      <span>Pastel luxury aesthetic</span>
                    </div>
                    <div className="info-card">
                      <strong>Fast</strong>
                      <span>Instagram-first shopping flow</span>
                    </div>
                    <div className="info-card">
                      <strong>Ready</strong>
                      <span>Vercel-friendly React project</span>
                    </div>
                  </div>
                </div>

                <div className="hero-visual" aria-hidden="true">
                  <div className="hero-product">
                    <img src={featuredProduct.image} alt={featuredProduct.name} />
                  </div>
                  <div className="floating-note">
                    <strong>Glow Layering</strong>
                    <span>Cleanser, toner, serum, mask, and moisturizers styled for conversion.</span>
                  </div>
                  <div className="floating-stat">
                    <strong>@mysticalabyss_</strong>
                    <span>Tap from reels to product pages with one polished storefront.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="pill">Linked Product Edit</div>
                <h2>Shop your glow routine</h2>
              </div>
              <p>
                Each card is connected to your real storefront links, so followers can move
                from discovery to checkout with less friction.
              </p>
            </div>

            <div className="products-grid">
              {products.map((product, index) => (
                <article
                  className="product-card reveal"
                  key={product.name}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="product-media">
                    <span className="badge">{product.badge}</span>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-content">
                    <div className="product-top">
                      <h3>{product.name}</h3>
                      <span className="product-price">{product.price}</span>
                    </div>
                    <p>{product.description}</p>
                    <div className="product-meta">
                      {product.tags.map((tag) => (
                        <span className="meta-chip" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a className="button primary" href={product.link} target="_blank" rel="noreferrer">
                      Buy Now
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="instagram">
          <div className="container">
            <div className="instagram-card reveal">
              <div className="instagram-grid">
                <div className="instagram-copy">
                  <div className="pill">Instagram Beauty Feed</div>
                  <h2>Drive clicks straight from your bio</h2>
                  <p>
                    Keep the aesthetic soft and premium while giving your audience a fast path
                    from inspiration to purchase.
                  </p>
                  <div className="hero-actions">
                    <a className="button primary" href={instagramUrl} target="_blank" rel="noreferrer">
                      Open Instagram Profile
                    </a>
                    <a className="button secondary" href="#shop">
                      Show Products
                    </a>
                  </div>
                </div>

                <div className="instagram-preview">
                  {instagramPreview.map((product, index) => (
                    <div
                      className="preview-card reveal"
                      key={product.name}
                      style={{
                        "--tilt": index === 1 ? "0deg" : index === 0 ? "-4deg" : "4deg",
                        transitionDelay: `${140 + index * 80}ms`
                      }}
                    >
                      <img src={product.image} alt={product.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="reels">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="pill">Latest Reels</div>
                <h2>Fresh from mysticalabyss_</h2>
              </div>
              <p>
                The six latest public reels from the account, styled like a feed and linked
                straight to Instagram.
              </p>
            </div>

            <div className="reels-grid">
              {latestReels.map((reel, index) => (
                <a
                  className="reel-card reveal"
                  key={reel.shortcode}
                  href={reel.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="reel-media">
                    <img src={reel.thumbnail} alt={reel.caption} />
                    <span className="play-badge">▶ Reel</span>
                  </div>
                  <div className="reel-content">
                    <div className="reel-meta">
                      <span>{formatDate(reel.timestamp)}</span>
                      <span>{formatViews(reel.views)} views</span>
                    </div>
                    <p>{reel.caption}</p>
                    <strong>Watch on Instagram</strong>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="shop">
          <div className="container">
            <div className="cta-card reveal">
              <div className="cta-grid">
                <div className="cta-content">
                  <div className="pill">Show Products</div>
                  <h2>Make every product tap feel intentional</h2>
                  <p>
                    A mobile-first, premium bio page that keeps attention high and makes
                    the next click obvious.
                  </p>
                  <div className="cta-actions">
                    <a className="button primary" href="#products">
                      Show Products
                    </a>
                    <a className="button secondary" href={instagramUrl} target="_blank" rel="noreferrer">
                      Follow mysticalabyss_ for more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-card reveal">
            <div>
              <strong>Korean Glass Skin Products</strong>
              <p>
                Curated skincare favorites designed for elegant discovery, smooth scrolling,
                and higher-converting Instagram traffic.
              </p>
            </div>
            <div className="footer-links">
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={products[2].link} target="_blank" rel="noreferrer">
                Nykaa
              </a>
              <a href={products[3].link} target="_blank" rel="noreferrer">
                Maccaron
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
