<template>
  <div class="header">
    <button class="back-button" @click="goBack"><</button>
    <router-link v-if="userId" :to="`/ProfileMedia/${userId}`" class="no-underline">
      <h1 class="header-title" v-if="userName">{{ userName }}</h1>
      <h1 class="header-title" v-else>Loading user...</h1>
    </router-link>
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
    <p class="number">
      <span v-if="commentsLoading">Loading...</span>
      <span v-else>{{ comments.length }}</span>
    </p>
    <button id="save" class="bottom-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
    </button>
  </div>

  <div v-if="post" class="info">
    <h3>{{ post.title }}</h3>
    <p>{{ post.description }} #{{ post.tag }}</p>
    <p>{{ post.link }}</p>
  </div>

  <div v-else class="loading">
    <p>Loading...</p>
  </div>

  <div v-if="showComments" class="comment-section">
    <div class="input-row">
      <img class="post" :src="profileImage" alt="Profile Image" />
      <input class="comment-input" type="text" placeholder="Write comment" ref="commentInput" @keyup.enter="addComment" />
    </div>

    <div v-if="comments.length > 0" class="comments-list">
      <div v-for="(comment, index) in comments" :key="index" class="comment">
        <p><strong>{{ comment.userName }}:</strong></p>
        <p class="comment-text">{{ comment.text }}</p>
        <hr v-if="index < comments.length - 1" />
      </div>
    </div>
    <p v-else>No comments yet.</p>
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
import { doc, getDoc, updateDoc, increment, collection, addDoc, query, orderBy, getDocs } from 'firebase/firestore';
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
    const commentsLoading = ref(true);
    const userName = ref('');
    const profileImage = ref('/public/img/icons/blankprofile.png');
    const userId = ref(''); 

     // Fetch the current user's data 
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

      // Fetch the post data based on the postId
    const fetchPost = async () => {
      try {
        const postRef = doc(db, 'posts', postId);
        const postSnapshot = await getDoc(postRef);

        if (postSnapshot.exists()) {
          post.value = postSnapshot.data();
          if (post.value && post.value.userId) {
            userId.value = post.value.userId;  
          } else {
            console.error('Post does not have userId or post is invalid.');
          }

          const userRef = doc(db, 'users', userId.value);
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

    // Fetch the comments for the post
    const fetchComments = async () => {
      commentsLoading.value = true;
      try {
        const commentsRef = collection(db, 'posts', postId, 'comments');
        const q = query(commentsRef, orderBy('timestamp'));
        const querySnapshot = await getDocs(q);
        
        comments.value = []; // Clear the existing comments

        querySnapshot.forEach(async (docSnapshot) => {
          const commentData = docSnapshot.data();
          
          const userRef = doc(db, 'users', commentData.userId);
          const userSnapshot = await getDoc(userRef);
          commentData.userName = userSnapshot.exists() ? userSnapshot.data().username : 'Anonymous';

          comments.value.push(commentData);
        });
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        commentsLoading.value = false;
      }
    };

    // Add a new comment to the post
    const addComment = async () => {
      const commentText = commentInput.value.value.trim();
      if (!commentText) return;

      try {
        const commentsRef = collection(db, 'posts', postId, 'comments');
        await addDoc(commentsRef, {
          text: commentText,
          timestamp: new Date(),
          userId: auth.currentUser.uid,  
        });
        
        commentInput.value.value = '';
        fetchComments(); // Refresh comments after adding new one
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    };

       // Handle liking/unliking the post
    const handleLike = async () => {
      try {
        const postRef = doc(db, 'posts', postId);
        
        if (liked.value) {
          await updateDoc(postRef, { likes: increment(-1) });
          liked.value = false;
        } else {
          await updateDoc(postRef, { likes: increment(1) });
          liked.value = true;
        }

        if (post.value) {
          post.value.likes = (post.value.likes || 0) + (liked.value ? 1 : -1);
        }
      } catch (error) {
        console.error('Error updating likes:', error);
      }
    };

    const goBack = () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        this.$router.push('/TrendingPage');
      }
    };

     // Toggle visibility of the comment section
    const toggleCommentSection = () => {
      showComments.value = !showComments.value;
      if (showComments.value && commentInput.value) {
        commentInput.value.focus();
      }
    };

    onMounted(() => {
      fetchUserData();
      fetchPost();
      fetchComments();
    });

    return {
      post,
      isLoading,
      liked,
      showComments,
      commentInput,
      comments,
      commentsLoading, 
      userName, 
      profileImage, 
      userId,  
      goBack,
      handleLike,
      toggleCommentSection,
      addComment,
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
    justify-content: center; 
    padding: 15px 16px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    background-color: #FCF7F2;
}

.back-button {
    position: absolute;   
    left: 20px;            
    font-size: 20px;        
    background: transparent; 
    border: none;          
    color: black;          
}

.header-title {
    text-align: center;
    font-size: 18px;
    margin: 0;
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
  margin-top: 10%;
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
  background: #fcf7f2; 
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
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
  margin-top: 2%;
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
  margin-bottom: 25%;
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

hr {
  border: none;
  border-top: 1px solid #643C2D;
  margin: 10px 0;
  width: 80%;
  opacity: 50%;
}

.comment-text {
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  width: 80%;
}

#save{
  margin-top: 0.5%;
}

@media only screen
and (min-width: 300px)
and (max-width: 400px){

.comment-input{
width: 55%;
}

hr {
  width: 86%;
}
}
</style>
