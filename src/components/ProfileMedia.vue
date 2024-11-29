<template>
   <div class="header">
    <button class="back-button" @click="goBack"><</button>
      <h1 class="header-title">{{ headerTitle }}</h1> 
  <div class="header-icons">
    <router-link to="/Notification">
      <button class="icon-button" onclick="showNotifications()"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg></button>
      </router-link>
    <button class="icon-button" onclick="sharePage()"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" class="bi bi-arrow-bar-up" viewBox="0 0 16 13">
  <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"/>
</svg></button>
  </div>
</div>
<div class="backgroundcolor">
   <div class="image-container">
   <img class="post" src="/public/img/icons/placeholder2.png" alt="Centered Image" />
 
   <img src="/public/img/icons/crown.png" alt="Crown Icon" class="crown-icon-verify" />
 </div>
 <h1>{{ headerTitle }}</h1>
 <p>{{ profileInfo }}</p>
 <div class="p-container">
       <p class="numbers1">1K</p>
       <p class="numbers2">10.9 K</p>
       <p class="numbers3">412</p>
     </div>
     <div class="p-container1">
      <p class="numbers">Posts</p>
      <p class="numbers">Followers</p>
      <p class="numbers">Following</p>
     </div>
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
    import { ref, onMounted } from 'vue';
    import { db } from '../firebaseConfig.js'; // Adjust this path based on your project structure
    import { collection, getDocs } from 'firebase/firestore';
    
    // State for profile info and other data
    const headerTitle = ref("Loading..."); // Default text while loading
    const profileInfo = ref("Loading..."); // Default profile info
    const goBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    router.push('/TrendingPage'); // Default route if no history
  }
};
    
    // Images array
    const images = [
      { id: 1, src: './img/icons/placeholder1.png', alt: 'Image 1' },
      { id: 2, src: './img/icons/placeholder2.png', alt: 'Image 2' },
      { id: 3, src: './img/icons/placeholder3.png', alt: 'Image 3' },
      { id: 4, src: './img/icons/placeholder1.png', alt: 'Image 4' },
      { id: 5, src: './img/icons/placeholder1.png', alt: 'Image 5' },
      { id: 6, src: './img/icons/placeholder2.png', alt: 'Image 6' },
      { id: 7, src: './img/icons/placeholder1.png', alt: 'Image 7' },
      { id: 8, src: './img/icons/placeholder2.png', alt: 'Image 8' }
    ];
    
    // Fetch the username
    const fetchUsername = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "username"));
        querySnapshot.forEach((doc) => {
          headerTitle.value = doc.data().username1;
        });
      } catch (error) {
        console.error("Error fetching username:", error);
        headerTitle.value = "Error loading username";
      }
    };
    
    // Fetch the profile info
    const fetchProfileInfo = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "profileInfo"));
        querySnapshot.forEach((doc) => {
          profileInfo.value = doc.data().info2; // Assuming `info` field exists
        });
      } catch (error) {
        console.error("Error fetching profile info:", error);
        profileInfo.value = "Error loading profile info";
      }
    };
    
    // Lifecycle hook to fetch data on component mount
    onMounted(() => {
      fetchUsername();       // Fetch username
      fetchProfileInfo();    // Fetch profile info
    });
    </script>
 
   
 <style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #FCF7F2;
  font-family: "Quicksand", serif;
  overflow-x: hidden;
}

 /*Profile info*/
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
       font-weight: 500;
       font-family: "Quicksand", serif;
       text-transform: uppercase;
     }
 
     p{
       font-size: 15px;
       color: #000000;
       margin-bottom: 25px;
       text-align: center;
       font-family: "Quicksand", serif;
     }
 
  .p-container {
  display: flex;
  justify-content: center; 
  gap: 5px; 
  margin-bottom: 2%;
  margin-right: 5%;
}

.numbers1 {
  position: relative;
  right: 41px; 
}

.numbers2 {
  position: relative;
  left: 3px;  
}

.numbers3 {
  position: relative;
  left: 45px; 
}

 
 .p-container p {
   margin: 0;
   color: #FC7388;
   font-size: 14px;
 }
 
 .p-container1 {
  display: flex;
  justify-content: center; 
  gap: 5px; 
  margin-right: 5%;
 }

 .p-container1 .numbers {
  display: flex;            
  align-items: center;       
  justify-content: center;   
  text-align: center;        
  width: 70px;                          
  line-height: normal;       
}
 
 .p-container1 p {
   margin: 0;
   color: #000000;
   font-size: 14px;
 }

 .backgroundcolor{
   background-color: #FFE0CB;
   padding: 5%;
 }
 
  /*Posts*/
 .image-grid {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 10px;
   padding: 20px; /* adjust as necessary */
   overflow: hidden; /* Ensure no scrolling */
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
   background-image: url('/public/img/icons/backgroundplace1.png'); 
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

 /* Header*/
 .header {
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px 16px;
   background-color: #FCF7F2;
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
   margin-left: 30px; 
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
   margin-right: 10px; 
 }
 
 .icon-button {
   font-size: 30px;
   background: none;
   border: none;
   cursor: pointer;
 }

 /*Navigation*/
 .fixed-bottom-box {
  position: fixed;
  padding-top: 3%;
  height: 75px;
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
    </style>