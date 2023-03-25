<script setup>
    import { containerMaxW } from "@/config.js"
    import BaseLevel from "@/components/BaseLevel.vue"

    const year = new Date().getFullYear()
</script>

<template>
    <footer class="py-2 px-6" :class="containerMaxW">
        <BaseLevel>
            <div class="text-center md:text-left">
                <b
                    >&copy;{{ year }},
                    <a href="https://FlowMed.health" target="_blank"
                        >FlowMed.health</a
                    >.</b
                >
                <slot />
            </div>
            <div class="md:py-2">
                <a href="https://justboil.me">
                    <span class="font-logo text-xl font-bold">
                        Flow<span class="text-blue-500 dark:text-yellow-500"
                            >Med</span
                        >
                    </span>
                </a>
            </div>
        </BaseLevel>
    </footer>
</template>
