<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
defineProps<{ modelValue: string }>()

const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:modelValue', target.value)
}
</script>

<template>
    <input
        type="search"
        class="search"
        placeholder="search"
        @input="handleChange"
        :value="modelValue"
    />
</template>

<style lang="scss" scoped>
.search {
    border-radius: 8px;
    padding: 8px;
    font-size: 18px;
    max-width: 300px;
}
</style>
