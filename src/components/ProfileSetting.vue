<template>
  <router-link to="/MyProfile">
    <button class="close-button" @click="closeModal">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg>
    </button>
  </router-link>

  <div class="profile-picture">
    <h1>Din profil</h1>
    <div class="image-container">
      <img class="post" src="/public/img/icons/placeholder4.png" alt="Centered Image" />
      <p>Ændre profilbillede</p>
    </div>

    <!-- "Omkring dig" Title and Line -->
    <div class="section-title">
      <h2>Omkring dig</h2>
      <div class="line"></div>
    </div>

    <!-- User Info: Brugernavn -->
    <div class="user-info">
      <p>Brugernavn</p>
      <p class="username">Cathia Nielsen</p>
    </div>
    <div class="user-info">
      <p>Beskrivelse</p>
      <p class="username">Lorem Ipsum...</p>
    </div>
  </div>

  <div class="section-title2">
      <h2>Tilpas profil</h2>
      <div class="line"></div>
    </div>
  <div class="grid-container">
    <div class="grid-title">Baggrundsbillede</div>
    <div class="grid-image">
      <img src="/public/img/icons/placeholder2.png" alt="Small Round Image" />
    </div>
    <div class="grid-title">Bagrundsfarve</div>
    <div class="grid-image">
      <img src="/public/img/icons/placeholder2.png" alt="Small Round Image" />
    </div>
    <div class="grid-title">Brugernavn</div>
    <div class="grid-image">
      <img src="/public/img/icons/placeholder2.png" alt="Small Round Image" />
    </div>
    <div class="grid-title">Beskrivelse/profilaktivitet</div>
    <div class="grid-image">
      <img src="/public/img/icons/placeholder2.png" alt="Small Round Image" />
    </div>
    <div class="grid-title">Aktivitetstal</div>
    <div class="grid-image">
      <img src="/public/img/icons/placeholder2.png" alt="Small Round Image" />
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

      <router-link to="/Search" class="nav-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-search" viewBox="0 0 16 20">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </router-link>

      <router-link to="/UploadPost" class="add-button">
        <svg width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 7V1h1v6h6v1H9v6H8V8H2V7h6z"/>
        </svg>
      </router-link>

      <router-link to="/Notification" class="nav-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 20">
          <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
        </svg>
      </router-link>

      <router-link to="/MyProfile" class="nav-button">
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

  /* Header */
  h1 {
    margin-top: 12%;
    font-size: 24px;
    color: #BC7344;
    margin-bottom: 15px;
    text-align: center;
    font-weight: bold;
    font-family: "Quicksand", serif;
  }

  .close-button {
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
  }

  /* Nav */
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
    transform: translateY(-15%);
  }

  .add-button:hover {
    background-color: #643C2D;
  }

  /* Profile Image */
  .image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    position: relative;
  }

  .image-container img {
    max-width: 25%;
    height: auto;
  }

  .image-container p {
    margin-top: 10px;
    text-align: center;
    color: #BC7344;
    font-family: "Quicksand", serif;
  }

  /* Section Title and Line */
  .section-title {
    margin-top: 20px;
  }

  .section-title h2 {
    font-size: 16px;
    margin-left: 10%;
    color: #BC7344;
    font-family: "Quicksand", serif;
    margin-bottom: 2%;
  }

  .line {
  margin-top: 5px;
  height: 1px;
  background-color: #BC7344;
  width: 80%; 
  margin: 0 auto; 
}

.section-title2 {
    margin-top: 30px;
  }

  .section-title2 h2 {
    font-size: 16px;
    margin-left: 10%;
    color: #BC7344;
    font-family: "Quicksand", serif;
    margin-bottom: 2%;
  }
  
  .user-info {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 40px;
  }

  .user-info p {
    font-size: 16px;
    color: #BC7344;
    font-family: "Quicksand", serif;
  }

  .username {
    color: #B66B4D;
  }

  /* Customize profile */
  .grid-container {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 25px;
    margin: 40px;
  }

  .grid-title {
    font-size: 16px;
    color: #B66B4D;
    font-family: "Quicksand", serif;
  }

  .grid-image img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
</style>
