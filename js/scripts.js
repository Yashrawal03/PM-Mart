/**
 * PM Mart - Premium Ecommerce Website
 * Custom JavaScript logic
 */

// Premium Loading Screen Logic
const hideLoader = () => {
  const loader = document.getElementById('loader');
  if (loader && !loader.classList.contains('hidden')) {
    loader.classList.add('hidden');
    setTimeout(() => {
      if (loader.parentNode) loader.remove();
    }, 600);
  }
};

window.addEventListener('load', hideLoader);
// Fallback if load event is delayed
setTimeout(hideLoader, 2500);

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Sticky Navigation Background on Scroll
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
  });

  // 2. Search Icon Toggle Logic (UI Only for now)
  const searchBtn = document.getElementById('searchBtn');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // In a full app, this would toggle a search modal or expanding input
      alert('Search functionality will be implemented soon.');
    });
  }

  // 3. Dynamic Current Year for Footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 4. Mobile Menu Close on Link Click (Bootstrap handle toggle, but nice to close on click)
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarNav');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        // Find the bootstrap toggle button and click it to close
        document.querySelector('.navbar-toggler').click();
      }
    });
  });

  // 5. Scroll Fade-in Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in-up');
  fadeElements.forEach(el => observer.observe(el));

  // 6. Newsletter Form Submission (Prevent Default)
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing to PM Mart!');
      newsletterForm.reset();
    });
  }

  // ==========================================================================
  // DYNAMIC PRODUCT LOGIC
  // ==========================================================================
  
  if (typeof PRODUCTS !== 'undefined' && typeof CONFIG !== 'undefined') {
    
    // Helper: Generate WhatsApp URL
    const generateWhatsAppLink = (product) => {
      let message = CONFIG.whatsappMessageTemplate
        .replace('[Product Name]', product.name)
        .replace('[Product Price]', `${CONFIG.currency}${product.price}`);
      return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    };

    // Helper: Create HTML for a single product card
    const createProductCard = (product) => {
      // Determine badge HTML
      let badgeHTML = '';
      if (product.badge) {
        let badgeClass = 'bg-dark';
        let badgeText = product.badge.toLowerCase();
        if (badgeText.includes('new')) badgeClass = 'badge-new';
        else if (badgeText.includes('best')) badgeClass = 'badge-bestseller';
        else if (badgeText.includes('limited')) badgeClass = 'badge-limited';
        else if (badgeText.includes('coming')) badgeClass = 'badge-comingsoon';
        else badgeClass = 'badge-handmade';
        
        badgeHTML = `<span class="dynamic-badge ${badgeClass}">${product.badge}</span>`;
      }

      // WhatsApp Button (Disabled for 'Coming Soon')
      const isComingSoon = product.category === 'spices';
      const btnHTML = isComingSoon 
        ? `<button class="btn btn-secondary btn-whatsapp-card w-100" disabled>Coming Soon</button>`
        : `<a href="${generateWhatsAppLink(product)}" class="btn btn-whatsapp btn-whatsapp-card w-100 text-center text-decoration-none d-block" target="_blank" rel="noopener noreferrer">
             <i class="bi bi-whatsapp me-2"></i> Order on WhatsApp
           </a>`;

      const cardInner = `
        <div class="product-card">
          <a href="product.html?id=${product.id}" class="text-decoration-none" aria-label="View ${product.name}">
            <div class="product-img-wrapper">
              ${badgeHTML}
              <!-- Image with lazy loading and fade effect -->
              <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" decoding="async" onload="this.classList.add('loaded')">
            </div>
          </a>
          <div class="product-details">
            <span class="product-category">${product.category}</span>
            <a href="product.html?id=${product.id}" class="text-decoration-none text-brown">
              <h3 class="product-title hover-text-olive transition-color">${product.name}</h3>
            </a>
            <div class="text-warning mb-2 small">
              <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              <span class="text-muted ms-1">(Premium)</span>
            </div>
            <p class="product-desc">${product.description}</p>
            <div class="product-price">${CONFIG.currency}${product.price}</div>
            <div class="mt-auto product-actions d-flex flex-column gap-2">
              ${btnHTML}
              <a href="product.html?id=${product.id}" class="btn btn-outline-premium w-100 text-center text-decoration-none d-block py-2">
                Quick View
              </a>
            </div>
          </div>
        </div>
      `;

      // For grid layout
      return `<div class="col-sm-6 col-lg-4 col-xl-3 fade-in-up">${cardInner}</div>`;
    };

    // ---------------------------------------------------------
    // PAGE: index.html (Sliders)
    // ---------------------------------------------------------
    const sliderKurtis = document.getElementById('sliderKurtis');
    if (sliderKurtis) {
      const kurtis = PRODUCTS.filter(p => p.category === 'kurtis').slice(0, 8); // Max 8 for slider
      sliderKurtis.innerHTML = kurtis.map(p => createProductCard(p)).join('');
      sliderKurtis.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    }

    const sliderCrafts = document.getElementById('sliderCrafts');
    if (sliderCrafts) {
      const crafts = PRODUCTS.filter(p => p.category === 'crafts').slice(0, 8);
      sliderCrafts.innerHTML = crafts.map(p => createProductCard(p)).join('');
      sliderCrafts.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    }

    // ---------------------------------------------------------
    // PAGE: shop.html (Grid, Filter, Search, Sort)
    // ---------------------------------------------------------
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
      let currentProducts = [...PRODUCTS];
      let currentFilter = 'all';
      let currentSearch = '';
      let currentSort = 'newest';

      const searchInput = document.getElementById('searchInput');
      const filterBtns = document.querySelectorAll('.filter-btn');
      const sortSelect = document.getElementById('sortSelect');
      const noResults = document.getElementById('noResults');
      const resetFiltersBtn = document.getElementById('resetFiltersBtn');

      const renderGrid = () => {
        // 1. Filter by Category
        let filtered = currentFilter === 'all' 
          ? currentProducts 
          : currentProducts.filter(p => p.category === currentFilter);

        // 2. Filter by Search Query
        if (currentSearch.trim() !== '') {
          const query = currentSearch.toLowerCase();
          filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.description.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
          );
        }

        // 3. Sort
        filtered.sort((a, b) => {
          if (currentSort === 'price-low') return a.price - b.price;
          if (currentSort === 'price-high') return b.price - a.price;
          if (currentSort === 'alpha') return a.name.localeCompare(b.name);
          // 'newest' (default)
          return new Date(b.dateAdded) - new Date(a.dateAdded);
        });

        // 4. Render
        if (filtered.length === 0) {
          productGrid.innerHTML = '';
          productGrid.classList.add('d-none');
          noResults.classList.remove('d-none');
        } else {
          // Re-render and re-observe newly created elements for animation
          productGrid.innerHTML = filtered.map(p => createProductCard(p)).join('');
          productGrid.classList.remove('d-none');
          noResults.classList.add('d-none');
          
          // Re-attach observer for smooth fade-in during live search
          document.querySelectorAll('#productGrid .fade-in-up').forEach(el => observer.observe(el));
        }
      };

      // Search Event
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentSearch = e.target.value;
          renderGrid();
        });
      }

      // Filter Buttons Event
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentFilter = btn.getAttribute('data-filter');
          renderGrid();
        });
      });

      // Sort Event
      if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
          currentSort = e.target.value;
          renderGrid();
        });
      }

      // Reset Event
      if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
          currentSearch = '';
          if (searchInput) searchInput.value = '';
          
          currentFilter = 'all';
          filterBtns.forEach(b => b.classList.remove('active'));
          document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
          
          currentSort = 'newest';
          if (sortSelect) sortSelect.value = 'newest';
          
          renderGrid();
        });
      }

      // Check URL Hash for direct category linking (e.g., shop.html#kurtis)
      if (window.location.hash) {
        const hash = window.location.hash.substring(1); // remove '#'
        const targetBtn = document.querySelector(`.filter-btn[data-filter="${hash}"]`);
        if (targetBtn) {
          targetBtn.click(); // Trigger the filter
        } else {
          renderGrid(); // Initial render
        }
      } else {
        renderGrid(); // Initial render
      }
    }
  }

  // ==========================================================================
  // GLOBAL NAVIGATION & UI (Floating Buttons, Contacts, Footer)
  // ==========================================================================
  if (typeof CONFIG !== 'undefined') {
    // Inject Floating Buttons (Desktop & Tablet)
    const floatingActions = document.createElement('div');
    floatingActions.className = 'floating-actions';
    floatingActions.innerHTML = `
      <a href="https://wa.me/${CONFIG.whatsappNumber}" class="floating-btn floating-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Order on WhatsApp">
        <i class="bi bi-whatsapp"></i>
      </a>
      <a href="tel:${CONFIG.phoneNumber}" class="floating-btn floating-call" aria-label="Call Now">
        <i class="bi bi-telephone"></i>
      </a>
    `;
    document.body.appendChild(floatingActions);

    const backToTopBtn = document.createElement('a');
    backToTopBtn.href = '#';
    backToTopBtn.className = 'floating-btn floating-top';
    backToTopBtn.setAttribute('aria-label', 'Back to Top');
    backToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);

    // Inject Mobile Sticky Bottom Bar
    const mobileBottomBar = document.createElement('div');
    mobileBottomBar.className = 'mobile-bottom-bar';
    mobileBottomBar.innerHTML = `
      <div class="mobile-bar-inner">
        <a href="shop.html" class="mobile-bar-btn" aria-label="Shop">
          <i class="bi bi-shop"></i>
          Shop
        </a>
        <a href="https://wa.me/${CONFIG.whatsappNumber}" class="mobile-bar-btn mobile-bar-btn-primary" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <i class="bi bi-whatsapp"></i>
          WhatsApp
        </a>
        <a href="tel:${CONFIG.phoneNumber}" class="mobile-bar-btn" aria-label="Call">
          <i class="bi bi-telephone"></i>
          Call
        </a>
      </div>
    `;
    document.body.appendChild(mobileBottomBar);

    // Back to top visibility & scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Populate Dynamic Fields
    document.querySelectorAll('.dynamic-whatsapp-nav').forEach(el => {
      el.href = `https://wa.me/${CONFIG.whatsappNumber}`;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });
    document.querySelectorAll('.dynamic-call-nav').forEach(el => {
      el.href = `tel:${CONFIG.phoneNumber}`;
      if (el.classList.contains('set-text')) el.textContent = CONFIG.phoneNumber;
    });
    document.querySelectorAll('.dynamic-email-nav').forEach(el => {
      el.href = `mailto:${CONFIG.emailAddress}`;
      if (el.classList.contains('set-text')) el.textContent = CONFIG.emailAddress;
    });
    document.querySelectorAll('.dynamic-insta-nav').forEach(el => {
      el.href = CONFIG.instagramUrl;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });
    document.querySelectorAll('.dynamic-facebook-nav').forEach(el => {
      el.href = CONFIG.instagramUrl;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });
    
    document.querySelectorAll('.dynamic-fb-nav').forEach(el => {
      el.href = CONFIG.facebookUrl;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });

    // Email
    document.querySelectorAll('.dynamic-email-nav').forEach(el => el.href = `mailto:${CONFIG.emailAddress}`);
    document.querySelectorAll('.dynamic-email-text').forEach(el => el.textContent = CONFIG.emailAddress);

    // Phone
    document.querySelectorAll('.dynamic-phone-nav').forEach(el => el.href = `tel:${CONFIG.phoneNumber}`);
    document.querySelectorAll('.dynamic-phone-text').forEach(el => el.textContent = CONFIG.phoneNumber);
    
    // Identity
    document.querySelectorAll('.dynamic-store-name').forEach(el => el.textContent = CONFIG.storeName || '');
    document.querySelectorAll('.dynamic-tagline').forEach(el => el.textContent = CONFIG.tagline || '');
    
    // Location
    document.querySelectorAll('.dynamic-store-address').forEach(el => el.textContent = CONFIG.storeAddress || '');
    document.querySelectorAll('.dynamic-store-city').forEach(el => el.textContent = CONFIG.storeCityState || '');
    document.querySelectorAll('.dynamic-store-timings').forEach(el => el.textContent = CONFIG.storeTimings || '');
    document.querySelectorAll('.dynamic-maps-nav').forEach(el => {
      if(el.tagName === 'IFRAME') {
        el.src = CONFIG.googleMapsEmbedUrl || CONFIG.googleMapsUrl;
      } else {
        el.href = CONFIG.googleMapsUrl;
      }
    });
  }

  // ==========================================================================
  // PAGE: product.html (Product Details)
  // ==========================================================================
  const productDetailsContainer = document.getElementById('productDetailsContainer');
  if (productDetailsContainer && typeof PRODUCTS !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = PRODUCTS.find(p => p.id === productId);

    const notFoundDiv = document.getElementById('productNotFound');
    const relatedSection = document.getElementById('relatedProductsSection');

    if (!product) {
      productDetailsContainer.classList.add('d-none');
      if (relatedSection) relatedSection.classList.add('d-none');
      if (notFoundDiv) notFoundDiv.classList.remove('d-none');
    } else {
      // 1. Populate Basic Details
      document.getElementById('mainProductImage').src = product.image;
      document.getElementById('productCategoryBadge').textContent = product.category;
      document.getElementById('productTitle').textContent = product.name;
      document.getElementById('productPrice').textContent = `${CONFIG.currency}${product.price}`;
      document.getElementById('productDesc').textContent = product.description;

      // 2. Populate Details List
      const detailsList = document.getElementById('productDetailsList');
      if (product.details && product.details.length > 0) {
        detailsList.innerHTML = product.details.map(detail => `<li>${detail}</li>`).join('');
      } else {
        detailsList.innerHTML = '<li>Premium quality product</li><li>Authentic PM Mart collection</li>';
      }

      // 3. Populate Thumbnails
      const thumbsContainer = document.getElementById('productThumbnails');
      if (product.gallery && product.gallery.length > 0) {
        thumbsContainer.innerHTML = product.gallery.map((imgSrc, index) => `
          <div class="col-4 col-md-3">
            <div class="thumbnail-wrapper ${index === 0 ? 'active' : ''}" data-src="${imgSrc}">
              <img src="${imgSrc}" class="thumbnail-img" alt="Thumbnail ${index + 1}">
            </div>
          </div>
        `).join('');

        // Setup Thumbnail Click Events
        const thumbs = thumbsContainer.querySelectorAll('.thumbnail-wrapper');
        const mainImage = document.getElementById('mainProductImage');

        thumbs.forEach(thumb => {
          thumb.addEventListener('click', function() {
            // Remove active from all
            thumbs.forEach(t => t.classList.remove('active'));
            // Add active to clicked
            this.classList.add('active');
            
            // Swap image with fade animation
            const newSrc = this.getAttribute('data-src');
            mainImage.classList.remove('fade-transition');
            
            // Trigger reflow to restart animation
            void mainImage.offsetWidth; 
            
            mainImage.src = newSrc;
            mainImage.classList.add('fade-transition');
          });
        });
      }

      // 4. Setup Action Buttons
      const btnWhatsapp = document.getElementById('btnWhatsappOrder');
      if (product.category === 'spices') {
        btnWhatsapp.textContent = 'Coming Soon';
        btnWhatsapp.classList.replace('btn-whatsapp', 'btn-secondary');
        btnWhatsapp.removeAttribute('href');
        btnWhatsapp.style.pointerEvents = 'none';
      } else {
        btnWhatsapp.href = generateWhatsAppLink(product);
      }

      document.getElementById('btnCallNow').href = `tel:${CONFIG.phoneNumber}`;

      const btnShare = document.getElementById('btnShare');
      btnShare.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
          const originalText = btnShare.innerHTML;
          btnShare.innerHTML = '<i class="bi bi-check-circle me-2"></i> Copied!';
          btnShare.classList.replace('btn-outline-secondary', 'btn-success');
          btnShare.style.color = 'white';
          setTimeout(() => {
            btnShare.innerHTML = originalText;
            btnShare.classList.replace('btn-success', 'btn-outline-secondary');
            btnShare.style.color = '';
          }, 2000);
        });
      });

      // 4. Update Meta Tags & Schema for SEO
      document.title = `${product.name} | PM Mart`;
      
      const setMeta = (id, content) => {
        const el = document.getElementById(id);
        if (el) el.setAttribute('content', content);
      };
      
      const currentUrl = window.location.href;
      // Using absolute paths for meta tags
      const fullImgUrl = product.image.startsWith('http') ? product.image : `https://pmmart.in/${product.image}`;
      
      setMeta('meta-og-url', currentUrl);
      setMeta('meta-og-title', `${product.name} | PM Mart`);
      setMeta('meta-og-description', product.description);
      setMeta('meta-og-image', fullImgUrl);
      
      setMeta('meta-tw-url', currentUrl);
      setMeta('meta-tw-title', `${product.name} | PM Mart`);
      setMeta('meta-tw-description', product.description);
      setMeta('meta-tw-image', fullImgUrl);

      // Inject Schema.org Product JSON-LD
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.text = JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": fullImgUrl,
        "description": product.description,
        "sku": product.id,
        "brand": {
          "@type": "Brand",
          "name": "PM Mart"
        },
        "offers": {
          "@type": "Offer",
          "url": currentUrl,
          "priceCurrency": "INR",
          "price": product.price,
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock"
        }
      });
      document.head.appendChild(schemaScript);

      // 5. Related Products
      const relatedSlider = document.getElementById('relatedProductsSlider');
      if (relatedSlider) {
        const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
        if (related.length > 0) {
          relatedSlider.innerHTML = related.map(p => createProductCard(p)).join('');
          relatedSlider.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
        } else {
          relatedSection.classList.add('d-none');
        }
      }
    }
  }
});
