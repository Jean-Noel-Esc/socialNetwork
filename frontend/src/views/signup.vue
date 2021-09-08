<template>
    <main class="container">
        <section class="col-12 col-md-8 mt-5 mx-auto p-3 bg-light rounded">
            <form @submit="sendForm()">
                
                <h1 class="text-center font-weight-bold" style="font-size:4vw;" >SIGNUP</h1>
                <div class="form-group">
                    <label for="inputFirstName">Nom d'utilisateur:</label>
                    <input v-on:keydown="invalid = false" v-model="inputFirstName" type="text" class="form-control" id="inputFirstName" placeholder="Entrez votre nom">
                    <img src="ressources/check.svg" alt="icone de validation" class="icone-verif">
                    <span class= "message-alerte">Choississez un pseudo entre 3 et 24 charactère</span>
                </div> 
                <div class="form-group">
                    <label for="inputLastName">Nom d'utilisateur:</label>
                    <input v-on:keydown="invalid = false" v-model="inputLastName" type="text" class="form-control" id="inputLastName"  placeholder="Entrez votre nom">
                    <img src="ressources/check.svg" alt="icone de validation" class="icone-verif">
                    <span class= "message-alerte">Choississez un pseudo entre 3 et 24 charactère</span>
                </div>       
                <div class="form-group">
                    <label for="inputEmail">Email:</label>
                    <input v-on:keydown="invalid = false" v-model="inputEmail" type="email" class="form-control" id="inputEmail"  placeholder="votre email">
                    <img src="ressources/check.svg" alt="icone de validation" class="icone-verif">
                    <span class= "message-alerte">Entrez un email Valide</span>
                </div>
                <div class="form-group">
                    <label for="inputPassword">Entrez votre password:</label>
                    <input v-on:keydown="invalid = false" v-model="inputPassword" type="password" class="form-control" id="inputPassword"  placeholder="mot de passe">
                    <img src="ressources/check.svg" alt="icone de validation" class="icone-verif">
                    <span class= "message-alerte">un symbole, une lettre minuscule, un chiffre</span>
                    <div class="ligne">
                        <div class="l1"><span>Faible</span></div>
                        <div class="l2"><span>Moyen</span></div>
                        <div class="l3"><span>Fort</span></div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputConfirmPassword">Confirmer votre password:</label>
                    <input v-on:keydown="invalid = false" v-model="inputConfirmPassword" type="password" class="form-control" id="inputConfirmPassword"  placeholder="mot de passe">
                    <img src="ressources/check.svg" alt="icone de validation" class="icone-verif">
                    <span class= "message-alerte">un symbole, une lettre minuscule, un chiffre</span>
                </div>
                <button type="submit">CREER VOTRE PROFIL</button> 
            </form>
        </section>  
    </main>
</template>

<script>

import axios from "axios";
import router from "../router";




