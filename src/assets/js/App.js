import { Administrador } from './Administrador.js';
import { Cuidador } from './Cuidador.js';
import { Animal } from './Animal.js';
import { EstadoSalud } from './EstadoSalud.js';
import { Rol } from './Rol.js';
import { Login } from './views/Login.js';
import { NewCuidador } from './views/NewCuidador.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        new Login()
        new NewCuidador()

        const rolAdmin = new Rol(1, 'Administrador', 'Administra el sistema y asigna cuidadores');
        const rolCuidador = new Rol(2, 'Cuidador', 'Se encarga del bienestar de los animales');

        let admin = new Administrador(1, 'Admin', 'admin@mail.com', '123456', 'admin', '123', rolAdmin);
        let cuidador = new Cuidador(2, 'Cuidador', 'cuidador@mail.com', '654321', 'cuidador', '123', rolCuidador);

        let estadoSalud = new EstadoSalud(1, 20.5, 'Vacuna A', 'Ninguna', 'Ninguno', 'Laboratorio X', new Date());
        let animal = new Animal(1, 'Lion', 'Felino', 'Selva', 'Carne', [], estadoSalud);

        admin.registrarUsuario(cuidador);
        admin.registrarUsuario(admin);
        admin.asignarCuidador(animal, cuidador);


        let cuidadores = Cuidador.getAllCuidadores();
        let administradores = Administrador.getAllAdministradores();
        let animales = Animal.getAllAnimales();

        console.log('Cuidadores:', cuidadores);
        console.log('Administradores:', administradores);
        console.log('Animales:', animales);

        console.log('Datos inicializados y guardados en localStorage.');
    }


}

new App();
