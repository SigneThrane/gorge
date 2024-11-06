<template>
<body>
  <div class="login-container">
    <img class="logo" src="/public/img/icons/logo.png" alt="Gorge Logo" />
    <h2>LOG IND</h2>

    <p>Brugernavn</p>
    <input type="text" class="input-field" >
    <p>Adgangskode</p>
    <input type="password" class="input-field">
    
    <p class="register-link">Har du ikke en bruger? <a href="#">Opret her.</a></p>
    <router-link to="/TrendingPage">
      <button class="login-button">LOG-IN</button>
      </router-link>
    <p class="register-link">Har du glemt din adgangskode? <a href="#">Klik her.</a></p>
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
    }

    
    p {
      margin-top: 0;
      font-size: 15px;
      color: #BC7344;
      margin-bottom: 5px;
      margin-top: 2%;
    }

    .input-field {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      font-size: 16px;
      border: 1px solid #533F31;
      border-radius: 50px;
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