<template>
<div class="login-container">
    <h2>Opret Post</h2>

    <!-- Image Upload Section -->
    <div class="upload-container">
      <label for="image-upload" class="upload-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
          <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
        </svg>
        <span>Vælg fil</span>
      </label>
      <input type="file" id="image-upload" class="input-field" accept="image/*" @change="handleImageUpload" />
    </div>

    <p>Beskrivelse</p>
    <input type="text" class="input-field">
    <p>Æstetik</p>
    <input type="password" class="input-field">
    <p>Farver</p>
    <input type="text" class="input-field">
    <p>Materialer</p>
    <input type="password" class="input-field">
    <p>Mærker</p>
    <input type="text" class="input-field">
    <p>Tidsalder</p>
    <input type="password" class="input-field">
    <p>Anledninger</p>
    <input type="text" class="input-field">
    <p>Sæsoner</p>
    <input type="password" class="input-field">

    <router-link to="/TrendingPage">
      <button class="login-button">Upload</button>
    </router-link>
  </div>

  <div class="fixed-bottom-box">
    <div class="fixed-nav">

      <router-link to="/TrendingPage" class="nav-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 20">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
</svg>
      </router-link>

      <router-link to="/SearchPage" class="nav-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-search" viewBox="0 0 16 20">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
      </router-link>

      <router-link to="/UploadPost" class="add-button">
        <svg width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 7V1h1v6h6v1H9v6H8V8H2V7h6z"/>
        </svg>
      </router-link>

      <router-link to="/MessagesPage" class="nav-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 20">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
</svg>
      </router-link>
      
      <router-link to="/ProfileMedia" class="nav-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 20">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuVisible = ref(false);
const selectedImage = ref(null);

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedImage.value = URL.createObjectURL(file); // Creates a temporary URL for the uploaded image
    console.log('Image uploaded:', file);
  }
};
</script>

<style scoped>
body {
  margin: 0;
  background-color: #FCF7F2;
  font-family: "Quicksand", serif;
  padding-top: 60px;
}

.login-container {
  width: 300px;
  padding: 20px;
  text-align: center;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 47.5%;
  transform: translate(-50%, -40%);
}

h2 {
  font-size: 24px;
  color: #BC7344;
  margin-bottom: 30px;
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

.upload-container {
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.upload-label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px; /* Increased padding to make the box bigger */
  width: 280px; /* You can adjust this value as needed */
  height: 150px; /* Increased height for a larger box */
  border: 1px solid #533F31;
  border-radius: 50px;
  cursor: pointer;
  background-color: white;
  font-size: 18px; /* Increased font size */
  color: #BC7344;
}

.upload-label svg {
  margin-right: 12px; /* Increased space between the icon and the text */
  width: 24px; /* Increased the SVG icon size */
  height: 24px; /* Increased the SVG icon size */
}

.upload-container input {
  display: none; 
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
  margin-top: 8%;
}

.login-button:hover {
  background-color: #BC7344;
}

.fixed-bottom-box {
  position: fixed;
  height: 70px;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #FCF7F2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fixed-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 500px;
}

.nav-button {
  width: 34px;
  height: 34px;
  color: #B66B4D;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #B66B4D;
  color: #FCF7F2;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  transform: translateY(-15%); /* Elevates the add button */
}

.add-button:hover {
  background-color: #643C2D;
}
</style>

