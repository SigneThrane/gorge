<template>
    <div class="header">
      <button class="back-button" @click="goBack"><</button>
  <router-link to="/ProfileMedia" class="no-underline">
    <h1 class="header-title" v-if="userName">{{ userName }}</h1>
    <h1 class="header-title" v-else>Loading user...</h1>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
  </svg>
        </button>
      </div>
    </div>
  
    <div class="image-container">
      <img v-if="post && post.imageUrl" :src="post.imageUrl" class="post" alt="Post Image" />
      <img v-else class="post" src="/public/img/icons/android-chrome-maskable-192x192.png" alt="Placeholder Image" />
    </div>
  
    <div class="bottom-icons">
      <button id="like" class="bottom-icon" @click="handleLike">
        <svg :class="liked ? 'bi-heart-fill' : 'bi-heart'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>
      </button>
      <p class="number">{{ post?.likes || 0 }}</p>
  
      <button class="bottom-icon" @click="toggleCommentSection">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
          <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
        </svg>
      </button>
      <p class="number">{{ comments.length }}</p>
  
      <button id="share" class="bottom-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
  </svg>
      </button>

      <button id="delete" class="bottom-icon" @click="confirmDeletePost">
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 13">
    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
  </svg>
</button>

<div v-if="showDeleteConfirmation" class="confirmation-popup">
  <p>Do you want to delete this post?</p>
  <div class="button-container">
    <button class="confirm-button" @click="deletePost">Yes</button>
    <button class="cancel-button" @click="cancelDelete">No</button>
  </div>
</div>


    </div>
  
    <div v-if="showComments" class="comment-section">
    <div class="input-row">
      <img class="post" :src="profileImage" alt="Profile Image" />
      <input class="comment-input" type="text" placeholder="Skriv kommentar" ref="commentInput" @keyup.enter="addComment">
    </div>
  
    <div v-if="comments && comments.length > 0" class="comments-list">
    <div v-for="(comment, index) in comments" :key="index" class="comment">
  <p><strong>{{ comment.userName }}</strong></p>
      <p>{{ comment.text }}</p>
    </div>
  </div>
    <p v-else>No comments yet.</p>
  </div>
  
  <div v-if="post" class="info">
    <h3>{{ post.title }}</h3>
    <p>Beskrivelse: {{ post.description }}</p>
    <p>Tags: {{ post.tag }} </p>
    <p>Link: {{ post.link}} </p>
  </div>
  
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
import { doc, getDoc, updateDoc, increment, collection, addDoc, query, orderBy, getDocs, deleteDoc } from 'firebase/firestore'; // Include deleteDoc
import { useRoute } from 'vue-router';
import { auth, db } from '../firebaseConfig.js';

export default {
  name: 'MediaPost',
  setup() {
    const route = useRoute();
    const postId = route.params.id;
    const post = ref(null);
    const isLoading = ref(true);
    const liked = ref(false);
    const showComments = ref(false);
    const commentInput = ref(null);
    const comments = ref([]);
    const userName = ref('');  
    const profileImage = ref('/public/img/icons/blankprofile.png'); 
    const showDeleteConfirmation = ref(false); // New state for delete confirmation

    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          alert("No user is signed in. Redirecting to login...");
          this.$router.push('/');  
          return;
        }

        const userRef = doc(db, 'users', user.uid);
        const userSnapshot = await getDoc(userRef);
        
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          userName.value = userData.username || 'Anonymous';  
          profileImage.value = userData.profileImage || '/public/img/icons/blankprofile.png';  
        } else {
          console.error('No user data found for the logged-in user.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('An error occurred while fetching user data.');
      }
    };

    const fetchPost = async () => {
      try {
        const postRef = doc(db, 'posts', postId);
        const postSnapshot = await getDoc(postRef);

        if (postSnapshot.exists()) {
          post.value = postSnapshot.data();

          const userRef = doc(db, 'users', post.value.userId);  
          const userSnapshot = await getDoc(userRef);
          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            userName.value = userData.username || 'Anonymous';  
          } else {
            console.error('No user data found for the post author.');
          }

          liked.value = post.value.likes > 0;
        } else {
          console.error('No post found with ID:', postId);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        isLoading.value = false;
      }
    };

    const confirmDeletePost = () => {
      showDeleteConfirmation.value = true;
    };

    const cancelDelete = () => {
      showDeleteConfirmation.value = false;
    };

    const deletePost = async () => {
      try {
        const postRef = doc(db, 'posts', postId);
        await deleteDoc(postRef);
        alert('Post deleted successfully.');
        showDeleteConfirmation.value = false;
        this.$router.push('/TrendingPage'); 
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('An error occurred while deleting the post.');
      }
    };

    const goBack = () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        this.$router.push('/TrendingPage');
      }
    };

    onMounted(() => {
      fetchUserData();  
      fetchPost();     
    });

    return {
      post,
      isLoading,
      liked,
      showComments,
      commentInput,
      comments,
      userName, 
      profileImage, 
      showDeleteConfirmation, 
      goBack,
      confirmDeletePost, 
      deletePost, 
      cancelDelete, 
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
    background-color: #FCF7F2;
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
    width: 300px;  
    height: 300px; 
    object-fit: cover; 
    margin: 10px;  
    border-radius: 15px;
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
    padding-left: 9%;
    padding-right: 9%;
    font-family: "Quicksand", serif;
    margin-top: 7%;
  }
  
  .info p {
    margin-bottom: 15px;
  }
  
  .no-underline {
    text-decoration: none;
  }
  
  .bottom-icons {
    display: flex;
    width: auto;
    padding: 20px 10px; 
  }
  
  .bottom-icon {
    width: 26px; 
    height: 24px; 
    margin-left: 25px; 
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
    fill: #d12e2e; 
  }
  
  .bi-heart {
    fill: #B66B4D; 
  }
  
  .comment-section{
    font-size: 15px;
    color: #643C2C;
    padding-left: 9%;
    font-family: "Quicksand", serif; 
  }
  
  .comment-section p{
    color: #643C2C;
    font-size: 15px;
    margin-top: 5%;
  }
  
  .comment-input{
  margin-top: 2.5%;
  width: 60%;
  padding: 10px 15px;
  font-size: 13.1px;
  border: 1px solid #dad0c6 ;
  border-radius: 10px;
  outline: none;
  font-family: "Quicksand", serif; 
  background-color: #FCF7F2;
  }
  
  .input-row{
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5%;
  }
  
  .input-row img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-top: 6px;
  }
  
  #share{
    margin-top: 1%;
  }

  .confirmation-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FCF7F2;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 1000;
}

.confirmation-popup p {
  font-size: 16px;
  margin-bottom: 20px;
  font-family: "Quicksand", serif; 
}

.button-container {
  display: flex;
  justify-content: center; 
  gap: 15px; 
}

.confirm-button, 
.cancel-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.confirm-button {
  background-color: #d12e2e;
  color: white;
}

.cancel-button {
  background-color: #c4c4c4;
  color: white;
}
  </style>
  