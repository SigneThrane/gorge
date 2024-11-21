<template>
  <body>
    <div class="login-container">
      <img class="logo" src="/public/img/icons/logo.png" alt="Gorge Logo" />
      <h2>LOG IND</h2>

      <p>Brugernavn</p>
      <input type="text" v-model="email" class="input-field" placeholder="Email" />

      <p>Adgangskode</p>
      <input type="password" v-model="password" class="input-field" placeholder="Password" />

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
import { useRouter } from "vue-router"; // To navigate after login
import { auth } from "../firebaseConfig";  // Importing the auth instance from firebaseConfig
import { signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase method for signing in

const email = ref("");  // User's email
const password = ref("");  // User's password

const router = useRouter(); // Vue Router to navigate

// Function to handle login
const login = async () => {
  try {
    // Call Firebase Auth to sign in the user
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);

    // Successfully logged in, navigate to the next page (e.g., the trending page or home page)
    alert("Logged in successfully!");
    router.push("/TrendingPage");  // You can change this to the appropriate page in your app

  } catch (error) {
    // If login fails, log the error and alert the user
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
