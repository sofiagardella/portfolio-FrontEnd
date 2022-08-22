export class Skills {
    id? : number;
    habilidad : string;
    avance : string;


    constructor(habilidad: string,  avance: string){

        this.habilidad = habilidad;
        this.avance = avance;
    }
}
