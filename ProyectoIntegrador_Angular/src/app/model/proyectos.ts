export class Proyectos {
    id? : number;
    nombre : string;
    fecha : string;
    about : string;


    constructor(nombre: string, fecha: string, about: string){

        this.nombre = nombre;
        this.fecha = fecha;
        this.about = about;
    }
}
