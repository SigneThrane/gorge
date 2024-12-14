<template>
  <body>
    <div class="login-container">
      <img class="logo" src="/public/img/icons/logo.png" alt="Gorge Logo" />
      <h2>CREATE PROFILE</h2>

      <p>First and last name</p>
      <input type="text" v-model="fullName" class="input-field" />

      <p>Username</p>
      <input type="text" v-model="username" class="input-field" />

      <p>E-Mail</p>
      <input type="email" v-model="email" class="input-field" />

      <p>Password</p>
      <input type="password" v-model="password" class="input-field" />
      
      <button class="login-button" @click="createAccount">NEXT</button>
    </div>
  </body>
</template>

<script setup>
import { ref } from "vue";
import { auth, db } from "../firebaseConfig.js"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { useRouter } from "vue-router";

const fullName = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const router = useRouter(); // Using router for manual navigation

const createAccount = async () => {
  // Validate password length before proceeding
  if (password.value.length < 6) {
    alert("Your password must be at least 6 characters long.");
    return; // Prevent account creation if password is too short
  }

  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // Save user data to Firestore
    const userDocRef = doc(db, "users", user.uid); 
    await setDoc(userDocRef, {
      fullName: fullName.value,
      username: username.value,
      email: email.value,
      uid: user.uid, 
    });

    // Navigate to the next page after successful account creation
    router.push("/CreateAbout"); // This will push the user to the next page
    
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
  font-family: "Quicksand", serif;
  background-color: #FCF7F2;
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
}

p {
  margin-top: 0;
  font-size: 15px;
  color: #BC7344;
  margin-bottom: 5px;
  margin-top: 2%;
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
