export class Proyectos {
    id? : number;
    nombre : string;
    año : string;
    about : string;


    constructor(nombre: string, año: string, about: string){

        this.nombre = nombre;
        this.año = año;
        this.about = about;
    }
}
