<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand"><h4>Project Dashboard</h4></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <button class="btn btn-danger m-1" type="submit">
              Install devtools
            </button>
            <button class="btn btn-danger m-1" type="submit">
              <i class="bi bi-pencil"> Customize</i>
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
          <h4 class="card-title mt-4">Welcome to your new project!</h4>
          <p class="card-text mt-5">
            You are looking at the project dashboard where you can put widgets.
            Use the 'Customize' button to add more! Everything is automatically
            saved.
          </p>
          <p class="card-text mt-5">
            On the left are the different available pages. 'Plugins' let you add
            new Vue CLI plugins, 'Dependencies' for managing the packages,
            'Configuration' to configure the tools and 'Tasks' to run scripts
            (for example webpack).
          </p>
          <p class="card-text mt-5">
            Return to the project manager with the dropdown at the top left of
            the screen or the home button in the status bar at the bottom.
          </p>
          <button href="#" class="btn btn-danger mt-4">
            <i class="bi bi-check-circle"> Understood</i>
          </button>
        </div>
      </div>
    </div>
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
  margin-left: 14.5rem;
  background-color: #dc3545;
}
.navbar-brand {
  color: white;
}
</style>
