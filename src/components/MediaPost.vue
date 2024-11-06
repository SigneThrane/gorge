<template>
 <header class="header">
      <label for="menu-toggle" class="icon" @click="toggleMenu">&#9776;</label>
  
      <img class="logo" src="/public/img/icons/logo.png" alt="Gorge Logo" />
  
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
    </header>
  
    <nav class="menu" v-show="menuVisible">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
  
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
    }
  
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      color: #B66B4D;
      margin-top: 2%;
    }
  
    .logo {
      width: 100px;
      height: auto;
      margin-right: auto;
      margin-left: 20px;
    }
  
    .icon {
      font-size: 24px;
      cursor: pointer;
      color: #B66B4D;
    }
  
    .menu {
      display: none;
      flex-direction: column;
      background-color: white;
      padding: 10px;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
    }
  
    .menu a {
      color: #643C2C;
      padding: 10px;
      text-decoration: none;
    }
  
    .menu a:hover {
      background-color: #45a049;
    }
  
    @media (max-width: 600px) {
      .menu {
        display: flex;
      }
    }
  </style>