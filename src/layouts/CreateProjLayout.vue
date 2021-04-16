<template>
  <div class="bar justify-content-center p-3">
    <h3>Create a new project</h3>
    <ul class="nav justify-content-center">
      <li v-for="link in links" :key="link.id" class="nav-item">
        <button
          type="button"
          v-on:click="component = link.component"
          class="btn btn-danger"
          :class="link.active"
        >
          {{ link.name }}
        </button>
      </li>
    </ul>
  </div>
  <component v-bind:is="component"></component>
  <router-view />
</template>

<script>
import Details from "../components/Details.vue";
import Presets from "../components/Presets.vue";
import Features from "../components/Features.vue";
import Configuration from "../components/Configuration.vue";
export default {
  name: "CreateProjLayout",
  components: {
    details: Details,
    presets: Presets,
    features: Features,
    configurations: Configuration,
  },
  data() {
    return {
      component: "details",
      links: [
        { name: "Details", component: "details", active: "" },
        { name: "Presets", component: "presets", active: "" },
        { name: "Features", component: "features", active: "disabled" },
        {
          name: "Configuration",
          component: "configuration",
          active: "disabled",
        },
      ],
    };
  },
};
</script>

<style></style>
