<template>
<div>
<navBar/>
    <main class="container-fluid">
        <section class="col-12 col-md-8 mt-5 mx-auto p-3 bg-light rounded">
            <h1 class="text-center font-weight-bold" style="font-size:4vw;" >VOTRE ARTICLE</h1>
            <form @submit="sendForm()">
                <div class="mb-3">
                    <label for="formFile" class="form-label">Ajoutez une photo pour illustrer votre article*</label>
                    <input @change="handleImage()" class="form-control" type="file" accept="image/png, image/jpeg" id="inputImage">                    
                    <div id="previewSettings"></div>
                </div>
                <div class="form-group">
                    <label for="inputTiltle">Titre de votre article*</label>
                    <input v-on:keydown="invalid = false" v-model="inputTitle" type="text" class="form-control" id="inputTitle"  placeholder="Ajoutez un titre">
                    <span class= "message-alerte"></span>
                </div>          
                <div class="form-group">
                    <label for="inputEmail">Texte*</label>
                    <textarea v-on:keydown="invalid = false" v-model="inputText" class="form-control" id="inputText" rows="3">
                    </textarea>
                    <span class= "message-alerte">*Tous les champs du formulaire sont obligatoires</span>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="sendForm()">PUBLICATION</button> 
            </form>
        </section>  
    </main>
</div>
</template>

<style>
label{
    margin: 5px 23px;
    font-size: 20px;
    padding: 10px 0 5px 0;
    display: block;
    position: left;
    text-align: left;
}
textarea{
    margin-bottom: 20px;
}
.message-alerte{
    font-size: 12px;
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
        return {
            inputImage: "",
            inputTitle: "",
            inputText: "",
            invalid: false,            
        }
    },
    mounted ()
    {
    // Pour select cat add logic here
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
         envoiModifPhotoProfil(){ // Envoi des modifications de la photo via une requete PUT
            let input = document.getElementById("inputImage");
            let file = input.files;
            let formData = new FormData();
            formData.append('image', file[0]);
            axios
            .put("http://localhost:3000/api/post/"+ this.userId, formData, {
                headers: {
                'Authorization': 'Bearer ' + this.token,
                "Content-Type": "application/json",
                }
            })
            .then(
                alert("Modifications sauvegardées !"),
                window.location.reload()
            )
            .catch(function (error) {
                console.log(error); 
            });
            },
        sendForm() {
            if ( !this.inputTitle || !this.inputText) {
                return this.invalid = true;
            } else {
                console.log('erreur')
                this.invalid = true;
            }
            let input = document.getElementById("inputImage");
            let userId = sessionStorage.getItem("userId");
            let file = input.files;
            let formData = new FormData();
            formData.append('image', file[0]);
            formData.append('title', this.inputTitle);
            formData.append('text', this.inputText);
            formData.append('userId', userId);
            axios.post('http://localhost:3000/api/post/create', formData, {
                headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
                'Content-Type': 'application/json',
                }
            })
            .then((res) => {
                console.log(res);
                alert('Votre article est en attente de modération');
                //redirection page principale
                router.push({ path : '/main'});
            })
            .catch(()=>{
                alert("Tous les champs du formulaire sont obligatoires pour la publication de votre article");
            });
        }
    }
}
</script>
