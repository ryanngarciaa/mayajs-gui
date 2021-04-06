<template>
  <div class="row">
    <nav id="sidebarMenu" class="col d-md-block sidebar collapse">
      <div class="position-sticky">
        <ul class="nav flex-column">
          <li class="nav-item d-flex">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="dashboard"
            >
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
            <a class="nav-link" href="#">
              <i class="bi bi-bookmarks"></i>
              Dependencies
            </a>
          </li>
          <li class="nav-item d-flex">
            <a class="nav-link" href="#">
              <i class="bi bi-gear"></i>
              Configuration
            </a>
          </li>
          <li class="nav-item d-flex">
            <a class="nav-link" href="#">
              <i class="bi bi-list-task"></i>
              Tasks
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
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
