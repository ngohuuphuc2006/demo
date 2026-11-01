
// DỮ LIỆU SẢN PHẨM
// DỮ LIỆU SẢN PHẨM CHUẨN (ĐÃ SỬA LỖI CÚ PHÁP)
// DỮ LIỆU SẢN PHẨM CHUẨN (ĐÃ BỔ SUNG ĐẦY ĐỦ MODELS & SWITCHES CHO TẤT CẢ)
var products = [
    { 
        id: 1, // QUAN TRỌNG: Mỗi sản phẩm phải có 1 số ID riêng biệt (không trùng nhau)
        name: "Bàn phím cơ Aula F75 3 Mode", 
        brand: "Aula", // Phải gõ đúng 1 trong các chữ: Aula, Leobog, Lingbao, Xinmeng, Weikav
        category: "keyboard", // Danh mục: keyboard (bàn phím), switch, keycap
        oldPrice: 1450000, // Giá gốc (Viết số liền nhau, không chấm phẩy)
        price: 550000, // Giá bán thực tế
        connection: "Type-C / 2.4G / Bluetooth", 
        structure: "Gasket Mount, Mạch xuôi", 
        desc: "Đoạn văn mô tả chi tiết sản phẩm của bạn. Viết càng hay chốt đơn càng dễ...", 
        
        // MẢNG ẢNH: Link ảnh số 1 là ảnh mặc định.
        images: [
            "anh-phim/aula-f75-xanh-tuyet.png", // Ảnh vị trí số 0
            "anh-phim/aula-f75-trang-xanh.png",
            "anh-phim/aula-f75-gau-dau.png",
            "anh-phim/aula-f75-heo-hong.png",
            "anh-phim/aula-f75-hoat-hinh.png",
            "anh-phim/aula-f75-labubu.png",
            "anh-phim/aula-f75-shin.png",
            "anh-phim/aula-f75-son.png" // Ảnh vị trí số 1
        ],
        
        // MẪU MÃ: Khai báo các phiên bản màu sắc
        models: [ 
            { id: "m1", name: "Xanh Tuyết Tùng", imgIndex: 0, priceAdd: 0, stock:2 }, // imgIndex: 0 nghĩa là lấy ảnh đầu tiên ở trên
            { id: "m2", name: "Xanh Băng", imgIndex: 1, priceAdd: 30000, stock:5 }, 
            { id: "m3", name: "Gấu Dâu", imgIndex: 2, priceAdd: 154000, inStock: false }, 
            { id: "m4", name: "Heo Hồng", imgIndex: 3, priceAdd: 176000, stock:7 },
            { id: "m5", name: "Hoạt Hình", imgIndex: 4, priceAdd: 162000, stock: 16 },
            { id: "m6", name: "Labubu", imgIndex: 5, priceAdd: 160000, stock: 2 },
            { id: "m7", name: "ShinChan", imgIndex: 6, priceAdd: 175000, stock: 8 },
            { id: "m8", name: "Son Lỏng", imgIndex: 7, priceAdd: 120000, stock: 1 },
        ],
        
        // KIỂU MOD / SWITCH: Khai báo giá tiền cộng thêm
        switches: [ 
            { id: "s1", name: "Switch hãng mặc định", priceAdd: 0, stock: 6 }, 
            { id: "s2", name: "Mod Full Lube + Lót Foam", priceAdd: 250000, stock: 3}, // Cộng thêm 250k vào giá bán
            { id: "s3", name: "Mod Silent", priceAdd: 280000, stock: 12 }
        ],
        
        // BẢNG THÔNG SỐ CHI TIẾT
        fullSpecs: [
            { label: "Thương hiệu", value: "Aula" },
            { label: "Model", value: "Aula F75" },
            { label: "Layout", value: "75% (80 phím)" },
            { label: "Keycap", value: "Nhựa PBT Double-shot" },
            { label: "Dung lượng Pin", value: "4000 mAh" }
        ],
        hashtags: "#banphimco #aula #phuckeyboard #ngohuuphuc"
    }, // <-- DẤU PHẨY Ở CUỐI CỰC KỲ QUAN TRỌNG ĐỂ KẾT NỐI VỚI SP TIẾP THEO
    { 
        id: 2, // QUAN TRỌNG: Mỗi sản phẩm phải có 1 số ID riêng biệt (không trùng nhau)
        name: "Bàn phím cơ Aula S75 Pro 3 Mode", 
        brand: "Aula", // Phải gõ đúng 1 trong các chữ: Aula, Leobog, Lingbao, Xinmeng, Weikav
        category: "keyboard", // Danh mục: keyboard (bàn phím), switch, keycap
        oldPrice: 1500000, // Giá gốc (Viết số liền nhau, không chấm phẩy)
        price: 630000, // Giá bán thực tế
        connection: "Type-C / 2.4G / Bluetooth", 
        structure: "Gasket Mount, Mạch xuôi", 
        desc: "Đoạn văn mô tả chi tiết sản phẩm của bạn. Viết càng hay chốt đơn càng dễ...", 
        
        // MẢNG ẢNH: Link ảnh số 1 là ảnh mặc định.
        images: [
            "anh-phim/aula-s75-den-hong.png", // Ảnh vị trí số 0
            "anh-phim/aula-s75-trang-xanh.png",
            "anh-phim/aula-s75-hong-dao.png",
            "anh-phim/aula-s75-heo-hong.png",
            "anh-phim/aula-s75-capybara.png",
            "anh-phim/aula-s75-gau-tuyet.png",
            "anh-phim/aula-s75-shinchan.png",
            "anh-phim/aula-s75-son.png",
            "anh-phim/aula-s75-phi-hanh-gia.png",
            "anh-phim/aula-s75-banh-mi.png",
            "anh-phim/aula-s75-yetii.png" // Ảnh vị trí số 1
        ],
        
        // MẪU MÃ: Khai báo các phiên bản màu sắc
        models: [ 
            { id: "m1", name: "Đen Hồng", imgIndex: 0, priceAdd: 0, stock:2 }, // imgIndex: 0 nghĩa là lấy ảnh đầu tiên ở trên
            { id: "m2", name: "Xanh Băng", imgIndex: 1, priceAdd: 30000, stock:5 }, 
            { id: "m3", name: "Hồng Đào", imgIndex: 2, priceAdd: 75000, Stock: 10 }, 
            { id: "m4", name: "Heo Hồng", imgIndex: 3, priceAdd: 175000, stock:7 },
            { id: "m5", name: "Caoybara", imgIndex: 4, priceAdd: 162000, inStock: false },
            { id: "m6", name: "Gấu Tuyết", imgIndex: 5, priceAdd: 160000, stock: 3 },
            { id: "m7", name: "ShinChan", imgIndex: 6, priceAdd: 175000, stock: 8 },
            { id: "m8", name: "Son Lỏng", imgIndex: 7, priceAdd: 100000, inStock: false },
            { id: "m9", name: "Phi Hành Gia", imgIndex: 8, priceAdd: 185000, inStock: false},
            { id: "m10", name: "Bánh Mì", imgIndex: 9, priceAdd: 170000, stock: 15 },
            { id: "m11", name: "Yeti", imgIndex: 10, priceAdd: 165000, stock: 1 },
        ],
        
        // KIỂU MOD / SWITCH: Khai báo giá tiền cộng thêm
        switches: [ 
            { id: "s1", name: "Switch hãng mặc định", priceAdd: 0}, 
            { id: "s2", name: "Mod Full Lube + Lót Foam", priceAdd: 0}, // Cộng thêm 250k vào giá bán
            { id: "s3", name: "Mod Silent", priceAdd: 0}
        ],
        
        // BẢNG THÔNG SỐ CHI TIẾT
        fullSpecs: [
            { label: "Thương hiệu", value: "Aula" },
            { label: "Model", value: "Aula F75" },
            { label: "Layout", value: "75% (80 phím)" },
            { label: "Keycap", value: "Nhựa PBT Double-shot" },
            { label: "Dung lượng Pin", value: "4000 mAh" }
        ],
        hashtags: "#banphimco #aula #phuckeyboard #ngohuuphuc"
    },

    { 
        id: 3, // QUAN TRỌNG: Mỗi sản phẩm phải có 1 số ID riêng biệt (không trùng nhau)
        name: "Bàn phím cơ Lingbao K98 3 Mode", 
        brand: "Lingbao", // Phải gõ đúng 1 trong các chữ: Aula, Leobog, Lingbao, Xinmeng, Weikav
        category: "keyboard", // Danh mục: keyboard (bàn phím), switch, keycap
        oldPrice: 1200000, // Giá gốc (Viết số liền nhau, không chấm phẩy)
        price: 500000, // Giá bán thực tế
        connection: "Type-C / 2.4G / Bluetooth", 
        structure: "Gasket Mount, Mạch xuôi", 
        desc: "Đoạn văn mô tả chi tiết sản phẩm của bạn. Viết càng hay chốt đơn càng dễ...", 
        
        // MẢNG ẢNH: Link ảnh số 1 là ảnh mặc định.
        images: [
            "anh-phim/lingbao-k98-do-den.png", // Ảnh vị trí số 0
            "anh-phim/lingbao-k98-den-hong.png",
            "anh-phim/lingbao-k98-trang-xanh.png",
            "anh-phim/lingbao-k98-cho-nho.png",
            "anh-phim/lingbao-k98-alinnyia.png",
            "anh-phim/lingbao-k98-lucynirel.jpg",
            "anh-phim/lingbao-k98pro-do.png",
            "anh-phim/lingbao-k98pro-evening.png" // Ảnh vị trí số 1
        ],
        
        // MẪU MÃ: Khai báo các phiên bản màu sắc
        models: [ 
            { id: "m1", name: "Đỏ Đen 5000mAh", imgIndex: 0, priceAdd: 0, stock:2 }, // imgIndex: 0 nghĩa là lấy ảnh đầu tiên ở trên
            { id: "m2", name: "Đen Hồng 10000mAh", imgIndex: 1, priceAdd: 30000, stock:5 }, 
            { id: "m3", name: "Trắng Xanh 10000mAh", imgIndex: 2, priceAdd: 75000, Stock: 10 }, 
            { id: "m4", name: "Chó Nhỏ 10000mAh", imgIndex: 3, priceAdd: 175000, stock:7 },
            { id: "m5", name: "Alinnyia 10000mAh", imgIndex: 4, priceAdd: 162000, inStock: false },
            { id: "m6", name: "Lucynirel 100000mAh", imgIndex: 5, priceAdd: 160000, stock: 3 },
            { id: "m7", name: "K98 Pro Đỏ", imgIndex: 6, priceAdd: 175000, stock: 8 },
            { id: "m8", name: "K98 Pro Evening", imgIndex: 7, priceAdd: 100000, inStock: false }
        ],
        
        // KIỂU MOD / SWITCH: Khai báo giá tiền cộng thêm
        switches: [ 
            { id: "s1", name: "Switch hãng mặc định", priceAdd: 0}, 
            { id: "s2", name: "Mod Full Lube + Lót Foam", priceAdd: 0}, // Cộng thêm 250k vào giá bán
            { id: "s3", name: "Mod Silent", priceAdd: 0}
        ],
        
        // BẢNG THÔNG SỐ CHI TIẾT
        fullSpecs: [
            { label: "Thương hiệu", value: "Aula" },
            { label: "Model", value: "Aula F75" },
            { label: "Layout", value: "75% (80 phím)" },
            { label: "Keycap", value: "Nhựa PBT Double-shot" },
            { label: "Dung lượng Pin", value: "4000 mAh" }
        ],
        hashtags: "#banphimco #aula #phuckeyboard #ngohuuphuc"
    },

    { 
        id: 4, // QUAN TRỌNG: Mỗi sản phẩm phải có 1 số ID riêng biệt (không trùng nhau)
        name: "Bàn phím cơ Weikav Nut75 3 Mode", 
        brand: "Weikav", // Phải gõ đúng 1 trong các chữ: Aula, Leobog, Lingbao, Xinmeng, Weikav
        category: "keyboard", // Danh mục: keyboard (bàn phím), switch, keycap
        oldPrice: 3200000, // Giá gốc (Viết số liền nhau, không chấm phẩy)
        price: 1500000, // Giá bán thực tế
        connection: "Type-C / 2.4G / Bluetooth", 
        structure: "Gasket Mount, Mạch xuôi", 
        desc: "Đoạn văn mô tả chi tiết sản phẩm của bạn. Viết càng hay chốt đơn càng dễ...", 
        
        // MẢNG ẢNH: Link ảnh số 1 là ảnh mặc định.
        images: [
            "anh-phim/weikav-nut75-cam-ta-thep.png", // Ảnh vị trí số 0
            "anh-phim/weikav-nut75-do-ta-thep.png",
            "anh-phim/weikav-nut75-trang-ta-thep.png",
            "anh-phim/weikav-nut75-trang-ta-guong.png",
            "anh-phim/weikav-nut75-xanh-ta-thep.png",
            "anh-phim/weikav-nut75-xanh-ta-guong.png",
 // Ảnh vị trí số 1
        ],
        
        // MẪU MÃ: Khai báo các phiên bản màu sắc
        models: [ 
            { id: "m1", name: "Cam Tạ Thép", imgIndex: 0, priceAdd: 0, stock:2 }, // imgIndex: 0 nghĩa là lấy ảnh đầu tiên ở trên
            { id: "m2", name: "Đỏ Tạ Thép", imgIndex: 1, priceAdd: 30000, stock:5 }, 
            { id: "m3", name: "Trắng Tạ Thép", imgIndex: 2, priceAdd: 75000, Stock: 10 }, 
            { id: "m4", name: "Trắng Tạ Gương", imgIndex: 3, priceAdd: 175000, stock:7 },
            { id: "m5", name: "Xanh Tạ Thép", imgIndex: 4, priceAdd: 162000, inStock: false },
            { id: "m6", name: "Xanh Tạ Gương", imgIndex: 5, priceAdd: 160000, stock: 3 },
        ],
        
        // KIỂU MOD / SWITCH: Khai báo giá tiền cộng thêm
        switches: [ 
            { id: "s1", name: "Switch hãng mặc định", priceAdd: 0}, 
            { id: "s2", name: "Mod Full Lube + Lót Foam", priceAdd: 0}, // Cộng thêm 250k vào giá bán
            { id: "s3", name: "Mod Silent", priceAdd: 0}
        ],
        
        // BẢNG THÔNG SỐ CHI TIẾT
        fullSpecs: [
            { label: "Thương hiệu", value: "Aula" },
            { label: "Model", value: "Aula F75" },
            { label: "Layout", value: "75% (80 phím)" },
            { label: "Keycap", value: "Nhựa PBT Double-shot" },
            { label: "Dung lượng Pin", value: "4000 mAh" }
        ],
        hashtags: "#banphimco #aula #phuckeyboard #ngohuuphuc"
    },
];

