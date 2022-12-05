fetch("./data.json")
.then(response => response.json())
.then(data =>{
    data.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h2>${producto.nombre}</h2>
        <>${producto.edad}</p>
        <>${producto.id}</p>
        <hr/>
        `;
        listado.append(li)
    });
})