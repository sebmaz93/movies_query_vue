<script setup lang="ts">
// types
import { Movie } from '@services/api/movie/types';

defineProps<{ movie: Movie }>();
</script>

<template>
  <div class="movie-container">
    <img class="poster" :src="movie.img" :alt="movie.title" data-test-id="movie-poster" />
    <div class="movie-info">
      <div class="genres" data-test-id="movie-genres">
        Genres:
        <h4 v-for="genre in movie.genre" :key="genre.id" class="genre">{{ genre.title }}</h4>
      </div>
      <div class="actors" data-test-id="movie-actors">
        Actors:
        <h4 v-for="actor in movie.actors" :key="actor.id" class="actor">{{ actor.name }}</h4>
      </div>
      <h3 class="year" data-test-id="movie-year">Year: {{ movie.release_date }}</h3>
    </div>
    <h3 class="title" data-test-id="movie-title">{{ movie.title }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.movie-container {
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 380px;
  position: relative;
  cursor: pointer;

  &:hover {
    .movie-info {
      opacity: 1;
    }
  }
}

.poster {
  display: block;
  width: auto;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }
}

.movie-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 150ms linear;
}

.genres,
.actors {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin: 12px;
}
</style>
