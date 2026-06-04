/* ============================================================
   BRAND ECOMMERCE - app.js
   ============================================================ */

/* ============================================================
   PRODUCT DATA
   ============================================================ */
const PRODUCTS = [
  {
    id: 1, category: "Electronics", name: "Wireless Noise-Cancelling Headphones Pro",
    price: 89.99, originalPrice: 149.99, rating: 4.7, reviewCount: 342,
    badge: "sale", discount: "40% OFF", icon: "🎧", inStock: true,
    image: "assets/product-1.png",
    description: "Premium over-ear headphones with active noise cancellation, 30hr battery life, and Hi-Res audio support.",
    specs: { "Brand": "SoundWave", "Model": "SW-Pro X", "Battery": "30 Hours", "Connectivity": "Bluetooth 5.2", "Weight": "250g", "Warranty": "1 Year" }
  },
  {
    id: 2, category: "Electronics", name: "4K Ultra HD Smart Television 55 inch",
    price: 499.99, originalPrice: 699.99, rating: 4.5, reviewCount: 218,
    badge: "hot", discount: "28% OFF", icon: "📺", inStock: true,
    image: "assets/product-2.png",
    description: "Crystal-clear 4K display with HDR10+, built-in streaming apps, and voice control.",
    specs: { "Brand": "VisionMax", "Screen": "55 inches", "Resolution": "3840x2160", "HDR": "HDR10+", "Ports": "4x HDMI", "Warranty": "2 Years" }
  },
  {
    id: 3, category: "Electronics", name: "Mechanical Gaming Keyboard RGB",
    price: 59.99, originalPrice: 89.99, rating: 4.6, reviewCount: 567,
    badge: "new", discount: "33% OFF", icon: "⌨️", inStock: true,
    image: "assets/product-3.png",
    description: "Full-size mechanical keyboard with Cherry MX switches, per-key RGB backlighting.",
    specs: { "Brand": "KeyForce", "Switches": "Cherry MX Red", "Backlight": "RGB", "Layout": "Full Size", "Anti Ghost": "Yes", "Warranty": "2 Years" }
  },
  {
    id: 4, category: "Electronics", name: "Smartphone 12 Pro Max 256GB",
    price: 899.99, originalPrice: 1099.99, rating: 4.8, reviewCount: 1024,
    badge: "hot", discount: "18% OFF", icon: "📱", inStock: true,
    image: "assets/product-4.png",
    description: "Latest flagship smartphone with triple camera system, 5G ready, all-day battery.",
    specs: { "Brand": "NovaTech", "Storage": "256 GB", "RAM": "12 GB", "Camera": "108MP Triple", "Battery": "5000mAh", "OS": "Android 14" }
  },
  {
    id: 5, category: "Electronics", name: "Portable Bluetooth Speaker Waterproof",
    price: 39.99, originalPrice: 59.99, rating: 4.4, reviewCount: 289,
    badge: "sale", discount: "33% OFF", icon: "🔊", inStock: true,
    image: "assets/product-5.png",
    description: "360 degree surround sound with IPX7 waterproof rating. 20-hour playtime.",
    specs: { "Brand": "BoomBox", "Battery": "20 Hours", "Waterproof": "IPX7", "Bluetooth": "5.0", "Weight": "680g", "Warranty": "1 Year" }
  },
  {
    id: 6, category: "Electronics", name: "Laptop 15 inch Intel Core i7 512GB SSD",
    price: 749.99, originalPrice: 999.99, rating: 4.6, reviewCount: 432,
    badge: "sale", discount: "25% OFF", icon: "💻", inStock: true,
    image: "assets/product-6.png",
    description: "Thin and light laptop with Intel Core i7, 16GB RAM, 512GB SSD, and 10-hour battery.",
    specs: { "Brand": "SwiftBook", "CPU": "Intel Core i7", "RAM": "16 GB", "Storage": "512 GB SSD", "Display": "15.6 inch FHD", "Battery": "10 Hours" }
  },
  {
    id: 7, category: "Fashion", name: "Men's Classic Slim-Fit Jacket",
    price: 79.99, originalPrice: 119.99, rating: 4.3, reviewCount: 156,
    badge: "new", discount: "33% OFF", icon: "🧥", inStock: true,
    image: "assets/product-7.png",
    description: "Premium slim-fit jacket for men. Available in multiple colors.",
    specs: { "Material": "Polyester Blend", "Fit": "Slim Fit", "Sizes": "S, M, L, XL, XXL", "Care": "Machine Wash", "Season": "All Season", "Origin": "Imported" }
  },
  {
    id: 8, category: "Fashion", name: "Women's Running Shoes Comfort Plus",
    price: 64.99, originalPrice: 94.99, rating: 4.5, reviewCount: 342,
    badge: "sale", discount: "31% OFF", icon: "👟", inStock: true,
    image: "assets/product-8.png",
    description: "Lightweight running shoes with superior cushioning. Perfect for daily runs.",
    specs: { "Brand": "SpeedStep", "Sole": "Rubber", "Upper": "Mesh", "Closure": "Lace-Up", "Usage": "Running", "Sizes": "UK 4 to 9" }
  },
  {
    id: 9, category: "Home & Kitchen", name: "Air Fryer 5L Digital Display",
    price: 59.99, originalPrice: 89.99, rating: 4.7, reviewCount: 891,
    badge: "hot", discount: "33% OFF", icon: "🍳", inStock: true,
    image: "assets/product-9.png",
    description: "Large capacity air fryer with 8 preset programs and digital display.",
    specs: { "Capacity": "5 Litres", "Power": "1500W", "Programs": "8 Presets", "Timer": "30 Min", "Material": "BPA-Free", "Warranty": "2 Years" }
  },
  {
    id: 10, category: "Home & Kitchen", name: "Robot Vacuum Cleaner Smart Nav",
    price: 189.99, originalPrice: 289.99, rating: 4.4, reviewCount: 376,
    badge: "new", discount: "34% OFF", icon: "🤖", inStock: true,
    image: "assets/product-10.png",
    description: "Smart robot vacuum with LiDAR navigation, app control, and 120-min runtime.",
    specs: { "Battery": "120 Minutes", "Suction": "2700Pa", "Navigation": "LiDAR", "Connectivity": "Wi-Fi + App", "Filter": "HEPA", "Warranty": "1 Year" }
  },
  {
    id: 11, category: "Camera", name: "DSLR Camera 24.1MP Kit Bundle",
    price: 549.99, originalPrice: 749.99, rating: 4.8, reviewCount: 204,
    badge: "sale", discount: "27% OFF", icon: "📷", inStock: true,
    image: "assets/product-11.png",
    description: "Professional-grade DSLR camera with 18-55mm kit lens. Ideal for beginners and pros.",
    specs: { "Resolution": "24.1 MP", "Sensor": "APS-C", "Lens": "18-55mm", "ISO": "100-25600", "Video": "Full HD 1080p", "Warranty": "1 Year" }
  },
  {
    id: 12, category: "Electronics", name: "Smartwatch Fitness Tracker Pro",
    price: 129.99, originalPrice: 179.99, rating: 4.5, reviewCount: 677,
    badge: "new", discount: "27% OFF", icon: "⌚", inStock: true,
    image: "assets/product-12.png",
    description: "Advanced fitness smartwatch with heart rate, SpO2, GPS, and 7-day battery.",
    specs: { "Brand": "FitPulse", "Display": "1.4 inch AMOLED", "Battery": "7 Days", "Sensors": "HR + SpO2 + GPS", "Water Resistance": "5ATM", "OS": "iOS and Android" }
  },
  {
    id: 13, category: "Electronics", name: "Wireless Gaming Mouse 16000 DPI",
    price: 49.99, originalPrice: 74.99, rating: 4.6, reviewCount: 412,
    badge: "sale", discount: "33% OFF", icon: "🖱️", inStock: true,
    image: "assets/product-13.png",
    description: "High-precision wireless gaming mouse with 16000 DPI sensor and 70hr battery.",
    specs: { "DPI": "16000", "Battery": "70 Hours", "Buttons": "6 Programmable", "Weight": "95g", "Connectivity": "2.4GHz", "Warranty": "2 Years" }
  },
  {
    id: 14, category: "Home & Kitchen", name: "Coffee Maker Premium Brew 12-Cup",
    price: 44.99, originalPrice: 64.99, rating: 4.3, reviewCount: 523,
    badge: null, discount: null, icon: "☕", inStock: true,
    image: "assets/product-14.png",
    description: "Programmable 12-cup coffee maker with built-in grinder and keep-warm plate.",
    specs: { "Capacity": "12 Cups", "Power": "900W", "Timer": "24hr Programmable", "Carafe": "Glass", "Grinder": "Built-In", "Warranty": "1 Year" }
  },
  {
    id: 15, category: "Electronics", name: "USB-C Hub 10-in-1 Multiport Adapter",
    price: 29.99, originalPrice: 49.99, rating: 4.4, reviewCount: 789,
    badge: "sale", discount: "40% OFF", icon: "🔌", inStock: false,
    image: "assets/product-15.png",
    description: "Versatile 10-port USB-C hub with 4K HDMI, 100W PD charging, SD card slot.",
    specs: { "Ports": "10 Total", "HDMI": "4K at 30Hz", "Power Delivery": "100W", "USB": "3x USB 3.0", "SD Card": "SD + microSD", "Compatibility": "Universal" }
  },
  {
    id: 16, category: "Fashion", name: "Leather Crossbody Bag Premium",
    price: 54.99, originalPrice: 84.99, rating: 4.6, reviewCount: 234,
    badge: "new", discount: "35% OFF", icon: "👜", inStock: true,
    image: "assets/product-16.png",
    description: "Genuine leather crossbody bag with adjustable strap and multiple compartments.",
    specs: { "Material": "Genuine Leather", "Dimensions": "28x20x8 cm", "Strap": "Adjustable", "Pockets": "5", "Closure": "Magnetic", "Colors": "3 Available" }
  }
];

