<template>
    <main class="container">
        <section class="col-12 col-md-8 mt-5 mx-auto p-3 bg-light rounded">
            <form @submit="sendForm()">
                
                <h1 class="text-center font-weight-bold" style="font-size:4vw;" >SIGNUP</h1>
                <div class="form-group">
                    <label for="inputFirstName">Nom d'utilisateur:</label>
                    <input v-on:keydown="invalid = false" v-model="inputFirstName" type="text" class="form-control" id="inputFirstName" placeholder="Entrez votre nom">

                </div> 
                <div class="form-group">
                    <label for="inputLastName">Nom d'utilisateur:</label>
                    <input v-on:keydown="invalid = false" v-model="inputLastName" type="text" class="form-control" id="inputLastName"  placeholder="Entrez votre nom">

                </div>       
                <div class="form-group">
                    <label for="inputEmail">Email:</label>
                    <input v-on:keydown="invalid = false" v-model="inputEmail" type="email" class="form-control" id="inputEmail"  placeholder="votre email">

                </div>
                <div class="form-group">
                    <label for="inputPassword">Entrez votre password:</label>
                    <input v-on:keydown="invalid = false" v-model="inputPassword" type="password" class="form-control" id="inputPassword"  placeholder="mot de passe">
                </div>

                <div class="form-group">
                    <label for="inputConfirmPassword">Confirmer votre password:</label>
                    <input v-on:keydown="invalid = false" v-model="inputConfirmPassword" type="password" class="form-control" id="inputConfirmPassword"  placeholder="mot de passe">
                </div>


                <button type="submit">CREER VOTRE PROFIL</button> 





            </form>
        </section>  

    </main>
</template>

<script>

import axios from "axios";
import router from "../router";

export default {
    name: "signup",
    data() {
        return {
            inputFirstName: "",
            inputLastName: "",
            inputEmail: "",
            inputPassword: "",
            inputConfirmPassword: "",
            invalid: false
        }
    },
    mounted(){

    },
    // pour la page article mettre les MOUNTED ce qu'il doit faire par defaut lorsque l'app est montée avt que l'user interagisse  verif si l'utilisateur 
    methods: {
        sendForm() {
            console.log("ok");
                if ( !this.inputFirstName || !this.inputLastName || !this.inputEmail || !this.inputPassword || this.inputPassword !== this.inputConfirmPassword) {
                return this.invalid = true;
                
            }
            
            const nameRegex = /(.*[a-z]){3,30}/;
            const mailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            const pwdRegex  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            
            if ( nameRegex.test(this.inputFirstName) && nameRegex.test(this.inputLastName) && mailRegex.test(this.inputEmail) && pwdRegex.test(this.inputPassword)) {
                console.log("toto");
                const data= { 
                    "firstname": this.inputFirstName, 
                    "lastname": this.inputLastName, 
                    "email": this.inputEmail,
                    "password": this.inputPassword};
                axios.post('http://localhost:3000/api/auth/signup', data)
                .then((res) => {
                sessionStorage.setItem("token",   res.data.token)
                sessionStorage.setItem("userId",  res.data.userId)
                    console.log(res);
                    alert('inscription réussie');
                    //redirection main page
                    router.push({ path : 'Main'});
                })
                .catch((error)=>{
                    alert(error.status)
                    console.log(error)});
            } else {
                console.log('erreur')
                this.invalid = true;
            }
        }
    
    }
}   
</script>