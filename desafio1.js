

/** 1 - REALICE EL METODO STAIC DESDE LA CLASE PRINCIPAL, ASI CADA VEZ QUE SE CREA UN PRODUCTO EL CODE INCREMENTA DESDE LA BASE SIN FALLAS
    2 - CREE LA CLASE PRODUCTMANAGER PARA INTEGRAR EL ARRAY VACIO PARA AGREGAR LOS PRODUCTOS
    3 - EN AGREGAR PRODUCTOS HICE EL CHECK USANDO LENGTH PARA REVISAR QUE TOSOS LOS DATOS SEAN AGREGADOS
    4 - REALICE OTRA CONDICIONAL ANIDADA PARA VERIFICAR QUE NO SE REPITA EL CODE DEL PRODUCTO (AUNQUE NO TIENE MUCHO SENTIDO PORQUE EL
        STATIC QUE ESTA EN LA CLASE PRINCIPAL SUMA AUTOMATICO Y NO CREO QUE SE REPITAN)
    5 - APLIQUE EL GET PARA QUE ME RETORNE EL ARRAY
    6 - CREE LOS PRODUCTOS
    7 - CREE EL PRODUCTMANAGER Y LE AGREGUE LOS PRODUCTOS AL ARRAY VACIO
    SE MUESTRA PERFECTO EN LA CONSOLA, OBSERVACION PARA EL TUTOR, AGREGÁ UN PRODUCTO NUEVO PARA VERIFICAR COMO EL CODIGO DEL MISMO SE CREA,
    TAMBIEN PUEDE VERIFICAR EL MENSAJE POR CONSOLA SI A ALGUN PRODUCTO LE FALTA UN CAMPO, EJEMPLO: DEJAR UNA SOLA LETRA EN EL TITTLE DE 
    CUALQUIER PRODUCTO Y MOSTRARA EL ERROR **/



class Producto {

    static codeId = 0;

    constructor(title, description, price, image, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.image = image
        this.stock = stock

        this.code = ++Producto.codeId;
    }

    get codigoDeCreacion() {
        return this.code;
    }

}

class ProductManager {
    constructor() {
        this.products = []
    }

    agregarProducto(nuevoProducto) {
        if (nuevoProducto.title.length > 1 && nuevoProducto.description.length > 1 && toString(nuevoProducto.price).length > 0 && nuevoProducto.image.length > 0 && toString(nuevoProducto.stock).length > 0) {
            // console.log("Los datos son correctos")

            if (this.products.filter(product => product.code === nuevoProducto.code).length > 0) {
                console.log("El producto ya existe")
            }
            else {
                this.products.push(nuevoProducto)
            }
        }
        else {
            console.log("Complete todos los campos")
        }
    }

    getProductos() {
        return this.products;
    }

}



const sixPackCorona = new Producto("Six pack Corona", "6 latas de 475ml", 2400, "https://drive.google.com/file/d/1z5ZfIOau1uxfpyeYpasWUU0-vJzOdQwI/view?usp=share_link", 15)
const sixPackHeineken = new Producto("Six pack Heineken", "6 latas de 475ml", 2200, "https://drive.google.com/file/d/14iKznNuqAXQ1G30yWAgWXuC7C3LbHcvk/view?usp=share_link", 15)
const sixPackBrahma = new Producto("Six pack Brahma", "6 latas de 475ml", 1800, "https://drive.google.com/file/d/1KN612KXcg2DOobe539S13UmPL4v9zTg8/view?usp=share_link", 15)
const sixPackStella = new Producto("Six pack Stella", "6 latas de 475ml", 2150, "https://drive.google.com/file/d/13Zxzkm5aaNXZ3WcIWxc3goDuRC_OXKA_/view?usp=share_link", 15)


ProductManager = new ProductManager()

ProductManager.agregarProducto(sixPackCorona);
ProductManager.agregarProducto(sixPackHeineken);
ProductManager.agregarProducto(sixPackBrahma);
ProductManager.agregarProducto(sixPackStella);

console.log(ProductManager.getProductos())




