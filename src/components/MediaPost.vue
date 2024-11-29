<template>
  <div class="header">
    <button class="back-button" @click="goBack"><</button>
    <router-link to="/ProfileMedia" class="no-underline">
      <h1 class="header-title">FREJA PETERSEN</h1>
    </router-link>
    <div class="header-icons">
      <router-link to="/Notification">
        <button class="icon-button" onclick="showNotifications()">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
          </svg>
        </button>
      </router-link>
      <button class="icon-button" onclick="sharePage()">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 13">
          <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>
    </div>
  </div>

  <!-- Image Section -->
  <div class="image-container">
    <img v-if="post && post.imageUrl" :src="post.imageUrl" class="post" alt="Post Image" />
    <img v-else class="post" src="/public/img/icons/android-chrome-maskable-192x192.png" alt="Placeholder Image" />
  </div>

  <!-- Bottom Icons -->
  <div class="bottom-icons">
    <button id="like" class="bottom-icon" @click="handleLike">
      <svg :class="liked ? 'bi-heart-fill' : 'bi-heart'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
      </svg>
    </button>
    <p class="number">{{ post?.likes || 0 }}</p>

    <button id="comment" class="bottom-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
        <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
      </svg>
    </button>
    <p class="number">12</p>

    <button id="comment" class="bottom-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5zm8-7a.5.5 0 0 1 .5.5v5.707l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 8.107V3.5a.5.5 0 0 1 .5-.5z"/>
      </svg>
    </button>
  </div>

<!-- Post Content Section -->
<div v-if="post" class="info">
  <h3>{{ post.title }}</h3>
  <p>Beskrivelse: {{ post.description }}</p>
  <p>Tags: {{ post.tag }} </p>
  <p>Link: {{ post.link}} </p>
</div>

<!-- Loading State -->
<div v-else class="loading">
  <p>Loading...</p>
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

<script>
import { ref, onMounted } from 'vue';
import { getDoc, doc, updateDoc, increment } from 'firebase/firestore';
import { useRoute } from 'vue-router';
import { db } from '../firebaseConfig.js';

export default {
  name: 'MediaPost',
  setup() {
    const route = useRoute();
    const postId = route.params.id;
    const post = ref(null);
    const isLoading = ref(true);
    const liked = ref(false);  // This keeps track of whether the post is liked or not

    const fetchPost = async () => {
      try {
        const postRef = doc(db, 'posts', postId);
        const postSnapshot = await getDoc(postRef);

        if (postSnapshot.exists()) {
          post.value = postSnapshot.data();
          liked.value = post.value.likes > 0; // Set liked state based on current likes (optional)
        } else {
          console.error('No post found with ID:', postId);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        isLoading.value = false;
      }
    };

    // Method to handle the like functionality (toggle like/unlike)
    const handleLike = async () => {
      try {
        const postRef = doc(db, 'posts', postId);
        
        // If already liked, unlike and decrement the like count
        if (liked.value) {
          await updateDoc(postRef, {
            likes: increment(-1),  // Decrease the likes count
          });
          liked.value = false;
        } else {
          await updateDoc(postRef, {
            likes: increment(1),  // Increase the likes count
          });
          liked.value = true;
        }

        if (post.value) {
          // Update the post's local likes count based on the change
          post.value.likes = (post.value.likes || 0) + (liked.value ? 1 : -1);
        }
      } catch (error) {
        console.error('Error updating likes:', error);
      }
    };

    // Method for the back button (navigates back or to TrendingPage)
    const goBack = () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        this.$router.push('/TrendingPage');
      }
    };

    // Fetch the post data on mounted
    onMounted(fetchPost);

    return {
      post,
      isLoading,
      goBack,
      handleLike,
      liked,
    };
  },
};
</script>



<style scoped>
body {
  margin: 0;
  background-color: #FCF7F2;
  font-family: "Quicksand", serif;
  padding-top: 60px;
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
}

.back-button {
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
}

.header-title {
  flex-grow: 0.5; 
  text-align: center;
  font-size: 18px;
  margin: 0;
  margin-left: 40px; 
  color: black;
  font-family: "Quicksand", serif;
font-weight: 500;
}

.header-icons {
  display: flex;
  gap: 10px;
  margin-right: 40px; 
}

.icon-button {
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
}

.image-container {
  margin-top: 14%;
  display: flex;
  justify-content: center;  
  padding-top: 20px;     
}

.post {
  max-width: 100%;        
  height: auto;
  border-radius: 50px;
}

h1 {
  margin-top: 5%;
  font-size: 24px;
  color: #BC7344;
  margin-bottom: 10px;
  text-align: center;
  font-weight: lighter;
  font-family: "Quicksand", serif;
  text-transform: uppercase;
}

.info {
  font-size: 15px;
  color: #643C2C;
  margin-top: 10%;
  padding: 9%;
  font-family: "Quicksand", serif;
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
  width: auto;
  padding: 20px 10px; 
}

.bottom-icon {
  width: 26px; 
  height: 24px; 
  margin-left: 40px; 
  cursor: pointer;
  font-size: 20px;
  border: none;               
  background: transparent;    
  text-decoration: none;      
  outline: none;    
  color: #B66B4D;
}

.bottom-icon:hover {
  opacity: 0.8; 
}

.bottom-icons a {
  display: flex;
  justify-content: center;
  align-items: center;
}

.number{
  color: #B66B4D;
  margin-top: 2%;
  margin-left: 2%;
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
  transform: translateY(-15%); 
}

.add-button:hover {
  background-color: #643C2D;
}
.no-underline {
  text-decoration: none;
}

.bi-heart-fill {
  fill: #ff0000; 
}

.bi-heart {
  fill: #B66B4D; 
}

</style>
