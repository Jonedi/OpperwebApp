<template>
  <div class="pt-3 ps-3">
    <div class="head d-flex justify-content-around me-4">
      <img src="/imgs/logo.png" class="img-fluid logo_w" alt="logo">
      <h2 class="title"><span class="text-white">anime</span>yabu.</h2>
    </div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link text-white active" aria-current="page" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white disabled">Disabled</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.logo_w { width: 46px; }
</style>

