<template>
  <nav id="sidebarMenu" class="col d-md-block sidebar collapse mt-3">
    <div class="position-sticky">
      <ul class="nav flex-column">
        <li v-for="link in links" :key="link.id" class="nav-item d-flex">
          <router-link
            class="nav-link active"
            :to="link.route"
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
        { name: " Dashboard", icon: "bi-columns", route: "dashboard" },
        { name: " Modules", icon: "bi-puzzle", route: "modules" },
        { name: " Dependencies", icon: "bi-bookmarks", route: "dependencies" },
        { name: " Configuration", icon: "bi-gear", route: "" },
        { name: " Tasks", icon: "bi-list-task", route: "" },
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
