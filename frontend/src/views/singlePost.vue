<template>
<div>
<navBar/>
    <div class="album py-5 bg-light h-100">
        <div class="container">
            <div class="col">
                <div class="card shadow-sm">
                    <img class="card-img-top" v-bind:src="article.picture"/>
                    <div class="card-body" alt="Max-height 100%">
                        <p class="card-text">{{article.title}}</p>        
                        <p class="card-text">{{article.text}}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <!-- Ce bouton n'apparait sur la vue d'un article que si l'utilisateur en est l'auteur
                                et lui permet d'accéder au formulaire de modification de son article-->
                                <button type="button" class="btn btn-sm btn-secondary" 
                                data-bs-toggle="modal" data-bs-target="#modalUpdatePost" v-if="author==true">
                                Edit
                                </button>
                                
                            </div>
                            <small>Auteur: {{auteur.firstname}} {{auteur.lastname}}</small>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#modalComment"><font-awesome-icon icon = "pen"/></button>
                <div v-for="comment in commentairesValides" :key="comment.id">{{comment.text}}
                    <div>{{comment.firstname}} {{comment.lastname}}</div><hr/>
                </div>        
            </div>
            <!-- MODALE POUR AJOUT DE COMMENTAIRE -->
                <div class="modal fade" id="modalComment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Pour ajouter un commentaire</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                <label for="inputComment">Entrez votre texte:</label>
                                    <textarea v-on:keydown="invalid = false" v-model="inputTexte" class="form-control" id="inputTexte" rows="3">
                                    </textarea>
                                <span class= "message-alerte"></span>                        
                                </form> 
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button id="editUser" @click="sendForm()" type="button" class="btn btn-success"><font-awesome-icon icon="edit"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- MODALE POUR MODIFICATION D'UN ARTICLE/POST PAR SON AUTEUR -->
                <div class="modal fade" id="modalUpdatePost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Modifier votre article</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="formFile" class="form-label">Modifiez la photo de votre article</label>
                                        <input class="form-control" type="file" accept="image/png, image/jpeg" id="inputImage">                    
                                        <div id="previewSettings"></div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputTitle">Titre de votre article</label>
                                        <input v-on:keydown="invalid = false" v-model="inputTitle" type="text" class="form-control" id="inputTitle"  placeholder="Ajoutez un titre">
                                        <span class= "message-alerte"></span>
                                    </div>          
                                    <div class="form-group">
                                        <label for="inputEmail">Texte</label>
                                        <textarea v-on:keydown="invalid = false"  v-model="inputText" class="form-control" id="inputText" rows="3">
                                        </textarea>
                                        <span class= "message-alerte"></span>
                                    </div>
                                    <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="updateForm()">MODIFICATIONS</button> 
                                <span class= "message-alerte"></span>                        
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div> 
</div>
</template>

<script>
import axios from "axios";
import navBar from "../components/Nav.vue";
// import router from "../router";

export default {
    name: "singlePost",
    components: {navBar},
    data() {
        return {
            article:[],
            commentaires:[],
            commentairesValides : [],
            auteur:[],
            author: false,
            inputText:"",
            inputTexte:"",
            inputTitle:"",
            inputPicture:"",
            invalid: false,
            users:[],
            j: 0
        }
    },
    mounted () {
        axios.get("http://localhost:3000/api/auth/findAll", { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
            .then((res) => {
                if (res) {
                    const rep = res.data;
                    this.users = rep;
                }
            })
            .catch((error) =>{
                console.log(error);
            })
        axios.get("http://localhost:3000/api/post/"+this.$route.params.id,  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
        .then((res) => {
                if (res) {
                    const rep = res.data;
                    this.article = rep;
                    this.commentaires = rep.Comments;
                    this.auteur = rep.User;
                    console.log(this.article.UserId);
                    console.log(sessionStorage.getItem("userId"));
                    if (this.article.UserId == sessionStorage.getItem("userId")){
                        this.author = true;
                    }
                    this.inputText = this.article.text;
                    this.inputTitle = this.article.title;
                    this.inputPicture = this.article.picture;
                    for ( let i=0 ; i<this.commentaires.length; i++ ){
                        //on parcour ts les commentaires
                        if (this.commentaires[i].status == 1){
                            this.commentairesValides.push(this.commentaires[i])
                            for (let k =0; k<this.users.length ; k++){
                             // on recup ts les users
                            if (this.users[k].id == this.commentairesValides[this.j].UserId){
                                    this.commentairesValides[this.j].firstname = this.users[k].firstname;
                                    this.commentairesValides[this.j].lastname = this.users[k].lastname;
                                }
                            }
                            this.j+=1;
                        }
                    }  
                }
            })
        .catch((error) =>{
            console.log(error);
            console.log ("c'est err 404");
        })
    },
    methods:{
        //formulaire pour ajout de comentaires
        sendForm () {
            console.log(this.inputTexte);
            if ( !this.inputTexte ) {
                return this.invalid = true;
            }
            else{
                axios.post("http://localhost:3000/api/comment/",  
                    {
                        text: this.inputTexte,
                        userId: sessionStorage.getItem("userId"),
                        postId: this.$route.params.id
                    },
                        { headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("token")}}
                )
                .then(function () {
                        window.alert('Votre commentaire est en attente de publication');
                        window.location.reload;
                })
                .catch((error) => {
                        this.invalid = true;
                        console.log(error);
                })  
            }
        },
        updateForm() {
            console.log("ok");
            if (!this.inputTitle || !this.inputText) {
                console.log('err')
                return this.invalid = true;            
            }
            console.log(this.inputTitle);
            console.log(this.inputText);
            let input = document.getElementById("inputImage");
            let file = input.files;
            let formData = new FormData();
            // ici on gère la condition d'un update de l'inputImage
            // Si l'user update l'img alors on utilise .append sur le formData pour:
            // attacher le file à l'index O
            // Sinon on update le text et le title avec les valeurs de l'input de la modale
            // qu'ils aient été modifiés ou non. 
            if (file[0]) {
                formData.append('image', file[0]);
                formData.append('text', this.inputText);  
                formData.append('title', this.inputTitle);
                // console.log(file[0]);                
                axios.put('http://localhost:3000/api/post/'+ this.article.id , formData, {
                headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
                'Content-Type': 'application/json',
                }
            })
            .then((res) => {
                    console.log(res);
                    alert('La mise a jour de votre article est en attente de modération');
                    window.location.reload;
            })
            .catch((error)=>{
                    alert(error.status)
                    console.log("erreur du put file")});
            } else {
            axios.put('http://localhost:3000/api/post/'+ this.article.id, {text: this.inputText, title: this.inputTitle}, {
                headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
                'Content-Type': 'application/json',
                }
            })
            .then((res) => {
                    console.log(res);
                    alert('La mise a jour de votre article est en attente de modération');
                    window.location.reload;
            })
            .catch((error)=>{
                    alert(error.status)
                    console.log("erreur update")});
            }
        }
    }
}
</script>

<style>
hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>