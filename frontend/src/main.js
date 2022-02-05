// main.js fait le lien entre vue, modèles et composants.
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library }  from '@fortawesome/fontawesome-svg-core'
import { fas }  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

import "axios";

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
	.use(router)
	.mount('#app');
