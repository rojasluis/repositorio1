export class Sucursal {
    idSucursal: number;
    correo: string;    
    descripcion: string;    
    telefono: string;

    constructor (
        idSucursal: number,
        correo: string,
        descripcion: string,
        telefono: string,
    ) {
        this.idSucursal = idSucursal;
        this.correo = correo;    
        this.descripcion = descripcion;    
        this.telefono = telefono;
    }
  }