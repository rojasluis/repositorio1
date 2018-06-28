import { conceptoIngreso } from "../catingresos/concepto.ingreso.model";
import { Cuenta } from "../cuentabancaria/cuenta.model";
import { MedioPago } from "../tipopago/medio.pago.model";
import { Sucursal } from "../sucursales/sucursal.model";
import { Usuario } from "../usuarios/usuario.model";
export class Ingreso {    

    constructor (
        public idIngreso: number = null,
        public fecha: Date = null,
        public hora: Date = null,
        public montoIngresado: number = null,
        public conceptoIngreso: conceptoIngreso = null,
        public cuenta: Cuenta = null,
        public medioPago: MedioPago = null,
        public sucursal: Sucursal = null ,
        public usuario: Usuario = null,
        public detalles: string = null
    ) {
        // this.idIngreso = idIngreso;
        // this.fecha = fecha;
        // this.hora = hora;
        // this.montoIngresado = montoIngresado;
        // this.conceptoIngreso = conceptoIngreso;
        // this.cuenta = cuenta;
        // this.medioPago = medioPago;
        // this.sucursal = sucursal;
        // this.usuario = usuario;
    }
}
