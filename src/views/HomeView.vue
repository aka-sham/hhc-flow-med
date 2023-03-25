<template>
    <LayoutAuthenticated>
        <SectionMain>
            <div
                class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
                <div
                    class="flex items-center max-w-md px-10 bg-white shadow rounded-lg h-20"
                >
                    <div
                        class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full"
                    >
                        <svg
                            class="w-32 h-32 transform translate-x-1 translate-y-1"
                            x-cloak
                            aria-hidden="true"
                        >
                            <circle
                                class="text-gray-300"
                                stroke-width="20"
                                stroke="currentColor"
                                fill="transparent"
                                r="50"
                                cx="60"
                                cy="60"
                            />
                            <circle
                                class="text-red-500"
                                stroke-width="20"
                                :stroke-dasharray="circumference"
                                :stroke-dashoffset="
                                    circumference -
                                    (percent / 100) * circumference
                                "
                                stroke-linecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="50"
                                cx="60"
                                cy="60"
                            />
                        </svg>
                        <span class="absolute text-2xl text-red-500"
                            >{{ percent }}%</span
                        >
                    </div>
                    <p class="ml-10 font-medium sm:text-xl">
                        Tension ressentie
                    </p>
                </div>
            </div>

            <div>
                <dl
                    class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <div
                        v-for="item in stats"
                        :key="item.id"
                        class="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
                    >
                        <dt>
                            <div class="absolute rounded-md bg-indigo-500 p-3">
                                <component
                                    :is="item.icon"
                                    class="h-6 w-6 text-white"
                                    aria-hidden="true"
                                />
                            </div>
                            <p
                                class="ml-16 truncate text-sm font-medium text-gray-500"
                            >
                                {{ item.name }}
                            </p>
                        </dt>
                        <dd class="ml-16 flex items-baseline">
                            <p class="text-2xl font-semibold text-gray-900">
                                {{ item.stat }}
                            </p>
                            <p
                                :class="[
                                    item.changeType === 'increase'
                                        ? 'text-green-600'
                                        : 'text-red-600',
                                    'ml-2 flex items-baseline text-sm font-semibold',
                                ]"
                            >
                                <ArrowUpIcon
                                    v-if="item.changeType === 'increase'"
                                    class="h-5 w-5 flex-shrink-0 self-center text-green-500"
                                    aria-hidden="true"
                                />
                                <ArrowDownIcon
                                    v-else
                                    class="h-5 w-5 flex-shrink-0 self-center text-red-500"
                                    aria-hidden="true"
                                />
                                <span class="sr-only">
                                    {{
                                        item.changeType === "increase"
                                            ? "Increased"
                                            : "Decreased"
                                    }}
                                    by
                                </span>
                                {{ item.change }}
                            </p>
                        </dd>
                    </div>
                </dl>
            </div>
            <SectionTitleLineWithButton title="Vue globale">
            </SectionTitleLineWithButton>

            <PanelStep v-model="selectedStep" />

            <SectionTitleLineWithButton
                :icon="mdiAccountMultiple"
                title="Patients"
            />

            <CardBox has-table v-if="selectedStep">
                <TableSamplePatients :selected-step="selectedStep" />
            </CardBox>

            <CardBox v-else>
                <CardBoxComponentEmpty />
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>

<script setup>
    import { ref } from "vue"

    import { mdiAccountMultiple } from "@mdi/js"
    import SectionMain from "@/components/SectionMain.vue"
    import CardBox from "@/components/CardBox.vue"
    import TableSamplePatients from "@/components/TableSamplePatients.vue"
    import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue"
    import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue"
    import PanelStep from "@/components/PanelStep.vue"
    import CardBoxComponentEmpty from "@/components/CardBoxComponentEmpty.vue"

    import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/vue/20/solid"
    import {
        CursorArrowRaysIcon,
        EnvelopeOpenIcon,
        UsersIcon,
    } from "@heroicons/vue/24/outline"

    const selectedStep = ref(null)
    const circumference = ref(50 * 2 * Math.PI)
    const percent = ref(80)

    const stats = [
        {
            id: 1,
            name: "Total Subscribers",
            stat: "71,897",
            icon: UsersIcon,
            change: "122",
            changeType: "increase",
        },
        {
            id: 2,
            name: "Avg. Open Rate",
            stat: "58.16%",
            icon: EnvelopeOpenIcon,
            change: "5.4%",
            changeType: "increase",
        },
        {
            id: 3,
            name: "Avg. Click Rate",
            stat: "24.57%",
            icon: CursorArrowRaysIcon,
            change: "3.2%",
            changeType: "decrease",
        },
    ]
</script>
