export class Educacion {
    id? : number;
    carrera : string;
    institucion : string;
    fecha : string;
    img : string;

    constructor(carrera: string, institucion: string, fecha: string, img: string ){

        this.carrera = carrera;
        this.institucion = institucion;
        this.fecha = fecha;
        this.img = img;
    }
}
