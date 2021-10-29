<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);
defineProps<{ modelValue: string }>();

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <input
    data-test-id="search-input"
    type="search"
    class="search"
    placeholder="search"
    :value="modelValue"
    @input="handleChange"
  />
</template>

<style lang="scss" scoped>
.search {
  border-radius: 8px;
  padding: 8px;
  font-size: 18px;
  flex: 1;
}
</style>
