export class Experiencia {
    id? : number;
    puesto : string;
    empresa : string;
    fecha : string;
    img : string;

    constructor(puesto: string, empresa: string, fecha: string, img: string ){

        this.puesto = puesto;
        this.empresa = empresa;
        this.fecha = fecha;
        this.img = img;
    }
}