/* ============================================================
   CART & WISHLIST STATE
   ============================================================ */
var cart     = [];
var wishlist = [];

// Safely load from localStorage
try { cart     = JSON.parse(localStorage.getItem('ss_cart'))     || []; } catch(e) { cart = []; }
try { wishlist = JSON.parse(localStorage.getItem('ss_wishlist')) || []; } catch(e) { wishlist = []; }

function saveCart()     { try { localStorage.setItem('ss_cart',     JSON.stringify(cart));     } catch(e) {} }
function saveWishlist() { try { localStorage.setItem('ss_wishlist', JSON.stringify(wishlist)); } catch(e) {} }

/* ============================================================
   CART FUNCTIONS
   ============================================================ */
function addToCart(productId) {
  var product = PRODUCTS.find(function(p) { return p.id === productId; });
  if (!product || !product.inStock) return;

  var existing = cart.find(function(item) { return item.id === productId; });
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, icon: product.icon, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast('"' + product.name.slice(0, 28) + '..." added to cart', 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(function(item) { return item.id !== productId; });
  saveCart();
  updateCartUI();
}

function changeQty(productId, delta) {
  var item = cart.find(function(i) { return i.id === productId; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartUI();
  }
}

function updateCartUI() {
  var totalItems = cart.reduce(function(sum, i) { return sum + i.qty; }, 0);
  var totalPrice = cart.reduce(function(sum, i) { return sum + (i.price * i.qty); }, 0);

  // Update cart badge
  document.querySelectorAll('.cart-count').forEach(function(el) {
    el.textContent = totalItems;
    el.style.display = totalItems > 0 ? 'flex' : 'none';
  });

  var cartItemsEl = document.getElementById('cartItems');
  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML =
      '<div class="cart-empty">' +
        '<i class="bi bi-cart3"></i>' +
        '<p>Your cart is empty</p>' +
        '<p style="font-size:12px;margin-top:6px;color:#9e9e9e">Browse products and add items!</p>' +
      '</div>';
  } else {
    var html = '';
    cart.forEach(function(item) {
      html +=
        '<div class="cart-item" id="cart-item-' + item.id + '">' +
          '<div class="cart-item-img">' + item.icon + '</div>' +
          '<div class="cart-item-info">' +
            '<div class="cart-item-name">' + item.name.slice(0, 40) + (item.name.length > 40 ? '...' : '') + '</div>' +
            '<div class="cart-item-price">$' + (item.price * item.qty).toFixed(2) + '</div>' +
            '<div class="cart-item-qty">' +
              '<button class="qty-btn" onclick="changeQty(' + item.id + ', -1)">-</button>' +
              '<span class="qty-val">' + item.qty + '</span>' +
              '<button class="qty-btn" onclick="changeQty(' + item.id + ', 1)">+</button>' +
            '</div>' +
          '</div>' +
          '<button class="remove-item" onclick="removeFromCart(' + item.id + ')" title="Remove">' +
            '<i class="bi bi-trash3"></i>' +
          '</button>' +
        '</div>';
    });
    cartItemsEl.innerHTML = html;
  }

  var subtotalEl = document.getElementById('cartSubtotal');
  if (subtotalEl) subtotalEl.textContent = '$' + totalPrice.toFixed(2);
}

function openCart() {
  var sidebar = document.getElementById('cartSidebar');
  var overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.add('open');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  var sidebar = document.getElementById('cartSidebar');
  var overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

/* ============================================================
   WISHLIST FUNCTIONS
   ============================================================ */
function toggleWishlist(productId) {
  if (!productId || productId === 0) return;
  var product = PRODUCTS.find(function(p) { return p.id === productId; });
  if (!product) return;

  var idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist', 'info');
  } else {
    wishlist.push(productId);
    showToast('Added to wishlist!', 'success');
  }
  saveWishlist();
  updateWishlistUI();
}

function updateWishlistUI() {
  document.querySelectorAll('[data-wishlist]').forEach(function(btn) {
    var id = parseInt(btn.dataset.wishlist);
    if (wishlist.indexOf(id) > -1) {
      btn.classList.add('active');
      btn.innerHTML = '<i class="bi bi-heart-fill"></i>';
    } else {
      btn.classList.remove('active');
      btn.innerHTML = '<i class="bi bi-heart"></i>';
    }
  });

  document.querySelectorAll('.wishlist-count').forEach(function(el) {
    el.textContent = wishlist.length;
    el.style.display = wishlist.length > 0 ? 'flex' : 'none';
  });
}

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
function showToast(message, type) {
  type = type || 'success';
  var container = document.getElementById('toastContainer');
  if (!container) return;

  var icon = type === 'success' ? 'bi-check-circle-fill' : 'bi-info-circle-fill';
  var toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = '<i class="bi ' + icon + '"></i> ' + message;
  container.appendChild(toast);

  setTimeout(function() {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, 2800);
}

/* ============================================================
   GENERATE STAR RATING
   ============================================================ */
function generateStars(rating) {
  var stars = '';
  var full  = Math.floor(rating);
  var half  = (rating % 1 >= 0.5) ? 1 : 0;
  var empty = 5 - full - half;
  for (var i = 0; i < full;  i++) stars += '★';
  for (var i = 0; i < half;  i++) stars += '½';
  for (var i = 0; i < empty; i++) stars += '☆';
  return stars;
}

/* ============================================================
   PRODUCT CARD RENDERER
   ============================================================ */
function createProductCard(product) {
  var isWishlisted = wishlist.indexOf(product.id) > -1;
  var stars = generateStars(product.rating);

  var badgeHTML = '';
  if (product.badge) {
    badgeHTML += '<span class="card-badge badge-' + product.badge + '">' + product.badge.toUpperCase() + '</span>';
  }
  if (!product.inStock) {
    badgeHTML += '<span class="card-badge badge-out">OUT</span>';
  }

  var priceHTML = '<span class="price-current">$' + product.price.toFixed(2) + '</span>';
  if (product.originalPrice) {
    priceHTML += '<span class="price-original">$' + product.originalPrice.toFixed(2) + '</span>';
  }
  if (product.discount) {
    priceHTML += '<span class="price-discount">' + product.discount + '</span>';
  }

  var cartBtnHTML = '';
  if (product.inStock) {
    cartBtnHTML = '<button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(' + product.id + ')">' +
                    '<i class="bi bi-cart-plus"></i> Add to Cart' +
                  '</button>';
  } else {
    cartBtnHTML = '<button class="add-to-cart-btn out-of-stock" disabled>' +
                    '<i class="bi bi-x-circle"></i> Out of Stock' +
                  '</button>';
  }

  return '<div class="product-card" onclick="window.location=\'product-detail.html?id=' + product.id + '\'">' +
    '<div class="card-badges">' + badgeHTML + '</div>' +
    '<button class="wishlist-btn ' + (isWishlisted ? 'active' : '') + '" ' +
            'data-wishlist="' + product.id + '" ' +
            'onclick="event.stopPropagation(); toggleWishlist(' + product.id + ')" ' +
            'title="Wishlist">' +
      '<i class="bi bi-heart' + (isWishlisted ? '-fill' : '') + '"></i>' +
    '</button>' +
    '<div class="card-image">' +
      /* ============================================
         PRODUCT IMAGE 
         ============================================ */
      '<img src="assets/product-' + product.id + '.png"' +
           ' alt="' + product.name + '"' +
           ' onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';"' +
           ' style="max-height:140px;object-fit:contain;transition:transform 0.3s;" />' +
      '<div class="img-placeholder" style="display:none;">' + product.icon + '</div>' +
    '</div>' +
    '<div class="card-body">' +
      '<span class="card-category">' + product.category + '</span>' +
      '<h3 class="card-title">' + product.name + '</h3>' +
      '<div class="card-rating">' +
        '<span class="stars">' + stars + '</span>' +
        '<span class="rating-count">(' + product.reviewCount.toLocaleString() + ')</span>' +
      '</div>' +
      '<div class="card-price">' + priceHTML + '</div>' +
    '</div>' +
    '<div class="card-footer-action">' + cartBtnHTML + '</div>' +
  '</div>';
}

/* ============================================================
   HOME PAGE - RENDER PRODUCTS
   ============================================================ */
function renderFeaturedProducts(containerId, filterFn, limit) {
  limit = limit || 5;
  var container = document.getElementById(containerId);
  if (!container) return;

  var products = filterFn ? PRODUCTS.filter(filterFn) : PRODUCTS;
  products = products.slice(0, limit);

  var html = '';
  products.forEach(function(p) { html += createProductCard(p); });
  container.innerHTML = html;
  updateWishlistUI();
}

/* ============================================================
   HOME PAGE - CATEGORY TABS
   ============================================================ */
function initCategoryTabs() {
  document.querySelectorAll('.cat-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      var tabsContainer = tab.closest('.category-tabs');
      if (tabsContainer) {
        tabsContainer.querySelectorAll('.cat-tab').forEach(function(t) {
          t.classList.remove('active');
        });
      }
      tab.classList.add('active');

      var filter = tab.dataset.filter;
      var sectionWrap = tab.closest('.section-wrap');
      var grid = sectionWrap ? sectionWrap.querySelector('.products-grid') : null;
      if (!grid || !grid.id) return;

      if (filter === 'all') {
        renderFeaturedProducts(grid.id, null, 5);
      } else {
        renderFeaturedProducts(grid.id, function(p) { return p.category === filter; }, 5);
      }
    });
  });
}

