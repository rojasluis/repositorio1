export class conceptoEgreso {
    idConceptoEgreso: number;
    descripcion: string;

    constructor (
        idConceptoEgreso: number,
        descripcion: string,
    ) {
        this.idConceptoEgreso = idConceptoEgreso;
        this.descripcion = descripcion;
    }
}