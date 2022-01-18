<template>
<div>
<navBar/>
    <div class="album py-5 bg-light h-100">
        <div class="container">
            <!-- <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">  -->
                <div class="col">
                    <div class="card shadow-sm">
                        <img class="card-img-top" v-bind:src="article.picture"/>
                        <div class="card-body" alt="Max-height 100%">
                            
                            <p class="card-text">{{article.text}}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <!-- <button type="button" class="btn btn-sm btn-outline-secondary">View</button> -->
                                    <button type="button" class="btn btn-sm btn-outline-secondary" 
                                    data-bs-toggle="modal" data-bs-target="#modalUpdatePost" v-if="author==true">Edit</button>
                                    <!-- ICI GESTION DE LA MODIFICATION D'UN POST PAR SON AUTEUR-->
                                </div>
                                <small class="text-muted">Auteur:{{ auteur.firstname}} {{ auteur.lastname}}  </small>
                            </div>
                        </div>
                    </div>
                    <!-- <form @submit="sendForm()">
                        <label for="inputComment">Taper votre comment</label>
                            <textarea v-on:keydown="invalid = false" v-model="inputText" class="form-control" id="inputText" rows="3">
                            </textarea>
                        <span class= "message-alerte"></span>                        
                    </form> -->
                    <button type="button" class="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#modalComment"><font-awesome-icon icon = "pen"/></button>
                    <!-- <button type="button" class="btn btn-sm btn-outline-secondary">ADD COMMENT</button> -->
                    <div v-for="comment in commentairesValides" :key="comment.id">{{comment.text}}<hr/></div>

                </div>

                <!-- MODALE POUR AJOUT DE COMMENTAIRE -->
                <div class="modal fade" id="modalComment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Ajouter un commentaire</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                <label for="inputComment">Entrez votre texte:</label>
                                    <textarea v-on:keydown="invalid = false" v-model="inputText" class="form-control" id="inputText" rows="3">
                                    </textarea>
                                <span class= "message-alerte"></span>                        
                                </form> 
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                                <button id="editUser" @click="sendForm()" type="button" class="btn btn-success"><font-awesome-icon icon="edit"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- </div>  -->
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
                                        <label for="formFile" class="form-label">Modifiez une photo pour illustrer votre article</label>
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
                            <!-- <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button id="editUser" @click="sendForm()" type="button" class="btn btn-success"><font-awesome-icon icon="edit"/></button>
                            </div> -->
                        </div>
                    </div>
                </div>
            <!-- </div>  -->
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
            inputTitle:"",
            inputPicture:"",
            invalid: false
        }
    },
    mounted () {
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
                        if (this.commentaires[i].status == 1){
                            this.commentairesValides.push(this.commentaires[i])
                        }
                    }  
                    console.log(rep);
                }
            })
        .catch((error) =>{
            console.log(error);
            console.log ("c'est err 404");
        })
    },
    methods:{
        sendForm () {
            console.log(this.inputText);
            if ( !this.inputText ) {
                    return this.invalid = true;
            }
            else{
                axios.post("http://localhost:3000/api/comment/",  
                    {
                        text: this.inputText,
                        userId: sessionStorage.getItem("userId"),
                        postId: this.$route.params.id
                    },
                        { headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("token")}}
                )
                .then(function () {
                        window.alert('Comment send');
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
            }else {
                console.log('erreur')
                this.invalid = true;
            }
            console.log(this.inputTitle);
            console.log(this.inputText);
            let input = document.getElementById("inputImage");
            let file = input.files;
            let formData = new FormData();
            // ici on gère la condition d'un update de l'inputImage
            // SI l'user update l'img alors on utilise .append sur le formData POUR
            // attacher le file a l'index O
            // Sinon on update le text et le title avec les valeur de l'input de la MODALE
            // qu'ils aient été modifié ou non 
            if (file[0]) {
                formData.append('image', file[0]);
                formData.append('text', this.inputText);  
                formData.append('title', this.inputTitle);
                console.log(file[0]);
                
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
            axios.put('http://localhost:3000/api/post/'+ this.article.id , {text: this.inputText, title: this.inputTitle}, {
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