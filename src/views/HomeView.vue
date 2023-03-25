<script setup>
    import { mdiAccountMultiple, mdiChartTimelineVariant } from "@mdi/js"
    import SectionMain from "@/components/SectionMain.vue"
    import CardBox from "@/components/CardBox.vue"
    import TableSampleClients from "@/components/TableSampleClients.vue"
    import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue"
    import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue"
    import PanelStep from "@/components/PanelStep.vue"
</script>

<template>
    <LayoutAuthenticated>
        <SectionMain>
            <SectionTitleLineWithButton
                :icon="mdiChartTimelineVariant"
                title="Vue globale"
                main
            >
            </SectionTitleLineWithButton>

            <PanelStep />

            <SectionTitleLineWithButton
                :icon="mdiAccountMultiple"
                title="Patients"
            />

            <CardBox has-table>
                <TableSampleClients />
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
