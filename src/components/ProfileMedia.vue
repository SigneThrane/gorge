<template>
   <header class="header">
      <label for="menu-toggle" class="icon" @click="toggleMenu">&#9776;</label>
      <router-link to="/TrendingPage">
        <img class="logo" src="/public/img/icons/logo.png" alt="Gorge Logo" />
      </router-link>
  
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
    </header>

    <nav class="menu" v-show="menuVisible">
      <a href="#">Styles</a>
      <a href="#">DIY</a>
      <a href="#">Marketplace</a>
    </nav>

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

.bi-search {
  cursor: pointer;
  color: #B66B4D;
  z-index: 1000;
  transform: translateY(15px);
}

.icon {
  font-size: 24px;
  cursor: pointer;
  color: #B66B4D;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: #B66B4D;
  position: relative;
}

.logo {
  width: 100px;
  height: auto;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.menu {
  display: none;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  z-index: 998;
}

.menu a {
  color: #643C2C;
  padding: 10px;
  text-decoration: none;
}

.menu a:hover {
  background-color: #643C2C;
  color: #FCF7F2;
}


@media (max-width: 600px) {
  .menu {
    display: flex;
  }
}

     .image-container {
  margin-top: 4%;
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
  top: -5%;
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
  margin-top: 6%;
}

.image-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 35px;
  max-height: 70vh;
  overflow: hidden; 
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
}

.image img {
  width: 100%;
  border-radius: 50px;
}

   </style>