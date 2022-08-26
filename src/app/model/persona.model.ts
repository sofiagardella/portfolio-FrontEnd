export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    puesto: String;
    provincia: String;
    pais: String;
    img: String;

    constructor(nombre: String, apellido: String, puesto: String, provincia: String, pais: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.puesto = puesto;
        this.provincia = provincia;
        this.pais = pais 
        this.img = img;
    }
}