import { Usuario } from "../Usuario.js";
export class Login {
    constructor() {
        this.init()
    }

    init() {
        console.log('iniciado');
        this.setEvents()
    }

    setEvents() {
        let form = document.querySelector('.card__form')
        if(!form) return false
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const data = new FormData(e.target);
            let usuario = data.get('user')
            let password = data.get('password')

            let userLogin = new Usuario().login(usuario, password)

            if(!userLogin) {
                let errorMessage = document.querySelector('.card__error')
                errorMessage.classList.remove('hidden')
                return false
            }

            if (userLogin.rol.nombre === 'Administrador') {
                window.location.replace('./views/administrador/dashboard.html')
            } else if (userLogin.rol.nombre === 'Cuidador') {
                window.location.replace('./views/cuidador/control.html')
            }

        })
    }
}
