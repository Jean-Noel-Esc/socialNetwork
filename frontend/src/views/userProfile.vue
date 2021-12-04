<template>
<div>
<navBar/>
    <main class="container-fluid">
        <section class="col-12 col-md-8 mt-5 mx-auto p-3 bg-light rounded">

        </section>  
    </main>
</div>
</template>

<style>


</style>

<script>

import axios from "axios";
//import router from "../router";
//import navBar from "../components/Nav.vue";

export default {
    name: "userProfile",
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

    }
}
</script>

<style>

</style>