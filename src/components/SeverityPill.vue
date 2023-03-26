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
            return {
                color: "bg-red-50 text-red-700 border-red-700",
                label: "1",
            }
        }
        if (props.level === 2) {
            return {
                color: "bg-yellow-50 text-yellow-400 border-yellow-400",
                label: "2",
            }
        }
        if (props.level === 3) {
            return {
                color: "bg-green-50 text-green-800 border-green-800",
                label: "3",
            }
        }
        if (props.level === 4) {
            return {
                color: "bg-blue-50 text-blue-700 border-blue-700",
                label: "4",
            }
        }
        if (props.level === 5) {
            return {
                color: "bg-gray-50 text-gray-700 border-gray-700",
                label: "5",
            }
        }

        return { color: "bg-gray-600", label: "5" }
    })
</script>

<template>
    <span
        class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full font-bold border-2"
        :class="levelStyle.color"
    >
        <span>{{ levelStyle.label }}</span>
    </span>
</template>
