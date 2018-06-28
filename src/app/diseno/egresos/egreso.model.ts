import { conceptoEgreso } from "../categresos/concepto.egreso.model";
import { Cuenta } from "../cuentabancaria/cuenta.model";
import { MedioPago } from "../tipopago/medio.pago.model";
import { Sucursal } from "../sucursales/sucursal.model";
import { Usuario } from "../usuarios/usuario.model";

export class Egreso {
    constructor(
        public idEgreso: number = null,
        public detalles: string = null,
        public fecha: Date = null,
        public hora: string = null,
        public imagen: string = null,
        public monto: number = null,
        public conceptoEgreso: conceptoEgreso = null,
        public cuenta: Cuenta = null,
        public medioPago: MedioPago = null,
        public sucursal: Sucursal = null,
        public usuario: Usuario = null
    ) {

    }

}

