<template>
  <div>
    <!-- Header Section -->
    <header class="header">
      <label for="menu-toggle" class="icon" @click="toggleMenu">&#9776;</label>
      <img class="logo" src="/public/img/icons/logo.png" alt="Gorge Logo" />

      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
    </header>

    <!-- Menu Section -->
    <nav class="menu" v-show="menuVisible">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>

    <!-- Tabs Section -->
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

    <!-- Fixed Bottom Box with Add Button -->
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

// Toggle the menu visibility
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};

// Default active tab is 'trending'
const activeTab = ref('trending');

// Set the active tab based on the clicked link
const setTab = (tab) => {
  activeTab.value = tab;
};

// Handle the "Add" button click
const handleAddClick = () => {
  // You can define the logic when the "Add" button is clicked,
  // for example, redirect or show a form
  console.log('Add button clicked');
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

/* Tabs Styling */
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
  z-index: 1000; 
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
