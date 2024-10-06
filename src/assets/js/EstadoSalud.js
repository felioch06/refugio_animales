export class EstadoSalud {
    constructor(id, peso, vacunas, enfermedades, medicamentos, examenesLaboratorio, fechaActualizacion) {
        this.id = id;
        this.peso = peso;
        this.vacunas = vacunas;
        this.enfermedades = enfermedades;
        this.medicamentos = medicamentos;
        this.examenesLaboratorio = examenesLaboratorio;
        this.fechaActualizacion = fechaActualizacion;
    }
}
