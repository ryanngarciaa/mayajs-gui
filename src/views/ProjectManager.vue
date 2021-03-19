<template>
  <div class="bar justify-content-center p-3">
    <h3>MayaJS ProjectManager</h3>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <div class="nav-link" v-on:click="toggleSelectProj">Projects</div>
      </li>
      <li class="nav-item">
        <div class="nav-link" v-on:click="toggleSelectCreate">Create</div>
      </li>
      <li class="nav-item">
        <router-link to="import" class="nav-link">Import</router-link>
      </li>
    </ul>
  </div>
  <SelectProject v-if="showSelectProject" />
  <SelectCreate v-if="!showSelectCreate" />
</template>

<script>
import SelectCreate from "../components/SelectCreate.vue";
import SelectProject from "../components/SelectProject.vue";
export default {
  components: { SelectProject, SelectCreate },
  name: "ProjectManager",
  data() {
    return {
      showSelectProject: false,
      showSelectCreate: false,
    };
  },
  methods: {
    toggleSelectProj() {
      this.showSelectProject = !this.showSelectProject;
    },
    toggleSelectCreate() {
      this.showSelectCreate = !this.showSelectCreate;
    },
  },
};
</script>

<style>
.nav-link {
  cursor: pointer;
}
</style>
