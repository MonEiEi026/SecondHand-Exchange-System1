const defaultProducts=[
 {id:1,name:"หนังสือเรียนปี 1",category:"หนังสือ",price:80,condition:"สภาพดี",status:"available",owner:"นัท",icon:"📚"},
 {id:2,name:"เสื้อแจ็กเก็ตมหาวิทยาลัย",category:"เสื้อผ้า",price:150,condition:"สภาพดีมาก",status:"available",owner:"เมย์",icon:"🧥"},
 {id:3,name:"เครื่องคิดเลข",category:"อุปกรณ์การเรียน",price:0,condition:"ใช้งานได้ดี",status:"available",owner:"ต้น",icon:"🧮"},
 {id:4,name:"เมาส์ไร้สาย",category:"อุปกรณ์ไอที",price:220,condition:"สภาพดี",status:"available",owner:"มิน",icon:"🖱️"}
];
let products=JSON.parse(localStorage.getItem("psruProducts")||"null")||defaultProducts;
function save(){localStorage.setItem("psruProducts",JSON.stringify(products))}
function renderProducts(){
 const q=document.getElementById("searchInput").value.toLowerCase(), c=document.getElementById("categoryFilter").value, s=document.getElementById("statusFilter").value;
 const list=products.filter(p=>(!q||p.name.toLowerCase().includes(q))&&(!c||p.category===c)&&(!s||p.status===s));
 document.getElementById("statProducts").textContent=products.length;
 document.getElementById("productGrid").innerHTML=list.length?list.map(p=>`
 <article class="product"><div class="product-img">${p.icon||"📦"}</div><div class="product-body">
 <span class="tag">${p.category}</span><h3>${escapeHtml(p.name)}</h3><div class="meta">ผู้โพสต์: ${escapeHtml(p.owner)} • ${escapeHtml(p.condition)}</div>
 <div class="price">${p.price>0?p.price.toLocaleString()+" บาท":"แจกฟรี"}</div>
 <button class="primary" onclick="contactSeller('${escapeHtml(p.owner)}')">💬 ติดต่อผู้ขาย</button>
 </div></article>`).join(""):`<div class="form-card" style="grid-column:1/-1;text-align:center">ไม่พบสินค้าที่ค้นหา</div>`;
}
function escapeHtml(x){return String(x).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
document.getElementById("productForm").addEventListener("submit",e=>{
 e.preventDefault();
 const p={id:Date.now(),name:pName.value,category:pCategory.value,price:Number(pPrice.value||0),condition:pCondition.value,status:"available",owner:"ผู้ใช้งาน",icon:"📦",description:pDescription.value,image:pImage.value};
 products.unshift(p);save();renderProducts();e.target.reset();location.hash="products";alert("ลงประกาศสำเร็จ");
});
document.getElementById("chatForm").addEventListener("submit",e=>{
 e.preventDefault();const t=chatText.value.trim();if(!t)return;
 document.getElementById("messages").insertAdjacentHTML("beforeend",`<div class="msg me">${escapeHtml(t)}</div>`);chatText.value="";
});
function contactSeller(name){document.getElementById("chat").scrollIntoView({behavior:"smooth"});alert("เปิดการสนทนากับ "+name)}
function seedDemo(){products=defaultProducts.slice();save();renderProducts()}
function openModal(id){document.getElementById(id).classList.add("show")}
function closeModal(id){document.getElementById(id).classList.remove("show")}
function login(e){e.preventDefault();closeModal("loginModal");alert("เข้าสู่ระบบตัวอย่างสำเร็จ")}
renderProducts();