var cart = [];
var currentCategory = "all", currentBrand = "all";
var currentViewProductId = null, selectedModel = null, selectedSwitch = null;

function formatVND(amount) { return amount.toLocaleString("vi-VN") + "đ"; }

// QUẢN LÝ GIỎ HÀNG (LocalStorage)
function loadCart() {
    var saved = localStorage.getItem("KEYGEAR_CART");
    if(saved) cart = JSON.parse(saved);
    updateCartBadge();
}
function saveCart() {
    localStorage.setItem("KEYGEAR_CART", JSON.stringify(cart));
    updateCartBadge();
}
function updateCartBadge() {
    var count = 0;
    for(var i=0; i<cart.length; i++) count += cart[i].quantity;
    var els = document.querySelectorAll("#cartCount");
    els.forEach(el => el.innerText = count);
}

// ---------------- XỬ LÝ TRANG CHỦ ----------------
function renderProducts() {
    var container = document.getElementById("productList");
    if(!container) return; 

    var searchEl = document.getElementById("txtSearch");
    var keyword = searchEl ? searchEl.value.toLowerCase() : "";
    
    var html = "";
    for (var i = 0; i < products.length; i++) {
        var p = products[i];
        if ((currentCategory === "all" || p.category === currentCategory) && 
            (currentBrand === "all" || p.brand === currentBrand) && 
            (p.name.toLowerCase().indexOf(keyword) !== -1)) {
            
            var discount = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
            html += '<div class="col-sm-6 col-md-4 col-lg-4"><div class="product-card"><div><span class="brand-tag">'+p.brand+'</span><span class="discount-badge">-'+discount+'%</span><div class="product-img-wrapper"><a href="detail.html?id='+p.id+'"><img src="'+p.images[0]+'"></a></div><h3 class="product-title"><a href="detail.html?id='+p.id+'" class="text-dark text-decoration-none">'+p.name+'</a></h3></div><div class="mt-3"><div class="mb-2"><span class="text-danger fw-bold fs-5 me-2">'+formatVND(p.price)+'</span><span class="text-muted text-decoration-line-through small">'+formatVND(p.oldPrice)+'</span></div><a href="detail.html?id='+p.id+'" class="btn btn-warning fw-bold w-100">🛒 Mua</a></div></div></div>';
        }
    }
    container.innerHTML = html || '<p class="text-muted w-100 text-center py-4">Không tìm thấy sản phẩm phù hợp.</p>';
}
function filterCategory(c) { 
    currentCategory = c; 
    currentBrand = 'all'; // Reset bộ lọc hãng về mặc định

    // Tự động Reset UI nút lọc hãng về chữ "Tất cả"
    var btns = document.getElementsByClassName("brand-filter-btn");
    if(btns.length > 0) {
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active");
        }
        btns[0].classList.add("active"); // Nút "Tất cả" luôn nằm ở vị trí số 0
    }
    
    // Đổi Tiêu đề Trang chủ
    var titleEl = document.getElementById("dynamicSectionTitle");
    if(titleEl) {
        if(c === 'all') titleEl.innerText = "TẤT CẢ SẢN PHẨM";
        else if(c === 'keyboard') titleEl.innerText = "BÀN PHÍM CƠ";
        else if(c === 'switch') titleEl.innerText = "SWITCH";
        else if(c === 'keycap') titleEl.innerText = "KEYCAP";
    }
    
    renderProducts(); 
}
function filterBrand(b, btnElement) { 
    currentBrand = b; 
    
    // Nếu có truyền btnElement vào (nghĩa là người dùng vừa click)
    if (btnElement) {
        // Tìm tất cả các nút lọc
        var btns = document.getElementsByClassName("brand-filter-btn");
        // Xóa class 'active' ở tất cả các nút (Tắt đèn)
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active");
        }
        // Thêm class 'active' vào đúng nút vừa click (Bật đèn)
        btnElement.classList.add("active");
    }
    
    renderProducts(); 
}
function searchProducts() { renderProducts(); }

