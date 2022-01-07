<template>
<div>
<navBar/>
    <div class="album py-5 bg-light h-100">
        <div class="container">
            <!-- <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">  -->
                <div class="col">
                    <div class="card shadow-sm">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <img class="card-img-top" v-bind:src="article.picture"/>
                        <div class="card-body" alt="Max-height 100%">
                            
                            <p class="card-text">{{article.text}}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <!-- <button type="button" class="btn btn-sm btn-outline-secondary">View</button> -->
                                    <button type="button" class="btn btn-sm btn-outline-secondary" v-if="author">Edit</button>
                                    <!-- ici c'est la gestion de la modification d'un commentaire ????? -->
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

                <!-- Modale pour ajout de commentaire -->
                <div class="modal fade" id="modalComment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                <label for="inputComment">Taper votre comment</label>
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
        </div>
    </div> 
</div>
</template>

<script>
import axios from "axios";
import navBar from "../components/Nav.vue";

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
                    if (this.article.UserId === sessionStorage.getItem("id")){
                        this.author = true;
                    }
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