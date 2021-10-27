<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
defineProps<{ title: string, modelValue: boolean }>();

const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:modelValue', target.checked)
}
</script>

<template>
    <div class="wrapper">
        <p>{{ title }}</p>
        <input class="checkbox" type="checkbox" @change="handleChange" :value="modelValue" />
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
