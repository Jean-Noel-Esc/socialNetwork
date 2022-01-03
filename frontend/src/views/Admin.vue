<template>
<body>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">GROUPOMANIA</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-nav">
        <div class="nav-item text-nowrap">
        <a class="nav-link px-3" href="#">Sign out</a>
        </div>
    </div>
    </header>

    <div class="container-fluid">
    <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
            <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                <span data-feather="home"></span>
                Page principale
                </a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file"></span>
                Catégories
                </a>
            </li> -->
            <li class="nav-item">
                <a href="#utilisateurs" class="nav-link">
                <!-- <span data-feather="shopping-cart"></span> -->
                Utilisateurs
                </a>
            </li>
            <li class="nav-item">
                <a href="#articles" class="nav-link">
                <!-- <span data-feather="users"></span> -->
                Articles
                </a>
            </li>
            <li class="nav-item">
                <a href="#commentaires" class="nav-link">
                <!-- <span data-feather="bar-chart-2"></span> -->
                Commentaires
                </a>
            </li>
            </ul>
        </div>
        </nav>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
            <!-- <div class="btn-group me-2">
                <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
            </button> -->
            </div>
        </div>

        <!-- <div class="album py-5 bg-light">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="post in posts" :key="post.id">
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        <div class="card-body">
                            <p class="card-text">{{post.text}}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!--Gestion des catégories-->
    <h2>Gestion des catégories</h2>
        <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                    <th scope="col">#id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Vue</th>
                    </tr>
                </thead>
                <tbody  v-for="category in categories" :key="category.id">
                    <tr>
                        <td>{{category.id}}</td>
                        <td>{{category.name}}</td>
                        <td>
                        <!-- <button type="button" class="btn btn-danger m-3" data-bs-toggle="modal" data-bs-target="#modalcategory" v-bind:data-bs-user-id="category.id"  v-bind:data-bs-category-name="category.name"><font-awesome-icon icon = "trash"/></button>  -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    <!--------------------------------->
    <!--Boutton pour la création d'une nouvelle catégorie-->
    <!-- <button type="button" class="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#modalCategory" v-bind:data-bs-category-id="category.id"  v-bind:data-bs-category-name="category.name"><font-awesome-icon icon = "eye"/></button> --> 
    <!----------------------------------------------------->


    <!--display des users à modérer-->
        <section>
        <h2>Moderation des nouveaux utilisateurs</h2>
        <div class="table-responsive" id="utilisateurs">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                    <th scope="col">#id</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Vue</th>
                    </tr>
                </thead>
                <tbody  v-for="user in users" :key="user.id">
                    <tr>
                        <td>{{user.id}}</td>
                        <td>{{user.firstname}}</td>
                        <td>{{user.lastname}}</td>
                        <td>{{user.email}}</td>
                        <td>
                        <button type="button" class="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#modalUser" v-bind:data-bs-user-id="user.id"  v-bind:data-bs-user-fisrtname="user.firstname" v-bind:data-bs-user-lastname="user.lastname"><font-awesome-icon icon = "eye"/></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </section>
    <!--------------------------------->
    <!-- Modale pour moderation des nouveaux utilisateurs -->
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
                        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                        <button id="editUser" type="button" class="btn btn-success"><font-awesome-icon icon="edit"/></button>
                        <button id="trashUser" type="button" class="btn btn-danger"><font-awesome-icon icon="trash"/></button>
                    </div>
                </div>
            </div>
        </div>
    <!-- liste des articles à moderer -->
    <section>
        <h2>Articles en attente de publication</h2>
        <div class="table-responsive" id="articles">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                    <th scope="col">#id</th>
                    <th scope="col">Category</th>
                    <th scope="col">Auteur</th>
                    <th scope="col">Created at</th>
                    <th scope="col">Header</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody  v-for="post in posts" :key="post.id">
                    <tr>
                        <td>{{post.id}}</td>
                        <td>{{post.CategoryId}}</td>
                        <td>{{post.User.firstname}} {{post.User.lastname}}</td>
                        <td>{{post.createdAt}}</td>
                        <td>text</td>
                        <td>
                        <button type="button" class="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#exampleModalLong" v-bind:data-bs-id="post.id"  v-bind:data-bs-title="post.text"><font-awesome-icon icon = "eye"/></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
        <!-- Modale pour modération des articles/posts -->
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Ceci est un article </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                        <button id="edit" type="button" class="btn btn-success"><font-awesome-icon icon="edit"/></button>
                        <button id="trash" type="button" class="btn btn-danger"><font-awesome-icon icon="trash"/></button>
                    </div>
                </div>
            </div>
        </div>
        <!--display liste des commentaires-->
        <section>
        <h2>Commentaires en attente de publication</h2>
        <div class="table-responsive" id="commentaires">
            <table class="table table-striped table-sm">
            <thead>
                <tr>
                <th scope="col">#id</th>
                <th scope="col">Category</th>
                <th scope="col">Auteur</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                </tr>
            </thead>
            <tbody v-for="comment in comments" :key="comment.id">
                <tr>
                <td>{{comment.id}}</td>
                <td>{{comment.CategoryId}}</td>
                <td>{{comment.text}}</td>
                <td>{{comment.createdAt}}</td>
                <td>text</td>
                <td>
                <button type="button" class="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#modalComment" v-bind:data-bs-comment-id="comment.id"  v-bind:data-bs-comment-title="comment.text"><font-awesome-icon icon = "eye"/></button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </section>
        <!-- Modale pour commentaire -->        
        <div class="modal fade" id="modalComment" tabindex="-1" role="dialog" aria-labelledby="modalCommentTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalCommentTitle">Modal comment title</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Ceci est un commentaire</p>
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
    </div>
