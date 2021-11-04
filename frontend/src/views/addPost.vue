<template>
<div>
<navBar/>
    <main class="container-fluid">
        <section class="col-12 col-md-8 mt-5 mx-auto p-3 bg-light rounded">
            <h1 class="text-center font-weight-bold" style="font-size:4vw;" >EDITEZ VOTRE ARTICLE</h1>
            <form @submit="sendForm()">                
                <div class="mb-3">
                    <label for="formFile" class="form-label">Ajoutez une photo pour illustrer votre article</label>
                    <input v-on:keydown="invalid"  @change="handleImage()" class="form-control" type="file" accept="image/png, image/jpeg" id="inputImage">                    
                    <div id="previewSettings"></div>
                </div>
                <div class="form-group">
                    <label for="inputTiltle">Titre de votre article</label>
                    <input v-on:keydown="invalid = false" v-model="inputTitle" type="text" class="form-control" id="inputTitle"  placeholder="Ajoutez un titre">
                    <span class= "message-alerte"></span>
                </div>          
                <div class="form-group">
                    <label for="inputEmail">Texte</label>
                    <input v-on:keydown="invalid = false" v-model="inputText" type="text" class="form-control" id="inputText"  placeholder="Ajoutez du texte">
                    <span class= "message-alerte"></span>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="sendForm()">PUBLICATION</button> 
            </form>
        </section>  
    </main>
</div>
</template>

<style>
button {
    margin-top: 20px;
}

label{
    margin: 5px 23px;
    font-size: 20px;
    padding: 10px 0 5px 0;
    display: block;
    position: left;
    text-align: left;
}

</style>

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
            inputFirstName: "",
            inputLastName: "",
            inputTitle: "",
            inputText: "",
            invalid: false
        }
    },
    methods: {
        handleImage(){ // Cette fonction permet d'avoir une miniature des fichiers qui vont être uploadés même si ils ne possèdent pas encore d'URLs
        document.getElementById("previewSettings").innerHTML="";
        let files = document.getElementById("inputImage").files;
        for (let i = 0; i < files.length; i++) {
            let img = document.createElement("img");
            img.classList.add("img-fluid");
            img.file = files[i];
            document.getElementById("previewSettings").appendChild(img);
            var reader = new FileReader();
            reader.onload = ( function(aImg) {
            return function(e) {
                aImg.src = e.target.result; 
            };
            })(img);
            reader.readAsDataURL(files[i]);
        }
        },



        sendForm() {
            console.log("ok");
                if ( !this.inputImage || !this.inputTitle || !this.inputText) {
                return this.invalid = true;
                
            }
            // || !this.inputFirstName || !this.inputLastName 
            
            if (!this.inputImage || !this.inputTitle || !this.inputText) {
                console.log("ok2");
                const data= { 
                    "picture": this.inputImage,
                    "title": this.inputTitle, 
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