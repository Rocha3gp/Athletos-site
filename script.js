
fetch('products.json')
.then(r=>r.json())
.then(products=>{
const grid=document.getElementById('grid');
products.forEach(p=>{
grid.innerHTML+=`
<div class="card">
<h3>${p.name}</h3>
<p>${p.desc}</p>
<p><strong>${p.price}</strong></p>
<button onclick="window.open('https://wa.me/5547999143085?text=Tenho interesse em ${p.name}')">Comprar</button>
</div>`
})
})
