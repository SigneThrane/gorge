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

     <h1>Din profil</h1>

     <div class="grid-container">
  <div class="grid-title">Profilbillede</div>

  <div class="grid-image">
    <img src="/public/img/icons/placeholder2.png" alt="Small Round Image" />
  </div>

  <div class="grid-title">Baggrundbillede</div>

<div class="grid-image">
  <img src="/public/img/icons/placeholder2.png" alt="Small Round Image" />
</div>

<div class="grid-title">Baggrundsfarve</div>

<div class="grid-image">
  <img src="/public/img/icons/placeholder2.png" alt="Small Round Image" />
</div>

<div class="grid-title">Navn</div>

<div class="grid-image">
  <img src="/public/img/icons/placeholder2.png" alt="Small Round Image" />
</div>

<div class="grid-title">Beskrivelse</div>

<div class="grid-image">
  <img src="/public/img/icons/placeholder2.png" alt="Small Round Image" />
</div>

<div class="grid-title">Ikoner</div>

<div class="grid-image">
  <img src="/public/img/icons/placeholder2.png" alt="Small Round Image" />
</div>
  
</div>
   
   </template>
   
   <script setup>
     import { ref } from 'vue';
   
   const menuVisible = ref(false);
   
   const toggleMenu = () => {
     menuVisible.value = !menuVisible.value;
   };
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
     h1 {
      margin-top: 7%;
      font-size: 24px;
      color: #BC7344;
      margin-bottom: 15px;
      text-align: center;
      font-weight: lighter;
    }

    .grid-container {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center; 
  gap: 25px; 
  margin: 40px; 
}

.grid-title {
  font-size: 20px;
  color: #B66B4D;
}

.grid-image img {
  width: 50px; 
  height: 50px; 
  border-radius: 50%; 
  object-fit: cover; 
}

   </style>