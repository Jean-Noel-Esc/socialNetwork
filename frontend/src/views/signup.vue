<template>
    <main class="container-fluid">
        <section class="col-12 col-md-8 mt-5 mx-auto p-3 bg-white rounded">
            <form @submit.prevent="sendForm()">
                <img class="img-fluid" src="../assets/groupomania/icon-left-font-monochrome-black.svg" id="logo" alt="globe" tabindex=0/>
                <h1 class="text-center font-weight-bold" style="font-size:7vw;" >INSCRIPTION</h1>
                <div class="form-groupe">
                    <label for="inputFirstName">Prénom:</label>
                    <input v-on:keydown="invalid = false" v-model="inputFirstName" type="text" class="form-control" id="inputFirstName" placeholder="Entrez votre prénom">
                    <font-awesome-icon class="icone-verif" icon="check"/>
                    <font-awesome-icon class="icone-verif-error" icon="times"/>
                    <span class="message-alerte">Choisissez un prénom entre 3 et 24 charactères</span>
                </div>  
                <div class="form-groupe">
                    <label for="inputLastName">Nom:</label>
                    <input v-on:keydown="invalid=false"  v-model="inputLastName" type="text" class="form-control" id="inputLastName"  placeholder="Entrez votre nom">
                    <!-- <img src="ressources/check.svg" alt="icone de validation" class="icone-verif"> -->
                    <font-awesome-icon class="icone-verif" icon="check"/>
                    <font-awesome-icon class="icone-verif-error" icon="times"/>
                    <span class="message-alerte">Choisissez un nom entre 3 et 24 charactères</span>
                </div>       
                <div class="form-groupe">
                    <label for="inputEmail">Email:</label>
                    <input v-on:keydown="invalid = false" v-model="inputEmail" type="email" class="form-control" id="inputEmail"  placeholder="Entrez votre email">
                    <font-awesome-icon class="icone-verif" icon="check"/>
                    <font-awesome-icon class="icone-verif-error" icon="times"/>                    
                    <span class= "message-alerte">Entrez un email Valide</span>
                </div>
                <div class="form-groupe">
                    <label for="inputPassword">Password:</label>
                    <input v-on:keydown="invalid = false" v-model="inputPassword" type="password" class="form-control" id="inputPassword"  placeholder="Entrez votre mot de passe">
                    <font-awesome-icon class="icone-verif" icon="check"/>
                    <font-awesome-icon class="icone-verif-error" icon="times"/>  
                    <span class= "message-alerte">8 caractères au minimum avec un symbole ,.@!, une lettre minuscule, un chiffre</span>
                    <div class="ligne">
                        <div class="l1"><span>Faible</span></div>
                        <div class="l2"><span>Moyen</span></div>
                        <div class="l3"><span>Fort</span></div>
                    </div>
                </div>
                <div class="form-groupe">
                    <label for="inputConfirmPassword">Confirmez votre password:</label>
                    <input v-on:keydown="invalid = false" v-model="inputConfirmPassword" type="password" class="form-control" id="inputConfirmPassword"  placeholder="Confirmez votre mot de passe">
                    <font-awesome-icon class="icone-verif" icon="check"/>
                    <font-awesome-icon class="icone-verif-error" icon="times"/>  
                    <span class= "message-alerte">un symbole, une lettre minuscule, un chiffre</span>
                </div>
                <button type="submit">VALIDER</button> 
            </form>
        </section>  
    </main>
</template>

<style>
.form-groupe {
    position: relative;
} 
h1{
    margin-top: 5px;
    color: rgb(26, 26, 124);
    font-weight: 900;
}
label{
    margin: 5px 23px;
    font-size: 20px;
    padding: 10px 0 5px 0;
    display: block;
    position: left;
    text-align: left;
} 
input {
    display: block;
    outline: 0;
    background: rgb(226,226,226);
    width: 400px;
    border: 0;
    border-radius: 3px;
    font-size: 22px;
    border: 1px solid rgba(0,0,0,0.3);
} 
.icone-verif{
    color: green;
    width: 30px;
    align-items: center; 
    position: absolute; 
    right: 27px;
    top: 60px;
    display: none;
}
.icone-verif-error { 
    color: red;
    width: 30px;
    position: absolute; 
    right: 27px;
    top: 60px;
    display: none;
}
.message-alerte{
    font-size: 15px;
    margin: 5px 23px;
    color:orangered;
    display: none;
}
.ligne {
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
}
.l1, .l2, .l3 {
    width: 30%;
    height: 5px;
    margin: 15px 5px 20px;
    position: relative;
    display: none;
}
.l1 {
    background: rgb(182,182,13);
}
.l2 {
    background: rgb(151,85,85);
}
.l3 {
    background: green;
}
.ligne span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
}
button{
    color: white;
    display: block;
    margin: 30px auto;
    outline: 0;
    background: #ff6c6c;
    width: 90%;
    border: 0;
    padding: 15px;
    border-radius: 3px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}
button:hover , button:focus {
    background: rgb(252,181,49);
}
button:active {
    background: rgb(250,165,9);
}
</style>

<script>
import router from "../router";
import axios from "axios";