/* ============================================================
   HOME PAGE - HERO SLIDER
   ============================================================ */
function initHeroSlider() {
  var slides = [
    { badge: "🔥 LIMITED DEALS",  title: "Latest Trending<br><span>Electronics</span>", sub: "Up to 40% off on top brands. Shop the best gadgets at unbeatable prices.", icon: "🎧" },
    { badge: "⚡ FLASH SALE",     title: "Premium<br><span>Smartphones</span>",         sub: "Flagship phones at incredible discounts. Limited stock available!",        icon: "📱" },
    { badge: "🆕 NEW ARRIVALS",   title: "Smart Home<br><span>Essentials</span>",        sub: "Upgrade your home with the latest smart devices and appliances.",           icon: "🏠" }
  ];

  var currentSlide = 0;
  var heroBadge = document.getElementById('heroBadge');
  var heroTitle = document.getElementById('heroTitle');
  var heroSub   = document.getElementById('heroSub');
  var heroIcon  = document.getElementById('heroIcon');
  var dots      = document.querySelectorAll('.hero-dots .dot');

  function goToSlide(idx) {
    currentSlide = idx;
    var s = slides[idx];
    if (heroBadge) heroBadge.textContent = s.badge;
    if (heroTitle) heroTitle.innerHTML   = s.title;
    if (heroSub)   heroSub.textContent   = s.sub;
    if (heroIcon)  heroIcon.textContent  = s.icon;
    dots.forEach(function(d, i) {
      d.classList.toggle('active', i === idx);
    });
  }

  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() { goToSlide(i); });
  });

  setInterval(function() {
    goToSlide((currentSlide + 1) % slides.length);
  }, 4000);
}

