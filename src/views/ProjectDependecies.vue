<template>
  <div>
    <ProjectLayout />
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand"><h3>Project Dependencies</h3></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <button class="btn btn-outline-success" type="submit">
              Install dependency
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ProjectLayout from "../layouts/ProjectLayout";
export default {
  name: "ProjectPlugins",
  components: { ProjectLayout },
};
</script>

<style>
.navbar {
  margin-left: 15rem;
  background-color: #dc3545;
}
.navbar-brand {
  color: white;
}
</style>
