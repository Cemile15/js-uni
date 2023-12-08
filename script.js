let name= document.querySelector("name")
let searchInput = document.querySelector("#axtaris")
let table= document.querySelector("table")
fetch(`https://northwind.vercel.app/api/products`)
.then(response=>response.json())
.then(data=>{
    data.forEach(element => {
        table.innerHTML +=`
        <tr> 
                <td>    <a href="./info.html?id=${element.id}"> ${element.id}</a>
               </td>
              <td>${element.name}</td>
              <td>${element.unitsInStock}</td>
              <td>${element.unitPrice}</td>
              <td><button class="edit"></button> </td>
              <td><button class="delete"></button></td>
            </tr>
        `
    });
    searchInput.addEventListener("input",(e)=>{
        let dataS= data.filter(element=>{
    
    return element.name.toLowerCase().startsWith((e.target.value).toLowerCase()) ;  
        });

// console.log(dataS);
//     )}
// )}




        table.innerHTML=`
        <tr> 
        <td><a href="./info.html?id=${element.id}"> ${element.id}</a>
       </td>
      <td>${element.name}</td>
      <td>${element.unitsInStock}</td>
      <td>${element.unitPrice}</td>
      <td><button class="edit">Edit</button> </td>
      <td><button class="delete">Delete</button></td>
    </tr>
`
        dataS.forEach(element=>{
            table.innerHTML +=`
            <tr> 
                    <td><a href="./info.html?id=${element.id}"> ${element.id}</a>
                   </td>
                  <td>${element.name}</td>
                  <td>${element.unitsInStock}</td>
                  <td>${element.unitPrice}</td>
                  <td><button class="edit">Edit</button> </td>
                  <td><button class="delete">Delete</button></td>
                </tr>
            `
        })
})
}
)
