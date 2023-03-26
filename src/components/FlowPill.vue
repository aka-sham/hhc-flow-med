<script setup>
    import { computed } from "vue"
    import BaseIcon from "@/components/BaseIcon.vue"
    import { mdiTeddyBear } from "@mdi/js"
    import { mdiWheelchair } from "@mdi/js"
    import { mdiHumanWhiteCane } from "@mdi/js"
    import { mdiBed } from "@mdi/js"
    import { mdiHeadSnowflake } from "@mdi/js"

    const props = defineProps({
        type: {
            type: Number,
            required: true,
        },
        level: {
            type: Number,
            required: true,
        },
    })

    const typeStyle = computed(() => {
        if (props.type === 1) {
            return { icon: mdiTeddyBear, label: "Pédiatrique" }
        }
        if (props.type === 2) {
            return { icon: mdiWheelchair, label: "Patient en fauteuil" }
        }
        if (props.type === 3) {
            return { icon: mdiHumanWhiteCane, label: "Gériatique" }
        }
        if (props.type === 4) {
            return { icon: mdiBed, label: "Patient sur brancard" }
        }
        if (props.type === 5) {
            return { icon: mdiHeadSnowflake, label: "Psychologique" }
        }

        return { icon: mdiTeddyBear }
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
    <div class="flex flex-row items-center">
        <span
            class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full p-3 dark:border-white"
        >
            <BaseIcon
                :path="typeStyle.icon"
                w="30"
                h="30"
                size="30"
                class="text-gray-700"
            />
        </span>
        <div>{{ typeStyle.label }}</div>
    </div>
</template>
