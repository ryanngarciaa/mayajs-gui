<template>
  <div>
    <CreateProjLayout />
  </div>
</template>

<script>
import CreateProjLayout from "../layouts/CreateProjLayout";
export default {
  components: { CreateProjLayout },
  name: "NewProject",
};
</script>

<style>
.row {
  margin-right: 0 !important;
}
</style>
