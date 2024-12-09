<template>
 <div class="header">
    <button class="back-button" @click="goBack"><</button>
    <h1 class="header-title">Edit profile</h1> 
  </div>

  <div class="profile-picture">
  <div class="image-container">
    <img :src="profileImage" alt="Profile Image" />
    
    <input type="file" id="file-input" @change="uploadImage" />
    
    <label for="file-input" class="custom-file-button">
      Change profile picture
    </label>
  </div>


    <div class="section-title">
      <h2>{{ about }}</h2>
      <div class="line"></div>
    </div>

    <div class="user-info">
      <p>Full name</p>
      <input v-model="fullName" class="custom-input" />
    </div>

    <div class="user-info">
      <p>Username</p>
      <input v-model="username" class="custom-input" />
    </div>

    <div class="user-info">
      <p>Age</p>
      <input v-model="age" class="custom-input" />
    </div>

    <div class="user-info">
      <p>City/country</p>
      <input v-model="city" class="custom-input" />
    </div>

    <div class="user-info">
      <p>Aesthetics</p>
      <input v-model="aesthetic" class="custom-input" />
    </div>

    <div  class="save-button-container">
      <button id="save" @click="saveProfile">Save profile</button>
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
import { useRouter } from 'vue-router';
import { auth, db } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import axios from 'axios';

const username = ref('');
const fullName = ref('');
const age = ref('');
const city = ref('');
const aesthetic = ref('');
const profileImage = ref('/public/img/icons/blankprofile.png');
const about = ref('About Me');
const selectedImage = ref(null); 
const isUploading = ref(false); 
const router = useRouter();

const uploadImageToCloudinary = async (image) => {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', 'ml_default'); 
  formData.append('cloud_name', 'dfyymggsw'); 

  try {
    const response = await axios.post('https://api.cloudinary.com/v1_1/dfyymggsw/image/upload', formData);
    console.log('Cloudinary Response:', response.data);
    return response.data.secure_url; 
  } catch (error) {
    console.error('Error uploading image:', error.response || error);
    throw new Error('Failed to upload image to Cloudinary');
  }
};

const uploadImage = async (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedImage.value = file; 
    console.log('Image selected:', selectedImage.value);

    try {
      const imageUrl = await uploadImageToCloudinary(selectedImage.value);
      profileImage.value = imageUrl;
      console.log('Profile image uploaded to Cloudinary:', imageUrl);
    } catch (error) {
      console.error('Error uploading profile image:', error);
    }
  }
};

const saveProfile = async () => {
  const user = auth.currentUser;
  if (user) {
    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(
      userDocRef,
      {
        username: username.value,
        fullName: fullName.value,
        age: age.value,
        city: city.value,
        aesthetic: aesthetic.value,
        profileImage: profileImage.value, 
      },
      { merge: true }
    );

    alert('Profile updated!');
    router.push('/MyProfile');
  }
};

const goBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    router.push('/TrendingPage');
  }
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
   background-color: #FCF7F2;
   top: 0;
   z-index: 10;
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
 
 .back-button {
   font-size: 20px;
   background: none;
   border: none;
   cursor: pointer;
   margin-top: 2%;
   color: #000000;
 }
 
 .header-title {
   flex-grow: 0.5; 
   text-align: center;
   font-size: 18px;
   margin: 0;
   color: black;
   margin-right: 26%;
   margin-top: 2%;
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
    border-radius: 15px;
  }

  .image-container p {
    margin-top: 10px;
    text-align: center;
    color: #BC7344;
    font-family: "Quicksand", serif;
  }

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

  #save {
  background-color: #B66B4D;
  border-radius: 15px;
  color: #FCF7F2;
  padding: 10px 20px; 
  border: none;
  cursor: pointer;
  font-size: 16px; 
}

.save-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px; 
}

.custom-input {
  width: 60%; 
  padding: 5px; 
  font-size: 12px; 
  border: 1px solid #B66B4D; 
  border-radius: 15px; 
  background-color: #F9F9F9; 
  color: #333; 
  margin-bottom: 10px; 
  outline: none; 
  font-family: "Quicksand", serif;
}

input[type="file"] {
  display: none; 
}

.custom-file-button {
  display: inline-block;
  background-color: #B66B4D; 
  color: #FCF7F2; 
  padding: 10px 20px; 
  border-radius: 15px; 
  font-size: 15px; 
  font-family: "Quicksand", serif;
  cursor: pointer; 
  text-align: center; 
  width: auto;
  margin-top: 4%;
}

.custom-file-button:focus {
  outline: none;
  box-shadow: 0 0 3px rgba(184, 107, 77, 0.6);
}
</style>
