<template>
  <div class="p-3"><h3>Create Project Page</h3></div>
  <div class="position-absolute bottom-0 start-50 translate-middle-x p-5">
    <button type="button" class="btn btn-danger">
      <router-link class="newbtn" to="/new"
        >Create a new project here</router-link
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "CreateProject",
};
</script>

<style>
.newbtn {
  color: white;
  text-decoration: none;
}
</style>