// ---------------- XỬ LÝ TRANG CHI TIẾT ----------------
// ---------------- XỬ LÝ TRANG CHI TIẾT ----------------
// ---------------- XỬ LÝ TRANG CHI TIẾT ----------------
function loadDetail() {
    var titleEl = document.getElementById("detailTitle");
    if(!titleEl) return; 

    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get("id"));
    var p = products.find(x => x.id === id); 
    
    if(!p) {
        document.querySelector(".detail-box").innerHTML = '<p class="text-center py-5 text-danger fw-bold">Sản phẩm không tồn tại!</p>';
        return;
    }
    
    currentViewProductId = id;

    // <-- THÊM DÒNG NÀY ĐỂ FIX LỖI KHÔNG HIỂN THỊ ẢNH KHI MỚI VÀO TRANG -->
    document.getElementById("detailMainImg").src = p.images[0];

    titleEl.innerText = p.name;
    document.getElementById("detailDesc").innerText = p.desc;
    
    // (Phần code bên dưới giữ nguyên không đổi...)
    // ... Đổ dữ liệu Bảng thông số chi tiết (fullSpecs) ...
    
    // --- ĐÃ THÊM: Đổ dữ liệu Bảng thông số chi tiết (fullSpecs) ---
    var tbodySpecs = document.getElementById("detailSpecsTable");
    if (tbodySpecs && p.fullSpecs) {
        var specHtml = "";
        for (var k = 0; k < p.fullSpecs.length; k++) {
            specHtml += '<tr><th style="width: 30%; color: #555;">' + p.fullSpecs[k].label + '</th><td>' + p.fullSpecs[k].value + '</td></tr>';
        }
        tbodySpecs.innerHTML = specHtml;
    } else if (tbodySpecs) {
        // Dự phòng nếu sản phẩm chưa nhập fullSpecs thì lấy thông tin cơ bản
        tbodySpecs.innerHTML = '<tr><th style="width: 30%; color: #555;">Thương hiệu</th><td>'+p.brand+'</td></tr><tr><th style="color: #555;">Kết nối</th><td>'+p.connection+'</td></tr><tr><th style="color: #555;">Cấu trúc</th><td>'+p.structure+'</td></tr>';
    }

    // --- ĐÃ THÊM: Đổ dữ liệu Hashtag ---
    var hashEl = document.getElementById("detailHashtags");
    if (hashEl) {
        hashEl.innerText = p.hashtags ? p.hashtags : "";
    }

    var variantBox = document.getElementById("variantSelection");
        if (p.models && p.switches) {
            variantBox.style.display = "block";
            
            // Lặp tạo nút Mẫu mã (Có kiểm tra Hết hàng)
            var mHtml = "";
            for(var m=0; m<p.models.length; m++) {
                var outClassM = (p.models[m].inStock === false) ? " out-of-stock" : "";
                mHtml += '<div id="btnModel_'+p.models[m].id+'" class="variant-btn'+outClassM+'" onclick="selectModel(\''+p.models[m].id+'\')">'+p.models[m].name+'</div>';
            }
            document.getElementById("modelOptions").innerHTML = mHtml;

            // Lặp tạo nút Switch (Có kiểm tra Hết hàng)
            var sHtml = "";
            for(var s=0; s<p.switches.length; s++) {
                var outClassS = (p.switches[s].inStock === false) ? " out-of-stock" : "";
                sHtml += '<div id="btnSwitch_'+p.switches[s].id+'" class="variant-btn'+outClassS+'" onclick="selectSwitch(\''+p.switches[s].id+'\')">'+p.switches[s].name+'</div>';
            }
            document.getElementById("switchOptions").innerHTML = sHtml;

            selectModel(p.models[0].id);
            selectSwitch(p.switches[0].id);
        } else {
        variantBox.style.display = "none";
        document.getElementById("detailPrice").innerText = formatVND(p.price);
        document.getElementById("detailOldPrice").innerText = formatVND(p.oldPrice);
        document.getElementById("detailMainImg").src = p.images[0];
    }

    var thumbHTML = "";
    for (var j = 0; j < p.images.length; j++) {
        var cls = j === 0 ? "thumb-img active" : "thumb-img";
        thumbHTML += '<img src="'+p.images[j]+'" class="'+cls+'" onclick="changeGalleryImage(this)">';
    }
    document.getElementById("detailThumbnails").innerHTML = thumbHTML;
}
// Hàm mới: Tính tổng giá khi người dùng chọn Mẫu hoặc Switch
function updateDetailPrice(p) {
    var mPrice = (selectedModel && selectedModel.priceAdd) ? selectedModel.priceAdd : 0;
    var sPrice = (selectedSwitch && selectedSwitch.priceAdd) ? selectedSwitch.priceAdd : 0;
    var totalAdd = mPrice + sPrice;
    document.getElementById("detailPrice").innerText = formatVND(p.price + totalAdd);
    document.getElementById("detailOldPrice").innerText = formatVND(p.oldPrice + totalAdd);
}

