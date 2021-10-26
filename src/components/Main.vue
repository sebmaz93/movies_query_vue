<script setup lang="ts">
// components
import MovieComponent from '@/components/_common/movie/Movie.vue'

// types
import { movies } from '@services/api/movie/db'

</script>

<template>
  <div class="main-container">
    <div class="movies" v-for="movie in movies">
      <MovieComponent :movie="movie" :key="movie.id" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  height: 100%;
  width: 100%;
}
</style>