export default {
    name: "signup",
    data() {
        // mes data sont des var dans la page qui matchent avec la partie template cad le champ v model des input
        // c'est v model qui fait matcher les input de la var .
        return {
            inputFirstName: "",
            inputLastName: "",
            inputEmail: "",
            inputPassword: "",
            inputConfirmPassword: "",
            invalid: false
        }
    },
    mounted(){ // mettre les elements JS de verif front
    const inpUtilisateur = document.querySelector('.form-groupe:nth-child(1) input');
const inpMail = document.querySelector('.form-groupe:nth-child(2) input');
const inpMdp = document.querySelector('.form-groupe:nth-child(3) input');
const inpConfirme = document.querySelector('.form-groupe:nth-child(4) input');

const allImg = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');

inpUtilisateur.addEventListener('input', (e) => {
    if(e.target.value.length >= 3){
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/check.svg";
        allSpan[0].style.display = "none";
    }
    else{
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/error.svg";
        allSpan[0].style.display = "inline";

    }
})

inpMail.addEventListener('input', (e) => {

    const regexEmail = /\S+@\S+\.\S+/;

    if(e.target.value.search(regexEmail) === 0){

        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/check.svg";
        allSpan[1].style.display = "none";

    } else {

        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/error.svg";
        allSpan[1].style.display = "inline";

    } 

})

// Validation création du Mdp

let valeurInp;

//les symboles soit tous ce qui n'est pas lettres ou chiffres
const specialCar = /[^a-zA-Z0-9]/;
// toutes les lettres
const alphabet = /[a-z]/i;
// les chiffres
const chiffres = /[0-9]/;

// On créer un objet
// pour voir si 
// dans notre input il y a au moins 1 symbole 1e lettre et 1 chiffre

let objValidation = {
    symbole : 0,
    lettre : 0,
    chiffre : 0
}

inpMdp.addEventListener('input', (e) => {

    valeurInp = e.target.value;

    if(valeurInp.search(specialCar) !== -1){
        objValidation.symbole = 1;
    }
    if(valeurInp.search(alphabet) !== -1){
        objValidation.lettre = 1;
    }
    if(valeurInp.search(chiffres) !== -1){
        objValidation.chiffre = 1;
    }
    // gestion delete dans l'input 
    if(e.inputType == 'deleteContentBackward'){ // ICI BUG SUR OPERATEUR !!!!! with "=" fail to compile 
        if(valeurInp.search(specialCar) === -1){
            objValidation.symbole = 0;
        }
        if(valeurInp.search(alphabet) === -1){
            objValidation.lettre = 0;
        }
        if(valeurInp.search(chiffres) === -1){
            objValidation.chiffre = 0;
        }
    } 
    // avec un for in on itere sur un objet
    // pour tester chaque propriétés de l'objet pour la validation
    let testAll = 0;
    for(const property in objValidation){
        if(objValidation[property] > 0){
            testAll++;
        }
    }
    // Si il n'y a pas assez d'input  
    if(testAll < 3){
        allSpan[2].style.display = "inline";
        allImg[2].style.display = "inline";
        allImg[2].src = "ressources/error.svg";
    } else {
        allSpan[2].style.display = "none";
        allImg[2].src = "ressources/check.svg";
    }

        // valider la force du mdp
        // valeur la plus basse
        if(valeurInp.length <= 6 && valeurInp.length > 0){
            allLigne[0].style.display = 'block';
            allLigne[1].style.display = 'none';
            allLigne[2].style.display = 'none';
        }
        // force moyenne
        else if (valeurInp.length > 6 && valeurInp.length <= 9) {
            allLigne[0].style.display = 'block';
            allLigne[1].style.display = 'block';
            allLigne[2].style.display = 'none';
        }
        //mdp fort
        else if (valeurInp.length > 9) {
            allLigne[0].style.display = 'block';
            allLigne[1].style.display = 'block';
            allLigne[2].style.display = 'block';
        }
        // si 0 input 
        else if (valeurInp.length === 0) {
            allLigne[0].style.display = 'none';
            allLigne[1].style.display = 'none';
            allLigne[2].style.display = 'none';
        }
    
})
//  check confirmation
// On compare la valeur de l'input a celle de l'input  valeurInp
// Si la length de la target value = 0  retour error ;
// Si la target value =  strictement celle de valeurInp  retour check;
// Sinon retour error ; 

inpConfirme.addEventListener('input', (e) => {

    if(e.target.value.length === 0){
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/error.svg";
    }
    else if(e.target.value === valeurInp){
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/check.svg";
    } else {
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/error.svg";
    }

})
    
    },
    // pour la page article mettre les MOUNTED ce qu'il doit faire par defaut lorsque l'app est montée avt que l'user interagisse  verif si l'utilisateur 
    methods: {
        sendForm() {
            console.log("ok");
                if ( !this.inputFirstName || !this.inputLastName || !this.inputEmail || !this.inputPassword || this.inputPassword !== this.inputConfirmPassword) {
                return this.invalid = true;
                
            }
            
            const nameRegex = /(.*[a-z]){3,30}/;
            const mailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            const pwdRegex  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            
            if ( nameRegex.test(this.inputFirstName) && nameRegex.test(this.inputLastName) && mailRegex.test(this.inputEmail) && pwdRegex.test(this.inputPassword)) {
                const data= { 
                    "firstname": this.inputFirstName, 
                    "lastname": this.inputLastName, 
                    "email": this.inputEmail,
                    "password": this.inputPassword};
                axios.post('http://localhost:3000/api/auth/signup', data)
                .then((res) => {
                sessionStorage.setItem("token",   res.data.token)
                sessionStorage.setItem("userId",  res.data.userId)
                    console.log(res);
                    alert('inscription réussie');
                    //redirection main page
                    router.push({ path : 'Main'});
                })
                .catch((error)=>{
                    alert(error.status)
                    console.log(error)});
            } else {
                console.log('erreur')
                this.invalid = true;
            }
        }
    
    }
}   
</script>