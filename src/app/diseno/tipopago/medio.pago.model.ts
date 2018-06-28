export class MedioPago {
    public idMedioPago: number;
    public descripcionMedioPago: string;    

    constructor( 
        idMedioPago: number,
        descripcionMedioPago: string,
    ) {
        this.idMedioPago = idMedioPago;
        this.descripcionMedioPago = descripcionMedioPago;
    }
}