<script setup>
    import { computed } from "vue"
    const props = defineProps({
        level: {
            type: Number,
            required: true,
        },
    })

    const levelStyle = computed(() => {
        if (props.level === 1) {
            return { color: "bg-red-600 dark:bg-red-500", label: "1" }
        }
        if (props.level === 2) {
            return { color: "bg-yellow-600 dark:bg-yellow-500", label: "2" }
        }
        if (props.level === 3) {
            return { color: "bg-emerald-600 dark:bg-emerald-500", label: "3" }
        }
        if (props.level === 4) {
            return { color: "bg-blue-600 dark:bg-blue-500", label: "4" }
        }
        if (props.level === 5) {
            return { color: "bg-gray-600", label: "5" }
        }

        return { color: "bg-gray-600", label: "5" }
    })
</script>

<template>
    <span
        class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
        :class="levelStyle.color"
    >
        <span class="text-white">{{ levelStyle.label }}</span>
    </span>
</template>
