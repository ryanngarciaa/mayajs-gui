<template>
  <div>
    <ProjectLayout />
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Project Dashboard</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <button class="btn btn-outline-success" type="submit">
              Install devtools
            </button>
            <button class="btn btn-outline-success" type="submit">
              Customize
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
  components: { ProjectLayout },
  name: "ProjectDashboard",
};
</script>

<style>
.navbar {
  margin-left: 15rem;
}
</style>
