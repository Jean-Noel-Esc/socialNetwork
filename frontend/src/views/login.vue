<template>
    <main class="container">
        <section class="col-12 col-md-8 mt-5 mx-auto p-3 bg-light rounded">
            <form @submit.prevent="submitForm()">
                
                <h1 class="text-center font-weight-bold" style="font-size:4vw;" >LOGIN</h1>

                <div class="form-group">
                    <label for="inputEmail">Email:</label>
                    <input v-on:keydown="invalid = false" v-model="inputEmail" type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="votre email">
                </div>
                <div class="form-group">
                    <label for="inputPassword">Entrez votre password:</label>
                    <input v-on:keydown="invalid = false" v-model="inputPassword" type="password" class="form-control" id="inputPassword" aria-describedby="passwordHelp" placeholder="mot de passe">
                </div>
                <button type="submit">CONNEXION</button> 
                <button type="link">SIGN'UP</button> 



            </form>
        </section>  

    </main>
</template>

<script>

import router from "../router";
import axios from "axios";

export default {
    name: "login",
    data() {
        return {
            inputEmail: "",
            inputPassword: "",
            invalid: false
        }
    },
    methods: {
        submitForm() {
            if ( !this.inputEmail || !this.inputPassword ) {
                    return this.invalid = true;
                }
            axios.post("http://localhost:3000/api/auth/login", { 
                email :     this.inputEmail,
                password:   this.inputPassword
            })
            .then(function (res) {
                console.log(res);
                sessionStorage.setItem("token",   res.data.token)
                sessionStorage.setItem("userId",  res.data.userId)
                //sessionStorage.setItem("role",    res.data.role)
                window.alert('connexion réussie');
                router.push({ path : 'Main'});
            })
            .catch((error) => {
                this.invalid = true;
                console.log(error);
            })         
        }
    } 
}   
</script>