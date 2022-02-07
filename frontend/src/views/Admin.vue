<template>
<div>
<navBar/>
<body>
    <div class="container-fluid">
        <main class="col-md-auto ms-sm-auto col-lg-12 px-md-4 bg-white">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Dashboard</h1>
            </div>
            <!--LISTE DES USERS EN ATTENTE DE MODERATION-->
            <section>
                <h2>Modération des nouveaux utilisateurs</h2>
                <div class="table-responsive" id="utilisateurs">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">#id</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Voir</th>
                            </tr>
                        </thead>
                        <tbody  v-for="user in users" :key="user.id">
                            <tr>
                                <td>{{user.id}}</td>
                                <td>{{user.firstname}}</td>
                                <td>{{user.lastname}}</td>
                                <td>{{user.email}}</td>
                                <td>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalUser" v-bind:data-bs-user-id="user.id"  v-bind:data-bs-user-fisrtname="user.firstname" v-bind:data-bs-user-lastname="user.lastname" title="voir"><font-awesome-icon icon="eye" alt="icon"/></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <!--------------------------------->
            <!-- MODALE pour moderation des nouveaux utilisateurs -->
            <div class="modal fade" id="modalUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Cet utilisateur est en attente de validation</p>
                        </div>
                        <div class="modal-user-body">
                            <p>les infos de l'utilisateur</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button id="editUser" type="button" class="btn btn-success"><font-awesome-icon icon="edit"/></button>
                            <button id="trashUser" type="button" class="btn btn-danger"><font-awesome-icon icon="trash"/></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- LISTE DES ARTICLES/POST EN ATTENTE DE MODERATION -->
            <section>
                <h2>Articles en attente de publication</h2>
                <div class="table-responsive" id="articles">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">#id</th>
                            <!-- <th scope="col">Category</th> -->
                            <th scope="col">Auteur</th>
                            <th scope="col">Date</th>
                            <!-- <th scope="col">Header</th> -->
                            <th scope="col">Voir</th>
                            </tr>
                        </thead>
                        <tbody  v-for="post in posts" :key="post.id">
                            <tr>
                                <td>{{post.id}}</td>
                                <!-- <td>{{post.CategoryId}}</td> -->
                                <td>{{post.User.firstname}} {{post.User.lastname}}</td>
                                <td>{{post.createdAt}}</td>
                                <!-- <td>text</td> -->
                                <td>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong" v-bind:data-bs-id="post.id"  v-bind:data-bs-title="post.title" v-bind:data-bs-text="post.text" v-bind:data-bs-image="post.picture" title="voir"><font-awesome-icon icon = "eye"/></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <!-- MODALE pour modération des articles/posts -->
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <p>Cet article est en attente de modération.</p>
                        </div>
                        <div class="modal-body">
                            <img class="modal-image img-fluid"/>
                            <h5 class="modal-title" id="exampleModalLongTitle"></h5>
                            <p class="modal-text"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button id="edit" type="button" class="btn btn-success"><font-awesome-icon icon="edit"/></button>
                            <button id="trash" type="button" class="btn btn-danger"><font-awesome-icon icon="trash"/></button>
                        </div>
                    </div>
                </div>
            </div>
            <!--LISTE DES COMMENTAIRES EN ATTENTE DE MODERATION-->
            <section>
                <h2>Commentaires en attente de publication</h2>
                <div class="table-responsive" id="commentaires">
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Id-Auteur</th>
                        <th scope="col">Date</th>
                        <th scope="col">Voir</th>
                        </tr>
                    </thead>
                    <tbody v-for="comment in comments" :key="comment.id">
                        <tr>
                        <td>{{comment.id}}</td>
                        <td>{{comment.UserId}}</td>
                        <td>{{comment.createdAt}}</td>
                        <td>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalComment" v-bind:data-bs-comment-id="comment.id"  v-bind:data-bs-comment-title="comment.text" title="voir"><font-awesome-icon icon = "eye"/></button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </section>
            <!-- MODALE pour commentaire -->        
            <div class="modal fade" id="modalComment" tabindex="-1" role="dialog" aria-labelledby="modalCommentTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <p>Ce commentaire est en attente de modération:</p>
                        </div>
                        <div class="modal-body">
                            <h5 class="modal-title" id="modalCommentTitle"></h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button id="editComment" type="button" class="btn btn-success"><font-awesome-icon icon="edit"/></button>
                            <button id="trashComment" type="button" class="btn btn-danger"><font-awesome-icon icon="trash"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</div>
</template>

<style>
table {
    background-color: white;
    
}
.btn-primary{
        background-color: rgb(26, 26, 124);
        color:white;
}
.btn-danger{
    color:white;
    background-color: #ff6c6c;
}

</style>



<script>
import router from "../router";
import axios from "axios";
import navBar from "../components/Nav.vue";

