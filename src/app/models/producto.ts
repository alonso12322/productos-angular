export class Producto {
    id?: number;
    nombre: string;
    categoria: string;
    precio: number;
    
    constructor(nombre: string, categoria: string, precio: number, fecha: Date){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}