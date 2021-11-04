<template>
<div>
        <!-- <font-awesome-icon class="icone-groupomania" icon="globe" size="3x"/>
        <h1 class="title">LOGIN</h1> -->

    <main class="form-signin text-center">
        <!-- <section class="col-12 col-md-8 mt-5 mx-auto p-3 bg-light rounded">  -->
            <font-awesome-icon class="icone-groupomania" icon="globe" size="3x"/>
            <h1 class="h3 fw-normal">LOGIN</h1>
            <form @submit.prevent="submitForm()">
                <div class="form-floating">
                    <input v-on:keydown="invalid = false" v-model="inputEmail" type="email" class="form-control" id="floatingInput" aria-describedby="emailHelp" placeholder="votre email">
                    <label for="floatingInput">Email:</label>               
                </div>
                <div class="form-floating mb-3">
                    <input v-on:keydown="invalid = false" v-model="inputPassword" type="password" class="form-control" id="inputPassword" aria-describedby="passwordHelp" placeholder="mot de passe">
                    <label for="floatingPassword">Password:</label>                
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">CONNEXION</button> 
                <button class="w-100 btn btn-lg btn-success" type="link" @click="$router.push({ path : 'signup'})">INSCRIPTION</button> 
            </form>
        <!-- </section>    -->
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

.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.form-signin .checkbox {
    font-weight: 400;
}
/* .form-floating mb3 {
    margin-bottom: 0px;
} */


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
    /* margin-top: 10px; */
    margin-bottom: 20px;
}

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
        }
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
                window.alert('Connexion réussie');
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