<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand"><h4>Project Plugins</h4></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <button class="btn btn-outline-success" type="submit">
              Add vue-router
            </button>
            <button class="btn btn-outline-success" type="submit">
              Add Vuex
            </button>
            <button class="btn btn-outline-success" type="submit">
              Add Plugin
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div class="row">
      <div class="col-2">
        <ProjectLayout />
      </div>
      <div class="col-4 card mt-3" style="width: 33rem">
        <div class="card-body">
          <h6 class="card-title text-muted d-flex">Installed plugins</h6>
        </div>
      </div>
    </div>
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
  background-color: #dc3545;
}
.navbar-brand {
  color: white;
}
.row {
  margin-right: 0 !important;
}
</style>
