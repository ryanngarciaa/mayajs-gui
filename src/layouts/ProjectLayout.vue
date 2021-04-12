<template>
  <nav id="sidebarMenu" class="col d-md-block sidebar collapse mt-3">
    <div class="position-sticky">
      <ul class="nav flex-column">
        <li v-for="link in links" :key="link.id" class="nav-item d-flex">
          <router-link
            class="nav-link active"
            :to="link.path"
            :class="link.icon"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "ProjectLayout",
  data: () => {
    return {
      links: [
        { name: " Dashboard", icon: "bi-columns", path: "dashboard" },
        { name: " Plugins", icon: "bi-puzzle", path: "plugins" },
        { name: " Dependencies", icon: "bi-bookmarks", path: "dependencies" },
        { name: " Configuration", icon: "bi-gear", path: "" },
        { name: " Tasks", icon: "bi-list-task", path: "" },
      ],
    };
  },
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
