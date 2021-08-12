<template>
    <main class="container">


        <!-- Navigation -->
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
            </ul>
        </div>
        </nav>


        <!-- btn pour le filtre par categorie -->
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary active">
                <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
            </label>
            <label class="btn btn-secondary">
                <input type="radio" name="options" id="option2" autocomplete="off"> Radio
            </label>
            <label class="btn btn-secondary">
                <input type="radio" name="options" id="option3" autocomplete="off"> Radio
            </label>
        </div>

            <!-- Liste des post -->
            <div class="container">
                <div v-for="post in posts" :key="post.id" class="card">
                    <div class="card col-lg-12" style="width: 18rem;">
                        <img src="" class="card-img-top" alt="">
                        <div class="card-body">
                        <h5 class="card-title">TITRE DE L'ARTICLE</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">AUTEUR</li>
                        <li class="list-group-item">Compteur like dislike</li>
                        <li class="list-group-item">A third item</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">LIRE</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- test autre display post-->

                <div class="col-md-10 blogShort">
                    <h1 class="marginTop10">Title 1</h1>
                    <img src="">                    
                    <article><p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.    
                        </p></article>
                    <a class="btn btn-blog pull-right marginBottom10" href="">READ MORE</a> 
                </div>
                <div class="post-separator">_________________________</div>
        </main>
</template>

<script>


import axios from "axios";
//import router from "../router";

export default {
    name: "Main",
    data() {
        //quelle data ????
        return {
            roles:0,
            post:[],
            id:[]
            //createdat
            //post img
        }

        },
        // ajouter un mounted pour si check si dans la session storage il y a bien un user id et un token §§§§!
        methods:{
            displayPost(){
                // vers la route get all post ???? + auth
                axios.get("http://localhost:3000/api/post")
                 .then((res) => {
                     console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })   
            }
        }
    

    

}    
</script>