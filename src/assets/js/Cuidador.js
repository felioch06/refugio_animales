import { Usuario } from './Usuario.js';

export class Cuidador extends Usuario {
    registrarCondicionSalud(animal, texto) {
        animal.estadoSalud.enfermedades = texto;
        this.saveToLocalStorage('animales', animal);
    }

    registrarProcedimientoVeterinario(animal, detalles, imagen) {
        animal.estadoSalud.procedimientoVeterinario = { detalles, imagen };
        this.saveToLocalStorage('animales', animal);
    }

    registrarIndicadoresSalud(animal, peso, vacunas) {
        animal.estadoSalud.peso = peso;
        animal.estadoSalud.vacunas = vacunas;
        this.saveToLocalStorage('animales', animal);
    }

    registrarControlMedico(animal, profesional, observaciones) {
        animal.estadoSalud.controlMedico = { profesional, observaciones };
        this.saveToLocalStorage('animales', animal);
    }

    registrarAccidenteOEnfermedad(animal, fecha, diagnostico, tratamiento) {
        animal.estadoSalud.accidenteOEnfermedad = { fecha, diagnostico, tratamiento };
        this.saveToLocalStorage('animales', animal);
    }

    validarUsuario() {
        let usuarios = this.getCuidadores() || [];
        let findUser = usuarios.find(data => data.nombreUsuario == this.nombreUsuario)
        if (findUser) return true
        return false
    }

    static getAllCuidadores() {
        return JSON.parse(localStorage.getItem('usuarios')).filter(data => data.rol.nombre === "Cuidador") || [];
    }

    getCuidadores() {
        return JSON.parse(localStorage.getItem('usuarios'))?.filter(data => data.rol.nombre === "Cuidador") || [];
    }
}
