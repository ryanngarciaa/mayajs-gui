<template>
  <form class="row justify-content-center p-3">
    <div class="col-6 col-md-4 p-3 border bg-light">
      <h6 class="p-1">Project Folder</h6>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping"
          ><i class="bi bi-folder"></i
        ></span>
        <input
          type="text"
          class="form-control"
          placeholder="Type a name"
          aria-label="name"
          aria-describedby="addon-wrapping"
        />
      </div>
    </div>
    <div class="w-100 d-none d-md-block p-1"></div>
    <div class="col-6 col-sm-4 p-3 border bg-light">
      <h6 class="p-1">Package Manager</h6>
      <select class="form-select" aria-label="Default select example">
        <option value="1" selected>Default</option>
        <option value="2">npm</option>
        <option value="3">yarn</option>
        <option value="4">pnpm</option>
      </select>
    </div>
    <div class="w-100 d-none d-md-block p-1"></div>
    <div class="col-6 col-sm-4 p-3 border bg-light">
      <h6 class="p-1">Additional Options</h6>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >Overwrite target folder if exists</label
        >
      </div>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >Scaffold project without beginner instructions</label
        >
      </div>
    </div>
    <div class="w-100 d-none d-md-block p-1"></div>
    <div class="col-6 col-sm-4 p-3 border bg-light">
      <h6 class="p-1">Git Repository</h6>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label p-1" for="flexSwitchCheckDefault"
          >Initialize git repository (recommended)</label
        >
      </div>
      <div class="input-group input-group-sm mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Overwrite commit message (optional)"
        />
      </div>
    </div>
    <div class="w-100 d-none d-md-block p-1"></div>
    <div class="col-6 col-sm-4 p-3">
      <span class="p-1">
        <button type="button" class="btn btn-danger">
          <router-link class="newbtn" to="/create"
            ><i class="bi bi-x" />Cancel</router-link
          >
        </button></span
      >
      <span class="p-1"
        ><button type="button" class="btn btn-danger btn-md" disabled>
          Next<i class="bi bi-arrow-right-short" /></button
      ></span>
    </div>
  </form>
</template>

<script>
export default {
  name: "Details",
};
</script>

<style></style>