/* ============================================================
   PRODUCT LISTING PAGE
   ============================================================ */
var currentPage = 1;
var PAGE_SIZE   = 8;
var filteredProducts = PRODUCTS.slice();

function initProductListingPage() {
  if (!document.getElementById('productsContainer')) return;
  filteredProducts = PRODUCTS.slice();
  renderProductListing();
  initFilters();
  initSort();
}

function renderProductListing() {
  var container = document.getElementById('productsContainer');
  if (!container) return;

  var start = (currentPage - 1) * PAGE_SIZE;
  var end   = start + PAGE_SIZE;
  var slice = filteredProducts.slice(start, end);

  if (slice.length === 0) {
    container.innerHTML =
      '<div style="grid-column:1/-1;text-align:center;padding:50px 20px;color:#9e9e9e">' +
        '<i class="bi bi-search" style="font-size:44px;opacity:0.35;display:block;margin-bottom:12px"></i>' +
        '<p style="font-size:15px">No products found.</p>' +
        '<button onclick="clearAllFilters()" style="margin-top:12px;background:#ff6b35;color:#fff;padding:8px 18px;border-radius:4px;font-weight:700;font-size:13px;border:none;cursor:pointer">Clear Filters</button>' +
      '</div>';
  } else {
    var html = '';
    slice.forEach(function(p) { html += createProductCard(p); });
    container.innerHTML = html;
  }

  updateResultsText();
  renderPagination();
  updateWishlistUI();
}

