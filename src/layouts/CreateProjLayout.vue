<template>
  <div class="bar justify-content-center p-3">
    <h3>Create a new project</h3>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <button
          type="button"
          v-on:click="component = 'details'"
          class="btn btn-danger"
        >
          Details
        </button>
      </li>
      <li class="nav-item">
        <button
          type="button"
          v-on:click="component = 'presets'"
          class="btn btn-danger"
        >
          Presets
        </button>
      </li>
      <li class="nav-item">
        <button
          type="button"
          v-on:click="component = 'features'"
          class="btn btn-danger"
        >
          Features
        </button>
      </li>
      <li class="nav-item">
        <button
          type="button"
          v-on:click="component = 'configurations'"
          class="btn btn-danger"
        >
          Configuration
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
    };
  },
};
</script>

<style></style>
