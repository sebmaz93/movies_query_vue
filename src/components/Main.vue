<script setup lang="ts">
// components
import Nav from '@components/_common/nav/Nav.vue'
import MovieSection from '@components/movie/MovieSection.vue'

</script>

<template>
  <div class="main">
    <Nav />
    <MovieSection />
  </div>
</template>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
}
</style>
