import { defineStore } from "pinia";
import router from "../router/router";
import { login } from "../modulo/data";

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

                console.log(data);
                this.saveFile(data)

                router.push('/login')
            } catch (e) {
                console.log(e);
            }finally {
                this.loadingUser = false;
            }
        },

        signupUserNat(name, lastname, identity, phone, email, password, type) {
            this.loadingUser = true;
            try {
                const data = []
                data.push({'Nombre': name, 'Apellido': lastname, 'Identificación': identity, 'Teléfono': phone, 'Email': email, 'Contraseña': password, 'Tipo': type})

                console.log(data);
                this.saveFile(data)

                router.push('/login')
            } catch (e) {
                console.log(e);
            }finally {
                this.loadingUser = false;
            }
        },

        async loginUser(email, password) {
            this.loadingUser = true
            try {
                const loginData = login.some(e => e.user === email && e.password === password)
                this.userdata = login.map(i => i.user === email)

                loginData === true ? this.userData : ''

                console.log(this.userData);
                
                router.push("/");
            } catch (e) {
                console.log(e);
            } finally {
                this.loadingUser = false;
            }
        },

        currentUser() {
            return new Promise((resolve, reject) => {
                
            })
        },
        logoutUser() {

        }
    },
});