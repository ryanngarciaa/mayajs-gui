<template>
  <div class="bar justify-content-center p-3">
    <h3>{{ title }}</h3>
    <ul class="nav justify-content-center">
      <li v-for="link in links" :key="link.id" class="nav-item">
        <router-link :to="link.route" class="nav-link">{{
          link.name
        }}</router-link>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "HomeLayout",
  data() {
    return {
      title: "MayaJS ProjectManager",
      links: [
        { name: "Projects", route: "projects" },
        { name: "Create", route: "create" },
        { name: "Import", route: "import" },
      ],
    };
  },
};
</script>

<style></style>