</body>
</template>

<style>
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
    name: "Admin",
    data() {
        return {
            categories:[],
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
        // Requetes listes categories / utilisateurs / articles / commentaires.
        axios.get("http://localhost:3000/api/category/",  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
        .then((res) => {
                if (res) {
                    const rep = res.data;
                    this.categories = rep;
                    console.log(rep);
                    console.log("Mais ou sont les categories");
                }
        })
        .catch((error) =>{
            console.log(error);
            console.log ("c'est err 404");
        })       

        axios.get("http://localhost:3000/api/auth/findalluserstomoderate",  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
        .then((res) => {
                if (res) {
                    const rep = res.data;
                    this.users = rep;
                    console.log(rep);
                }
        })
        .catch((error) =>{
            console.log(error);
            console.log ("c'est err 404");
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
            console.log ("c'est err 404");
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
            console.log ("c'est err 404");
        })
        // Gestion des modales pour la modération des utilisateurs / articles / commentaires
        // Modale Post
        var exampleModal = document.getElementById('exampleModalLong')
            exampleModal.addEventListener('show.bs.modal', function (event) {
                var button = event.relatedTarget;
                var title = button.getAttribute('data-bs-title');
                var modalTitle = exampleModal.querySelector('.modal-title');
                modalTitle.textContent = title;
                var id = button.getAttribute('data-bs-id');
                console.log(id);
                this.postIdToModerate = id;
                console.log(this.postIdToModerate);
                    document.getElementById("edit").addEventListener("click", function (){
                        axios.put("http://localhost:3000/api/post/admin/"+id,  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
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
        // Modale commentaire
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
                        axios.put("http://localhost:3000/api/comment/admin/"+id,  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
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
        // Modale utilisateurs
        var modalUser = document.getElementById('modalUser')
            modalUser.addEventListener('show.bs.modal', function (event) {
                var button = event.relatedTarget;
                var title = button.getAttribute('data-bs-user-title');
                var modalTitle = modalUser.querySelector('.modal-title');
                modalTitle.textContent = title;

                
                var id = button.getAttribute('data-bs-user-id');
                console.log(id);


                var modalUserContent = modalUser.querySelector('.modal-user-body');
                var firstname = button.getAttribute('data-bs-user-fisrtname');
                var lastname = button.getAttribute('data-bs-user-lastname')
                //var email = button.getAttribute()
                modalUserContent.textContent = firstname + " " + lastname;
                console.log(firstname);
                
                this.userIdToModerate = id;
                console.log(this.userIdToModerate);
                    document.getElementById("editUser").addEventListener("click", function (){
                        axios.put("http://localhost:3000/api/auth/updateroleuser/"+id,  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
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
