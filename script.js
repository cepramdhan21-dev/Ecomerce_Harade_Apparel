// ========================================
// HARADE APPAREL - SCRIPT.JS
// FLASH SALE 1-10 PRODUK & SLIDER OTOMATIS
// ========================================

(function() {
    'use strict';

    // ======================== DATA PRODUK ========================
    const products = [
        { id: 1, name: "Kemeja Planel Ori Apparel", price: 150000, coret: 200000, stock: 15, colors: ["Hitam", "Putih", "Coklat"], category: "kemeja", img: "https://i.pinimg.com/736x/94/58/8b/94588b3f16f6948a148f3efb497259e7.jpg", material: "Katun premium 30s, lembut dan tidak mudah kusut.", desc: "Kemeja casual dengan bahan katun premium yang nyaman dipakai seharian. Cocok untuk gaya santai maupun semi formal.", rating: 4.8 },
        { id: 2, name: "Celana Boxy Harade Apparel", price: 80000, coret: 100000, stock: 20, colors: ["Hitam", "Navy"], category: "celana", img: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/384d7ebc584b430bb55660bfac323e27~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15592&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=e1be8f53&idc=my&from=2378011839", material: "Denim stretch, nyaman dan fleksibel untuk bergerak.", desc: "Celana boxy dengan potongan modern yang nyaman dipakai untuk aktivitas sehari-hari. Bahan denim stretch memberikan fleksibilitas maksimal.", rating: 4.5 },
        { id: 3, name: "Celana Denim Harade Apparel", price: 100000, coret: 200000, stock: 12, colors: ["Hitam", "Navy"], category: "celana", img: "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lqokf824qmv9ac", material: "Katun twill tebal, tahan lama dan cocok untuk outdoor.", desc: "Celana cargo dengan banyak kantong fungsional. Bahan katun twill tebal dan tahan lama, cocok untuk aktivitas outdoor.", rating: 4.7 },
        { id: 4, name: "Kemeja Casual Ori Apparel", price: 159709, coret: 300000, stock: 8, colors: ["Hitam", "Putih", "Coklat"], category: "kemeja", img: "https://i.pinimg.com/1200x/e4/74/05/e474057e12b4a33018f3b53f056ca7e2.jpg", material: "Linen blend, adem dan ringan untuk suasana santai.", desc: "Kemeja casual dengan bahan linen blend yang adem dan ringan. Desain elegan cocok untuk berbagai kesempatan.", rating: 4.6 },
        { id: 5, name: "Jaket Parasit", price: 200000, coret: 400000, stock: 10, colors: ["Hitam", "Navy"], category: "jaket", img: "https://down-id.img.susercontent.com/file/4c2b0f121ad47a1811e5000408e3d65d", material: "Polyester water-resistant, hangat dan stylish.", desc: "Jaket stylish dengan bahan water-resistant yang melindungi dari hujan ringan. Desain modern dan hangat.", rating: 4.9 },
        { id: 6, name: "Sepatu Samba", price: 555000, coret: 754000, stock: 6, colors: ["Hitam", "Hijau", "Merah", "Kuning", "Biru"], category: "sepatu", img: "https://i.pinimg.com/736x/ee/e7/78/eee7788458d69d3fde6a9bcc286acbcf.jpg", material: "Kulit sintetis premium dengan sol karet anti slip.", desc: "Sepatu casual dengan desain ikonik. Bahan kulit sintetis premium dengan sol karet anti slip yang nyaman dipakai.", rating: 4.9 },
        { id: 7, name: "Kaos Boxy Harade Apparel", price: 130989, coret: 240999, stock: 25, colors: ["Hitam", "Putih", "Hijau Army", "Coklat", "Biru"], category: "kaos", img: "https://i.pinimg.com/1200x/c3/0a/e3/c30ae3f96028048158926943fcdc8795.jpg", material: "Cotton combed 24s, adem dan nyaman dipakai sehari-hari.", desc: "Kaos boxy dengan bahan cotton combed 24s yang adem dan nyaman. Desain oversized cocok untuk gaya kasual masa kini.", rating: 4.8 },
        { id: 8, name: "Sweater Oversize", price: 175000, coret: 250000, stock: 7, colors: ["Hitam", "Abu"], category: "Kaos", img: "https://i.pinimg.com/736x/9c/9b/72/9c9b72c435a75b1f9a535dd6f9b0a06d.jpg", material: "Rajut akrilik hangat, nyaman untuk cuaca dingin.", desc: "Sweater oversized dengan bahan rajut akrilik yang hangat. Desain santai dan nyaman untuk cuaca dingin.", rating: 4.4 },
        { id: 9, name: "Cardigan Rajut", price: 220000, coret: 310000, stock: 5, colors: ["Coklat", "Biru"], category: "jaket", img: "https://i.pinimg.com/1200x/0d/8d/c0/0d8dc08b18cefbe50d7a01572e295f70.jpg", material: "Wol blend, lembut dan elegan untuk gaya klasik.", desc: "Cardigan rajut dengan bahan wol blend yang lembut dan elegan. Cocok untuk gaya klasik dan formal.", rating: 4.6 },
        { id: 10, name: "Hoodie Essential", price: 190000, coret: 270000, stock: 14, colors: ["Hitam", "Navy", "Hijau"], category: "jaket", img: "https://i.pinimg.com/736x/5e/72/48/5e7248e9146db445ba1c59dc10369188.jpg", material: "Cotton fleece tebal, hangat dan nyaman.", desc: "Hoodie essential dengan bahan cotton fleece tebal yang hangat dan nyaman. Desain minimalis cocok untuk segala suasana.", rating: 4.7 },
        { id: 11, name: "Celana Chino", price: 120000, coret: 170000, stock: 9, colors: ["Khaki", "Hitam"], category: "celana", img: "https://i.pinimg.com/736x/8b/41/63/8b416312ea723fa604b231fa19ea6d8f.jpg", material: "Katun stretch, elegan untuk tampilan smart casual.", desc: "Celana chino dengan bahan katun stretch yang elegan. Cocok untuk tampilan smart casual di berbagai acara.", rating: 4.5 },
        { id: 12, name: "Kemeja Flannel", price: 165000, coret: 220000, stock: 11, colors: ["Biru", "Hitam"], category: "kemeja", img: "https://jamesboogie.com/_next/image?url=https%3A%2F%2Fvps.jamesboogie.com%2Fwp-content%2Fuploads%2F2026%2F04%2FCS-Paisley-Shirt-Peizuli-4-scaled.jpg&w=3840&q=75", material: "Flannel hangat, cocok untuk gaya vintage.", desc: "Kemeja flannel dengan bahan hangat dan nyaman. Desain vintage yang cocok untuk gaya kasual dan santai.", rating: 4.3 },
        { id: 13, name: "Trench Coat", price: 430000, coret: 600000, stock: 4, colors: ["Abu-abu", "Hitam"], category: "jaket", img: "https://i.pinimg.com/736x/7f/d9/f1/7fd9f19011a50eaf05afe45f9c5ef319.jpg", material: "Wool blend premium, elegan dan tahan lama.", desc: "Trench coat premium dengan bahan wool blend yang elegan dan tahan lama. Cocok untuk tampilan formal dan profesional.", rating: 4.8 },
        { id: 14, name: "Slip On Casual", price: 280000, coret: 390000, stock: 8, colors: ["Putih", "Hitam"], category: "sepatu", img: "https://i.pinimg.com/1200x/5b/da/8b/5bda8b0adb87cf9617b98ec7b64d0384.jpg", material: "Kanvas premium dengan sol karet fleksibel.", desc: "Sepatu slip on dengan bahan kanvas premium yang nyaman. Desain casual dan mudah dipakai untuk sehari-hari.", rating: 4.4 },
        { id: 15, name: "Kaos Polos Premium", price: 99000, coret: 150000, stock: 30, colors: ["Hitam", "Putih", "Biru"], category: "kaos", img: "https://i.pinimg.com/1200x/c5/a7/e0/c5a7e0db5d3bacbf3466181989925c9d.jpg", material: "Combed cotton 30s, halus dan tidak mudah melar.", desc: "Kaos polos premium dengan bahan combed cotton 30s yang halus dan tidak mudah melar. Wajib punya di lemari!", rating: 4.6 },
        { id: 16, name: "Varsity Jacket", price: 320000, coret: 450000, stock: 6, colors: ["Unggu", "Hitam"], category: "jaket", img: "https://cf.shopee.co.id/file/id-11134207-7ra0j-mctafnlwmtcn2a", material: "Wol blend dengan lengan kulit sintetis, stylish.", desc: "Varsity jacket stylish dengan kombinasi wol blend dan lengan kulit sintetis. Desain sporty dan elegan.", rating: 4.7 },
        { id: 17, name: "Celana Jogger", price: 140000, coret: 190000, stock: 18, colors: ["Hitam", "Abu"], category: "celana", img: "https://i.pinimg.com/1200x/b3/ed/a6/b3eda67534da85acb3f9744c4762ae61.jpg", material: "Katun fleece, nyaman untuk aktivitas santai.", desc: "Celana jogger dengan bahan katun fleece yang nyaman untuk aktivitas santai. Cocok untuk olahraga atau hangout.", rating: 4.5 },
        { id: 18, name: "Shirt Linen", price: 210000, coret: 280000, stock: 7, colors: ["Putih", "Coklat"], category: "kemeja", img: "https://i.pinimg.com/736x/65/9d/8e/659d8ed48336b44b728860eb829bacfe.jpg", material: "Linen premium, adem dan elegan untuk tropis.", desc: "Kemeja linen premium yang adem dan elegan. Sangat cocok untuk iklim tropis Indonesia.", rating: 4.6 },
        { id: 19, name: "Sepatu Puma", price: 480000, coret: 650000, stock: 5, colors: ["Coklat","Kuning", "Hijau"], category: "sepatu", img: "https://i.pinimg.com/1200x/b6/0a/7d/b60a7d585bd8f4647af2acad4ec09fdc.jpg", material: "Kulit asli dengan sol tebal, kokoh dan stylish.", desc: "Sepatu boots dari kulit asli dengan sol tebal yang kokoh. Desain stylish dan tahan lama.", rating: 4.8 },
        { id: 20, name: "Turtleneck", price: 160000, coret: 215000, stock: 12, colors: ["Hitam", "Navy"], category: "kaos", img: "https://down-id.img.susercontent.com/file/sg-11134201-824j8-mf60u6ibx98u09", material: "Cotton rib knit, hangat dan nyaman.", desc: "Turtleneck dengan bahan cotton rib knit yang hangat dan nyaman. Cocok untuk gaya minimalis dan elegan.", rating: 4.3 },
        { id: 21, name: "Bomber Jacket", price: 350000, coret: 480000, stock: 8, colors: ["Kuning", "Hitam"], category: "jaket", img: "https://down-id.img.susercontent.com/file/id-11134207-8224s-mjqkq8ul50qtb4", material: "Satin premium dengan padding ringan.", desc: "Bomber jacket dengan bahan satin premium dan padding ringan. Desain sporty dan casual.", rating: 4.7 },
        { id: 22, name: "Celana Jeans", price: 195000, coret: 260000, stock: 16, colors: ["Biru", "Hitam"], category: "celana", img: "https://i.pinimg.com/1200x/c4/64/fd/c464fddb4c1c9c330ac0d93ae5983cae.jpg", material: "Denim stretch, nyaman dan awet.", desc: "Celana jeans dengan bahan denim stretch yang nyaman dan awet. Wajib punya untuk gaya kasual.", rating: 4.5 },
    ];

    const rekomendasiIds = [7, 3, 6, 5];

    // ======================== STATE ========================
    let cart = [];
    let currentFilter = 'all';
    let selectedProduct = null;
    let selectedSize = 'M';
    let selectedColor = '';
    let selectedQty = 1;
    let lastOrderData = null;
    let isAdminLoggedIn = false;
    let testimonials = [];
    let flashSaleData = {
        status: 'off',
        start: '08:00',
        end: '22:00',
        discount: 20,
        productIds: []
    };
    let flashCurrentIndex = 0;
    let flashInterval = null;

    // ======================== DOM REFS ========================
    const grid = document.getElementById('katalogGrid');
    const rekomendasiGrid = document.getElementById('rekomendasiGrid');
    const testimoniGrid = document.getElementById('testimoniGrid');
    const cartCount = document.getElementById('cartCount');
    const cartFloatCount = document.getElementById('cartFloatCount');
    const cartItemsPreview = document.getElementById('cartItemsPreview');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('checkoutModal');
    const detailModal = document.getElementById('detailModal');
    const ulasanModal = document.getElementById('ulasanModal');
    const successModal = document.getElementById('successModal');
    const adminLoginModal = document.getElementById('adminLoginModal');
    const adminPanelModal = document.getElementById('adminPanelModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const closeDetailBtn = document.getElementById('closeDetailModal');
    const closeAdminLogin = document.getElementById('closeAdminLogin');
    const closeAdminPanel = document.getElementById('closeAdminPanel');
    const lanjutCheckout = document.getElementById('lanjutCheckout');
    const cartIcon = document.getElementById('cartIcon');
    const cartFloat = document.getElementById('cartFloat');
    const cartIconNav = document.getElementById('cartIconNav');
    const adminIcon = document.getElementById('adminIcon');
    const adminIconNav = document.getElementById('adminIconNav');
    const welcomeMsg = document.getElementById('welcomeMessage');
    const qtyMinus = document.getElementById('qtyMinus');
    const qtyPlus = document.getElementById('qtyPlus');
    const detailQty = document.getElementById('detailQty');
    const flashSaleBanner = document.getElementById('flashSaleBanner');
    const flashSaleTimer = document.getElementById('flashSaleTimer');
    const flashSaleText = document.getElementById('flashSaleText');
    const flashSaleSlider = document.getElementById('flashSaleSlider');
    const flashCounter = document.getElementById('flashCounter');
    const flashPrevBtn = document.getElementById('flashPrevBtn');
    const flashNextBtn = document.getElementById('flashNextBtn');

    // ======================== WELCOME MESSAGE ========================
    function updateWelcomeMessage() {
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const now = new Date();
        const dayName = days[now.getDay()];
        const hour = now.getHours();
        let greeting = 'Selamat';
        if (hour >= 5 && hour < 12) greeting += ' Pagi';
        else if (hour >= 12 && hour < 15) greeting += ' Siang';
        else if (hour >= 15 && hour < 19) greeting += ' Sore';
        else greeting += ' Malam';
        welcomeMsg.textContent = `✨ ${greeting}, selamat datang di Harade Apparel!`;
    }
    updateWelcomeMessage();

    // ======================== HELPER ========================
    function getColorBg(color) {
        const map = {
            'hitam': '#1e1e1e', 'putih': '#f5f5f5', 'coklat': '#8B6B4A',
            'navy': '#1B2A4A', 'hijau': '#3A6B35', 'hijau army': '#4A6B3A',
            'biru': '#2A6B8A', 'kuning': '#E8C840', 'ungu': '#7A4A8A',
            'abu': '#9A9A9A', 'merah': '#B33A3A', 'khaki': '#BFA88A'
        };
        return map[color.toLowerCase()] || '#cccccc';
    }

    function renderStars(rating) {
        const full = Math.floor(rating);
        let stars = '';
        for (let i = 0; i < full; i++) stars += '★';
        const empty = 5 - full;
        for (let i = 0; i < empty; i++) stars += '☆';
        return stars + ' (' + rating.toFixed(1) + ')';
    }

    function isProductOnFlashSale(productId) {
        return flashSaleData.status === 'on' && flashSaleData.productIds.includes(productId);
    }

    function getFlashSalePrice(originalPrice, productId) {
        if (!isProductOnFlashSale(productId)) return originalPrice;
        const discount = flashSaleData.discount / 100;
        return Math.round(originalPrice * (1 - discount));
    }

    function getFlashProducts() {
        return products.filter(p => flashSaleData.productIds.includes(p.id));
    }

    // ======================== FLASH SALE SLIDER ========================
    function renderFlashSlider() {
        const flashProducts = getFlashProducts();
        if (flashProducts.length === 0 || flashSaleData.status !== 'on') {
            flashSaleBanner.style.display = 'none';
            return;
        }

        const now = new Date();
        const nowStr = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
        
        if (nowStr >= flashSaleData.start && nowStr <= flashSaleData.end) {
            flashSaleBanner.style.display = 'block';
            
            // Tampilkan produk berdasarkan index
            const product = flashProducts[flashCurrentIndex];
            if (!product) {
                flashCurrentIndex = 0;
                renderFlashSlider();
                return;
            }

            const flashPrice = getFlashSalePrice(product.price, product.id);
            
            flashSaleSlider.innerHTML = `
                <div class="flash-product-item">
                    <img src="${product.img}" alt="${product.name}" onerror="this.src='https://picsum.photos/seed/flash${product.id}/50/50'">
                    <span class="pname">${product.name}</span>
                    <span class="pprice">Rp${flashPrice.toLocaleString()}</span>
                </div>
            `;

            flashSaleText.textContent = `Diskon ${flashSaleData.discount}% - ${flashProducts.length} produk!`;
            flashCounter.textContent = `${flashCurrentIndex + 1}/${flashProducts.length}`;

            // Timer
            const endParts = flashSaleData.end.split(':');
            const endTime = new Date();
            endTime.setHours(parseInt(endParts[0]), parseInt(endParts[1]), 0);
            const diff = endTime - now;
            if (diff > 0) {
                const hours = Math.floor(diff / 3600000);
                const mins = Math.floor((diff % 3600000) / 60000);
                const secs = Math.floor((diff % 60000) / 1000);
                flashSaleTimer.textContent = `⏱️ ${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
            } else {
                flashSaleTimer.textContent = '⏱️ Flash Sale Berakhir';
            }
        } else {
            flashSaleBanner.style.display = 'none';
            clearInterval(flashInterval);
            flashInterval = null;
        }
    }

    function nextFlashProduct() {
        const flashProducts = getFlashProducts();
        if (flashProducts.length === 0) return;
        flashCurrentIndex = (flashCurrentIndex + 1) % flashProducts.length;
        renderFlashSlider();
    }

    function prevFlashProduct() {
        const flashProducts = getFlashProducts();
        if (flashProducts.length === 0) return;
        flashCurrentIndex = (flashCurrentIndex - 1 + flashProducts.length) % flashProducts.length;
        renderFlashSlider();
    }

    function startFlashSlider() {
        if (flashInterval) {
            clearInterval(flashInterval);
            flashInterval = null;
        }
        // Ganti setiap 60 detik (1 menit)
        flashInterval = setInterval(nextFlashProduct, 60000);
    }

    // ======================== RENDER ========================
    function renderProducts(filter = 'all', search = '') {
        let filtered = filter === 'all' ? [...products] : products.filter(p => p.category === filter);
        if (search.trim() !== '') {
            const q = search.toLowerCase().trim();
            filtered = filtered.filter(p => p.name.toLowerCase().includes(q));
        }

        if (filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; opacity:0.6;">Tidak ada produk yang cocok</div>`;
            return;
        }

        grid.innerHTML = filtered.map(p => {
            const colorDots = p.colors.slice(0, 5).map(c => {
                const bg = getColorBg(c);
                return `<span class="color-dot" style="background:${bg};border-color:#ccc;" title="${c}"></span>`;
            }).join('');

            const isFlash = isProductOnFlashSale(p.id);
            const flashPrice = isFlash ? getFlashSalePrice(p.price, p.id) : p.price;

            return `
                <div class="product-card" data-id="${p.id}">
                    <div class="product-img"><img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://picsum.photos/seed/fallback${p.id}/200/200'"></div>
                    <div class="product-name">${p.name}</div>
                    <div class="product-rating">${renderStars(p.rating)}</div>
                    <div class="price-wrap">
                        <span class="price">Rp${flashPrice.toLocaleString()}</span>
                        ${isFlash ? `<span class="coret">Rp${p.price.toLocaleString()}</span>` : `<span class="coret">Rp${p.coret.toLocaleString()}</span>`}
                        ${isFlash ? `<span style="color:#ff4444;font-weight:700;font-size:0.7rem;background:#ffebee;padding:2px 8px;border-radius:20px;">FLASH SALE!</span>` : ''}
                    </div>
                    <div class="color-options">${colorDots}</div>
                    <button class="btn-add" data-id="${p.id}">+ Tambah ke keranjang</button>
                </div>
            `;
        }).join('');
    }

    function renderRekomendasi() {
        const rekomItems = rekomendasiIds.map(id => products.find(p => p.id === id)).filter(Boolean);
        if (!rekomendasiGrid) return;
        rekomendasiGrid.innerHTML = rekomItems.map(p => {
            const isFlash = isProductOnFlashSale(p.id);
            const flashPrice = isFlash ? getFlashSalePrice(p.price, p.id) : p.price;
            return `
                <div class="rekomendasi-item" data-id="${p.id}">
                    <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://picsum.photos/seed/rec${p.id}/200/200'">
                    <h4>${p.name}</h4>
                    <div class="product-rating">${renderStars(p.rating)}</div>
                    <div class="price-wrap" style="justify-content:center;">
                        <span class="price">Rp${flashPrice.toLocaleString()}</span>
                        ${isFlash ? `<span class="coret">Rp${p.price.toLocaleString()}</span>` : `<span class="coret">Rp${p.coret.toLocaleString()}</span>`}
                    </div>
                    <button class="btn-add" data-id="${p.id}">+ Tambah</button>
                </div>
            `;
        }).join('');
    }

    function renderTestimoni() {
        if (!testimoniGrid) return;
        const defaultTestimonis = [
            { stars: 5, text: "Produknya berkualitas banget! Bahannya adem dan nyaman dipakai. Rekomendasi banget!", author: "- Andi Pratama" },
            { stars: 5, text: "Pengiriman cepat, packaging rapi, dan produk sesuai dengan foto. Harade Apparel terpercaya!", author: "- Siti Rahayu" },
            { stars: 4, text: "Designnya keren dan kekinian. Harga terjangkau dengan kualitas premium. Pasti belanja lagi!", author: "- Budi Santoso" },
            { stars: 5, text: "Pelayanan ramah dan responsif. Produk yang saya pesan sesuai dengan ukuran. Sangat puas!", author: "- Dini Anggraeni" }
        ];

        const allTestimonis = [...defaultTestimonis, ...testimonials];
        testimoniGrid.innerHTML = allTestimonis.map(t => `
            <div class="testimoni-card">
                <div class="stars">${'⭐'.repeat(Math.min(t.stars, 5))}</div>
                <p>"${t.text}"</p>
                <div class="testimoni-author">- ${t.author}</div>
            </div>
        `).join('');
    }

    function renderAdminPanel() {
        const list = document.getElementById('adminStockList');
        if (!list) return;
        list.innerHTML = products.map(p => `
            <div class="admin-stock-item" data-id="${p.id}">
                <span class="product-name">${p.name}</span>
                <div class="admin-fields">
                    <div class="field-group"><label>Stok:</label><input type="number" min="0" value="${p.stock}" data-id="${p.id}" class="stock-input"></div>
                    <div class="field-group"><label>Harga (Rp):</label><input type="number" min="0" step="1000" value="${p.price}" data-id="${p.id}" class="price-input"></div>
                    <div class="field-group"><label>Coret (Rp):</label><input type="number" min="0" step="1000" value="${p.coret}" data-id="${p.id}" class="coret-input"></div>
                </div>
            </div>
        `).join('');

        // Update dropdown produk flash sale
        const select = document.getElementById('flashSaleProductSelect');
        if (select) {
            const selectedValues = Array.from(select.options)
                .filter(opt => opt.selected)
                .map(opt => opt.value);
            
            select.innerHTML = '';
            products.forEach(p => {
                const option = document.createElement('option');
                option.value = p.id;
                option.textContent = `${p.id}. ${p.name} (Rp${p.price.toLocaleString()})`;
                if (flashSaleData.productIds.includes(p.id)) {
                    option.selected = true;
                }
                select.appendChild(option);
            });
        }
    }

    function updateCartUI() {
        const total = cart.reduce((sum, item) => sum + item.qty, 0);
        if (cartCount) cartCount.textContent = total;
        if (cartFloatCount) cartFloatCount.textContent = total;
        if (document.getElementById('cartCountNav')) {
            document.getElementById('cartCountNav').textContent = total;
        }
        if (cartItemsPreview) {
            if (cart.length === 0) {
                cartItemsPreview.innerHTML = '<p style="opacity:0.6; margin:8px 0;">Keranjang kosong</p>';
            } else {
                cartItemsPreview.innerHTML = cart.map(item =>
                    `<div style="display:flex;justify-content:space-between;background:#f0f7ed;padding:6px 14px;border-radius:40px;margin:4px 0;font-size:0.9rem;">
                        <span>${item.name} (${item.size || 'M'}) ×${item.qty}</span>
                        <span>Rp${(item.price * item.qty).toLocaleString()}</span>
                    </div>`
                ).join('');
            }
        }
    }

    // ======================== CART ========================
    function addToCart(productId, size = 'M', color = '', qty = 1) {
        const prod = products.find(p => p.id === productId);
        if (!prod) return;
        
        const isFlash = isProductOnFlashSale(productId);
        const price = isFlash ? getFlashSalePrice(prod.price, productId) : prod.price;
        
        if (prod.stock < qty) {
            alert(`Stok tidak mencukupi! Tersisa ${prod.stock} item.`);
            return;
        }
        const exist = cart.find(c => c.id === productId && c.size === size);
        if (exist) {
            if (prod.stock < exist.qty + qty) {
                alert(`Stok tidak mencukupi! Tersisa ${prod.stock} item.`);
                return;
            }
            exist.qty += qty;
        } else {
            cart.push({ ...prod, qty: qty, size: size, color: color, price: price });
        }
        updateCartUI();
        const btns = document.querySelectorAll(`.btn-add[data-id="${productId}"]`);
        btns.forEach(btn => {
            const orig = btn.textContent;
            btn.textContent = '✓ Ditambahkan!';
            btn.style.background = '#3f7e2b';
            setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 800);
        });
    }

    // ======================== DETAIL ========================
    function openDetail(productId) {
        const prod = products.find(p => p.id === productId);
        if (!prod) return;
        selectedProduct = prod;
        selectedSize = 'M';
        selectedColor = prod.colors[0] || '';
        selectedQty = 1;
        detailQty.textContent = '1';

        const isFlash = isProductOnFlashSale(productId);
        const flashPrice = isFlash ? getFlashSalePrice(prod.price, productId) : prod.price;
        const showFlash = isFlash;

        document.getElementById('detailImg').src = prod.img;
        document.getElementById('detailTitle').textContent = prod.name;
        document.getElementById('detailRating').textContent = renderStars(prod.rating);
        document.getElementById('detailPrice').textContent = 'Rp' + flashPrice.toLocaleString();
        document.getElementById('detailCoret').textContent = showFlash ? 'Rp' + prod.price.toLocaleString() : 'Rp' + prod.coret.toLocaleString();
        document.getElementById('detailStock').textContent = `Stok: ${prod.stock}`;
        document.getElementById('detailMaterial').innerHTML = `<strong>Bahan:</strong> ${prod.material}`;
        document.getElementById('detailDescriptionText').textContent = prod.desc || 'Produk berkualitas tinggi dengan desain modern dan nyaman digunakan sehari-hari.';

        const colorContainer = document.getElementById('detailColors');
        colorContainer.innerHTML = prod.colors.map(c => {
            const bg = getColorBg(c);
            return `<span class="color-dot" style="background:${bg};border-color:${c === selectedColor ? '#000' : '#ccc'};cursor:pointer;" data-color="${c}" title="${c}"></span>`;
        }).join('');

        const sizeContainer = document.getElementById('detailSizes');
        sizeContainer.innerHTML = ['M', 'L', 'XL'].map(s => 
            `<button class="size-btn ${s === selectedSize ? 'active' : ''}" data-size="${s}">${s}</button>`
        ).join('');

        detailModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    // ======================== SUCCESS ========================
    function showSuccess(data) {
        document.getElementById('successName').textContent = data.name;
        document.getElementById('successAddress').textContent = data.address;
        document.getElementById('successPhone').textContent = data.phone;
        document.getElementById('successPayment').textContent = data.payment;
        document.getElementById('successTotal').textContent = 'Rp' + data.total.toLocaleString();
        document.getElementById('successItems').textContent = data.items + ' item';
        successModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    // ======================== EVENTS ========================

    // Klik produk buka detail
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card, .rekomendasi-item');
        if (card && !e.target.closest('.btn-add')) {
            const id = parseInt(card.dataset.id);
            if (id) openDetail(id);
        }
    });

    // Tombol tambah
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-add');
        if (btn) {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            if (detailModal.classList.contains('open') && selectedProduct && selectedProduct.id === id) {
                addToCart(id, selectedSize, selectedColor, selectedQty);
                detailModal.classList.remove('open');
                document.body.style.overflow = '';
            } else {
                openDetail(id);
            }
        }
    });

    // Pilih ukuran
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.size-btn');
        if (btn) {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = btn.dataset.size;
        }
    });

    // Pilih warna
    document.addEventListener('click', (e) => {
        const dot = e.target.closest('.color-dot');
        if (dot && dot.closest('#detailColors')) {
            document.querySelectorAll('#detailColors .color-dot').forEach(d => d.style.borderColor = '#ccc');
            dot.style.borderColor = '#000';
            selectedColor = dot.dataset.color;
        }
    });

    // Qty control
    if (qtyMinus) qtyMinus.addEventListener('click', () => { if (selectedQty > 1) { selectedQty--; detailQty.textContent = selectedQty; } });
    if (qtyPlus) qtyPlus.addEventListener('click', () => { if (selectedProduct && selectedQty < selectedProduct.stock) { selectedQty++; detailQty.textContent = selectedQty; } else { alert('Stok tidak mencukupi!'); } });

    // Tambah dari detail
    document.getElementById('addToCartDetail')?.addEventListener('click', function() {
        if (selectedProduct) {
            addToCart(selectedProduct.id, selectedSize, selectedColor, selectedQty);
            detailModal.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    // Tutup detail
    if (closeDetailBtn) {
        closeDetailBtn.addEventListener('click', () => { detailModal.classList.remove('open'); document.body.style.overflow = ''; });
    }
    window.addEventListener('click', (e) => { if (e.target === detailModal) { detailModal.classList.remove('open'); document.body.style.overflow = ''; } });

    // Filter
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderProducts(currentFilter, searchInput ? searchInput.value : '');
        });
    });

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', function() { renderProducts(currentFilter, this.value); });
        searchInput.addEventListener('keyup', function() { renderProducts(currentFilter, this.value); });
    }

    // Buka checkout
    function openCheckout() {
        if (cart.length === 0) { alert('Keranjang kosong!'); return; }
        updateCartUI();
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    if (cartIcon) cartIcon.addEventListener('click', (e) => { e.preventDefault(); openCheckout(); });
    if (cartFloat) cartFloat.addEventListener('click', openCheckout);
    if (cartIconNav) cartIconNav.addEventListener('click', (e) => { e.preventDefault(); openCheckout(); });

    // Tutup checkout
    function closeModal() { modal.classList.remove('open'); document.body.style.overflow = ''; }
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    // Proses checkout
    if (lanjutCheckout) {
        lanjutCheckout.addEventListener('click', function() {
            const name = document.getElementById('custName')?.value.trim() || '';
            const address = document.getElementById('custAddress')?.value.trim() || '';
            const phone = document.getElementById('custPhone')?.value.trim() || '';
            const postal = document.getElementById('custPostal')?.value.trim() || '';
            const pay = document.querySelector('input[name="payment"]:checked');

            if (!name || !address || !phone || !postal) { alert('Isi semua data diri!'); return; }
            if (!pay) { alert('Pilih metode pembayaran!'); return; }
            if (cart.length === 0) { alert('Keranjang kosong!'); return; }

            const totalItems = cart.reduce((s, i) => s + i.qty, 0);
            const totalPrice = cart.reduce((s, i) => s + (i.price * i.qty), 0);

            lastOrderData = { name, address, phone, postal, payment: pay.value, total: totalPrice, items: totalItems, cart: [...cart] };

            modal.classList.remove('open');
            ['custName', 'custAddress', 'custPhone', 'custPostal'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
            document.querySelectorAll('input[name="payment"]').forEach(r => r.checked = false);

            cart.forEach(item => { const prod = products.find(p => p.id === item.id); if (prod) { prod.stock = Math.max(0, prod.stock - item.qty); } });
            cart = [];
            updateCartUI();
            showSuccess(lastOrderData);
        });
    }

    // Success buttons
    document.getElementById('successToUlasan')?.addEventListener('click', function() {
        successModal.classList.remove('open');
        document.body.style.overflow = '';
        ulasanModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
    document.getElementById('successToHome')?.addEventListener('click', function() {
        successModal.classList.remove('open');
        document.body.style.overflow = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Star rating
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.dataset.value);
            document.getElementById('ratingValue').value = value;
            document.querySelectorAll('.star').forEach(s => { s.classList.toggle('active', parseInt(s.dataset.value) <= value); });
        });
        star.addEventListener('mouseenter', function() {
            const value = parseInt(this.dataset.value);
            document.querySelectorAll('.star').forEach(s => { s.style.color = parseInt(s.dataset.value) <= value ? '#f5a623' : '#ddd'; });
        });
        star.addEventListener('mouseleave', function() {
            const rating = parseInt(document.getElementById('ratingValue').value) || 0;
            document.querySelectorAll('.star').forEach(s => { s.style.color = parseInt(s.dataset.value) <= rating ? '#f5a623' : '#ddd'; });
        });
    });

    // Submit ulasan
    document.getElementById('ulasanForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const rating = parseInt(document.getElementById('ratingValue').value) || 0;
        const layanan = document.getElementById('ulasanLayanan').value.trim();
        const pengalaman = document.getElementById('ulasanPengalaman').value.trim();
        const kritik = document.getElementById('ulasanKritik').value.trim();

        if (rating === 0) { alert('Berikan rating bintang!'); return; }
        if (!layanan || !pengalaman) { alert('Isi semua field wajib!'); return; }

        const testimoniText = `${pengalaman} ${kritik ? 'Kritik/Saran: ' + kritik : ''}`;
        testimonials.push({
            stars: rating,
            text: testimoniText,
            author: 'Pelanggan Harade Apparel'
        });

        alert('🙏 Terima kasih atas ulasan Anda!\n\n⭐ Rating: ' + '★'.repeat(rating) + '\n💬 Layanan: ' + layanan + '\n📝 Pengalaman: ' + pengalaman + (kritik ? '\n📌 Kritik/Saran: ' + kritik : ''));

        document.getElementById('ratingValue').value = '0';
        document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
        document.getElementById('ulasanLayanan').value = '';
        document.getElementById('ulasanPengalaman').value = '';
        document.getElementById('ulasanKritik').value = '';
        ulasanModal.classList.remove('open');
        document.body.style.overflow = '';

        renderTestimoni();
        alert('🎉 Terima kasih! Ulasan Anda sangat berharga bagi kami.');
    });

    // ======================== ADMIN ========================

    function openAdminLogin() {
        adminLoginModal.classList.add('open');
        document.body.style.overflow = 'hidden';
        document.getElementById('adminUser').value = '';
        document.getElementById('adminPass').value = '';
    }
    if (adminIcon) adminIcon.addEventListener('click', (e) => { e.preventDefault(); openAdminLogin(); });
    if (adminIconNav) adminIconNav.addEventListener('click', (e) => { e.preventDefault(); openAdminLogin(); });

    if (closeAdminLogin) {
        closeAdminLogin.addEventListener('click', () => { adminLoginModal.classList.remove('open'); document.body.style.overflow = ''; });
    }

    document.getElementById('adminLoginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const user = document.getElementById('adminUser').value.trim();
        const pass = document.getElementById('adminPass').value.trim();

        if (user === 'Admin' && pass === 'Admin123') {
            isAdminLoggedIn = true;
            adminLoginModal.classList.remove('open');
            document.body.style.overflow = '';
            
            // Load flash sale data ke form
            document.getElementById('flashSaleStatus').value = flashSaleData.status;
            document.getElementById('flashSaleStart').value = flashSaleData.start;
            document.getElementById('flashSaleEnd').value = flashSaleData.end;
            document.getElementById('flashSaleDiscount').value = flashSaleData.discount;
            
            renderAdminPanel();
            adminPanelModal.classList.add('open');
            document.body.style.overflow = 'hidden';
            if (adminIcon) adminIcon.classList.add('active');
            if (adminIconNav) adminIconNav.classList.add('active');
            alert('✅ Login berhasil! Selamat datang Admin.');
        } else {
            alert('❌ Username atau password salah!');
            document.getElementById('adminUser').value = '';
            document.getElementById('adminPass').value = '';
            document.getElementById('adminUser').focus();
        }
    });

    if (closeAdminPanel) {
        closeAdminPanel.addEventListener('click', () => { adminPanelModal.classList.remove('open'); document.body.style.overflow = ''; });
    }

    // ======================== SAVE FLASH SALE ========================
    document.getElementById('saveFlashSale')?.addEventListener('click', function() {
        const status = document.getElementById('flashSaleStatus').value;
        const start = document.getElementById('flashSaleStart').value;
        const end = document.getElementById('flashSaleEnd').value;
        const discount = parseInt(document.getElementById('flashSaleDiscount').value) || 0;
        
        const select = document.getElementById('flashSaleProductSelect');
        const selectedOptions = Array.from(select.selectedOptions);
        const productIds = selectedOptions.map(opt => parseInt(opt.value)).filter(id => !isNaN(id));
        
        // Validasi
        if (status === 'on') {
            if (!start || !end) {
                alert('❌ Mohon isi jam mulai dan jam selesai!');
                return;
            }
            if (discount < 1 || discount > 90) {
                alert('❌ Diskon harus antara 1% - 90%!');
                return;
            }
            if (productIds.length === 0) {
                alert('❌ Mohon pilih minimal 1 produk untuk flash sale!');
                return;
            }
            if (productIds.length > 10) {
                alert('❌ Maksimal 10 produk untuk flash sale!');
                return;
            }
        }
        
        flashSaleData.status = status;
        flashSaleData.start = start;
        flashSaleData.end = end;
        flashSaleData.discount = discount;
        flashSaleData.productIds = productIds;
        
        // Reset index
        flashCurrentIndex = 0;
        
        const productNames = productIds.map(id => {
            const product = products.find(p => p.id === id);
            return product ? product.name : 'Unknown';
        }).join(', ');
        
        alert(`✅ Pengaturan Flash Sale berhasil disimpan!\n\nStatus: ${status === 'on' ? '🟢 Aktif' : '🔴 Nonaktif'}\nProduk (${productIds.length}/10): ${productNames}\nDiskon: ${discount}%\nJam: ${start} - ${end}`);
        
        renderFlashSlider();
        if (status === 'on' && productIds.length > 0) {
            startFlashSlider();
        } else {
            if (flashInterval) {
                clearInterval(flashInterval);
                flashInterval = null;
            }
        }
        renderProducts(currentFilter, searchInput ? searchInput.value : '');
        renderRekomendasi();
    });

    // ======================== SAVE STOCK & PRICE ========================
    document.getElementById('adminSaveChanges')?.addEventListener('click', function() {
        document.querySelectorAll('.stock-input').forEach(input => {
            const id = parseInt(input.dataset.id);
            const stock = parseInt(input.value) || 0;
            const prod = products.find(p => p.id === id);
            if (prod) prod.stock = Math.max(0, stock);
        });
        document.querySelectorAll('.price-input').forEach(input => {
            const id = parseInt(input.dataset.id);
            const price = parseInt(input.value) || 0;
            const prod = products.find(p => p.id === id);
            if (prod) prod.price = Math.max(0, price);
        });
        document.querySelectorAll('.coret-input').forEach(input => {
            const id = parseInt(input.dataset.id);
            const coret = parseInt(input.value) || 0;
            const prod = products.find(p => p.id === id);
            if (prod) prod.coret = Math.max(0, coret);
        });
        alert('✅ Perubahan stok dan harga berhasil disimpan!');
        renderAdminPanel();
        renderProducts(currentFilter, searchInput ? searchInput.value : '');
        renderRekomendasi();
    });

    document.getElementById('adminLogout')?.addEventListener('click', function() {
        isAdminLoggedIn = false;
        adminPanelModal.classList.remove('open');
        document.body.style.overflow = '';
        if (adminIcon) adminIcon.classList.remove('active');
        if (adminIconNav) adminIconNav.classList.remove('active');
        if (flashInterval) {
            clearInterval(flashInterval);
            flashInterval = null;
        }
        alert('👋 Logout berhasil!');
    });

    // ======================== FLASH SALE NAVIGATION ========================
    if (flashPrevBtn) {
        flashPrevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            prevFlashProduct();
            // Reset interval
            if (flashInterval) {
                clearInterval(flashInterval);
                startFlashSlider();
            }
        });
    }

    if (flashNextBtn) {
        flashNextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            nextFlashProduct();
            // Reset interval
            if (flashInterval) {
                clearInterval(flashInterval);
                startFlashSlider();
            }
        });
    }

    // ======================== FLASH SALE INTERVAL ========================
    setInterval(() => {
        // Check flash sale status setiap detik (untuk timer)
        if (flashSaleData.status === 'on') {
            renderFlashSlider();
        }
    }, 1000);

    // ======================== ESC ========================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal?.classList.contains('open')) closeModal();
            if (detailModal?.classList.contains('open')) { detailModal.classList.remove('open'); document.body.style.overflow = ''; }
            if (ulasanModal?.classList.contains('open')) { ulasanModal.classList.remove('open'); document.body.style.overflow = ''; }
            if (successModal?.classList.contains('open')) { successModal.classList.remove('open'); document.body.style.overflow = ''; }
            if (adminLoginModal?.classList.contains('open')) { adminLoginModal.classList.remove('open'); document.body.style.overflow = ''; }
            if (adminPanelModal?.classList.contains('open')) { adminPanelModal.classList.remove('open'); document.body.style.overflow = ''; }
        }
    });

    // ======================== INIT ========================
    renderProducts('all');
    renderRekomendasi();
    renderTestimoni();
    updateCartUI();
    renderFlashSlider();
    if (flashSaleData.status === 'on' && flashSaleData.productIds.length > 0) {
        startFlashSlider();
    }

    console.log('🚀 Harade Apparel siap!');
    console.log(`📦 ${products.length} produk tersedia`);
    console.log('🔐 Admin login: Admin / Admin123');
    console.log('🔥 Flash Sale: 1-10 produk dengan slider berganti setiap 1 menit!');

})();