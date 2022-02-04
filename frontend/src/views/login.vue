<template>
<div>
    <main class="form-signin text-center">
        <img src = "../assets/groupomania/icon-above-font.svg" style="width: 50%; height: 200px;" alt="globe"/>
        <h1>LOGIN</h1>
        <form @submit.prevent="submitForm()">
            <div class="form-floating">
                <input v-on:keydown="invalid = false" v-model="inputEmail" type="email" class="form-control" id="floatingInput" aria-describedby="emailHelp" placeholder="votre email" alt="email">
                <label for="floatingInput">Email:</label>               
            </div>
            <div class="form-floating mb-3">
                <input v-on:keydown="invalid = false" v-model="inputPassword" type="password" class="form-control" id="inputPassword" aria-label="password" aria-describedby="passwordHelp" placeholder="password" alt="password">
                <label for="floatingPassword" name="password">Password:</label>                
            </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">CONNEXION</button> 
                <button class="w-100 btn btn-lg btn-success" type="link" @click="$router.push({ path : 'signup'})">INSCRIPTION</button> 
        </form>
        <div>
            <p class="text-danger">{{error}}</p>
        </div>
    </main>
</div>
</template>

<style>

html,body {
    height: 100%;
}
main {    
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}
img{
    height: 20%;
    width: 20%;
    
}
h1 {
    color: black;
    font-size: 15px;
    font-weight: bold;
}
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
.form-signin .checkbox {
    font-weight: 400;
}
.form-signin .form-floating:focus-within {
    z-index: 2;
}   
.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
} 
.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
button {
    margin-bottom: 20px;
}

</style>

<script>

import router from "../router";
import axios from "axios";

export default {
    name: "login",
    data() {
        return {
            inputEmail: "",
            inputPassword: "",
            invalid: false,
            error:""
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
                sessionStorage.setItem("role",    res.data.role)
                window.alert('Connexion réussie');
                // router.push({ path : 'main'});
                window.location.href("http://localhost:8080/#/main");
            })
            .catch(() => {
                this.invalid = true;
                this.error= 'Utilisateur en attente de modération ou inexistant!';
                router.push({ path : 'main'});
            })         
        }
    } 
}   
</script>