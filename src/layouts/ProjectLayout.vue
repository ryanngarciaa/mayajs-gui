<template>
<<<<<<< HEAD
  <div class="row">
    <nav id="sidebarMenu" class="col d-md-block sidebar collapse">
      <div class="position-sticky">
        <ul class="nav flex-column">
          <li class="nav-item d-flex">
            <a class="nav-link active" aria-current="page" href="#">
              <i class="bi bi-columns"></i>
              Dashboard
            </a>
          </li>
          <li class="nav-item d-flex">
            <a class="nav-link" href="#">
              <i class="bi bi-puzzle"></i>
              Plugins
            </a>
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
=======
  <div class="sidenav">
    <a>Dashboard</a>
    <a>Plugins</a>
    <a>Dependecies</a>
    <a>Configuration</a>
    <a>Tasks</a>
>>>>>>> 6929506e704112642e6710534ca81ea269bfc8e9
  </div>
</template>

<script>
export default {
  name: "ProjectLayout",
};
</script>

<style>
<<<<<<< HEAD
.nav-link {
  color: black;
}
.nav {
  height: 100%;
=======
.sidenav {
  height: 100%;
  width: 15rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  margin-top: 4rem;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  display: block;
}

.sidenav a:hover {
  background-color: #dc3545;
  color: blue;
>>>>>>> 6929506e704112642e6710534ca81ea269bfc8e9
}
</style>
