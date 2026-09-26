// ==========================================
// 1. GLOBAL STATE & MOCK DATA
// ==========================================

// ข้อมูลผู้ใช้ปัจจุบันที่เข้าสู่ระบบ
let currentUser = null;

// รายการสิ่งของมือสองจำลองภายในมหาวิทยาลัย (20 รายการ)
let items = [
    { id: 1, title: "หนังสือวิศวกรรมซอฟต์แวร์ SDLC + Git", type: "sale", price: 150, category: "อุปกรณ์การเรียน", status: "available", seller: "ต้น (ต้น@g.swu.ac.th)", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400" },
    { id: 2, title: "โคมไฟอ่านหนังสือ LED ปรับแสงได้", type: "free", price: 0, category: "เครื่องใช้ไฟฟ้า", status: "available", seller: "ม่อน (ม่อน@chula.ac.th)", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400" },
    { id: 3, title: "พัดลมพกพา USB ตั้งโต๊ะอ่านหนังสือ", type: "sale", price: 80, category: "เครื่องใช้ไฟฟ้า", status: "available", seller: "มิน (มิน@ku.th)", img: "https://images.unsplash.com/photo-1618941723628-e27e14c45b3d?w=400" },
    { id: 4, title: "เสื้อช็อปนักศึกษา ไซส์ L สภาพ 95%", type: "sale", price: 200, category: "เสื้อผ้า/รองเท้า", status: "available", seller: "สนุ๊กเกอร์ (สนุ๊กเกอร์@g.swu.ac.th)", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400" },
    { id: 5, title: "เครื่องคิดเลขวิทยาศาสตร์ Casio FX-991EX", type: "sale", price: 450, category: "อุปกรณ์การเรียน", status: "available", seller: "นัท (นัท@kmitl.ac.th)", img: "https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?w=400" },
    { id: 6, title: "เก้าอี้ทำงานในหอพัก ปรับระดับได้", type: "free", price: 0, category: "ของใช้ทั่วไป", status: "available", seller: "เมย์ (เมย์@tu.ac.th)", img: "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=400" },
    { id: 7, title: "กระเป๋าเป้ใส่โน้ตบุ๊ก 15.6 นิ้ว กันน้ำ", type: "sale", price: 250, category: "ของใช้ทั่วไป", status: "available", seller: "เจมส์ (เจมส์@mahidol.ac.th)", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" },
    { id: 8, title: "ไมโครโฟนตั้งโต๊ะ USB สำหรับเรียนออนไลน์", type: "sale", price: 320, category: "เครื่องใช้ไฟฟ้า", status: "available", seller: "มาร์ค (มาร์ค@cmic.ac.th)", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400" },
    { id: 9, title: "จอคอมพิวเตอร์ 22 นิ้ว Full HD (นัดรับใต้ตึก)", type: "sale", price: 1200, category: "เครื่องใช้ไฟฟ้า", status: "available", seller: "ภูมิ (ภูมิ@g.swu.ac.th)", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400" },
    { id: 10, title: "หนังสือติวภาษาอังกฤษ TOEIC สภาพใหม่ไม่มีรอยขีดเขียน", type: "sale", price: 100, category: "อุปกรณ์การเรียน", status: "available", seller: "พลอย (พลอย@chula.ac.th)", img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400" },
    { id: 11, title: "กาน้ำร้อนไฟฟ้าขนาดเล็ก 1.2 ลิตร ชงมาม่าหอพัก", type: "sale", price: 120, category: "เครื่องใช้ไฟฟ้า", status: "available", seller: "บาส (บาส@ku.th)", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?w=400" },
    { id: 12, title: "รองเท้าคัทชูพิธีการชาย เบอร์ 42", type: "free", price: 0, category: "เสื้อผ้า/รองเท้า", status: "available", seller: "ก็อต (ก็อต@kmitl.ac.th)", img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400" },
    { id: 13, title: "โต๊ะญี่ปุ่นพับได้ สำหรับนั่งอ่านหนังสือบนเตียง", type: "sale", price: 90, category: "ของใช้ทั่วไป", status: "available", seller: "แนน (แนน@tu.ac.th)", img: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=400" },
    { id: 14, title: "คีย์บอร์ดบลูทูธสำหรับ iPad / Tablet", type: "sale", price: 290, category: "เครื่องใช้ไฟฟ้า", status: "available", seller: "โอ๊ค (โอ๊ค@mahidol.ac.th)", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" },
    { id: 15, title: "สีน้ำสำหรับเรียนวิชาศิลปะ เหลือ 80%", type: "free", price: 0, category: "อุปกรณ์การเรียน", status: "available", seller: "ฟ้า (ฟ้า@g.swu.ac.th)", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400" },
    { id: 16, title: "ราวตากผ้าเหล็กขนาดเล็ก เหมาะกับระเบียงหอพัก", type: "sale", price: 150, category: "ของใช้ทั่วไป", status: "available", seller: "พีร์ (พีร์@chula.ac.th)", img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400" },
    { id: 17, title: "หูฟังตัดเสียงรบกวน Bluetooth สภาพสวย", type: "sale", price: 550, category: "เครื่องใช้ไฟฟ้า", status: "available", seller: "ตาร์ (ตาร์@ku.th)", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
    { id: 18, title: "กระดาษ A4 สองหน้า 70g (เหลือ 3 รีม)", type: "sale", price: 180, category: "อุปกรณ์การเรียน", status: "available", seller: "วิว (วิว@kmitl.ac.th)", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400" },
    { id: 19, title: "เสื้อทรงบอยนิสิตหญิง สีขาว ถอดกระดุมออกแล้ว", type: "free", price: 0, category: "เสื้อผ้า/รองเท้า", status: "available", seller: "จิ๊บ (จิ๊บ@tu.ac.th)", img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400" },
    { id: 20, title: "หม้อหุงข้าวไฟฟ้าขนาดเล็ก 1 ลิตร", type: "sale", price: 200, category: "เครื่องใช้ไฟฟ้า", status: "available", seller: "เต้ (เต้@g.swu.ac.th)", img: "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=400" }
];


// ==========================================
// 2. AUTHENTICATION LOGIC (ระบบยืนยันตัวตน)
// ==========================================

// ฟังก์ชันสลับ Tab ระหว่าง Login และ Register
function switchAuthTab(tab) {
    document.getElementById('loginTabBtn').classList.toggle('active', tab === 'login');
    document.getElementById('registerTabBtn').classList.toggle('active', tab === 'register');
    document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
    document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
}

// ตรวจสอบว่าใช้อีเมลมหาวิทยาลัยหรือไม่ (.ac.th, .edu, .th)
function isUniversityEmail(email) {
    const domain = email.toLowerCase().trim();
    return domain.endsWith('.ac.th') || domain.endsWith('.edu') || domain.endsWith('.th');
}

// จัดการการเข้าสู่ระบบ (Login)
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    
    if (!isUniversityEmail(email)) {
        alert('⚠️ สิทธิ์เข้าถึงปฏิเสธ: ต้องใช้อีเมลสถาบันการศึกษา (.ac.th / .th) เท่านั้น');
        return;
    }

    currentUser = {
        name: email.split('@')[0],
        email: email
    };

    showMainApp();
}

// จัดการการลงทะเบียน (Register)
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;

    if (!isUniversityEmail(email)) {
        alert('⚠️ การลงทะเบียนล้มเหลว: ระบบรองรับเฉพาะอีเมลนักศึกษา/บุคลากรภายในมหาวิทยาลัย (.ac.th / .th)');
        return;
    }

    alert('✅ ยืนยันตัวตนสำเร็จ! ระบบได้อนุมัติบัญชีนักศึกษาเรียบร้อยแล้ว');
    currentUser = { name, email };
    showMainApp();
}

// แสดงหน้าแอปพลิเคชันหลักหลังจากล็อกอิน
function showMainApp() {
    document.getElementById('authScreen').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    document.getElementById('currentUserDisplay').innerText = `${currentUser.name} (${currentUser.email})`;
    renderGrid(items);
}

// ออกจากระบบ (Logout)
function handleLogout() {
    currentUser = null;
    document.getElementById('mainApp').style.display = 'none';
    document.getElementById('authScreen').style.display = 'flex';
    document.getElementById('loginForm').reset();
    document.getElementById('registerForm').reset();
}


// ==========================================
// 3. PRODUCT & RENDER LOGIC (แสดงผลและจัดการสินค้า)
// ==========================================

// แสดงรายการสินค้าในรูปแบบ Grid Card
function renderGrid(data) {
    const grid = document.getElementById('productGrid');
    document.getElementById('itemCount').innerText = data.length;
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem 0;">
                <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>ไม่พบรายการสินค้าที่คุณกำลังค้นหา</p>
            </div>`;
        return;
    }

    data.forEach(item => {
        const isFree = item.type === 'free';
        const isSold = item.status === 'sold';

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="img-wrapper">
                <img src="${item.img}" class="product-img" alt="${item.title}">
                <span class="badge-type ${isSold ? 'badge-sold' : (isFree ? 'badge-free' : 'badge-sale')}">
                    ${isSold ? 'ส่งต่อแล้ว' : (isFree ? 'แจกฟรี' : 'ขาย')}
                </span>
            </div>
            <div class="product-body">
                <div class="product-title">${item.title}</div>
                <div class="product-price">${isFree ? 'ฟรี' : item.price.toLocaleString() + ' บาท'}</div>
                <div class="seller-info">
                    <i class="fa-solid fa-user-shield"></i> ${item.seller}
                </div>
                <div style="margin-top: 0.8rem; display: flex; gap: 0.5rem;">
                    <button class="btn btn-primary" style="padding: 0.4rem; font-size:0.8rem;" onclick="alert('กำลังเปิดแชทกับผู้โพสต์: ${item.seller}')">
                        <i class="fa-regular fa-comment"></i> แชทติดต่อ
                    </button>
                    ${!isSold ? `
                        <button class="btn" style="background:#E2E8F0; padding:0.4rem; font-size:0.8rem;" onclick="markSold(${item.id})">
                            <i class="fa-solid fa-check"></i> เปลี่ยนสถานะ
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ระบบค้นหาและตัวกรองสินค้า
function filterItems() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const type = document.getElementById('typeFilter').value;

    const filtered = items.filter(item => {
        const matchSearch = item.title.toLowerCase().includes(searchText);
        const matchCategory = category === 'all' || item.category === category;
        const matchType = type === 'all' || item.type === type;
        return matchSearch && matchCategory && matchType;
    });

    renderGrid(filtered);
}

// ควบคุมการแสดงผล Modal หน้าโพสต์
function openModal() { document.getElementById('postModal').style.display = 'flex'; }
function closeModal() { document.getElementById('postModal').style.display = 'none'; }
function togglePriceField(val) { document.getElementById('priceFieldGroup').style.display = val === 'free' ? 'none' : 'block'; }

// เพิ่มโพสต์สินค้าใหม่
function handlePostSubmit(e) {
    e.preventDefault();
    const newItem = {
        id: Date.now(),
        title: document.getElementById('postTitle').value,
        type: document.getElementById('postType').value,
        price: Number(document.getElementById('postPrice').value) || 0,
        category: document.getElementById('postCategory').value,
        status: 'available',
        seller: `${currentUser.name} (${currentUser.email})`,
        img: document.getElementById('postImg').value || 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400'
    };
    items.unshift(newItem);
    filterItems();
    closeModal();
    document.getElementById('postForm').reset();
    alert('ลงประกาศสิ่งของเรียบร้อยแล้ว!');
}

// เปลี่ยนสถานะสินค้าเป็นขายแล้ว/แจกแล้ว
function markSold(id) {
    const target = items.find(i => i.id === id);
    if (target) {
        target.status = 'sold';
        filterItems();
    }
}
