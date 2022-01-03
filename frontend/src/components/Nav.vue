
<script>
import router from "../router";
export default {
	name: 'navBar',
    data() {
        return {
            userAdmin: false,
            userConnected: false   
        }
    },
    mounted() {
        let userDataToken = sessionStorage.getItem("token")
        let userDataUserId = sessionStorage.getItem("userId")
        let userRole = sessionStorage.getItem("role")
        console.log(userRole);
        if (userDataToken && userDataUserId && userRole){
            this.userConnected = true;
            if (userRole == 2){
                this.userAdmin = true;
            }
            
        }
    },
    methods:{
        disconnectUser(){
            sessionStorage.clear();
            window.alert('Voulez-vous vous déconnecter');
            router.push({ path : '/'});
        },
        connectUser(){
            router.push({ path : '/'});
        }
    }
}
</script>

<template>
<header>
    <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-md-7 py-4">
                    <h4 class="text-white">A propos</h4>
                    <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                </div>
                <div class="col-sm-4 offset-md-1 py-4">
                <h4 class="text-white">Contact</h4>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-white">Follow on Twitter</a></li>
                        <li><a href="#" class="text-white">Like on Facebook</a></li>
                        <li><a href="#" class="text-white">Email </a></li>
                    </ul>
                </div>
                <!-- <connexion deconnexion user> -->
                <div class="col-sm-8 col-md-7 py-4" v-if="userConnected">
                    <button type="button" class="btn text-white btn-warning" @Click="disconnectUser()">Déconnexion</button>
                </div>
                <div class="col-sm-8 col-md-7 py-4" v-else>
                        <button type="button" class="btn text-white btn-primary" @Click="connectUser()">Connexion</button>
                </div>
                <!-- <acces profil user> -->
                <div class="col-sm-8 col-md-7 py-4">
                    <button type="button" class="btn text-white btn-secondary" @Click="$router.push({path:'/userprofile'})">Mon profil</button>
                </div>
                <!-- <acces admin if user role set on 2> -->
                <div class="col-sm-8 col-md-7 py-4" v-show="userAdmin">
                    <button type="button" class="btn text-white btn-secondary"  @Click="$router.push({path:'/admin'})">ADMIN</button>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center"  @Click="$router.push({path:'/main'})">
            <img src = "../assets/groupomania/icon-left-font-monochrome-white.svg" alt="globe"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        </div>
    </div>
</header>
	
</template>

<style>

</style>




