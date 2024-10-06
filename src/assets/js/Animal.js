export class Animal {
    constructor(id, nombre, especie, habitat, tipoComida, fotos, estadoSalud) {
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
        this.habitat = habitat;
        this.tipoComida = tipoComida;
        this.fotos = fotos;
        this.estadoSalud = estadoSalud;
    }

    asignarCuidador(cuidador) {
        this.cuidador = cuidador;
    }

    obtenerReporte() {
    }

    static getAllAnimales() {
        return JSON.parse(localStorage.getItem('animales')) || [];
    }
}
