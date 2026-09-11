// Bass Fishing — 首页交互脚本（中英双语版）
(function () {
  'use strict';

  /* 多语言文案 */
  const translations = {
    zh: {
      meta_title: 'Bass Fishing — 专业路亚渔具商城',
      meta_description: 'Bass Fishing 专注路亚假饵、鱼饵与渔具装备，为钓手提供高品质产品与专业服务。',
      header_notice: '新用户首单立减 15%，结账时使用优惠码 <strong>NEWBASS</strong>',
      nav_home: '首页',
      nav_categories: '商品分类',
      nav_hot: '热门商品',
      nav_promos: '促销活动',
      nav_about: '关于我们',
      search_placeholder: '搜索路亚饵、鱼竿、渔轮…',
      search_aria: '搜索',
      aria_account: '个人中心',
      aria_cart: '购物车',
      aria_menu: '打开菜单',
      aria_prev: '上一张',
      aria_next: '下一张',
      aria_dots: '轮播导航',
      slide_number: '第 {n} 张',
      slide1_tag: '本季上新',
      slide1_title: '探索高仿真路亚假饵',
      slide1_desc: '从米诺到波爬，从软虫到复合亮片，为每一次抛投创造更多中鱼机会。',
      slide1_cta: '立即选购',
      slide2_tag: '限时特惠',
      slide2_title: '夏季清仓 低至 7 折',
      slide2_desc: '精选硬饵、软饵、鱼线套装限时直降，库存有限，售完即止。',
      slide2_cta: '查看活动',
      slide3_tag: '专业装备',
      slide3_title: '为 serious angler 打造',
      slide3_desc: '轻量鱼竿、顺滑渔轮、耐磨鱼线，助你轻松应对复杂水域。',
      slide3_cta: '浏览分类',
      feat1_title: '正品保障',
      feat1_desc: '严选品牌 品质可查',
      feat2_title: '极速发货',
      feat2_desc: '48 小时内发出',
      feat3_title: '无忧退换',
      feat3_desc: '7 天无理由退换',
      feat4_title: '钓手客服',
      feat4_desc: '专业选饵建议',
      cat_subtitle: 'Shop by Category',
      cat_title: '商品分类',
      cat_desc: '按需挑选，快速找到适合目标鱼种与钓场的装备。',
      cat1_name: '路亚硬饵',
      cat1_desc: '米诺 / 波爬 / 铅笔 / 亮片',
      cat2_name: '路亚软饵',
      cat2_desc: 'T尾 / 卷尾 / 虾型 / 蠕虫',
      cat3_name: '鱼线与鱼钩',
      cat3_desc: 'PE线 / 碳线 / 前导线 / 曲柄钩',
      cat4_name: '鱼竿',
      cat4_desc: '枪柄 / 直柄 / 泛用 / 微物',
      cat5_name: '渔轮',
      cat5_desc: '水滴轮 / 纺车轮 / 鼓轮',
      cat6_name: '配件工具',
      cat6_desc: '路亚盒 / 钳子 / 秤 / 控鱼器',
      cat7_name: '户外服饰',
      cat7_desc: '防晒服 / 手套 / 帽子 / 救生衣',
      cat8_name: '新手套装',
      cat8_desc: '竿轮饵一站式配齐',
      hot_subtitle: 'Hot Picks',
      hot_title: '热门商品',
      hot_desc: '钓友们反复回购的人气单品，口碑与销量双高。',
      view_more: '查看更多商品',
      promo_subtitle: 'Promotions',
      promo_title: '促销活动',
      promo_desc: '限时优惠与组合套餐，帮你省钱升级装备。',
      promo1_label: '限时组合',
      promo1_title: '新手路亚入门套装',
      promo1_desc: '竿 + 轮 + 饵盒 + 10 枚精选饵，到手即钓。',
      promo1_cta: '立即抢购',
      countdown_label: '距结束',
      promo2_label: '全场满减',
      promo2_title: '满 299 减 50',
      promo2_desc: '活动期内任意商品满额自动抵扣，无需领券。',
      promo2_cta: '去凑单',
      promo3_label: '优惠码',
      promo3_title: '老客回馈 BASS25',
      promo3_desc: '输入优惠码立享 25 元无门槛优惠券。',
      copy_code: '复制优惠码',
      copied_code: '已复制',
      new_subtitle: 'Coming Soon',
      new_title: '新品即将上架',
      new_desc: '我们正在挑选更多进口品牌与限定配色路亚饵，每周更新，敬请期待。',
      notify_placeholder: '输入邮箱，第一时间获取上新通知',
      notify_aria: '邮箱',
      notify_btn: '订阅',
      arrival1: '限定配色软饵',
      arrival2: '远投硬饵系列',
      arrival3: '夏季防晒装备',
      footer_brand: '专注路亚，服务钓手。让每一次出钓都更有收获。',
      social_wechat: '微信',
      social_weibo: '微博',
      social_tiktok: '抖音',
      social_xhs: '小红书',
      col1_title: '购物指南',
      col1_link1: '选饵攻略',
      col1_link2: '新手入门',
      col1_link3: '支付方式',
      col1_link4: '物流说明',
      col2_title: '售后服务',
      col2_link1: '退换货政策',
      col2_link2: '保修服务',
      col2_link3: '联系客服',
      col2_link4: '常见问题',
      col3_title: '关于我们',
      col3_link1: '品牌故事',
      col3_link2: '钓场合作',
      col3_link3: '加入我们',
      col3_link4: '商务合作',
      copyright: '© 2026 Bass Fishing. All rights reserved. 本站仅为展示结构，商品陆续上新中。',
      currency_note: '汇率仅供参考，交易以实际结算为准。',
      currency_aria: '选择货币',
      badge_hot: '热销',
      badge_new: '新品',
      badge_sale: '特价',
      product_reviews: '{n} 条评价',
      aria_wishlist: '收藏',
      aria_quickview: '快速预览',
      aria_addcart: '加入购物车',
      toast_added: '已将「{name}」加入购物车',
      toast_code: '优惠码：{code}'
    },
    en: {
      meta_title: 'Bass Fishing — Premium Bass Fishing Tackle Store',
      meta_description: 'Bass Fishing specializes in lures, baits and fishing tackle, offering quality gear and expert service for anglers.',
      header_notice: 'New customers enjoy 15% off first order. Use code <strong>NEWBASS</strong> at checkout.',
      nav_home: 'Home',
      nav_categories: 'Categories',
      nav_hot: 'Hot Products',
      nav_promos: 'Promotions',
      nav_about: 'About Us',
      search_placeholder: 'Search lures, rods, reels…',
      search_aria: 'Search',
      aria_account: 'Account',
      aria_cart: 'Cart',
      aria_menu: 'Open menu',
      aria_prev: 'Previous slide',
      aria_next: 'Next slide',
      aria_dots: 'Carousel navigation',
      slide_number: 'Slide {n}',
      slide1_tag: 'New Arrivals',
      slide1_title: 'Explore Lifelike Lures',
      slide1_desc: 'From minnows to poppers, soft worms to spinnerbaits — create more strike chances on every cast.',
      slide1_cta: 'Shop Now',
      slide2_tag: 'Limited Offer',
      slide2_title: 'Summer Sale Up to 30% Off',
      slide2_desc: 'Selected hard baits, soft baits and line sets on sale. Limited stock — while supplies last.',
      slide2_cta: 'View Deals',
      slide3_tag: 'Pro Gear',
      slide3_title: 'Built for Serious Anglers',
      slide3_desc: 'Lightweight rods, smooth reels and abrasion-resistant lines to handle complex waters.',
      slide3_cta: 'Browse Categories',
      feat1_title: 'Authentic Quality',
      feat1_desc: 'Curated brands, quality guaranteed',
      feat2_title: 'Fast Shipping',
      feat2_desc: 'Dispatched within 48 hours',
      feat3_title: 'Hassle-free Returns',
      feat3_desc: '7-day no-reason returns',
      feat4_title: 'Angler Support',
      feat4_desc: 'Expert lure selection advice',
      cat_subtitle: 'Shop by Category',
      cat_title: 'Categories',
      cat_desc: 'Pick by target species and fishing environment to find the right gear quickly.',
      cat1_name: 'Hard Baits',
      cat1_desc: 'Minnow / Popper / Pencil / Spoon',
      cat2_name: 'Soft Baits',
      cat2_desc: 'T-tail / Curl tail / Shrimp / Worm',
      cat3_name: 'Line & Hooks',
      cat3_desc: 'PE / Fluorocarbon / Leader / Hooks',
      cat4_name: 'Rods',
      cat4_desc: 'Casting / Spinning / All-round / Ultralight',
      cat5_name: 'Reels',
      cat5_desc: 'Baitcasting / Spinning / Round',
      cat6_name: 'Tools',
      cat6_desc: 'Tackle box / Pliers / Scale / Gripper',
      cat7_name: 'Outdoor Wear',
      cat7_desc: 'Sun protection / Gloves / Hat / PFD',
      cat8_name: 'Starter Kits',
      cat8_desc: 'Rod, reel & lure all-in-one',
      hot_subtitle: 'Hot Picks',
      hot_title: 'Hot Products',
      hot_desc: 'Most popular items anglers buy again and again, loved for quality and performance.',
      view_more: 'View More',
      promo_subtitle: 'Promotions',
      promo_title: 'Promotions',
      promo_desc: 'Save on gear with limited-time deals and bundles.',
      promo1_label: 'Limited Bundle',
      promo1_title: 'Beginner Bass Fishing Kit',
      promo1_desc: 'Rod + reel + tackle box + 10 selected lures — ready to fish.',
      promo1_cta: 'Grab the Deal',
      countdown_label: 'Ends in',
      promo2_label: 'Storewide Offer',
      promo2_title: 'Spend ¥299 Save ¥50',
      promo2_desc: 'Automatic discount at checkout — no coupon needed.',
      promo2_cta: 'Shop Now',
      promo3_label: 'Coupon Code',
      promo3_title: 'Loyalty Reward BASS25',
      promo3_desc: 'Enter code for ¥25 off with no minimum spend.',
      copy_code: 'Copy Code',
      copied_code: 'Copied',
      new_subtitle: 'Coming Soon',
      new_title: 'New Arrivals Coming Soon',
      new_desc: 'We are sourcing more imported brands and limited color lures, updated weekly. Stay tuned.',
      notify_placeholder: 'Enter email to get restock alerts',
      notify_aria: 'Email',
      notify_btn: 'Subscribe',
      arrival1: 'Limited Color Soft Baits',
      arrival2: 'Long-casting Hard Baits',
      arrival3: 'Summer Sun Gear',
      footer_brand: 'Focused on bass fishing, serving anglers. Make every trip more rewarding.',
      social_wechat: 'WeChat',
      social_weibo: 'Weibo',
      social_tiktok: 'TikTok',
      social_xhs: 'Xiaohongshu',
      col1_title: 'Shopping Guide',
      col1_link1: 'Lure Guide',
      col1_link2: 'Beginner\'s Guide',
      col1_link3: 'Payment Methods',
      col1_link4: 'Shipping Info',
      col2_title: 'After Sales',
      col2_link1: 'Return Policy',
      col2_link2: 'Warranty',
      col2_link3: 'Contact Support',
      col2_link4: 'FAQ',
      col3_title: 'About Us',
      col3_link1: 'Brand Story',
      col3_link2: 'Fishing Partners',
      col3_link3: 'Join Us',
      col3_link4: 'Business Cooperation',
      copyright: '© 2026 Bass Fishing. All rights reserved. This site is a demo; new products coming soon.',
      currency_note: 'Exchange rates are for reference only; actual checkout rates apply.',
      currency_aria: 'Select currency',
      badge_hot: 'Hot',
      badge_new: 'New',
      badge_sale: 'Sale',
      product_reviews: '{n} reviews',
      aria_wishlist: 'Add to wishlist',
      aria_quickview: 'Quick view',
      aria_addcart: 'Add to cart',
      toast_added: 'Added "{name}" to cart',
      toast_code: 'Coupon code: {code}'
    }
  };

  let currentLang = localStorage.getItem('bass-lang') || 'zh';
  let currentCurrency = localStorage.getItem('bass-currency') || 'CNY';

  // 汇率：1 CNY 对应外币金额（2026-09-11 参考价）
  const rates = {
    CNY: 1,
    USD: 0.149,
    CAD: 0.206
  };

  function t(key) {
    const text = translations[currentLang] && translations[currentLang][key];
    return text !== undefined ? text : key;
  }

  function formatPrice(amount) {
    const rate = rates[currentCurrency] || 1;
    if (currentCurrency === 'CNY') {
      return `¥${Math.round(amount)}`;
    }
    const converted = (amount * rate).toFixed(2);
    if (currentCurrency === 'CAD') {
      return `C$${converted}`;
    }
    return `$${converted}`;
  }

  function updatePrices() {
    document.querySelectorAll('[data-price]').forEach((el) => {
      const base = parseFloat(el.getAttribute('data-price'));
      el.textContent = formatPrice(base);
    });
    document.querySelectorAll('[data-original]').forEach((el) => {
      const base = parseFloat(el.getAttribute('data-original'));
      el.textContent = formatPrice(base);
    });
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('bass-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // 普通文案
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = t(key);
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
      } else if (el.tagName === 'TITLE') {
        el.textContent = value;
      } else if (el.tagName === 'META' && el.hasAttribute('data-i18n-attr')) {
        el.setAttribute(el.getAttribute('data-i18n-attr'), value);
      } else {
        el.textContent = value;
      }
    });

    // placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    // aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    // 商品重新渲染
    renderProducts();

    // 按当前货币刷新价格
    updatePrices();

    // 轮播点 aria-label 刷新
    const dotsContainer = document.getElementById('carouselDots');
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.setAttribute('aria-label', t('slide_number').replace('{n}', i + 1));
      });
    }

    // 复制优惠码按钮文案恢复
    document.querySelectorAll('.copy-code').forEach((btn) => {
      btn.textContent = t('copy_code');
    });
  }

  function initLanguageSwitch() {
    const btn = document.getElementById('langSwitch');
    if (!btn) return;
    btn.textContent = currentLang === 'zh' ? '中 / EN' : 'EN / 中';
    btn.addEventListener('click', () => {
      const next = currentLang === 'zh' ? 'en' : 'zh';
      btn.textContent = next === 'zh' ? '中 / EN' : 'EN / 中';
      applyLanguage(next);
    });
  }

  function initCurrencySwitch() {
    const select = document.getElementById('currencySwitch');
    if (!select) return;
    select.value = currentCurrency;
    select.addEventListener('change', () => {
      currentCurrency = select.value;
      localStorage.setItem('bass-currency', currentCurrency);
      updatePrices();
    });
  }

  // 商品数据（占位，便于后续上新替换）
  const products = [
    {
      name: '远投沉水米诺套装',
      nameEn: 'Long-casting Sinking Minnow Set',
      price: 89,
      originalPrice: 129,
      badgeKey: 'badge_hot',
      badgeClass: 'badge-hot',
      rating: 4.8,
      reviews: 124,
      imageText: 'Hard+Bait',
      color: '0f172a/0d9488'
    },
    {
      name: 'T尾软虫 10cm 组合包',
      nameEn: 'T-Tail Soft Worm 10cm Combo',
      price: 45,
      originalPrice: 68,
      badgeKey: 'badge_new',
      badgeClass: 'badge-new',
      rating: 4.9,
      reviews: 86,
      imageText: 'Soft+Bait',
      color: '0d9488/ffffff'
    },
    {
      name: '复合亮片 Bass 专用',
      nameEn: 'Bass Spinnerbait',
      price: 56,
      originalPrice: 79,
      badgeKey: 'badge_hot',
      badgeClass: 'badge-hot',
      rating: 4.7,
      reviews: 213,
      imageText: 'Spinnerbait',
      color: 'f59e0b/0f172a'
    },
    {
      name: '曲柄钩 + 铅头钩套装',
      nameEn: 'Jig Head + Crank Hook Set',
      price: 32,
      originalPrice: 49,
      badgeKey: 'badge_sale',
      badgeClass: 'badge-sale',
      rating: 4.6,
      reviews: 342,
      imageText: 'Hooks',
      color: '1e293b/94a3b8'
    },
    {
      name: '8编 PE 远投主线 150m',
      nameEn: '8-Strand PE Casting Line 150m',
      price: 78,
      originalPrice: 99,
      badgeKey: 'badge_hot',
      badgeClass: 'badge-hot',
      rating: 4.8,
      reviews: 156,
      imageText: 'PE+Line',
      color: '0f766e/ffffff'
    },
    {
      name: '轻量枪柄路亚竿 M调',
      nameEn: 'Lightweight Casting Rod M Power',
      price: 269,
      originalPrice: 359,
      badgeKey: 'badge_new',
      badgeClass: 'badge-new',
      rating: 4.9,
      reviews: 67,
      imageText: 'Casting+Rod',
      color: '334155/ffffff'
    },
    {
      name: '高速比水滴轮 7.2:1',
      nameEn: 'High-Speed Baitcasting Reel 7.2:1',
      price: 399,
      originalPrice: 529,
      badgeKey: 'badge_hot',
      badgeClass: 'badge-hot',
      rating: 4.7,
      reviews: 98,
      imageText: 'Reel',
      color: '475569/ffffff'
    },
    {
      name: '多功能路亚钳 + 控鱼器',
      nameEn: 'Multi-function Pliers + Fish Gripper',
      price: 68,
      originalPrice: 98,
      badgeKey: 'badge_sale',
      badgeClass: 'badge-sale',
      rating: 4.8,
      reviews: 412,
      imageText: 'Tools',
      color: '0f172a/f59e0b'
    }
  ];

  /* 渲染热门商品 */
  function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    grid.innerHTML = products.map((p) => {
      const displayName = currentLang === 'en' ? p.nameEn : p.name;
      const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
      const imgUrl = `https://placehold.co/400x400/${p.color}?text=${encodeURIComponent(p.imageText.replace(/\+/g, ' '))}`;
      return `
        <article class="product-card reveal">
          <div class="product-image" style="--img: url('${imgUrl}')">
            <span class="product-badge ${p.badgeClass}">${t(p.badgeKey)}</span>
            <div class="product-actions">
              <button type="button" aria-label="${t('aria_wishlist')}"><i class="fa-regular fa-heart"></i></button>
              <button type="button" aria-label="${t('aria_quickview')}"><i class="fa-regular fa-eye"></i></button>
            </div>
          </div>
          <div class="product-info">
            <h3 class="product-name">${displayName}</h3>
            <div class="product-meta">
              <span class="product-rating" aria-label="rating ${p.rating}">${stars}</span>
              <span class="product-reviews">${t('product_reviews').replace('{n}', p.reviews)}</span>
            </div>
            <div class="product-footer">
              <div class="product-price">
                <span class="price-current" data-price="${p.price}">${formatPrice(p.price)}</span>
                <span class="price-original" data-original="${p.originalPrice}">${formatPrice(p.originalPrice)}</span>
              </div>
              <button type="button" class="btn-add" data-name="${displayName}" aria-label="${t('aria_addcart')}">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // 加入购物车事件
    grid.querySelectorAll('.btn-add').forEach((btn) => {
      btn.addEventListener('click', addToCart);
    });
  }

  /* 购物车计数 */
  let cartCount = 0;
  function addToCart(e) {
    cartCount += 1;
    const badge = document.getElementById('cartCount');
    if (badge) {
      badge.textContent = cartCount;
      badge.classList.add('pop');
      setTimeout(() => badge.classList.remove('pop'), 250);
    }
    const name = e.currentTarget.getAttribute('data-name');
    showToast(t('toast_added').replace('{name}', name));
  }

  /* 轻提示 */
  function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary);
        color: #fff;
        padding: 0.85rem 1.5rem;
        border-radius: var(--radius);
        font-size: 0.9rem;
        box-shadow: var(--shadow-lg);
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        pointer-events: none;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(-8px)';
    });
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    }, 2200);
  }

  /* 轮播图 */
  function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const slides = track ? track.querySelectorAll('.carousel-slide') : [];
    const dotsContainer = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const carousel = document.querySelector('.hero-carousel');

    if (!slides.length) return;

    let current = 0;
    let interval;

    // 创建导航点
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', t('slide_number').replace('{n}', i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    function goTo(index) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function start() {
      stop();
      interval = setInterval(next, 5000);
    }

    function stop() {
      if (interval) clearInterval(interval);
    }

    prevBtn.addEventListener('click', () => { prev(); start(); });
    nextBtn.addEventListener('click', () => { next(); start(); });

    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);

    start();
  }

  /* 倒计时 */
  function initCountdown() {
    const timerEl = document.getElementById('timer1');
    if (!timerEl) return;

    const target = new Date(Date.now() + 24 * 60 * 60 * 1000);

    function update() {
      const diff = target - Date.now();
      if (diff <= 0) {
        timerEl.textContent = '00:00:00';
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      timerEl.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    update();
    setInterval(update, 1000);
  }

  /* 移动端菜单 */
  function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.classList.toggle('active');
      const isOpen = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* 链接点击涟漪效果 */
  function createRipple(e, element) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'link-ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  }

  /* 页面跳转画面效果 */
  function initPageTransition() {
    const overlay = document.getElementById('pageTransition');
    if (!overlay) return;

    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('javascript') || href.startsWith('mailto') || href.startsWith('tel')) return;

      link.addEventListener('click', (e) => {
        createRipple(e, link);

        // 同页锚点：只做平滑滚动
        if (href.startsWith('#')) {
          if (href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
          return;
        }

        // 外部链接交给浏览器默认行为
        if (href.startsWith('http') && !href.startsWith(window.location.origin)) {
          return;
        }

        // 内部页面：圆形展开转场后跳转
        e.preventDefault();
        const rect = link.getBoundingClientRect();
        const x = `${((e.clientX - rect.left) / rect.width) * 100}%`;
        const y = `${((e.clientY - rect.top) / rect.height) * 100}%`;
        overlay.style.setProperty('--x', x);
        overlay.style.setProperty('--y', y);
        overlay.classList.add('active');
        setTimeout(() => {
          window.location.href = href;
        }, 550);
      });
    });
  }

  /* 复制优惠码 */
  function initCopyCode() {
    document.querySelectorAll('.copy-code').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const code = btn.getAttribute('data-code');
        try {
          await navigator.clipboard.writeText(code);
          btn.textContent = t('copied_code');
          setTimeout(() => (btn.textContent = t('copy_code')), 1500);
        } catch (err) {
          showToast(t('toast_code').replace('{code}', code));
        }
      });
    });
  }

  /* 滚动显示动画 */
  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  /* 当前导航高亮 */
  function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-list a');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  /* 初始化 */
  document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initCarousel();
    initCountdown();
    initMobileMenu();
    initCopyCode();
    initReveal();
    initNavHighlight();
    initPageTransition();
    initLanguageSwitch();
    applyLanguage(currentLang);
  });
})();
