<template>
  <nav id="sidebarMenu" class="col d-md-block sidebar collapse mt-3">
    <div class="position-sticky">
      <ul class="nav flex-column">
        <li class="nav-item d-flex">
          <router-link class="nav-link active" to="dashboard">
            <i class="bi bi-columns"></i>
            Dashboard
          </router-link>
        </li>
        <li class="nav-item d-flex">
          <router-link class="nav-link" to="plugins">
            <i class="bi bi-puzzle"></i>
            Plugins
          </router-link>
        </li>
        <li class="nav-item d-flex">
          <router-link class="nav-link" to="dependencies">
            <i class="bi bi-bookmarks"></i>
            Dependencies
          </router-link>
        </li>
        <li class="nav-item d-flex">
          <a class="nav-link">
            <i class="bi bi-gear"></i>
            Configuration
          </a>
        </li>
        <li class="nav-item d-flex">
          <a class="nav-link">
            <i class="bi bi-list-task"></i>
            Tasks
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "ProjectLayout",
};
</script>

<style>
.nav-link {
  color: black;
}
.nav {
  height: 100%;
}
</style>
