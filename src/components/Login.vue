<template>
  <body>
    <div class="login-container">
      <img class="logo" src="/public/img/icons/logo.png" alt="Gorge Logo" />
      <h2>LOG IND</h2>

      <p>E-mail</p>
      <input type="text" v-model="email" class="input-field" placeholder="" />

      <p>Adgangskode</p>
      <input type="password" v-model="password" class="input-field" placeholder="" />

      <p class="register-link">
        Har du ikke en bruger? 
        <router-link to="/CreateAccount">Opret her.</router-link>
      </p>
      
      <button class="login-button" @click="login">LOG IND</button>

      <p class="register-link">
        Har du glemt din adgangskode? <a href="#">Klik her.</a>
      </p>
    </div>
  </body>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"; 
import { auth } from "../firebaseConfig";  
import { signInWithEmailAndPassword } from "firebase/auth"; 

const email = ref(""); 
const password = ref("");  

const router = useRouter(); 


const login = async () => {
  try {

    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);


    alert("Logged in successfully!");
    router.push("/TrendingPage");  

  } catch (error) {

    console.error("Login failed:", error);
    alert("Invalid email or password.");
  }
};
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #FCF7F2;
  font-family: "Quicksand", serif;
}

.login-container {
  width: 300px;
  padding: 20px;
  text-align: center;
}

.logo {
  margin-bottom: 10%;
}

h2 {
  margin-top: 0;
  font-size: 24px;
  color: #BC7344;
  margin-bottom: 15px;
  font-family: "Quicksand", serif;
}

p {
  margin-top: 0;
  font-size: 15px;
  color: #BC7344;
  margin-bottom: 5px;
  margin-top: 2%;
  font-family: "Quicksand", serif;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #533F31;
  border-radius: 50px;
}

.login-button {
  width: 50%;
  padding: 10px;
  background-color: #BC7344;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: "Quicksand", serif;
}

.login-button:hover {
  background-color: #A8623E;
}

.register-link {
  margin-top: 15px;
  font-size: 14px;
  color: #BC7344;
  margin-bottom: 12%;
  font-family: "Quicksand", serif;
}

.register-link a {
  color: #BC7344;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
