<template>
    <LayoutAuthenticated>
        <SectionMain class="text-gray-800 dark:text-white">
            <div
                class="w-full flex flex-col md:flex-row-reverse gap-10 items-center"
            >
                <div class="md:w-1/3">
                    <div
                        class="col-start-4 col-span-2 radial-progress bg-red-500 text-red-600 border-8 border-red-500 mx-auto"
                        style="--value: 83; --size: 16rem; --thickness: 2rem"
                    >
                        <div
                            class="w-2/3 mx-auto flex flex-col items-center text-center text-white"
                        >
                            <div class="text-4xl font-bold">83%</div>
                            <div class="text-lg">Tension ressentie</div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-3 md:w-2/3">
                    <div
                        class="rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6 flex gap-5 items-center"
                    >
                        <div>
                            <span
                                class="inline-flex rounded-full p-3 bg-teal-50 text-teal-700 ring-4 ring-white"
                            >
                                <svg
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div class="text-black">
                            <p class="text-2xl font-semibold">42</p>
                            <p class="text-sm font-medium">
                                Médecins disponibles
                            </p>
                        </div>
                    </div>
                    <div
                        class="rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6 flex gap-5 items-center"
                    >
                        <div>
                            <span
                                class="inline-flex rounded-full p-3 bg-purple-50 text-purple-700 ring-4 ring-white"
                            >
                                <svg
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div class="text-black">
                            <p class="text-2xl font-semibold">42</p>
                            <p class="text-sm font-medium">
                                Infirmiers disponibles
                            </p>
                        </div>
                    </div>
                    <div
                        class="rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6 flex gap-5 items-center"
                    >
                        <div>
                            <span
                                class="inline-flex rounded-full p-3 bg-sky-50 text-sky-700 ring-4 ring-white"
                            >
                                <svg
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div class="text-black">
                            <p class="text-2xl font-semibold">42</p>
                            <p class="text-sm font-medium">AS disponibles</p>
                        </div>
                    </div>

                    <div
                        class="border-2 border-red-500 rounded-lg text-black p-2 divide-y"
                    >
                        <div class="flex flex-row gap-5 p-3 items-center">
                            <div class="flex flex-row gap-2 items-center">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                        />
                                    </svg>
                                </div>
                                <div>Patients entrants</div>
                            </div>
                            <div class="flex flex-row">
                                <p class="text-2xl font-semibold">12</p>
                                <div class="text-red-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-10 h-10"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row gap-5 p-3 items-center">
                            <div class="flex flex-row gap-2 items-center">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                        />
                                    </svg>
                                </div>
                                <div>Patients sortants</div>
                            </div>
                            <div class="flex flex-row">
                                <p class="text-2xl font-semibold">12</p>
                                <div class="text-red-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-10 h-10"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="border-2 border-red-500 rounded-lg text-black p-6 flex flex-col items-center"
                    >
                        <div class="text-red-500">
                            <BaseIcon
                                :path="mdiTimerSand"
                                w="30"
                                h="30"
                                size="30"
                            />
                        </div>
                        <div class="text-2xl font-semibold">10h 32min</div>
                        <div class="text-center">Temps d'attente moyen</div>
                    </div>

                    <div
                        class="border-2 border-red-500 rounded-lg text-black p-6 flex flex-col items-center"
                    >
                        <div class="text-red-500">
                            <BaseIcon
                                :path="mdiChartPieOutline"
                                w="30"
                                h="30"
                                size="30"
                            />
                        </div>
                        <div class="text-2xl font-semibold">105%</div>
                        <div class="text-center">Taux d'occupation</div>
                    </div>
                </div>
            </div>
            <PanelStep v-model="selectedStep" class="mt-20" />

            <CardBoxModal
                v-model="selectedStep"
                :title="modalTitle"
                button-label="Ok"
            >
                <div v-if="selectedStep === 3">
                    <div class="rounded-md bg-yellow-50 p-4">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg
                                    class="h-8 w-8 text-yellow-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div class="ml-3">
                                <h3 class="text-lg font-medium text-yellow-800">
                                    Les patient sont en attente d'un examen
                                    biologique.
                                </h3>
                                <div class="mt-2 text-base text-yellow-700">
                                    <ul class="list-disc">
                                        <li>Appeler</li>
                                        <li>Diffuser</li>
                                        <li>Renforcer aide</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TableSamplePatients :selected-step="selectedStep" />
            </CardBoxModal>
        </SectionMain>
    </LayoutAuthenticated>
</template>

<script setup>
    import { ref, computed } from "vue"

    import BaseIcon from "@/components/BaseIcon.vue"

    import SectionMain from "@/components/SectionMain.vue"
    import CardBoxModal from "@/components/CardBoxModal.vue"
    import TableSamplePatients from "@/components/TableSamplePatients.vue"
    import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue"
    import PanelStep from "@/components/PanelStep.vue"
    import { mdiTimerSand } from "@mdi/js"
    import { mdiChartPieOutline } from "@mdi/js"

    const selectedStep = ref(null)

    const modalTitle = computed(() => {
        if (selectedStep.value === 1) {
            return "Patients en Admission urgences"
        }
        if (selectedStep.value === 2) {
            return "Patients en Accueil & Triage"
        }
        if (selectedStep.value === 3) {
            return "Patients en Zone de soins"
        }
        if (selectedStep.value === 4) {
            return "Patients en Sorties"
        }

        return "Patients"
    })
</script>
