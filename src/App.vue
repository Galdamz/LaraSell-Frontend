<script setup lang="ts">
import NavBar from "./components/global/NavBar.vue";
</script>


<template>
  <div class="container mx-auto">
    <NavBar />
    <router-view></router-view>
  </div>
</template>