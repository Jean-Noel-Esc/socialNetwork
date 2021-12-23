<template>
<div>
<navBar/>

<main>
    <section class="py-5 text-center container">
        <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Bienvenu</h1>
            <p class="lead text-muted">the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
            <button class="btn btn-primary my-2" @click="$router.push({path:'addpost'})">PUBLIER</button>
            <!-- <a href="#" class="btn btn-secondary my-2">Secondary action</a> -->
            </p>
            <!-- <select class="form-select" aria-label="Default select example">
                <option selected>Flitrer les articles par catégorie</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select> -->
        </div>
        </div>
    </section>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="post in posts" :key="post.id">
                    <div class="card shadow-sm">
                        <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
                        <img class="card-img-top" v-bind:src="post.picture"/>
                        <div class="card-body">
                            <p class="card-text">{{post.text}}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary" @click=displayPost(post.id)>View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
    
<footer class="text-muted py-5">
    <div class="container">
        <p class="float-end mb-1">
        <a href="#">Back to top</a>
        </p>
        <p class="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="../getting-started/introduction/">getting started guide</a>.</p>
    </div>
</footer>  
</div>
</template>

<style>
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }
    img{
        height: inherit;
        width: 30%;
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
import navBar from "../components/Nav.vue";


export default {
    name: "Main",
    components: {navBar},
    data() {
        return {
            posts:[],
        }
    },
    mounted () {
        axios.get("http://localhost:3000/api/post/",  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
        .then((res) => {
                if (res) {
                    const rep = res.data;
                    this.posts = rep;
                    console.log(rep);
                }
                //else {
                    //si les post sont absent c'est que le token est invalide
                    // redirection vers login si token invalide 
        //         }
        //     })
        })
        .catch((error) =>{
            console.log(error);
            console.log ("c'est err 404");
        })
        
    },
    methods:{
        displayPost(id){
            router.push({ path : '/singlepost/'+id});
        },
    }
}
</script>