<template>
  <body>
    <div class="login-container">
      <img class="logo" src="/public/img/icons/logo.png" alt="Gorge Logo" />
      <h2>Inden oprettelse skal vi lige bruge et par informationer om dig, til din side...</h2>
  
      <p>Alder</p>
      <input type="text" v-model="age" class="input-field" />
      <p>By</p>
      <input type="text" v-model="city" class="input-field" />
      <p>Æstetik</p>
      <input type="text" v-model="aesthetic" class="input-field" />
    
      <button class="login-button" @click="saveProfileInfo">OPRET</button>
    </div>
  </body>
</template>

<script setup>
import { ref } from "vue";
import { db, auth } from "../firebaseconfig.js"; // Import Firebase Firestore and Auth
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "vue-router"; // To navigate to the next page after saving data

// Reactive state variables
const age = ref("");
const city = ref("");
const aesthetic = ref("");
const router = useRouter();

const saveProfileInfo = async () => {
  try {
    // Get the current user
    const user = auth.currentUser;

    if (!user) {
      alert("No user is signed in. Please log in again.");
      return;
    }

    // Reference the Firestore document for this user
    const userDocRef = doc(db, "users", user.uid);

    // Update the Firestore document with the additional info
    await updateDoc(userDocRef, {
      age: age.value,
      city: city.value,
      aesthetic: aesthetic.value,
    });

    alert("Profile information saved successfully!");

    // Navigate to the next page (e.g., home page or profile)
    router.push("/");
  } catch (error) {
    console.error("Error saving profile information:", error);
    alert("An error occurred while saving your profile information.");
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
  margin-top: 6%;
}

.login-button:hover {
  background-color: #A8623E;
}
</style>
