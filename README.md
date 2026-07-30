# PM Mart

Welcome to the **PM Mart** repository! PM Mart is a premium Indian lifestyle and ecommerce brand offering handcrafted kurtis, unique handmade crafts, and authentic flavors. 

## Overview
This repository contains the complete frontend architecture of the PM Mart website, designed with a focus on luxury aesthetics, minimal design, and a modern Indian feel. 

The website uses a highly dynamic, JSON-driven product architecture allowing effortless catalog updates without complex backend dependencies.

## Features
- **Dynamic Catalog:** Products are rendered dynamically from `js/products.js`, making updates simple and fast.
- **Premium Aesthetics:** Features deep, rich CSS stylings, subtle SVG botanical patterns, and robust micro-animations (parallax, hover zooms, and ripple effects).
- **Fully Responsive:** Designed using Bootstrap 5 to look stunning on mobile devices, tablets, and large desktop screens.
- **WhatsApp Integration:** Built-in floating action buttons and quick-order functionality seamlessly routing customers to WhatsApp.
- **SEO Optimized:** Structured semantic HTML, rich meta tags, and Open Graph configurations ready for production deployment.

## Tech Stack
- **HTML5** (Semantic structuring)
- **CSS3** (Custom properties, micro-animations, flexbox/grid)
- **Bootstrap 5** (Responsive grid foundation)
- **Vanilla JavaScript** (ES6+, IntersectionObserver for scroll reveals, dynamic DOM injection)

## Folder Structure
```
├── assets/
│   ├── img/          # Premium product and lifestyle images
│   └── branding/     # SVG vector logos, favicons, and branding assets
├── css/
│   └── styles.css    # Core luxury styling and animations
├── js/
│   ├── config.js     # Global configuration (contacts, socials)
│   ├── products.js   # Dynamic product inventory catalog
│   └── scripts.js    # UI interactions and DOM rendering logic
├── index.html        # Landing page
├── shop.html         # Full catalog with filtering & search
├── product.html      # Dynamic single product details page
├── about.html        # Brand story
├── contact.html      # Contact form and mapping
└── sitemap.xml       # SEO sitemap
```

## Setup & Deployment
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/pm-mart.git
   ```
2. **Run Locally:**
   Since the project relies heavily on modular JavaScript and dynamic DOM generation, run it through a local web server to avoid CORS issues:
   - *VS Code:* Install the "Live Server" extension and hit "Go Live".
   - *Node:* `npx serve .`
   - *Python:* `python -m http.server 8000`
3. **Deploy:**
   The project is completely static and ready to be dropped into Vercel, Netlify, or GitHub Pages.

## Managing Content
- **To update socials or contact info:** Edit `js/config.js`
- **To add/remove products:** Edit the array in `js/products.js`. The Shop grid and Featured sections will automatically update.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
