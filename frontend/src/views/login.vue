<template>
    <main class="container">
        <section class="col-12 col-md-8 mt-5 mx-auto p-3 bg-light rounded">
            <form @submit.prevent="sendForm(event)">
                
                <h1 class="text-center font-weight-bold" style="font-size:4vw;" >LOGIN</h1>
                <div class="form-group">
                    <label for="inputUserName">Nom d'utilisateur:</label>
                    <input v-on:keydown="invalid = false" v-model="inputUserName" type="text" class="form-control" id="inputUserName" aria-describedby="userNameHelp" placeholder="Entrez votre nom">

                </div>      
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

//import router from "../router";

export default {
    name: "login",
    data() {
        return {
            inputUserName: "",
            inputEmail: "",
            inputPassword: "",
            invalid: false
        }
    },
    methods: {
        sendForm() {
           
        }
    }
}    
</script>