<template>
  <div class="login-container">
      <button class="close-button" @click="goBack">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
      </button>

    <h2>{{ uploadTitle }}</h2>

    <div class="upload-container">
      <label for="image-upload" class="upload-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
        </svg>
        <span>Vælg fil</span>
      </label>
      <input type="file" id="image-upload" class="input-field" accept="image/*" @change="handleImageUpload" />
    </div>

    <div class="input-group">
      <label>Title</label>
      <input v-model="title" type="text" class="input-field" placeholder="Enter title" />
    </div>

    <div class="input-group">
      <label>Description</label>
      <input v-model="description" type="text" class="input-field" placeholder="Enter description" />
    </div>

    <div class="input-group">
      <label>Tag</label>
      <input v-model="tag" type="text" class="input-field" placeholder="Enter tags" />
    </div>

    <div class="input-group">
      <label>Link</label>
      <input v-model="link" type="text" class="input-field" placeholder="Enter link (optional)" />
    </div>

    <button class="login-button" :disabled="isUploading" @click="uploadPost">
      {{ isUploading ? "Uploading..." : "Upload" }}
    </button>
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
import { ref } from "vue";
import { db } from "../firebaseConfig.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import axios from "axios";

// Form fields
const uploadTitle = ref("Upload Post");
const title = ref("");
const description = ref("");
const tag = ref("");
const link = ref("");
const selectedImage = ref(null);
const isUploading = ref(false);

const goBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    router.push('/TrendingPage'); 
  }
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedImage.value = file;
    console.log("Image selected:", selectedImage.value);
  }
};

const uploadImageToCloudinary = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "ml_default"); 
  formData.append("cloud_name", "dfyymggsw"); 

  console.log("FormData to be sent:", formData);

  try {
    const response = await axios.post(`https://api.cloudinary.com/v1_1/dfyymggsw/image/upload`, formData);
    console.log("Cloudinary Response:", response.data); 
    return response.data.secure_url; 
  } catch (error) {
    console.error("Error uploading image:", error.response || error);
    throw new Error("Failed to upload image to Cloudinary");
  }
};

const uploadPost = async () => {
  if (!title.value || !description.value) {
    alert("Please fill in all required fields!");
    return;
  }

  isUploading.value = true;

  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to upload a post.");
      return;
    }

    let imageUrl = null;
    if (selectedImage.value) {
      imageUrl = await uploadImageToCloudinary(selectedImage.value);
      console.log("Image uploaded to Cloudinary:", imageUrl);
    }

    const post = {
      title: title.value,
      description: description.value,
      tag: tag.value || null,
      link: link.value || null,
      imageUrl: imageUrl,  
      userId: user.uid,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, "posts"), post);
    alert("Post uploaded successfully!");

    title.value = "";
    description.value = "";
    tag.value = "";
    link.value = "";
    selectedImage.value = null; 
  } catch (error) {
    console.error("Error uploading post:", error);
    alert("Failed to upload post.");
  } finally {
    isUploading.value = false;
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

.login-container {
  width: 300px;
  padding: 20px;
  text-align: center;
  margin: 0 auto;
  position: absolute;
  top: 36%;
  left: 47.5%;
  transform: translate(-50%, -43%);
}

h2 {
  font-size: 24px;
  color: #BC7344;
  margin-bottom: 30px;
  font-family: "Quicksand", serif;
  margin-left: 10%;
}

.input-group {
  margin-top: 20px;
  text-align: left;
}

.input-group label {
  font-size: 15px;
  color: #BC7344;
}

.input-group .input-description {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
  margin-bottom: 10px;
  font-family: "Quicksand", serif;
}

.input-field {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #533F31;
  background-color: transparent;
  font-family: "Quicksand", serif;
}

.upload-container input {
  display: none;
}

.upload-container .upload-label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 280px;
  height: 130px;
  border: 1px solid #533F31;
  border-radius: 50px;
  cursor: pointer;
  background-color: white;
  font-size: 18px;
  color: #BC7344;
  margin-bottom: 10%;
}

.login-button {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  color: white;
  background-color: #BC7344;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s;
  margin-top: 10%;
}

.login-button:hover {
  background-color: #8E3E1F;
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
.close-button {
  position: absolute;
  top: -15px;
  right: -25px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
