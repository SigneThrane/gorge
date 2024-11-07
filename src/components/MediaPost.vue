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

    <div class="image-container">
      <router-link to="/ProfileMedia">
        <img class="post" src="/public/img/icons/placeholder2.png" alt="Centered Image" />
      </router-link>

  <img src="/public/img/icons/crown.png" alt="Crown Icon" class="crown-icon" />
</div>
<router-link to="/ProfileMedia"  class="no-underline">
  <h1>@username</h1>
      </router-link>

<div class="info">
  <p>Description: Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s.  </p>
  <p>Aesthetic: On-trend </p>
  <p>Colors: Beige, blue, black, white </p>
  <p>Materials: Cotton, knit, denim </p>
  <p>Brands: H&M, Dr. Denim, Only </p>
  <p>Time age: 2020 </p>
  <p>Ocassions: Everyday, school</p>
  <p>Seasons: Spring, fall</p>
</div>
  
<div class="bottom-icons">
  <img src="/public/img/icons/likeicon.png" alt="Icon 1" class="bottom-icon" />
  <img src="/public/img/icons/commenticon.png" alt="Icon 2" class="bottom-icon" />
      <img src="/public/img/icons/shareicon.png" alt="Icon 3" class="bottom-icon" />
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
    .image-container {
  margin-top: 5%;
  display: flex;
  justify-content: center;  
  padding-top: 20px;     
  position: relative;  
}

.post {
  max-width: 100%;        
  height: auto;
  border-radius: 50px;
}

.crown-icon {
  position: absolute;
  bottom: -20px; 
  right: 21px;  
  width: 75px; 
  height: 61px; 
  cursor: pointer; 
}

.crown-icon:hover {
  opacity: 0.8;  
}

h1 {
      margin-top: 5%;
      font-size: 24px;
      color: #BC7344;
      margin-bottom: 10px;
      text-align: center;
      font-weight: lighter;
    }

    .info{
      font-size: 15px;
      color: #643C2C;
      margin-bottom: 5px;
      padding: 9%;
    }

    .info p {
    margin-bottom: 15px; 
    }

    .no-underline {
  text-decoration: none;
}

.bottom-icons {
    display: flex;
    justify-content: flex-end; 
    position: fixed;
    bottom: 30px; 
    right: 40px; 
    width: auto;
    padding: 10px 10px; 
  }

  .bottom-icon {
    width: 26px; 
    height: 24px; 
    margin-left: 15px; 
    cursor: pointer;
  }

  .bottom-icon:hover {
    opacity: 0.8; 
  }

  .bottom-icons a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>