function selectModel(mId) {
    var p = products.find(x => x.id === currentViewProductId);
    selectedModel = p.models.find(m => m.id === mId);
    
    var btns = document.getElementById("modelOptions").getElementsByClassName("variant-btn");
    for(var i=0; i<btns.length; i++) btns[i].classList.remove("active");
    document.getElementById("btnModel_"+mId).classList.add("active");
    
    var thumbs = document.getElementById("detailThumbnails").getElementsByTagName("img");
    if(thumbs[selectedModel.imgIndex]) changeGalleryImage(thumbs[selectedModel.imgIndex]);

    updateDetailPrice(p);

    // ================= XỬ LÝ LOGIC HẾT HÀNG =================
    var normalBtns = document.getElementById("actionButtonsNormal");
    var outStockBtns = document.getElementById("actionButtonsOutStock");

    if (normalBtns && outStockBtns) {
        if (selectedModel.inStock === false) {
            normalBtns.classList.add("d-none"); // Ẩn 2 nút mua
            outStockBtns.classList.remove("d-none"); // Hiện nút xám
        } else {
            // Nếu còn hàng (mặc định)
            normalBtns.classList.remove("d-none"); // Hiện 2 nút mua
            outStockBtns.classList.add("d-none"); // Ẩn nút xám
        }
    } // <-- Đóng ngoặc của khối if (normalBtns && outStockBtns) tại đây

    // ================= XỬ LÝ HIỂN THỊ TỒN KHO (FOMO) =================
    // Khối này nay đã nằm đúng vị trí, ngay trong hàm selectModel nhưng ngoài khối if trên
    var stockEl = document.getElementById("stockStatus");
    if (stockEl) {
        var st = selectedModel.stock;
        if (st !== undefined) {
            if (st > 0 && st <= 5) {
                stockEl.innerHTML = "🔥 Còn " + st + " sản phẩm";
            } else if (st > 5 && st < 10) {
                stockEl.innerHTML = "🔥 Sắp cháy hàng";
            } else {
                stockEl.innerHTML = ""; // Trên 10 thì ẩn đi
            }
        } else {
            stockEl.innerHTML = "";
        }
        
        // Reset ô số lượng về 1 mỗi khi đổi màu khác để tránh lỗi logic
        var qtyInput = document.getElementById("detailQty");
        if (qtyInput) qtyInput.value = 1;
    }
}

