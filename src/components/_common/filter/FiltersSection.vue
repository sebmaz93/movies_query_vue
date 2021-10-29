<script setup lang="ts">
import { ref, watch } from 'vue';

// components
import SearchComponent from '@components/_common/search/Search.vue';
import FilterComponent from '@components/_common/filter/Filter.vue';
import CheckboxComponent from '@components/_common/checkbox/Checkbox.vue';

// data
import { genres, years, per_page } from '@mocks/static_data';

// types
import { MovieReqParams } from '@services/api/movie/types';

const searchVal = ref<string>('');
const selectedGenre = ref<number | null>(null);
const selectedYear = ref<number | null>(null);
const isSeries = ref<boolean>(false);
const page = ref<number>(1);
const perPage = ref<number>(8);

const props = defineProps<{
  hasNext: boolean;
  getMovies: (query: MovieReqParams) => Promise<void>;
}>();

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
    },
  });
};

const handlePrev = () => {
  if (page.value > 1) {
    page.value--;
  }
};
const handleNext = () => {
  if (props.hasNext) {
    page.value++;
  }
};

watch([page, perPage], handleFetch);
</script>

<template>
  <div class="filters">
    <div class="search-wrapper">
      <SearchComponent v-model="searchVal" />
      <button data-test-id="search-btn" class="search-btn" @click="handleFetch">Search</button>
    </div>
    <div class="options">
      <FilterComponent v-model="selectedGenre" label="Genre" :filters="genres" />
      <FilterComponent v-model="selectedYear" label="Year" :filters="years" />
      <FilterComponent v-model="perPage" label="Per Page" :filters="per_page" />
      <CheckboxComponent v-model="isSeries" label="Series" />
    </div>
    <div class="pagination">
      <button :disabled="page === 1" data-test-id="prev-btn" @click="handlePrev">Prev</button>
      <p class="page">page: {{ page }}</p>
      <button :disabled="!hasNext" data-test-id="next-btn" @click="handleNext">Next</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  display: flex;
  width: 550px;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 12px;
  padding: 12px 24px;
  border-radius: 8px;
  border: 2px solid #5780c7;
}

.search-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.search-btn {
  height: 42px;
  width: 72px;
  border-radius: 8px;
  cursor: pointer;
}

.options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.page {
  font-size: 18px;
  font-weight: bold;
}
</style>
