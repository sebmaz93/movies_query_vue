<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);
defineProps<{
  label: string;
  filters: { value: number; text: string }[];
  modelValue: number | null;
}>();

const handleChange = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  emit('update:modelValue', Number(target.value));
};
</script>

<template>
  <select class="filter" :value="modelValue" data-test-id="filter-select" @change="handleChange">
    <option value>{{ label }}</option>
    <option v-for="filter in filters" :key="filter.text" :value="filter.value">
      {{ filter.text }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
.filter {
  width: 100px;
  height: 42px;
  border-radius: 8px;
  text-transform: capitalize;
}
</style>
