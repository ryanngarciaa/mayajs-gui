<template>
  <div class="sidenav">
    <a>Dashboard</a>
    <a>Plugins</a>
    <a>Dependecies</a>
    <a>Configuration</a>
    <a>Tasks</a>
  </div>
</template>

<script>
export default {
  name: "ProjectLayout",
};
</script>

<style>
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
}
</style>
