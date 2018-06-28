export class conceptoIngreso {
    public idConceptoIngreso: number;
    public descripcion: string;

    constructor (
        idConceptoIngreso: number,
        descripcion: string
    ) {
        this.idConceptoIngreso = idConceptoIngreso
        this.descripcion = descripcion;
    }
}