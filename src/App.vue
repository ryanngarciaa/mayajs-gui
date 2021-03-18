<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="bar justify-content-center p-3">
    <h3>MayaJS ProjectManager</h3>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link to="projects" class="nav-link">Projects</router-link>
      </li>
      <li class="nav-item">
        <router-link to="create" class="nav-link">Create</router-link>
      </li>
      <li class="nav-item">
        <router-link to="import" class="nav-link">Import</router-link>
      </li>
    </ul>
  </div>
  <router-view />
</template>
<script></script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bar {
  background-color: #dc3545;
  color: white;
}
.nav-link {
  color: white;
  text-decoration: none;
}
</style>