function updateResultsText() {
  var el = document.getElementById('resultsText');
  if (!el) return;
  if (filteredProducts.length === 0) {
    el.innerHTML = 'Showing <strong>0</strong> results';
  } else {
    var start = (currentPage - 1) * PAGE_SIZE + 1;
    var end   = Math.min(currentPage * PAGE_SIZE, filteredProducts.length);
    el.innerHTML = 'Showing <strong>' + start + '-' + end + '</strong> of <strong>' + filteredProducts.length + '</strong> products';
  }
}

function renderPagination() {
  var wrap = document.getElementById('paginationWrap');
  if (!wrap) return;

  var totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  if (totalPages <= 1) { wrap.innerHTML = ''; return; }

  var html = '<button class="page-btn" onclick="goToPage(' + (currentPage - 1) + ')"' + (currentPage === 1 ? ' disabled' : '') + '>' +
               '<i class="bi bi-chevron-left"></i>' +
             '</button>';

  for (var i = 1; i <= totalPages; i++) {
    html += '<button class="page-btn ' + (i === currentPage ? 'active' : '') + '" onclick="goToPage(' + i + ')">' + i + '</button>';
  }

  html += '<button class="page-btn" onclick="goToPage(' + (currentPage + 1) + ')"' + (currentPage === totalPages ? ' disabled' : '') + '>' +
            '<i class="bi bi-chevron-right"></i>' +
          '</button>';

  wrap.innerHTML = html;
}

