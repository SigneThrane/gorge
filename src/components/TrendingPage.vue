<template>
  <div>
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

    <div class="tabs">
      <router-link 
        to="/TrendingPage" 
        class="tab-link" 
        :class="{ active: activeTab === 'TRENDING' }" 
        @click="setTab('TRENDING')"
      >
        Trending
      </router-link>

      <div class="vertical-line"></div> 

      <router-link 
        to="/FollowingPage" 
        class="tab-link" 
        :class="{ active: activeTab === 'FOLLOWING' }" 
        @click="setTab('FOLLOWING')"
      >
        Following
      </router-link>
    </div>

    <div class="image-grid">
      <div class="image" v-for="n in images" :key="n.id">
        <router-link to="/MediaPost">
          <img :src="n.src" :alt="n.alt" />
        </router-link>
      </div>
    </div>

    <div class="fixed-bottom-box">
      <button class="add-button" @click="handleAddClick">
        +
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuVisible = ref(false);

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};

const activeTab = ref('trending');

const setTab = (tab) => {
  activeTab.value = tab;
};

const handleAddClick = () => {
  console.log('Add button clicked');
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

.tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
}

.tab-link {
  cursor: pointer;
  font-size: 18px;
  padding: 5px 10px;
  color: #643C2C;
  text-decoration: none;
  transition: color 0.3s ease;
}

.tab-link:hover {
  color: #38231b;
}

.tab-link.active {
  font-weight: bold;
  color: #643C2C;
}

.vertical-line {
  height: 30px;
  width: 2px;
  background-color: #643C2D;
  margin: 0 10px;
}

.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 35px;
  max-height: 70vh;
  overflow-y: auto;
}

.image {
  position: relative;
}

.image img {
  width: 100%;
  border-radius: 50px;
}

.fixed-bottom-box {
  position: fixed;
  width: 100%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: #FCF7F2;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 997;
}

.add-button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 55px;
  background-color: #B66B4D;
  color: #FCF7F2;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #643C2D;
}
</style>
