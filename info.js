let body=document.querySelector("body");
let id=new URLSearchParams (window.location.search).get("id");


fetch(`https://northwind.vercel.app/api/products/${id}`)
.then(response=>response.json())
.then(data=>{
    body.innerHTML=`
    <h1>About</h1>
    <p class="aaa">Mehsulun adi: ${data.name}</p>
    <p class="aaa">Mehsulun qimeti:${data.unitsInStock}</p>
    <p class="aaa">Stokda var:${data.unitPrice}</p>
    <p class="aaa">qablasdirma:${data.unitPrice}</p>
    `
}
)