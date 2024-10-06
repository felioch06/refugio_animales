
export class Usuario {
    constructor(id, nombreCompleto, correoElectronico, numeroCelular, nombreUsuario, contraseña, rol) {
        this.id = id;
        this.nombreCompleto = nombreCompleto;
        this.correoElectronico = correoElectronico;
        this.numeroCelular = numeroCelular;
        this.nombreUsuario = nombreUsuario;
        this.contraseña = contraseña;
        this.rol = rol;
    }

    login(nombreUsuario, contraseña) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        for (let usuario of usuarios) {
            if (usuario.nombreUsuario === nombreUsuario && usuario.contraseña === contraseña) {
                console.log(`Login exitoso para ${usuario.nombreCompleto}`);
                return usuario;
            }
        }
        console.log('Login fallido: Usuario o contraseña incorrectos');
        return false;
    }

    validacionLogin(loginExitoso) {
        if (loginExitoso) {
            console.log(`Usuario ${loginExitoso} ha iniciado sesión correctamente.`);
            const usuarios = Usuario.getAllUsuarios();
            const usuarioLogueado = usuarios.find(user => user.nombreUsuario === loginExitoso.nombreUsuario);

            if (usuarioLogueado) {
                console.log(`Bienvenido ${usuarioLogueado.nombreCompleto}`);
                return usuarioLogueado.rol.nombre
            }
        } else {
            console.log('Login fallido. Nombre de usuario o contraseña incorrectos.');
        }
    }

    saveToLocalStorage(key, data) {
        let items = JSON.parse(localStorage.getItem(key)) || [];
        let exist = items.find(item => item.id === data.id);
        console.log('heresss', exist, data);
        if (!exist) {
            items.push(data);
            localStorage.setItem(key, JSON.stringify(items));
        }
    }

    static getAllUsuarios() {
        return JSON.parse(localStorage.getItem('usuarios')) || [];
    }
}
