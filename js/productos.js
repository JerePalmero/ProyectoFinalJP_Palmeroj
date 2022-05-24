const productos = [
    {id:1, nombre:"Papa", descripcion: "Precio por Kilo", imagen:"papas.jpg", precio:100},
    {id:2, nombre:"Cebolla", descripcion:"Precio por Kilo", imagen:"cebolla.jpg", precio:60},
    {id:3, nombre:"Calabaza", descripcion:"Precio por Kilo", imagen:"calabaza.jpg", precio:120},
    {id:4, nombre:"Tomate", descripcion:"Precio por Kilo", imagen:"tomate.jpg", precio:80},
    {id:5, nombre:"Frutilla", descripcion:"Precio por Kilo", imagen:"frutillas.jpg", precio:200}
];

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

function verProducto(id) {
    localStorage.setItem("ver_producto", id);
    document.location = "ver-producto.html";
}