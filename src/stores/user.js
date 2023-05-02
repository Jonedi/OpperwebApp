import { defineStore } from "pinia";
import router from "../router/router";
import json from '../modulo/signup.json' assert { type: 'JSON' }

export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: null,
        loadingUser: false,
        loading: false,
    }),

    actions: {
        saveFile(data) {
            const myJson = JSON.stringify(data);
            const archivoBlob = new Blob([myJson], { type: 'application/json' });
            const archivoURL = URL.createObjectURL(archivoBlob);
            const enlaceDescarga = document.createElement('a');
            enlaceDescarga.href = archivoURL;
            enlaceDescarga.download = 'signup.json';
            document.body.appendChild(enlaceDescarga);
            enlaceDescarga.click();
            URL.revokeObjectURL(archivoURL);
        },

        signupUserJur(rSocial, nit, phone, email, password, type) {
            this.loadingUser = true;
            try {
                const data = []
                data.push({'Razón Social': rSocial, 'Nit': nit, 'Teléfono': phone, 'Email': email, 'Contraseña': password, 'Tipo': type})
                
                this.userData = { nombre: rSocial, email: email }
                console.log(this.userData);
                this.saveFile(data)

                router.push('/login')
            } catch (e) {
                console.log(e);
            }finally {
                this.loadingUser = false;
            }
        },

        signupUserNat(name, lastname, phone, identity, email, password, type) {
            this.loadingUser = true;
            try {
                const data = []
                data.push({'Nombre': name, 'Apellido': lastname, 'Teléfono': phone, 'Identificación': identity, 'Email': email, 'Contraseña': password, 'Tipo': type})

                userData = { nombre: name, email: email}
                console.log(userData);
                this.saveFile(data)

                router.push('/login')
            } catch (e) {
                console.log(e);
            }finally {
                this.loadingUser = false;
            }
        },

        tokenUser() {
            var token = ''
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
            for (let i = 0; i < 64; i++) {
                var char = Math.floor(Math.random() * str.length + 1)
                token += str.charAt(char)
            }
            return(token)
        },

        async loginUser(email, password) {
            this.loadingUser = true
            try {
                const loginData = json.some(e => e.Email === email && e.Contraseña === password)
                if (loginData === true) {
                    const name = json.map(e => e.Nombre).toString()
                    const token = this.tokenUser()
                    localStorage.setItem('user', JSON.stringify({name, email, token}))
                    
                    this.currentUser()
                    router.push("/");
                } else {
                    console.log("pasó por aquí. Usuario inválido");
                    this.$swal('Usuario o Contraseña inválidas. Pruebe de nuevo', 'error');
                }
                
            } catch (e) {
                console.log(e);
            } finally {
                this.loadingUser = false;
            }
        },

        currentUser() {
            return new Promise((resolve, reject) => {
                this.userData = JSON.parse(localStorage.getItem('user'))
                
                resolve(this.userData)
            }, e => reject(e))
        },
        logoutUser() {
            this.userData = null
            localStorage.removeItem('user')
            location.reload()
            router.push('/login')
            console.log(this.userData);
        }
    },
});