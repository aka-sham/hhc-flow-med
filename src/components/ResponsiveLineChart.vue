<template>
    <div ref="elementRef">
        <svg ref="svgRef" class="w-full">
            <g class="x-axis" />
            <g class="y-axis" />
        </svg>
    </div>
</template>

<script setup>
    import { onMounted, ref, watchEffect } from "vue"
    import {
        select,
        line,
        scaleLinear,
        min,
        max,
        curveBasis,
        axisBottom,
        axisLeft,
    } from "d3"
    import { useResizeObserver } from "@vueuse/core"

    const props = defineProps({
        data: {
            type: Array,
            default() {
                return []
            },
        },
    })
    // create ref to pass to D3 for DOM manipulation
    const svgRef = ref(null)
    const elementRef = ref(null)
    const currentWidth = ref(0)
    const currentHeight = ref(0)

    onMounted(() => {
        // pass ref with DOM element to D3, when mounted (DOM available)
        const svg = select(svgRef.value)

        useResizeObserver(elementRef, (entries) => {
            const entry = entries[0]
            const { width, height } = entry.contentRect
            currentWidth.value = width
            currentHeight.value = height
        })

        // whenever any dependencies (like data, resizeState) change, call this!
        watchEffect(() => {
            // scales: map index / data values to pixel values on x-axis / y-axis
            const xScale = scaleLinear()
                .domain([0, props.data.length - 1])
                .range([0, currentWidth.value])

            const yScale = scaleLinear()
                .domain([min(props.data), max(props.data)])
                .range([currentHeight.value, 0])

            // line generator: D3 method to transform an array of values to data points ("d") for a path element
            const lineGen = line()
                .curve(curveBasis)
                .x((value, index) => xScale(index))
                .y((value) => yScale(value))

            // render path element with D3's General Update Pattern
            svg.selectAll(".line")
                .data([props.data]) // pass entire data array
                .join("path")
                .attr("class", "line")
                .attr("stroke", "green")
                .attr("d", lineGen)

            // render axes with help of scales
            const xAxis = axisBottom(xScale)
            svg.select(".x-axis")
                .style("transform", `translateY(${currentHeight.value}px)`) // position on the bottom
                .call(xAxis)

            const yAxis = axisLeft(yScale)
            svg.select(".y-axis").call(yAxis)
        })
    })
</script>
