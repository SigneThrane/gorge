<template>
  <div class="search-container">
    <div class="search-box">
      <input
        type="text"
        v-model="searchQuery"
        @input="searchData"
        placeholder="Search for users or tags..."
        class="search-input"
      />

      <button @click="addToSearchHistory" class="search-button">
        Search
      </button>

      <button @click="goBack" class="cancel-button">
        Cancel
      </button>
    </div>

    <div v-if="searchResults.length > 0">
      <h3>Results</h3>
      <div v-for="result in searchResults" :key="result.id" class="search-result-item">
        <p>{{ result.name || result.tag }}</p> 
      </div>
    </div>

    <div v-else-if="searchQuery && searchResults.length === 0" class="no-results">
      <p>No results found.</p>
    </div>

    <div class="search-history">
      <h3>Search History</h3>
      <ul>
        <li v-for="(item, index) in searchHistory" :key="index">
          {{ item }}
          <button @click="deleteFromHistory(index)" class="delete-button">X</button>
        </li>
      </ul>
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
   import { db } from '../firebaseConfig.js';
   import { collection, query, where, getDocs } from 'firebase/firestore';
   
   const searchQuery = ref('');
   const searchHistory = ref([]);
   const searchResults = ref([]);
   const router = useRouter();
   
   onMounted(() => {
     const savedHistory = localStorage.getItem('searchHistory');
     if (savedHistory) {
       searchHistory.value = JSON.parse(savedHistory);
     }
   });
   
   const searchData = async () => {
     if (!searchQuery.value) {
       searchResults.value.length = 0; 
       return;
     }
   
     try {
       searchResults.value.length = 0; 
   
       const userQuery = query(
         collection(db, 'username'),
         where('username', '>=', searchQuery.value),
         where('username', '<=', searchQuery.value + '\uf8ff')
       );
       const userQuerySnapshot = await getDocs(userQuery);
       userQuerySnapshot.forEach(doc => {
         searchResults.value.push({ id: doc.id, name: doc.data().username, type: 'user' }); 
       });
   
       const tagQuery = query(
         collection(db, 'tag'),
         where('tag', '>=', searchQuery.value),
         where('tag', '<=', searchQuery.value + '\uf8ff')
       );
       const tagQuerySnapshot = await getDocs(tagQuery);
       tagQuerySnapshot.forEach(doc => {
         searchResults.value.push({ id: doc.id, tag: doc.data().tag, type: 'tag' }); 
       });
     } catch (error) {
       console.error('Error fetching search results: ', error);
     }
   };
   
   const addToSearchHistory = () => {
     if (searchQuery.value && !searchHistory.value.includes(searchQuery.value)) {
       searchHistory.value.push(searchQuery.value);
       localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value));
     }
     searchQuery.value = ''; 
   };
   
   const deleteFromHistory = (index) => {
     searchHistory.value.splice(index, 1);
     localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value));
   };
   
   const goBack = () => {
     router.back();
   };
   </script>
   
 <style scoped>
body {
  margin: 0;
  background-color: #FCF7F2;
  font-family: "Quicksand", serif;
  padding-top: 60px;
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

.search-container {
  padding: 20px;
  padding-top: 8%;
}

.search-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-input {
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0px 0px 5px;
}

.search-button {
  background-color: #B66B4D;
  color: white;
  border: none;
  padding: 11px 15px;
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;
}

.cancel-button {
  background-color: #c4c4c4;
  color: white;
  border: none;
  padding: 12px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13.8px;
  margin-left: 10px;
}

.cancel-button:hover {
  background-color: #969696;
}

.search-history {
  margin-top: 20px;
}

.search-history h3 {
  font-size: 16px;
  color: #B66B4D;
}

.search-history ul {
  list-style-type: none;
  padding: 0;
}

.search-history li {
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-button {
  background-color: #c4c4c4;
  opacity: 70%;
  color: white;
  border: none;
  padding: 4px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 9px;
  width: 18px;
  height: 18px;
}

.delete-button:hover {
  background-color: #969696;
}
</style>
