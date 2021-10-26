<script setup lang="ts">
// types
import { Movie } from '@services/api/movie/types';

defineProps<{ movie: Movie }>();
</script>

<template>
    <div class="movie-container">
        <img class="poster" :src="movie.img" :alt="movie.title" />
        <h3 class="title">{{ movie.title }}</h3>
    </div>
</template>

<style lang="scss" scoped>
.movie-container {
    display: flex;
    flex-direction: column;
    width: 225px;
    height: 380px;
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

.title {
    font-size: 20px;
    font-weight: bold;
    margin: 12px;
}
</style>
