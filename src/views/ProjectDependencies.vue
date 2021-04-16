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
              Install devtools
            </button>
            <button class="btn btn-danger rounded-pill m-1" type="submit">
              <i class="bi bi-plus"></i>
              Install dependency
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div class="row">
      <div class="col-2">
        <ProjectLayout />
      </div>
      <div class="col-4 card mt-3" style="width: auto">
        <div class="card-body">
          <h5 class="card-title text-muted d-flex">Main dependencies</h5>
          <ul class="container">
            <li
              v-for="dependency in dependencies"
              :key="dependency.id"
              class="row"
            >
              <div class="col-md border border-1 mt-3">
                <div class="row">
                  <div class="col-md d-flex">{{ dependency.name }}</div>
                  <div class="w-100"></div>
                  <div class="col-md d-flex">{{ dependency.version }}</div>
                  <div class="col-md d-flex">{{ dependency.update }}</div>
                  <div class="col-md d-flex">
                    <i class="bi bi-check-circle-fill text-muted"></i
                    >{{ dependency.installed }}
                  </div>
                  <div class="col-md d-flex">
                    <i class="bi bi-box-arrow-up-right text-muted"></i>More Info
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectLayout from "../layouts/ProjectLayout";
export default {
  name: "ProjectDependencies",
  components: { ProjectLayout },
  data: () => {
    return {
      title: "Project Dependencies",
      dependencies: [
        {
          name: " core-js",
          version: "version 3.9.1",
          update: "latest 3.10.1",
          installed: " Installed",
          link: "",
          icon: "bi-check-circle-fill",
        },
        {
          name: " maya-js",
          version: "version 2.6.12",
          update: "latest 2.6.12",
          installed: " Installed",
          link: "",
        },
      ],
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
