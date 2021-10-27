<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
defineProps<{ title: string, filters: { value: number, text: string }[], modelValue: number | null }>();

const handleChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    emit('update:modelValue', Number(target.value))
}
</script>

<template>
    <select class="filter" @change="handleChange" :value="modelValue">
        <option value>{{ title }}</option>
        <option v-for="filter in filters" :value="filter.value">{{ filter.text }}</option>
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
