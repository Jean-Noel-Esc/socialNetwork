<template>
<div>
<navBar/>
<main v-if="role == 0"> 
    <div>
        <p>Votre profil est en attente de validation</p>
    </div> 
</main>
<main v-else>
    <section class="py-5 text-center container">
        <div id="publish" class="row py-lg-5 mx-0">
            <div class="col-lg-6 col-md-8 mx-auto">
                <p>
                <button class="btn btn-primary my-2" @click="$router.push({path:'addpost'})">PUBLIER</button>
                </p>
            </div>
        </div>
    </section>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="post in posts" :key="post.id">
                    <div class="card shadow-sm">
                        <img class="card-img-top" v-bind:src="post.picture"/>
                        <div class="card-body">
                            <p class="card-text">{{post.title}}</p>
                            <p class="card-text">{{post.text}}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary" @click=displayPost(post.id)>View</button>
                                </div>
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
        <p class="mb-1"> &copy; Groupomania 2022</p>
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
    #publish{
        padding-top: 0px!important;
        padding-bottom: 0px!important;
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
            role:0
        }
    },
    mounted () {
        //window.location.reload();
        if(sessionStorage.getItem("role") == 1 || sessionStorage.getItem("role") == 2 ){
            this.role = 1;
        }
        
        axios.get("http://localhost:3000/api/post/",  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
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
        
    },
    methods:{
        displayPost(id){
            router.push({ path : '/singlepost/'+id});
        },
    }
}
</script>