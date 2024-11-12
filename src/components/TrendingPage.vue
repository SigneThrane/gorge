<template>
  <div class="tabs">
    <router-link 
      to="/TrendingPage" 
      class="tab-link" 
      :class="{ active: activeTab === 'TRENDING' }" 
      @click="setTab('TRENDING')"
    >
      TRENDING
    </router-link>

    <div class="vertical-line"></div> 

    <router-link 
      to="/FollowingPage" 
      class="tab-link" 
      :class="{ active: activeTab === 'FOLLOWING' }" 
      @click="setTab('FOLLOWING')"
    >
      FOLLOWING
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

const activeTab = ref('trending');

const setTab = (tab) => {
  activeTab.value = tab;
};

const images = [
  { id: 1, src: '/public/img/icons/placeholder1.png', alt: 'Image 1' },
  { id: 2, src: '/public/img/icons/placeholder2.png', alt: 'Image 2' },
  { id: 3, src: '/public/img/icons/placeholder3.png', alt: 'Image 3' },
  { id: 4, src: '/public/img/icons/placeholder1.png', alt: 'Image 4' },
  { id: 1, src: '/public/img/icons/placeholder1.png', alt: 'Image 1' },
  { id: 2, src: '/public/img/icons/placeholder2.png', alt: 'Image 2' },
  { id: 3, src: '/public/img/icons/placeholder3.png', alt: 'Image 3' },
  { id: 4, src: '/public/img/icons/placeholder1.png', alt: 'Image 4' },
  { id: 1, src: '/public/img/icons/placeholder1.png', alt: 'Image 1' },
  { id: 2, src: '/public/img/icons/placeholder2.png', alt: 'Image 2' },
  { id: 3, src: '/public/img/icons/placeholder3.png', alt: 'Image 3' },
  { id: 4, src: '/public/img/icons/placeholder1.png', alt: 'Image 4' },
];
</script>

<style scoped>
body {
  margin: 0;
  background-color: #FCF7F2;
  font-family: "Quicksand", serif;
  padding-top: 60px;
}

.tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6.5%;
  margin-bottom: 2.5%;
}

.tab-link {
  cursor: pointer;
  font-size: 14px;
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
  gap: 10px; 
  padding: 25px; 
  max-height: 70vh;
  overflow-y: auto;
  padding-bottom: 100px; 
}

.image {
  position: relative;
  width: 100%;
  height: 180px; 
}

.image img {
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  border-radius: 25px; 
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