export default {
    name: "Admin",
    components: {navBar},
    data() {
        return {
            //categories:[],
            users:[],
            posts:[],
            comments:[],
            postIdToModerate: 0,
            commentIdToModerate: 0,
            userIdToModerate: 0,              
        }
    },
    mounted () {
        if (sessionStorage.getItem("role")!= 2 ){
            router.push({ path : 'main'});
        }   
        axios.get("http://localhost:3000/api/auth/findalluserstomoderate",  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
        .then((res) => {
                if (res) {
                    const rep = res.data;
                    this.users = rep;
                }
        })
        .catch((error) =>{
            console.log(error);
        })
        axios.get("http://localhost:3000/api/post/admin",  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
        .then((res) => {
                if (res) {
                    const rep = res.data;
                    this.posts = rep;
                    console.log(rep);
                }
        })
        .catch((error) =>{
            console.log(error);
        })
        axios.get("http://localhost:3000/api/comment/admin",  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
        .then((res) => {
            if (res) {
                const rep = res.data;
                this.comments = rep;
                console.log(rep);
            }
        })
        .catch((error) =>{
            console.log(error);
        })
        // GESTION DES MODALES POUR MODERATION des utilisateurs / articles / commentaires
        // MODALE POST
        var exampleModal = document.getElementById('exampleModalLong')
            exampleModal.addEventListener('show.bs.modal', function (event) {
                var button = event.relatedTarget;
                var image = button.getAttribute('data-bs-image');
                var title = button.getAttribute('data-bs-title');
                var texte = button.getAttribute('data-bs-text');
                var modalImage = exampleModal.querySelector('.modal-image');
                modalImage.src = image;
                var modalTitle = exampleModal.querySelector('.modal-title');
                modalTitle.textContent = title;
                var modalText = exampleModal.querySelector('.modal-text');
                modalText.textContent = texte;
                var id = button.getAttribute('data-bs-id');
                console.log(id);
                this.postIdToModerate = id;
                console.log(this.postIdToModerate);
                    document.getElementById("edit").addEventListener("click", function (){
                        axios.put("http://localhost:3000/api/post/admin/"+id, {userId : sessionStorage.getItem("userId")},  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
                        .then((res) => {
                            if (res) {
                                console.log(res);
                                window.location.reload();
                            }
                        })
                        .catch((error) =>{
                                console.log(error);
                        }) ;
                    })
                    document.getElementById("trash").addEventListener("click", function (){
                        axios.delete("http://localhost:3000/api/post/"+id, { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
                        .then((res) => {
                            if (res) {
                                console.log(res);
                                window.location.reload();
                            }
                        })
                        .catch((error) =>{
                            console.log(error);
                            console.log ("c'est err 404");
                        })  
                    })
        })
        // MODALE COMMENTAIRES
        var modalComment = document.getElementById('modalComment')
            modalComment.addEventListener('show.bs.modal', function (event) {
                var button = event.relatedTarget;
                var title = button.getAttribute('data-bs-comment-title');
                var modalTitle = modalComment.querySelector('.modal-title');
                modalTitle.textContent = title;
                var id = button.getAttribute('data-bs-comment-id');
                console.log(id);
                this.commentIdToModerate = id;
                console.log(this.commentIdToModerate);
                    document.getElementById("editComment").addEventListener("click", function (){
                        axios.put("http://localhost:3000/api/comment/admin/"+id, {userId : sessionStorage.getItem("userId")},  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
                            .then((res) => {
                                if (res) {
                                console.log(res);
                                window.location.reload();
                                }
                            })
                            .catch((error) =>{
                                console.log(error);
                                console.log ("c'est err 404");
                            }) ;
                    })
                    document.getElementById("trashComment").addEventListener("click", function (){
                        axios.delete("http://localhost:3000/api/comment/"+id, { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
                        .then((res) => {
                                if (res) {
                                    console.log(res);
                                    window.location.reload();
                                }
                        })
                        .catch((error) =>{
                            console.log(error);
                            console.log ("c'est err 404");
                        })  
                    })
            })
        // MODALE UTILISATEUR
        var modalUser = document.getElementById('modalUser')
            modalUser.addEventListener('show.bs.modal', function (event) {
                var button = event.relatedTarget;
                var title = button.getAttribute('data-bs-user-title');
                var modalTitle = modalUser.querySelector('.modal-title');
                modalTitle.textContent = title;               
                var id = button.getAttribute('data-bs-user-id');
                var modalUserContent = modalUser.querySelector('.modal-user-body');
                var firstname = button.getAttribute('data-bs-user-fisrtname');
                var lastname = button.getAttribute('data-bs-user-lastname')
                //var email = button.getAttribute()
                modalUserContent.textContent = firstname + " " + lastname;
                
                this.userIdToModerate = id;
                console.log(this.userIdToModerate);
                    document.getElementById("editUser").addEventListener("click", function (){
                        axios.put("http://localhost:3000/api/auth/updateroleuser/"+id, {userId : sessionStorage.getItem("userId")},  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
                            .then((res) => {
                                if (res) {
                                console.log(res);
                                window.location.reload();
                                }
                            })
                            .catch((error) =>{
                                console.log(error);
                                console.log ("c'est err 404");
                            }) ;
                    })
                    document.getElementById("trashUser").addEventListener("click", function (){
                        axios.delete("http://localhost:3000/api/auth/deleteuser/"+id, { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
                        .then((res) => {
                                if (res) {
                                    console.log(res);
                                    window.location.reload();
                                }
                        })
                        .catch((error) =>{
                            console.log(error);
                            console.log ("c'est err 404");
                        })  
                    })
        })
    },
    methods:{
    }
}
</script>
