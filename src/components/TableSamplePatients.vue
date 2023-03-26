<script setup>
    import { computed, ref } from "vue"
    import { useMainStore } from "@/stores/main"
    import CardBoxModal from "@/components/CardBoxModal.vue"
    import TableCheckboxCell from "@/components/TableCheckboxCell.vue"
    import SeverityPill from "@/components/SeverityPill.vue"
    import FlowPill from "@/components/FlowPill.vue"
    import BaseIcon from "@/components/BaseIcon.vue"
    import { mdiTimerSandComplete } from "@mdi/js"

    const props = defineProps({
        checkable: Boolean,
        selectedStep: Number,
    })

    const mainStore = useMainStore()

    const items = computed(() =>
        mainStore.patients.filter(
            (patient) => patient.state === props.selectedStep
        )
    )

    const isModalActive = ref(false)

    const isModalDangerActive = ref(false)

    const checkedRows = ref([])

    const remove = (arr, cb) => {
        const newArr = []

        arr.forEach((item) => {
            if (!cb(item)) {
                newArr.push(item)
            }
        })

        return newArr
    }

    const checked = (isChecked, client) => {
        if (isChecked) {
            checkedRows.value.push(client)
        } else {
            checkedRows.value = remove(
                checkedRows.value,
                (row) => row.id === client.id
            )
        }
    }

    const displayTime = (nbMinutes) => {
        let nbHours = 0
        let nbMinutesLeft = 0

        if (nbMinutes < 60) {
            return `${nbMinutes}min`
        } else {
            nbHours = Math.floor(nbMinutes / 60)
            nbMinutesLeft = nbMinutes - nbHours * 60
            return `${nbHours}h ${nbMinutesLeft}min`
        }
    }
</script>

<template>
    <CardBoxModal v-model="isModalActive" title="Sample modal">
        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
        <p>This is sample modal</p>
    </CardBoxModal>

    <CardBoxModal
        v-model="isModalDangerActive"
        title="Please confirm"
        button="danger"
        has-cancel
    >
        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
        <p>This is sample modal</p>
    </CardBoxModal>

    <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
        <span
            v-for="checkedRow in checkedRows"
            :key="checkedRow.id"
            class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"
        >
            {{ checkedRow.name }}
        </span>
    </div>
    <div class="overflow-scroll">
        <table class="table-auto overflow-scroll">
            <thead>
                <tr>
                    <th v-if="props.checkable" />
                    <th class="w-2">N°</th>
                    <th>Gravité</th>
                    <th>Typologie</th>
                    <th>Temps d'attente</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="client in items" :key="client.id">
                    <TableCheckboxCell
                        v-if="props.checkable"
                        @checked="checked($event, client)"
                    />
                    <td class="border-b-0 w-2 before:hidden">
                        #{{ client.id }}
                    </td>
                    <td class="border-b-0 lg:w-6 before:hidden">
                        <div class="flex flex-row">
                            <span class="block lg:hidden"></span
                            ><SeverityPill :level="client.severity" />
                        </div>
                    </td>
                    <td class="border-b-0 lg:w-6 before:hidden">
                        <div class="flex flex-row">
                            <span class="block lg:hidden"></span
                            ><FlowPill
                                :type="client.flow"
                                :level="client.severity"
                            />
                        </div>
                    </td>

                    <td class="lg:w-64 flex flex-col lg:table-cell">
                        <div class="w-full flex justify-between">
                            <span
                                >Temps d'attente :
                                {{ displayTime(client.waiting_time) }}</span
                            >
                            <span class="text-gray-400 dark:text-slate-600 flex"
                                ><BaseIcon
                                    :path="mdiTimerSandComplete"
                                    w="20"
                                    h="20"
                                    size="20"
                                />
                                {{
                                    displayTime(client.waiting_time_expected)
                                }}</span
                            >
                        </div>
                        <progress
                            class="flex w-full self-center"
                            max="100"
                            :value="client.progress"
                        >
                            {{ client.progress }}
                        </progress>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