function selectSwitch(sId) {
    var p = products.find(x => x.id === currentViewProductId);
    selectedSwitch = p.switches.find(s => s.id === sId);
    
    var btns = document.getElementById("switchOptions").getElementsByClassName("variant-btn");
    for(var i=0; i<btns.length; i++) btns[i].classList.remove("active");
    document.getElementById("btnSwitch_"+sId).classList.add("active");
    
    // Gọi hàm cập nhật lại giá tiền ngay khi đổi Switch
    updateDetailPrice(p);
}

function changeGalleryImage(el) {
    document.getElementById("detailMainImg").src = el.src;
    var thumbs = document.getElementById("detailThumbnails").getElementsByTagName("img");
    for(var i=0; i<thumbs.length; i++) thumbs[i].classList.remove("active");
    el.classList.add("active");
}

function changeDetailQty(step) {
    var qtyInput = document.getElementById("detailQty");
    if(!qtyInput) return;
    var currentVal = parseInt(qtyInput.value);
    var newVal = currentVal + step;
    
    // Lấy tồn kho tối đa của mẫu đang chọn (nếu không khai báo stock thì cho max là 99)
    var maxStock = (selectedModel && selectedModel.stock !== undefined) ? selectedModel.stock : 99;

    if (newVal >= 1 && newVal <= maxStock) {
        qtyInput.value = newVal;
    } else if (newVal > maxStock) {
        alert("Rất tiếc, phân loại này chỉ còn " + maxStock + " sản phẩm trong kho!");
    }
}

