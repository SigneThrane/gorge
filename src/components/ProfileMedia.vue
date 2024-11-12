<template>
   <div class="header">
    <router-link to="/MediaPost">
     <button class="back-button" onclick="goBack()"><</button>
      </router-link>
  <h1 class="header-title">FREJA PETERSEN</h1>
  <div class="header-icons">
    <button class="icon-button" onclick="showNotifications()"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg></button>
    <button class="icon-button" onclick="sharePage()"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 13">
  <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"/>
</svg></button>
  </div>
</div>
<div class="backgroundcolor">
  <div class="image-container">
  <img class="post" src="/public/img/icons/placeholder2.png" alt="Centered Image" />

  <img src="/public/img/icons/crown.png" alt="Crown Icon" class="crown-icon-verify" />
</div>
<h1>username</h1>
<p>21 years, Århus, preppy street style</p>
<div class="p-container">
      <p>312</p>
      <p>4.8 K</p>
      <p>1.2 K</p>
    </div>
    <div class="p-container1">
      <p>Posts</p>
      <p>Followers</p>
      <p>Following</p>
    </div>
  </div>
  
  <div class="image-grid">
      <div class="image" v-for="n in images" :key="n.id">
        <router-link to="/MediaPost">
          <img :src="n.src" :alt="n.alt" />
      </router-link>
      </div>
    </div>
   
   </template>
   
   <script setup>
     import { ref } from 'vue';
   
   const menuVisible = ref(false);
   
   const toggleMenu = () => {
     menuVisible.value = !menuVisible.value;
   };

   const images = [
  { id: 1, src: '/public/img/icons/placeholder1.png', alt: 'Image 1' },
  { id: 2, src: 'public/img/icons/placeholder2.png', alt: 'Image 2' },
  { id: 3, src: 'public/img/icons/placeholder3.png', alt: 'Image 3' },
  { id: 4, src: 'public/img/icons/placeholder1.png', alt: 'Image 4' },
  { id: 1, src: '/public/img/icons/placeholder1.png', alt: 'Image 5' },
  { id: 2, src: 'public/img/icons/placeholder2.png', alt: 'Image 6' },
  { id: 3, src: 'public/img/icons/placeholder3.png', alt: 'Image 7' },
  { id: 4, src: 'public/img/icons/placeholder1.png', alt: 'Image 8' },

];
   </script>
 
   
   <style scoped>
body {
  margin: 0;
  background-color: #FCF7F2;
  font-family: "Quicksand", serif;
  padding-top: 60px;
}

.image-container {
  display: flex;
  justify-content: center;  
  padding-top: 20px;     
  position: relative;  
}

.post {
  width: 50%; 
  height: 50%; 
  border-radius: 50%; 
  object-fit: cover; 
}

.crown-icon-verify{
  position: absolute;
  top: -4.5%;
  width: 45px; 
  height: 31px; 
  cursor: pointer; 
}

.crown-icon-verify:hover {
  opacity: 0.8;  
}

h1 {
      margin-top: 5%;
      font-size: 24px;
      color: #000000;
      margin-bottom: 15px;
      text-align: center;
      font-weight: lighter;
    }

    p{
      font-size: 15px;
      color: #000000;
      margin-bottom: 25px;
      text-align: center;
    }

    .p-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

.p-container p {
  margin: 0;
  color: #FC7388;
  font-size: 14px;
}

.p-container1 {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

.p-container1 p {
  margin: 0;
  color: #643C2C;
  font-size: 14px;
}

.backgroundcolor{
  background-color: #FFE0CB;
  padding: 5%;
}

.image-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px; /* Add gap for spacing between images */
  padding: 35px;
  max-height: 70vh;
  overflow: hidden; 
}

.image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 8px; 
}

.image-grid::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/public/img/icons/backgroundplace.png'); 
  background-size: cover;
  background-position: center;
  filter: blur(10px); 
  z-index: -1;
  opacity: 0.8; 
}

.image {
  position: relative;
  width: 100%;
  padding-top: 100%; 
  overflow: hidden; /* Ensures images don't overflow */
}

.image img {
  width: 100%;
}

.back-button {
  color: #B66B4D;
  cursor: pointer;
  top: 60px;
  left: 20px;
  z-index: 1000;
}

.back-button svg {
  width: 24px; 
  height: 24px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: #FFE0CB;
  top: 0;
  width: 100%;
  z-index: 10;
}

.back-button {
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: #000000;
}

.header-title {
  flex-grow: 0.5; 
  text-align: center;
  font-size: 18px;
  margin: 0;
  margin-left: 40px; 
  color: black;
}

.header-icons {
  display: flex;
  gap: 10px;
  margin-right: 40px; 
}

.header-icons {
  display: flex;
  gap: 10px;
  margin-right: 40px; 
}

.icon-button {
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
}

   </style>