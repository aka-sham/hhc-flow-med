<template>
    <LayoutAuthenticated>
        <SectionMain>
            <SectionTitleLineWithButton title="Vue globale" main>
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

    const selectedStep = ref(null)
</script>