function addToCart(isBuyNow) {
    var p = products.find(x => x.id === currentViewProductId);
    var finalPrice = p.price, finalName = p.name, variantHash = p.id.toString();

    if (p.models && p.switches) {
        // Lấy giá cộng thêm, nếu không có thuộc tính priceAdd thì mặc định là 0
        var mPrice = (selectedModel && selectedModel.priceAdd) ? selectedModel.priceAdd : 0;
        var sPrice = (selectedSwitch && selectedSwitch.priceAdd) ? selectedSwitch.priceAdd : 0;
        
        finalPrice = p.price + mPrice + sPrice;
        finalName = p.name + " (" + selectedModel.name + " / " + selectedSwitch.name + ")";
        variantHash = p.id + "_" + selectedModel.id + "_" + selectedSwitch.id;
    }

    var qtyInput = document.getElementById("detailQty");
    var qtyToAdd = qtyInput ? parseInt(qtyInput.value) : 1;

    var found = cart.find(x => x.hash === variantHash);
    if(found) {
        found.quantity += qtyToAdd; // Cộng dồn số lượng
    } else {
        cart.push({ hash: variantHash, name: finalName, price: finalPrice, quantity: qtyToAdd, checked: true });
    }
    
    saveCart();
    
    if (isBuyNow) {
        window.location.href = "cart.html";
    } else {
        alert("Đã thêm " + qtyToAdd + " sản phẩm vào giỏ hàng thành công!");
    }
}