export default {
    name: "signup",
    data() {
        return {
            inputFirstName: "",
            inputLastName: "",
            inputEmail: "",
            inputPassword: "",
            inputConfirmPassword: "",
            invalid: false, 
        }
    },
    mounted(){ // mettre les elements JS de verif front
        const inpFirstname = document.getElementById('inputFirstName', 'input');
        const inpLastname = document.getElementById("inputLastName", 'input');
        const inpMail = document.getElementById('inputEmail', 'input');
        const inpMdp = document.getElementById('inputPassword', 'input');
        const inpConfirme = document.getElementById('inputConfirmPassword', 'input');

        const allImg = document.querySelectorAll('.icone-verif');
        const allImg2 = document.querySelectorAll('.icone-verif-error');
        const allSpan = document.querySelectorAll('span');
        const allLigne = document.querySelectorAll('.ligne div');

        inpFirstname.addEventListener('input', (e) => {
            console.log(e)
            if(e.target.value.length >= 3){
                console.log(e.target.value)
                allImg[0].style.display = "inline";
                allImg[0].src = "check";
                allSpan[0].style.display = "none";
                allImg2[0].style.display = "none";
            }
            else{
                allImg[0].style.display = "none";
                allImg2[0].style.display = "inline";
                allImg2[0].src = "times";
                allSpan[0].style.display = "inline";
            }
        })
        inpLastname.addEventListener('input', (e) => {
            if(e.target.value.length >= 3){
                allImg[1].style.display = "inline";
                allImg[1].src = "check";
                allSpan[1].style.display = "none";
                allImg2[1].style.display = "none";
            }
            else{
                allImg[1].style.display = "none";
                allImg2[1].style.display = "inline";
                allImg2[1].src = "times";
                allSpan[1].style.display = "inline";
            }
        })
        inpMail.addEventListener('input', (e) => {
            const regexEmail = /\S+@\S+\.\S+/;
            if(e.target.value.search(regexEmail) === 0){
                allImg[2].style.display = "inline";
                allImg[2].src = "check";
                allSpan[2].style.display = "none";
                allImg2[2].style.display = "none";
            } else {
                allImg[2].style.display = "none";
                allImg2[2].style.display = "inline";
                allImg2[2].src = "times";
                allSpan[2].style.display = "inline";
            } 
        })
        // Validation création du Mdp
        let valeurInp;
        //les symboles soit tous ce qui n'est pas lettres ou chiffres
        const specialCar = /[^a-zA-Z0-9]/;
        // toutes les lettres
        const alphabet = /[a-zA-z]/i;
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
                    if(inpConfirme.value.length === 0){
                    //allSpan[4].style.display = "none";
                    allImg2[4].style.display = "inline";
                    allImg2[4].src = "times";
                    allImg[4].style.display = "none";
                }
                else if(inpConfirme.value === valeurInp){
                    allImg[4].style.display = "inline";
                    allImg[4].src = "check";
                    allImg2[4].style.display = "none";
                } else {
                    allImg2[4].style.display = "inline";
                    allImg2[4].src = "times";
                    allImg[4].style.display = "none";
                }
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
            if(e.inputType == 'deleteContentBackward'){ 
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
                    allSpan[3].style.display = "inline";
                    allImg[3].style.display = "none";
                    allImg2[3].style.display = "inline";
                    allImg2[3].src = "times";
                } else {
                    allSpan[3].style.display = "inline";
                    allImg[3].src = "check";
                    allImg[3].style.display = "inline";
                    allImg2[3].style.display = "none";
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
        // check confirmation
        // On compare la valeur de l'input a celle de l'input  valeurInp
        // Si la length de la target value = 0  retour error ;
        // Si la target value =  strictement celle de valeurInp  retour check;
        // Sinon retour error ; 
        inpConfirme.addEventListener('input', (e) => {
            if(e.target.value.length === 0){
                //allSpan[4].style.display = "none";
                allImg2[4].style.display = "inline";
                allImg2[4].src = "times";
                allImg[4].style.display = "none";

            }
            else if(e.target.value === valeurInp){
                allImg[4].style.display = "inline";
                allImg[4].src = "check";
                allImg2[4].style.display = "none";
            } else {
                allImg2[4].style.display = "inline";
                allImg2[4].src = "times";
                allImg[4].style.display = "none";
            }
        })    
    },
    methods: {
        sendForm() {
            console.log("ok");
                if (!this.inputFirstName || !this.inputLastName || !this.inputEmail || !this.inputPassword || this.inputPassword !== this.inputConfirmPassword) {                
                return this.invalid = true;                
            }
            const nameRegex = /(.*[a-z]){3,30}/;
            const mailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            const pwdRegex  = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[,.@!])[A-Za-z\d,.@!]{8,}$/;
            
            if (nameRegex.test(this.inputFirstName) && nameRegex.test(this.inputLastName) && mailRegex.test(this.inputEmail) && pwdRegex.test(this.inputPassword)) {
                const data= { 
                    "firstname": this.inputFirstName, 
                    "lastname": this.inputLastName, 
                    "email": this.inputEmail,
                    "password": this.inputPassword
                };
                axios.post('http://localhost:3000/api/auth/signup', data)
                .then((res) => {
                        console.log(res);
                        alert('inscription réussie');
                        //redirection main page
                        router.push({ path : '/'});                       
                })
                .catch((error)=>{
                    alert(error.status)
                    console.log(error)
                });
            } 
            else {
                console.log('erreur')
                this.invalid = true;
            }
        }    
    }
}   
</script>