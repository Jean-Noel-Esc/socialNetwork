<template>
<div>
<navBar/>
    <main class="container-fluid">
        <section class="col-12 col-md-8 mt-5 mx-auto p-3 bg-light rounded">
            <h1 class="text-center font-weight-bold" style="font-size:4vw;" >EDITEZ VOTRE ARTICLE</h1>
            <form @submit="sendForm()">                
                <div class="mb-3">
                    <label for="formFile" class="form-label">Ajoutez une photo pour illustrer votre article</label>
                    <input class="form-control" type="file" id="formFile">
                </div>
                <div class="form-group">
                    <label for="inputFirstName">Prénom</label>
                    <input v-on:keydown="invalid = false" v-model="inputImage" type="text" class="form-control" id="inputImage" placeholder="Ajoutez une image">
                    <span class= "message-alerte">Entrez votre prénom</span>
                </div> 
                <div class="form-group">
                    <label for="inputLastName">Nom</label>
                    <input v-on:keydown="invalid = false" v-model="inputTitre" type="text" class="form-control" id="inputTitre"  placeholder="Ajoutez un titre">
                    <span class= "message-alerte">Entrez</span>
                </div> 
                <div class="form-group">
                    <label for="inputTiltle">Titre de votre article</label>
                    <input v-on:keydown="invalid = false" v-model="inputTitre" type="text" class="form-control" id="inputTitre"  placeholder="Ajoutez un titre">
                    <span class= "message-alerte">Ajoutez un titre</span>
                </div>          
                <div class="form-group">
                    <label for="inputEmail">TEXT</label>
                    <input v-on:keydown="invalid = false" v-model="inputText" type="text" class="form-control" id="inputText"  placeholder="Ajoutez du texte">
                    <img src="src/assets/check.svg" alt="icone de validation" class="icone-verif">
                    <span class= "message-alerte">Ajoutez votre texte</span>
                </div>
                <button type="submit">PUBLISH YOUR POST</button> 
            </form>
        </section>  
    </main>
</div>
</template>

<script>

import axios from "axios";
import router from "../router";
import navBar from "../components/Nav.vue";

export default {
    name: "addPost", 
    components: {navBar},
    data() {
        // mes data sont des var dans la page qui matchent avec la partie template cad le champ v model des input
        // c'est l'attribut v model qui fait matcher les input de la var .
        return {
            inputImage: "",
            inputTitre: "",
            inputText: "",
            invalid: false
        }
    },
    methods: {
        sendForm() {
            console.log("ok");
                if ( !this.inputImage || !this.inputTitre || !this.inputText) {
                return this.invalid = true;
                
            }
            
            if (!this.inputImage || !this.inputTitre || !this.inputText) {
                const data= { 
                    "picture": this.inputImage, 
                    "title": this.inputTitre, 
                    "text": this.inputText
                };

                axios.post('http://localhost:3000/api/post', data)
                .then((res) => {
                sessionStorage.setItem("token",   res.data.token)
                sessionStorage.setItem("userId",  res.data.userId)
                    console.log(res);
                    alert('Votre Post est en attente de modération');
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

<style>

</style>