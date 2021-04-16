<template>
  <div class="row justify-content-center p-3">
    <div class="col-8 col-md-4">
      <div class="alert alert-danger" role="alert">
        A preset is an association of plugins and configurations. After you've
        selected features, you can optionally save it as a preset so that you
        can reuse it for future projects, without having to reconfigure
        everything again.
      </div>
    </div>
    <div class="w-100 d-none d-md-block"></div>
    <div class="col-6 col-sm-4 border bg-light">
      <h6 class="p-2">Select a preset</h6>
      <div class="form-check form-switch p-3">
        <div class="row border bg-light mb-2">
          <div class="col-2 col-md-3 p-3">
            <input
              class="form-check-input mt-3 ms-3"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div class="col-8 col-md-6 p-3">
            <div class="col">Default Preset</div>
            <div class="col">MayaJS</div>
          </div>
        </div>
        <div class="row border bg-light mb-2">
          <div class="co-2 col-md-3 p-3">
            <input
              class="form-check-input mt-3 ms-3"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div class="col-8 col-md-6 p-3">
            <div class="col">Preset 2</div>
            <div class="col">MayaJS</div>
          </div>
        </div>
        <div class="row border bg-light mb-2">
          <div class="co-2 col-md-3 p-3">
            <input
              class="form-check-input mt-3 ms-3"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div class="col-8 col-md-6 p-3">
            <div class="col">Manual Preset</div>
            <div class="col">MayaJS</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 d-none d-md-block p-1"></div>
    <div class="col-6 col-sm-4 p-3">
      <span class="p-1">
        <button type="button" class="btn btn-danger">
          <router-link class="newbtn" to="/create"
            ><i class="bi bi-x" />Previous</router-link
          >
        </button></span
      >
      <span class="p-1"
        ><button type="button" class="btn btn-danger btn-md">
          <router-link class="newbtn" to="/dashboard">
            Create Project<i class="bi bi-arrow-right-short"
          /></router-link></button
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Presets",
};
</script>
<style></style>
