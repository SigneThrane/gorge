<template>
  <body>
    <div class="login-container">
      <img class="logo" src="/public/img/icons/logo.png" alt="Gorge Logo" />
      <h2>OPRET PROFIL</h2>
  
      <p>For- og efternavn</p>
      <input type="text" class="input-field" >
      <p>Brugernavn</p>
      <input type="password" class="input-field">
      <p>Adgangskode</p>
      <input type="text" class="input-field" >
      <p>E-Mail</p>
      <input type="password" class="input-field">
      
      <router-link to="/CreateAbout">
        <button class="login-button">NÆSTE</button>
      </router-link>
      
    </div>
  </body>
    </template>
    
    <script setup>
    
    </script>
    
    <style scoped>
   body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #FCF7F2;
        font-family: "Quicksand", serif;
      }
  
      .login-container {
        width: 300px;
        padding: 20px;
        text-align: center;
      }
  
      .logo {
        margin-bottom: 10%;
      }
  
      h2 {
        margin-top: 0;
        font-size: 24px;
        color: #BC7344;
        margin-bottom: 15px;
        font-family: "Quicksand", serif;
      }
  
      
      p {
        margin-top: 0;
        font-size: 15px;
        color: #BC7344;
        margin-bottom: 5px;
        margin-top: 2%;
        font-family: "Quicksand", serif;
      }
  
      .input-field {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        font-size: 16px;
        border: 1px solid #533F31;
        border-radius: 50px;
        font-family: "Quicksand", serif;
      }
  
      .login-button {
        width: 50%;
        padding: 10px;
        background-color: #BC7344;
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        margin-top: 6%;
      }
  
      .login-button:hover {
        background-color: #BC7344;
      }
  
      .register-link {
        margin-top: 15px;
        font-size: 14px;
        color: #BC7344;
        margin-bottom: 12%;
      }
  
      .register-link a {
        color: #BC7344;
        text-decoration: none;
      }
  
      .register-link a:hover {
        text-decoration: underline;
      }
    
    </style>