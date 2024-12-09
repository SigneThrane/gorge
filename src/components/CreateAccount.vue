<template>
  <body>
    <div class="login-container">
      <img class="logo" src="/public/img/icons/logo.png" alt="Gorge Logo" />
      <h2>CREATE PROFILE</h2>
  
      <p>First and last name</p>
      <input type="text" v-model="fullName" class="input-field" />
      <p>Usename</p>
      <input type="text" v-model="username" class="input-field" />
      <p>Password</p>
      <input type="password" v-model="password" class="input-field" />
      <p>E-Mail</p>
      <input type="email" v-model="email" class="input-field" />
      
      <router-link to="/CreateAbout" class="next-link">
        <button class="login-button" @click="createAccount">NEXT</button>
      </router-link>
    </div>
  </body>
</template>

<script setup>
import { ref } from "vue";
import { auth, db } from "../firebaseConfig.js"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

const fullName = ref("");
const username = ref("");
const email = ref("");
const password = ref("");

const createAccount = async () => {
  try {

    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;


    const userDocRef = doc(db, "users", user.uid); 
    await setDoc(userDocRef, {
      fullName: fullName.value,
      username: username.value,
      email: email.value,
      uid: user.uid, 
    });

    alert("Account created successfully!");
  } catch (error) {
    console.error("Error creating account:", error);
    alert("An error occurred while creating your account.");
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
  font-family: "Quicksand", serif;
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
  margin-top: 6%;
}

.login-button:hover {
  background-color: #A8623E;
}

.next-link {
  display: block;
  margin-top: 15px;
  font-size: 14px;
  color: #BC7344;
  text-decoration: none;
}

.next-link:hover {
  text-decoration: underline;
}
</style>
