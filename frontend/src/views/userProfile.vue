<template>
    <div>
    <navBar></navBar>
        <main class="container-fluid">
            <div class="album py-5 bg-white">
                <div class="container-fluid bg-white">
                    <h2>Votre profil utilisateur</h2>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Prénom</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Effacer</th>
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
        </main>
        <!-- Modale pour le delete profil d'user -->
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
                        <p>Etes vous sur de vouloir supprimer votre compte?</p>
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
.btn-danger{
    color:white;
    background-color: #ff6c6c;
}

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

