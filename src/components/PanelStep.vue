<template>
    <nav aria-label="Progress">
        <ol
            role="list"
            class="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
        >
            <li
                v-for="(step, stepIdx) in steps"
                :key="step.name"
                class="relative md:flex md:flex-1"
            >
                <a
                    v-if="step.id === modelValue"
                    class="flex items-center px-6 py-4 text-sm font-medium"
                    aria-current="step"
                >
                    <span
                        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-600 dark:border-blue-500"
                    >
                        <span class="text-blue-600 dark:text-blue-500">{{
                            step.id
                        }}</span>
                    </span>
                    <span
                        class="ml-4 text-sm font-medium text-blue-600 dark:text-blue-500"
                        >{{ step.name }}</span
                    >
                </a>
                <a
                    v-else
                    @click.prevent="$emit('update:modelValue', step.id)"
                    class="group flex items-center"
                >
                    <span
                        class="flex items-center px-6 py-4 text-sm font-medium"
                    >
                        <span
                            class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400"
                        >
                            <span
                                class="text-gray-500 group-hover:text-gray-900"
                                >{{ step.id }}</span
                            >
                        </span>
                        <span
                            class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900"
                            >{{ step.name }}</span
                        >
                    </span>
                </a>
                <template v-if="stepIdx !== steps.length - 1">
                    <!-- Arrow separator for lg screens and up -->
                    <div
                        class="absolute top-0 right-0 hidden h-full w-5 md:block"
                        aria-hidden="true"
                    >
                        <svg
                            class="h-full w-full text-gray-300"
                            viewBox="0 0 22 80"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 -2L20 40L0 82"
                                vector-effect="non-scaling-stroke"
                                stroke="currentcolor"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </template>
            </li>
        </ol>
    </nav>
</template>

<script setup>
    defineProps(["modelValue"])
    defineEmits(["update:modelValue"])

    const steps = [
        { id: 1, name: "Admission urgences" },
        { id: 2, name: "Accueil & Triage" },
        { id: 3, name: "Examen médical" },
        { id: 4, name: "Sorties" },
    ]
</script>
