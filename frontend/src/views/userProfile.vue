<template>
    <div>

        <navBar></navBar>

        <main class="container-fluid">
            <section class="col-12 col-md-8 mt-5 mx-auto p-3 bg-light rounded">
                <div class="album py-5 bg-light">
                    <div class="container-fluid">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <h2>Votre profil utilisateur</h2>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Firstname</th>
                                            <th scope="col">Lastname</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{{user.firstname}}</td>
                                            <td>{{user.lastname}}</td>
                                            <td>{{user.email}}</td>
                                            <td>
                                                <button type="button" class="btn btn-danger m-3" data-bs-toggle="modal" data-bs-target="#modalUser" v-bind:data-bs-user-id="user.id"  v-bind:data-bs-user-fisrtname="user.firstname" v-bind:data-bs-user-lastname="user.lastname"><font-awesome-icon icon = "trash"/></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </main>
        <div class="modal fade" id="modalUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Suppr</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Etes vous sur de vouloir suppr votre compte </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button id="trashUser" type="button" class="btn btn-danger" @click="deleteProfile"><font-awesome-icon icon="trash"/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style>


</style>

<script>

import axios from "axios";
import router from "../router";
import navBar from "../components/Nav.vue";

export default {
    name: "userProfile",
    components:{
            navBar
    },
    data() {
        return {
            user:[],
        }
    },
    mounted () {
        axios.get("http://localhost:3000/api/auth/"+ sessionStorage.getItem("userId"), { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")} })
            .then((res) => {
                if (res) {
                    const rep = res.data;
                    this.user = rep;
                    console.log(rep);
                }
            })
            .catch((error) =>{
                console.log(error);
                console.log ("c'est err 404");
            })
    },
    methods:{
        deleteProfile(){
            axios.delete("http://localhost:3000/api/auth/deleteuser/" + sessionStorage.getItem("userId"), { headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
            .then(() => {
                sessionStorage.clear();
                router.push({ path : '/'});
            })
            .catch((error) =>{
                console.log(error);
            })

        }
    }
}
</script>

<style>

</style>