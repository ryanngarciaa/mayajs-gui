<template>
  <div class="bar justify-content-center p-3">
    <h3>Create a new project</h3>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link to="" class="nav-link">Details</router-link>
      </li>
      <li class="nav-item">
        <router-link to="" class="nav-link">Presets</router-link>
      </li>
      <li class="nav-item">
        <router-link to="" class="nav-link">Features</router-link>
      </li>
      <li class="nav-item">
        <router-link to="" class="nav-link">Configuration</router-link>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "CreateProjLayout",
};
</script>

<style></style>
