// TEMPLEATE LITERALS CON EXPRECIONES COMPLEJAS
const products = [{
    name: "Laptop",
    price: 1200,
    discount: 0.1
},{
    name: "Smartphone",
    price: 800,
    discount: 0.15
}];
const resum  = products.map(product => `${product.name}, costo: $${(product.price * (1 - product.discount))}`
).join('\n')

// TRY CATCH

function divisionError(){
    try {
        let result = 10 / 0;
        if (!isFinite(result)) {
            throw new Error("División por cero no permitida");
        }
        console.log("Resultado:", result);
    } catch (error) {
        console.error("Error capturado:", error.message);
    }
}

// ASYNC AWAIT

const miPromesa = new Promise((resolve, reject) => {
    const exito = true; // Cambia a false para simular un error

    if(exito)  {
        resolve("¡Operación exitosa!");
    } 
    else {
        reject("¡Ocurrió un error!");
    }
});  

miPromesa
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));