function goToPage(page) {
  var totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderProductListing();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---- FILTERS ---- */
function initFilters() {
  document.querySelectorAll('.filter-category').forEach(function(cb) {
    cb.addEventListener('change', applyFilters);
  });

  var priceRange = document.getElementById('priceRange');
  if (priceRange) {
    priceRange.addEventListener('input', function() {
      var val = document.getElementById('maxPriceVal');
      if (val) val.textContent = '$' + priceRange.value;
      applyFilters();
    });
  }

  document.querySelectorAll('.filter-rating').forEach(function(cb) {
    cb.addEventListener('change', applyFilters);
  });
}

function applyFilters() {
  currentPage = 1;

  var cats = [];
  document.querySelectorAll('.filter-category:checked').forEach(function(c) {
    cats.push(c.value);
  });

  var priceEl = document.getElementById('priceRange');
  var maxPrice = priceEl ? parseFloat(priceEl.value) : 9999;

  var ratings = [];
  document.querySelectorAll('.filter-rating:checked').forEach(function(r) {
    ratings.push(parseInt(r.value));
  });

  filteredProducts = PRODUCTS.filter(function(p) {
    var catOK    = cats.length === 0 || cats.indexOf(p.category) > -1;
    var priceOK  = p.price <= maxPrice;
    var ratingOK = ratings.length === 0 || ratings.some(function(r) { return p.rating >= r; });
    return catOK && priceOK && ratingOK;
  });

  renderProductListing();
}

function clearAllFilters() {
  document.querySelectorAll('.filter-category, .filter-rating').forEach(function(cb) {
    cb.checked = false;
  });
  var pr = document.getElementById('priceRange');
  if (pr) {
    pr.value = pr.max;
    var maxVal = document.getElementById('maxPriceVal');
    if (maxVal) maxVal.textContent = '$' + pr.max;
  }
  filteredProducts = PRODUCTS.slice();
  currentPage = 1;
  renderProductListing();
}

/* ---- SORT ---- */
function initSort() {
  var select = document.getElementById('sortSelect');
  if (!select) return;
  select.addEventListener('change', function() {
    var val = select.value;
    if (val === 'price-low') {
      filteredProducts.sort(function(a, b) { return a.price - b.price; });
    } else if (val === 'price-high') {
      filteredProducts.sort(function(a, b) { return b.price - a.price; });
    } else if (val === 'rating') {
      filteredProducts.sort(function(a, b) { return b.rating - a.rating; });
    } else if (val === 'newest') {
      filteredProducts.sort(function(a, b) { return b.id - a.id; });
    } else {
      filteredProducts = PRODUCTS.slice();
    }
    currentPage = 1;
    renderProductListing();
  });
}

/* ---- SEARCH BAR ---- */
function initSearchBar() {
  var searchInput = document.getElementById('headerSearch');
  if (!searchInput) return;

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      var query = searchInput.value.trim().toLowerCase();
      if (!query) {
        filteredProducts = PRODUCTS.slice();
      } else {
        filteredProducts = PRODUCTS.filter(function(p) {
          return p.name.toLowerCase().indexOf(query) > -1 ||
                 p.category.toLowerCase().indexOf(query) > -1;
        });
      }
      currentPage = 1;
      if (document.getElementById('productsContainer')) {
        renderProductListing();
      } else {
        window.location.href = 'products.html';
      }
    }
  });
}

