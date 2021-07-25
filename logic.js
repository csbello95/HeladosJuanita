let option = 0;
let VHelados = [];
let vVentas = [];


while(option !==6){
    redirect(mostrarMenu());
function redirect(option) {
    if (option === 1) {
        return agregarHelado();
        }else if (option ===2) {
        return modificarHelado();
        }else if(option ===3){
        return eliminarHelado();
        }else if (option ===4) {
        let encabezado = ("Los Items en inventario son los siguientes:\n");
        return alert(mostrarInventario(encabezado));
        }else if (option ===5) {
        return ventaHelado();
        }else if (option ===6) {
        alert('Ha cerrado la sesión!')
        return

        }else{
        alert("Por favor digite una opción valida!");
        }  
}
}
function mostrarMenu() {
   let msg = "Heladeria Juanita, Digite el número de acción a realizar: \n1. Agregar un helado\n2. Modificar helado\n3. Eliminar helado\n4. Mostrar inventario\n5. Realizar venta\n6. Salir del sistema";
   option = Number(prompt(msg));
   return option; 
}

//Función para agregar objetos literales al vector de Helados
function agregarHelado() {
    const nombre = prompt("Por favor, ingrese el nombre del helado");
    const sabor_helado = prompt("por favor, ingrese el sabor del helado");
    const cant_inv = Number(prompt("por favor, introduzca la cantidad en inventario"));
    const precio = Number(prompt("Por favor, digite el precio del helado"));
    VHelados.push({
        id: VHelados.length+1,
        nombre_helado: nombre,
        sabor: sabor_helado,
        cant_inventario:cant_inv,
        precio_helado: precio
    });
    console.log(VHelados);
}

function buscarHeladoPorId(id_hel) {
    let index_helado =0;
    for(index_helado=0;index_helado<VHelados.length;index_helado++){
       if (VHelados[index_helado].id === id_hel) {
          return index_helado; 
       }  
    }
}


function modificarHelado(){
    let msg = 'Digite el ID del helado a modificar:\n';
    msg += mostrarInventario("");
    let id_hel= Number(prompt(msg));
    let index_helado = buscarHeladoPorId(id_hel);
    console.log(index_helado);
    let opcion_mod = Number(prompt('Digite el número de la opción que desea modificar:\n1.Nombre helado\n2.Sabor helado\n3.Cantidad Inventario\n4.Precio'));
    if (opcion_mod ===1) {
        VHelados[index_helado].nombre_helado = prompt(`Digite el nuevo nombre del helado ${VHelados[index_helado].nombre_helado} con ID ${VHelados[index_helado].id}`);          
    }else if (opcion_mod===2) {
        VHelados[index_helado].sabor = prompt(`Digite el nuevo sabor del helado ${VHelados[index_helado].sabor} con ID ${VHelados[index_helado].id}`);         
    }else if (opcion_mod===3) {
        VHelados[index_helado].cant_inventario = prompt(`Digite la nueva cantidad  en inventario del helado ${VHelados[index_helado].cant_inventario} con ID ${VHelados[index_helado].id}`);        
    }else if (opcion_mod===4) {
        VHelados[index_helado].precio_helado = prompt(`Digite el nuevo precio del helado ${VHelados[index_helado].precio_helado} con ID ${VHelados[index_helado].id}`);        
    }
    
}

function eliminarHelado() {
    let msg = 'Digite el ID del helado a Eliminar:\n';
    msg += mostrarInventario("");
    let id_hel = Number(prompt(msg));
    let index_helado = buscarHeladoPorId(id_hel);
    console.log(index_helado);
    let nombreHelEliminado = VHelados[index_helado].nombre_helado;
    VHelados.splice(index_helado,1);
    alert(`el producto ${nombreHelEliminado} fue eliminado correctamente !!`);
}


// función para mostrar los helados existentes en inventario
function mostrarInventario(str) {
    let mensaje = str; 
    for(let i=0;i<VHelados.length;i++){
        let precioTotal =Number((VHelados[i].cant_inventario)*(VHelados[i].precio_helado));
        mensaje += `ID: ${VHelados[i].id} \nNombre helado: ${VHelados[i].nombre_helado}  Sabor: ${VHelados[i].sabor}, Cantidad: ${VHelados[i].cant_inventario}, Precio Unitario: $${VHelados[i].precio_helado}, Precio total: $${precioTotal}\n`
    }
    return(mensaje);
}


function ventaHelado() {
    let msg = "Elige el ID del helado a vender:\n";
    msg += mostrarInventario("");
    let id_hel = Number(prompt(msg));
    let index_helado = buscarHeladoPorId(id_hel);
    let cantidad = Number(prompt('Por favor digite la cantidad a vender'));
    let total = (VHelados[index_helado].precio_helado*cantidad);
    window.confirm(`Desea hacer esta compra por valor de ${total}`);
        if (cantidad>VHelados[index_helado].cant_inventario) {
            alert('lo sentimos, no hay suficientes unidades en inventario');
            } else {
                VHelados[index_helado].cant_inventario -= cantidad;
                vVentas.push({
                    id: index_helado,
                    nombre_helado:VHelados[index_helado].nombre_helado,
                    cantidad_inventario:cantidad,
                    precio: total
                });
                alert('compra realizada satisfactoriamente');
                console.log(vVentas);
            }

}