// ---------------- TRANG GIỎ HÀNG ----------------
function renderCartPage() {
    var tbody = document.getElementById("cartTableBody");
    if(!tbody) return;

    var html = "", totalMoney = 0;
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var tt = item.price * item.quantity;
        if(item.checked) totalMoney += tt;

        var parts = item.hash.split("_");
        var pId = parseInt(parts[0]);
        var p = products.find(x => x.id === pId);

        var imgSrc = "";
        var oldPriceHtml = "";
        var stockMessageHtml = ""; // Biến mới chứa dòng chữ tồn kho

        if (p) {
            imgSrc = p.images[0]; 
            var oldP = p.oldPrice;

            if (parts.length === 3) {
                var mId = parts[1];
                var sId = parts[2];
                var model = p.models ? p.models.find(m => m.id === mId) : null;
                var sw = p.switches ? p.switches.find(s => s.id === sId) : null;

                if (model && p.images[model.imgIndex]) {
                    imgSrc = p.images[model.imgIndex];
                }
                
                var mAdd = (model && model.priceAdd) ? model.priceAdd : 0;
                var sAdd = (sw && sw.priceAdd) ? sw.priceAdd : 0;
                oldP = p.oldPrice + mAdd + sAdd;

                // ================= XỬ LÝ CHỮ TỒN KHO TRONG GIỎ HÀNG =================
                if (model && model.stock !== undefined) {
                    // Logic hiện FOMO bình thường
                    if (model.stock > 0 && model.stock <= 5) {
                        stockMessageHtml = '<div class="small fw-bold fst-italic mt-2" style="color: #f57c00; font-size: 12px;">Còn ' + model.stock + ' sản phẩm</div>';
                    } else if (model.stock > 5 && model.stock < 10) {
                        stockMessageHtml = '<div class="small fw-bold fst-italic mt-2" style="color: #f57c00; font-size: 12px;">Sắp cháy hàng</div>';
                    }
                    
                    // NẾU khách đã thêm vào giỏ bằng đúng mức tồn kho -> Báo chữ đỏ kịch kim

                }
                // ====================================================================
            }
            oldPriceHtml = '<br><span class="text-muted text-decoration-line-through small">' + formatVND(oldP) + '</span>';
        }

        var baseName = item.name;
        var variantHtml = "";
        if (item.name.includes("(")) {
            var partsName = item.name.split(" (");
            baseName = partsName[0]; 
            var variantText = partsName[1].replace(")", ""); 
            variantHtml = '<div class="mt-1"><span class="badge bg-light text-secondary border px-2 py-1 fw-normal">' + variantText + '</span></div>';
        }

        var chk = item.checked ? "checked" : "";
        html += '<tr>';
        
        html += '<td class="align-middle text-center"><input type="checkbox" class="cart-checkbox" name="chkid" '+chk+' onclick="toggleCheck('+i+', this.checked)"></td>';
        
        html += '<td class="align-middle"><div class="d-flex align-items-center gap-3"><img src="'+imgSrc+'" style="width: 70px; height: 70px; object-fit: contain; background-color: #f8f9fa; border-radius: 6px; border: 1px solid #ddd;"><div><strong class="text-dark fs-6 d-block mb-1">'+baseName+'</strong>'+variantHtml+'</div></div></td>';
        
        html += '<td class="align-middle"><span class="text-danger fw-bold">'+formatVND(item.price)+'</span>'+oldPriceHtml+'</td>';
        
        // Chèn biến stockMessageHtml vào ngay dưới cụm nút Số lượng
        html += '<td class="align-middle text-center"><div class="qty-wrapper mx-auto"><button class="qty-btn" type="button" onclick="updateQty('+i+', '+(item.quantity - 1)+')">−</button><input type="text" class="qty-input" value="'+item.quantity+'" readonly><button class="qty-btn" type="button" onclick="updateQty('+i+', '+(item.quantity + 1)+')">+</button></div>' + stockMessageHtml + '</td>';
        
        html += '<td class="align-middle fw-bold text-danger">'+formatVND(tt)+'</td>';
        html += '<td class="align-middle text-center"><button type="button" class="btn btn-sm btn-outline-danger" onclick="removeCartItem('+i+')">X</button></td>';
        html += '</tr>';
    }
    
    tbody.innerHTML = html || '<tr><td colspan="6" class="text-center text-muted py-5">Giỏ hàng trống. Hãy chọn thêm sản phẩm nhé!</td></tr>';

    var discount = 0;
    var voucherInput = document.getElementById("voucherCode");
    if (voucherInput && voucherInput.value.trim().toUpperCase() === "KEYGEAR") {
        discount = totalMoney * 0.1; 
    }

    var finalTotal = totalMoney - discount;
    document.getElementById("cartTotalTemp").innerText = formatVND(totalMoney);
    document.getElementById("cartDiscount").innerText = "-" + formatVND(discount);
    document.getElementById("cartTotalPrice").innerText = formatVND(finalTotal);
}