/* ---- VIEW TOGGLE ---- */
function initViewToggle() {
  var btns = document.querySelectorAll('.view-btn');
  var grid = document.getElementById('productsContainer');
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      if (grid) {
        grid.className = btn.dataset.view === 'list' ? 'products-grid cols-3' : 'products-grid cols-4';
      }
    });
  });
}

/* ============================================================
   PRODUCT DETAIL PAGE
   ============================================================ */
function initProductDetailPage() {
  var params  = new URLSearchParams(window.location.search);
  var id      = parseInt(params.get('id')) || 1;
  var product = PRODUCTS.find(function(p) { return p.id === id; }) || PRODUCTS[0];

  document.title = product.name + ' – Brand';

  // Set breadcrumb title
  var bc = document.getElementById('breadcrumbTitle');
  if (bc) bc.textContent = product.name.slice(0, 30);

  // Main image
  var mainImg = document.getElementById('mainProductImg');
  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = product.name;
}

  

  // Text fields
  setTextById('detailCategory',    product.category);
  setTextById('detailTitle',       product.name);
  setTextById('detailPrice',       '$' + product.price.toFixed(2));
  setTextById('detailOriginal',    product.originalPrice ? '$' + product.originalPrice.toFixed(2) : '');
  setTextById('detailDiscount',    product.discount || '');
  setTextById('detailRatingScore', product.rating);
  setTextById('detailRatingCount', '(' + product.reviewCount.toLocaleString() + ' reviews)');
  setTextById('detailDescription', product.description);

  // Review badge count
  setTextById('tabReviewBadge', product.reviewCount);

  // Stars
  var starsEl = document.getElementById('detailStars');
  if (starsEl) starsEl.textContent = generateStars(product.rating);

  // Specs table
  var tbody = document.getElementById('specsTableBody');
  if (tbody && product.specs) {
    var specHTML = '';
    var keys = Object.keys(product.specs);
    keys.forEach(function(k) {
      specHTML += '<tr><td>' + k + '</td><td>' + product.specs[k] + '</td></tr>';
    });
    tbody.innerHTML = specHTML;
  }

  // Add to cart button
  var addBtn = document.getElementById('detailAddToCart');
  if (addBtn) {
    addBtn.addEventListener('click', function() {
      addToCart(product.id);
      addBtn.innerHTML = '<i class="bi bi-check-lg"></i> Added to Cart!';
      addBtn.style.background = '#0a8a4e';
      setTimeout(function() {
        addBtn.innerHTML = '<i class="bi bi-cart-plus"></i> Add to Cart';
        addBtn.style.background = '';
      }, 2000);
    });
  }

  // Wishlist button
  var wishBtn = document.getElementById('detailWishlist');
  if (wishBtn) {
    wishBtn.dataset.wishlist = product.id;
    wishBtn.addEventListener('click', function() {
      toggleWishlist(product.id);
      updateWishlistUI();
    });
  }

  // Size buttons
  document.querySelectorAll('.size-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.size-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });

  // Color dots
  document.querySelectorAll('.color-dot').forEach(function(dot) {
    dot.addEventListener('click', function() {
      document.querySelectorAll('.color-dot').forEach(function(d) { d.classList.remove('active'); });
      dot.classList.add('active');
    });
  });

  // Quantity buttons
  var qtyDisplay = document.getElementById('qtyDisplay');
  var qtyMinus   = document.getElementById('qtyMinus');
  var qtyPlus    = document.getElementById('qtyPlus');

  if (qtyMinus && qtyDisplay) {
    qtyMinus.addEventListener('click', function() {
      var v = parseInt(qtyDisplay.value);
      if (v > 1) qtyDisplay.value = v - 1;
    });
  }
  if (qtyPlus && qtyDisplay) {
    qtyPlus.addEventListener('click', function() {
      qtyDisplay.value = parseInt(qtyDisplay.value) + 1;
    });
  }

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
      document.querySelectorAll('.tab-pane').forEach(function(p) { p.classList.remove('active'); });
      btn.classList.add('active');
      var target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add('active');
    });
  });

  // Thumbnail row
