<template>
    <div id="app" class="bg-success">
        <nav>
            <HomeLink />
            <a href="/about">À propos</a>
            <a href="/contact">Contact</a>
        </nav>
        <p >Bienvenue sur notre page d'<HomeLink /></p>
    </div>
  
</template>

<script>
import HomeLink from './components/HomeLink.vue'

export default {
    name: 'App',
    components: {
        HomeLink
    }
}


</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
