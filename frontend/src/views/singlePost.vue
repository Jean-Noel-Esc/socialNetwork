<template>
    <div class="album py-5 bg-light h-100">
        <div class="container">
            <!-- <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">  -->
                <div class="col h-100">
                    <div class="card h-100 shadow-sm" style="max-height: 100%;">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        <div class="card-body h-100" alt="Max-height 100%">
                            <p class="card-text">{{article.text}}</p>
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
            <!-- </div>  -->
        </div>
    </div> 
</template>

<script>
import axios from "axios";
//import router from "../router";

export default {
    name: "singlePost",
    data() {
        return {
            article:[],
            commentaires:[],
            
        }
    },
    mounted () {
        axios.get("http://localhost:3000/api/post/"+this.$route.params.id,  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
        .then((res) => {
                if (res) {
                    const rep = res.data;
                    this.article = rep;
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
        axios.get("http://localhost:3000/api/comment/"+this.$route.params.id,  { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
        .then((res) => {
            console.log("pb fonction");
                if (res) {
                    const rep = res.data;
                    this.commentaires = rep;
                    console.log(rep);
                }
        })
        .catch((error) =>{
            console.log(error);
            console.log ("c'est err 404");
        })
    }
}
</script>

<style>

</style>