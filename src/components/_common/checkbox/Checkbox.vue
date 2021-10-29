<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);
defineProps<{
  label: string;
  modelValue: boolean;
}>();

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
};
</script>

<template>
  <div class="wrapper">
    <label data-test-id="checkbox-label">{{ label }}</label>
    <input
      data-test-id="checkbox"
      class="checkbox"
      type="checkbox"
      :value="modelValue"
      :checked="modelValue"
      @change="handleChange"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}

.checkbox {
  width: 24px;
  height: 24px;
  border-radius: 8px;
}
</style>
