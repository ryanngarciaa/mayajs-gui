<template>
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

<script>
export default {
  name: "HomeLayout",
};
</script>

<style></style>