const thumbItem = document.querySelector('.thumb-item');

if (thumbItem) {
  const img = thumbItem.querySelector('img');
  img.src = product.image;
  thumbItem.dataset.img = product.image;
}



  // Related products
  var relContainer = document.getElementById('relatedProducts');
  if (relContainer) {
    var related = PRODUCTS.filter(function(p) {
      return p.id !== product.id && p.category === product.category;
    }).slice(0, 4);

    if (related.length < 4) {
      var more = PRODUCTS.filter(function(p) {
        return p.id !== product.id && related.indexOf(p) === -1;
      }).slice(0, 4 - related.length);
      related = related.concat(more);
    }

    var relHTML = '';
    related.forEach(function(p) { relHTML += createProductCard(p); });
    relContainer.innerHTML = relHTML;
    updateWishlistUI();
  }

  updateWishlistUI();
}

function setTextById(id, value) {
  var el = document.getElementById(id);
  if (el) el.textContent = value;
}

/* ============================================================
   NEWSLETTER
   ============================================================ */
function initNewsletter() {
  var form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var input = form.querySelector('input');
    if (!input || !input.value.trim()) return;
    showToast('Subscribed successfully! Check your inbox.', 'success');
    input.value = '';
  });
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackToTop() {
  var btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   GLOBAL INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {

  // Cart open/close
  var cartBtn      = document.getElementById('cartBtn');
  var closeCartBtn = document.getElementById('closeCartBtn');
  var cartOverlay  = document.getElementById('cartOverlay');
  var contShopping = document.querySelector('.continue-shopping');

  if (cartBtn)      cartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay)  cartOverlay.addEventListener('click', closeCart);
  if (contShopping) contShopping.addEventListener('click', closeCart);

  // Init UI state
  updateCartUI();
  updateWishlistUI();

  // Page-specific init
  var page = document.body.dataset.page;

  if (page === 'home') {
    initHeroSlider();
    renderFeaturedProducts('trendingGrid',    function(p) { return p.badge === 'hot' || p.badge === 'sale'; }, 5);
    renderFeaturedProducts('newArrivalsGrid', function(p) { return p.badge === 'new'; }, 5);
    renderFeaturedProducts('dealsGrid',       null, 5);
    initCategoryTabs();
  }

  if (page === 'products') {
    initProductListingPage();
    initViewToggle();
  }

  if (page === 'detail') {
    initProductDetailPage();
  }

  initNewsletter();
  initBackToTop();
  initSearchBar();

});
