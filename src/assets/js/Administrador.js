import { Usuario } from './Usuario.js';

export class Administrador extends Usuario {
    asignarCuidador(animal, cuidador) {
        animal.cuidador = cuidador;
        this.saveToLocalStorage('animales', animal);
    }

    registrarUsuario(cuidador) {
        this.saveToLocalStorage('usuarios', cuidador);
    }

    asignarAnimal(cuidador, animal) {
        cuidador.animales = cuidador.animales || [];
        cuidador.animales.push(animal);
        this.saveToLocalStorage('usuarios', cuidador);
    }



    static getAllAdministradores() {
        return JSON.parse(localStorage.getItem('usuarios')).filter(data => data.rol.nombre === "Administrador") || [];
    }

    static getAllAnimales() {
        return JSON.parse(localStorage.getItem('animales')) || [];
    }
}
