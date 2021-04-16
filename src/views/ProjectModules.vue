<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand"
          ><h4>{{ title }}</h4></a
        >
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <button class="btn btn-danger rounded-pill m-1" type="submit">
              Add vue-router
            </button>
            <button class="btn btn-danger rounded-pill m-1" type="submit">
              Add vuex
            </button>
            <button class="btn btn-danger rounded-pill m-1" type="submit">
              Install devtools
            </button>
            <button class="btn btn-danger rounded-pill m-1" type="submit">
              <i class="bi bi-plus"></i>
              Add Module
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
          <h5 class="card-title text-muted d-flex">Installed Modules</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectLayout from "../layouts/ProjectLayout";
export default {
  components: { ProjectLayout },
  name: "ProjectModules",
  data: () => {
    return {
      title: "Project Modules",
    };
  },
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