// Hàm Xử lý khi bấm nút Áp dụng Voucher
function applyVoucher() {
    var code = document.getElementById("voucherCode").value.trim().toUpperCase();
    var msg = document.getElementById("voucherMsg");
    
    if(code === "KEYGEAR") {
        msg.innerText = "Đã áp dụng mã giảm 10%!";
        msg.className = "text-success mt-1 d-block fw-bold";
    } else if (code !== "") {
        msg.innerText = "Mã voucher không hợp lệ hoặc đã hết hạn!";
        msg.className = "text-danger mt-1 d-block fw-bold";
    } else {
        msg.innerText = "";
    }
    
    renderCartPage(); // Gọi lại hàm render để cập nhật lại tổng tiền
}

function updateQty(idx, val) {
    var newVal = parseInt(val);
    if (newVal < 1) newVal = 1;

    var item = cart[idx];

    // ================= KIỂM TRA TỒN KHO =================
    // Bóc tách hash để biết giỏ hàng đang chứa mẫu nào
    var parts = item.hash.split("_");
    var pId = parseInt(parts[0]);
    var p = products.find(x => x.id === pId);
    var maxStock = 99; // Nếu không khai báo stock thì cho phép mua tối đa 99 cái

    if (p && parts.length === 3) {
        var mId = parts[1];
        var model = p.models ? p.models.find(m => m.id === mId) : null;
        if (model && model.stock !== undefined) {
            maxStock = model.stock;
        }
    }

    // Nếu khách bấm tăng số lượng vượt quá số lượng trong kho
    if (newVal > maxStock) {
        alert("Rất tiếc, mẫu này chỉ còn " + maxStock + " sản phẩm trong kho!");
        renderCartPage(); // Render lại để reset con số trên màn hình về giá trị hợp lệ
        return; // Dừng lại, không cho cộng thêm
    }
    // ================= KẾT THÚC KIỂM TRA =================

    item.quantity = newVal;
    saveCart();
    renderCartPage();
}
function removeCartItem(idx) { cart.splice(idx, 1); saveCart(); renderCartPage(); }
function toggleCheck(idx, status) { cart[idx].checked = status; saveCart(); renderCartPage(); }
function docheckall(status) { for(var i=0; i<cart.length; i++) cart[i].checked = status; saveCart(); renderCartPage(); }
function removeSelected() { cart = cart.filter(x => !x.checked); saveCart(); renderCartPage(); }

// FORM ĐẶT HÀNG
function KiemTra() { 
    var str = document.testform.NoiDung.value; 
    if(str.length > 200) alert("Ghi chú không được quá 200 ký tự!"); 
    document.testform.SoKyTu.value = str.length; 
}
function validateOrder() {
    if(cart.length === 0){ alert("Giỏ hàng trống!"); return false; }
    var f = document.testform;
    if(f.Name.value.trim() === ""){ alert("Vui lòng nhập Họ tên!"); f.Name.focus(); return false; }
    if(f.Phone.value.trim().length < 9){ alert("Vui lòng nhập Số điện thoại hợp lệ!"); f.Phone.focus(); return false; }
    if(f.Address.value.trim() === ""){ alert("Vui lòng nhập Địa chỉ!"); f.Address.focus(); return false; }
    if(confirm("Xác nhận đặt hàng với tổng tiền: " + document.getElementById("cartTotalPrice").innerText)) {
        alert("Cảm ơn bạn! Đặt hàng thành công."); cart = []; saveCart(); window.location.href = "index.html";
    }
    return false;
}

// BỘ ĐIỀU HƯỚNG TỰ ĐỘNG
window.onload = function() {
    loadCart(); 
    var path = window.location.pathname;
    if (path.includes("detail.html")) {
        loadDetail();
    } else if (path.includes("cart.html")) {
        renderCartPage();
    } else {
        renderProducts(); 
    }
};

// Hiệu ứng cuộn chuột JQuery
$(window).scroll(function(){ $(this).scrollTop()>200 ? $('#scrollToTop').fadeIn() : $('#scrollToTop').fadeOut(); });
$('#scrollToTop').click(function(){ $('html,body').animate({scrollTop:0}, 800); return false; });
// HÀM ẨN/HIỆN NỘI DUNG MÔ TẢ (Sự kiện DOM)
function toggleDetailContent() {
    var contentBox = document.getElementById("detailContentBox");
    var btn = document.getElementById("btnToggleContent");
    
    if (contentBox.classList.contains("expanded")) {
        // Nếu đang mở -> Thu gọn lại
        contentBox.classList.remove("expanded");
        btn.innerHTML = "Xem thêm ⬇";
        // Cuộn màn hình nhẹ lên trên để tránh bị lạc khi thu gọn
        window.scrollBy({ top: -200, behavior: 'smooth' });
    } else {
        // Nếu đang đóng -> Mở rộng ra
        contentBox.classList.add("expanded");
        btn.innerHTML = "Ẩn bớt ⬆";
    }
}