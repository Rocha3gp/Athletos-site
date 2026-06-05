fetch('products.json')
.then(r=>r.json())
.then(data=>{
 const grid=document.getElementById('grid');
 data.forEach(p=>{
   grid.innerHTML+=`
   <div class="card">
     <h3>${p.nome}</h3>
     <p>Categoria: ${p.categoria}</p>
     <p>R$ ${p.preco}</p>
     <a href="https://wa.me/5547999143085?text=Olá! Tenho interesse na camiseta ${encodeURIComponent(p.nome)}">
       <button>Comprar</button>
     </a>
   </div>`;
 });
});
