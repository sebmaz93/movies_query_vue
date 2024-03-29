<script setup lang="ts">
// components
import MovieComponent from '@components/movie/Movie.vue';
import FiltersSection from '@components/_common/filter/FiltersSection.vue';

// hooks
import { useQuery } from '@hooks/useQuery';

// services
import { fetchMovies } from '@services/api/movie';

// types
import { MoviesRes, MovieReqParams } from '@services/api/movie/types';

const {
  data: movies,
  error,
  isLoading,
  fetch: getMovies,
} = useQuery<MoviesRes, MovieReqParams>('MOVIES_GET', fetchMovies);
</script>

<template>
  <section class="main-container">
    <FiltersSection :get-movies="getMovies" :has-next="Boolean(movies?.has_next_page)" />
    <div v-if="isLoading" class="loader" data-test-id="loader">Loading...</div>
    <h2 v-else-if="error">Error</h2>
    <div v-if="!isLoading && movies?.results" class="movies" data-test-id="movies-container">
      <MovieComponent
        v-for="movie in movies.results"
        v-if="movies.results.length > 0"
        :key="movie.id"
        :movie="movie"
      />
      <div v-else>No Movies Found.</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
}
.movies {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  height: 100%;
  width: 100%;
}
</style>
