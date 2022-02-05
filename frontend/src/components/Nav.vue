
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
            window.alert('Vous êtes déconnécté! A bientôt.');
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
                <!-- <connexion deconnexion user> -->
                <div class="col py-4" v-if="userConnected">
                    <button type="button" class="btn text-white btn-warning" @Click="disconnectUser()">Déconnexion</button>
                </div>
                <div class="col py-4" v-else>
                        <button type="button" class="btn text-white btn-primary" @Click="connectUser()">Connexion</button>
                </div>
                <!-- <acces profil user> -->
                <div class="col py-4">
                    <button type="button" class="btn text-white btn-secondary" @Click="$router.push({path:'/userprofile'})">Mon profil</button>
                </div>
                <!-- <acces admin if user role set on 2> -->
                <div class="col py-4" v-show="userAdmin">
                    <button type="button" class="btn text-white btn-secondary"  @Click="$router.push({path:'/admin'})">ADMIN</button>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container-fluid">
            <a id="logo" tabindex=0 class="navbar-brand d-flex align-items-center"  @Click="$router.push({path:'/main'})">
                <img class="img-fluid" src="../assets/groupomania/icon-left-font-monochrome-white.svg" id="logo" alt="globe" tabindex=0/>
            </a>
            <button class="navbar-toggler my-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>
</header>
	
</template>

<style>
#logo {
        height: inherit;
        width: 60%;
}
a:hover #logo, a:focus #logo {
    background-color: #0d6efd;
    border-radius: 0.25rem;
}
</style>




