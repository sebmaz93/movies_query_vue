<script setup lang="ts">
import { ref, watch } from 'vue';

// components
import SearchComponent from '@components/_common/search/Search.vue'
import FilterComponent from '@components/_common/filter/Filter.vue'
import CheckboxComponent from '@components/_common/checkbox/Checkbox.vue';

// data
import { genres, years, per_page } from '@/static_data';

// types
import { MovieReqParams } from '@services/api/movie/types';

const searchVal = ref<string>('');
const selectedGenre = ref<number | null>(null);
const selectedYear = ref<number | null>(null);
const isSeries = ref<boolean>(false);
const page = ref<number>(1);
const perPage = ref<number>(8);

const props = defineProps<{ hasNext: boolean, getMovies: (query: MovieReqParams) => Promise<void> }>()

const handleFetch = () => {
    props.getMovies({
        page: page.value,
        per_page: perPage.value,
        filters: {
            // @ts-ignore
            genre: selectedGenre.value,
            // @ts-ignore
            year: selectedYear.value,
            searchTerm: searchVal.value,
            isSeries: isSeries.value,
        }
    })
}

const handlePrev = () => {
    if (page.value > 1) {
        page.value--;
    }
}
const handleNext = () => {
    if (props.hasNext) {
        page.value++;
    }
}

watch([page, perPage], handleFetch);
</script>

<template>
    <div class="filters">
        <SearchComponent v-model="searchVal" />
        <FilterComponent title="Genre" :filters="genres" v-model="selectedGenre" />
        <FilterComponent title="Year" :filters="years" v-model="selectedYear" />
        <FilterComponent title="Per Page" :filters="per_page" v-model="perPage" />
        <CheckboxComponent title="Series" v-model="isSeries" />
        <button class="search-btn" @click="handleFetch">Search</button>
        <button @click="handlePrev" :disabled="page === 1">Prev</button>
        <p class="page">{{ page }}</p>
        <button @click="handleNext" :disabled="!hasNext">Next</button>
    </div>
</template>

<style lang="scss" scoped>
.filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    padding: 12px 24px;
    border-radius: 8px;
    border: 2px solid #5780c7;
}

.search-btn {
    height: 42px;
    width: 72px;
    border-radius: 8px;
    cursor: pointer;
}

.page {
    font-size: 18px;
    font-weight: bold;
}
</style>
