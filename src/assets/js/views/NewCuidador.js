import { Administrador } from "../Administrador.js";
import { Cuidador } from "../Cuidador.js";
import { Rol } from "../Rol.js";
export class NewCuidador {
    constructor() {
        this.init()
    }

    init() {
        console.log('iniciado');
        this.setEvents()
    }

    setEvents() {
        let form = document.querySelector('#agregarCuidador')
        if(!form) return false
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            console.log(e);
            console.log(e.target);
            let error = document.querySelector('.form__error')
            let success = document.querySelector('.form__success')

            const data = new FormData(e.target);
            let name = data.get('name')
            let email = data.get('email')
            let celular = data.get('celular')
            let user = data.get('user')
            let password = data.get('password')
            
            const rolCuidador = new Rol(2, 'Cuidador', 'Se encarga del bienestar de los animales');
            let cuidador = new Cuidador(this.uuidv4(), name, email, celular, user, password, rolCuidador);
            
            let validarUsuario = cuidador.validarUsuario(user, password)
            
            if(validarUsuario) {
                error.classList.remove('hidden')
                success.classList.add('hidden')
                return false
            }
            
            
            new Administrador().registrarUsuario(cuidador);
            
            error.classList.add('hidden')
            success.classList.remove('hidden')
            
            e.target.reset()
            

        })
    }

    uuidv4() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
          (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
      }
}
