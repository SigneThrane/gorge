<template>
   <div class="header">
    <button class="back-button" @click="goBack"><</button>
      <h1 class="header-title">My profile</h1> 
</div>
<div class="backgroundcolor">
  <div class="image-container">
      <img class="post" :src="profileImage" alt="Profile Image" />
    </div>
 <h1>{{ username }}</h1>
    <p>{{ age }} years, {{ city }}, {{ aesthetic }}</p>
    <p v-if="bio && bio.trim() !== ''">{{ bio }}</p>
 
 <div class="p-container">
<p class="numbers1">{{ postCount }}</p>  
<p class="numbers2">{{ followersCount }}</p>
<p class="numbers3">{{ followingCount }}</p>
     </div>

     <div class="p-container1">
      <p class="numbers">Posts</p>  
      <p class="numbers">Followers</p>
      <p class="numbers">Following</p>
     </div>
 
     <div class="button-container">
      <router-link to="/ProfileSetting">
     <button id="edit">Edit profile</button>
    </router-link>
     </div>
   </div>
   
   <div class="image-grid">
  <div class="image" v-for="post in posts" :key="post.id">
    <router-link :to="`/DeletePost/${post.id}`">
      <img :src="post.imageUrl" :alt="post.title" />
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
import { useRouter } from 'vue-router';
import { auth, db } from '../firebaseConfig'; 
import { doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';

// User data
const username = ref("Loading...");
const age = ref("");
const city = ref("");
const aesthetic = ref("");
const bio = ref("");  // No default "No bio available" to prevent showing it
const profileImage = ref("/public/img/icons/blankprofile.png"); 
const posts = ref([]); 
const postCount = ref(0); 
const followersCount = ref(0); 
const followingCount = ref(0); 

const router = useRouter();

// Fetch user data function
const fetchUserData = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      alert("No user is signed in. Redirecting to login...");
      router.push('/');
      return;
    }

    // Reference to the user document in Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      console.log(userData);  // Log the entire userData to check structure

      // Set user data values
      username.value = userData.username || "Anonymous";
      age.value = userData.age || "N/A";
      city.value = userData.city || "Unknown";
      aesthetic.value = userData.aesthetic || "Not specified";
      
      // Handle bio (only display it if it exists and is not an empty string)
      bio.value = userData.bio !== undefined && userData.bio.trim() !== '' ? userData.bio : '';

      // Fetch profile image or use default
      profileImage.value = userData.profileImage || "/public/img/icons/blankprofile.png";
      
      // Fetch followers and following counts
      fetchFollowersAndFollowing(user.uid);
    } else {
      console.error("No user data found for the logged-in user.");
      alert("No user data found.");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    alert("An error occurred while fetching user data.");
  }
};

// Fetch followers and following counts from subcollections
const fetchFollowersAndFollowing = async (userId) => {
  try {
    // Reference to the followers and following subcollections
    const followersRef = collection(db, "users", userId, "followers");
    const followingRef = collection(db, "users", userId, "following");

    // Get the snapshot of the followers and following subcollections
    const followersSnapshot = await getDocs(followersRef);
    const followingSnapshot = await getDocs(followingRef);

    // Set the count of followers and following
    followersCount.value = followersSnapshot.size;  // Number of documents in the followers subcollection
    followingCount.value = followingSnapshot.size;  // Number of documents in the following subcollection
  } catch (error) {
    console.error("Error fetching followers or following:", error);
    alert("An error occurred while fetching followers/following data.");
  }
};

// Fetch posts function
const fetchPosts = async () => {
  try {
    const user = auth.currentUser; 
    if (!user) {
      console.error("No user is signed in.");
      return;
    }

    // Query for posts made by the logged-in user
    const postsQuery = query(collection(db, 'posts'), where('userId', '==', user.uid));
    const querySnapshot = await getDocs(postsQuery);

    posts.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    postCount.value = posts.value.length;
  } catch (error) {
    console.error('Error fetching posts:', error);
    alert("An error occurred while fetching posts.");
  }
};

// Go back function
const goBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    router.push('/TrendingPage');
  }
};

// Fetch user data and posts when the component is mounted
onMounted(() => {
  fetchUserData();
  fetchPosts();
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

 .image-container {
   display: flex;
   justify-content: center;  
   padding-top: 10px;     
   position: relative;  
   margin-top: 9%;
 }
 
 .post {
  width: 150px; 
  height: 150px; 
  border-radius: 50%; 
  object-fit: cover; 
  margin-top: 4%;
  margin-bottom: 4%;
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
  right: 62px; 
}

.numbers2 {
  position: relative;
  left: 1px;  
}

.numbers3 {
  position: relative;
  left: 60px; 
}
 
 .p-container p {
   margin: 0;
   color: #FC7388;
   font-size: 14px;
font-weight: 600;
 }
 
 .p-container1 {
  display: flex;
  justify-content: center; 
  gap: 5px; 
  margin-right: 5%;
  margin-bottom: 4%;
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
 
 .image-grid {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 10px;
   padding: 20px; 
   overflow: hidden; 
   margin-bottom: 20%;
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
   overflow: hidden; 
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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: #FCF7F2;
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
   margin-right: 90px;
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

 #edit {
  border-radius: 15px;
  padding: 10px 20px;
  background-color: #FC7388;
  color: white;
  border: none;
  cursor: pointer;
}

#edit:hover {
  background-color: #d46172; 
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;  
}

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