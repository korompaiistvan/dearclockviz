<script lang="ts">
    import Dial from "$lib/components/Dial.svelte";
    import Band from "$lib/components/Band/index.svelte";
    import Canvas from "$lib/components/Canvas.svelte";
    import ControlPanel from "$lib/components/ControlPanel.svelte";

    import processData from "$lib/processData";
    import { data } from "$lib/data";
    import type { Name} from "$lib/types";
    import { styleMap } from "$lib/styleMap";

    import {dialRadius, bandSpacing, dialPadding, bandGroupSpacing} from '$lib/stores'
    import Legend from "$lib/components/Legend.svelte";

    const vBWidth = 2970;
    const vBHeight = 2100;

    const cy =  vBHeight/2
    $: cxOffset = $bandGroupSpacing / 2 + 2 * $bandSpacing + $dialPadding + $dialRadius
    $: cx1 = vBWidth/2 - cxOffset
    $: cx2 = vBWidth/2 + cxOffset
    
    const processedData = processData(data)
    const bandOrder: Name[] = ['Tamas', 'Pisti', 'Julcsi']
    const bandsData = bandOrder.map(n => processedData[n])
</script>
<div class="main">
    <ControlPanel />
    <Canvas {vBHeight} {vBWidth}>
        <g transform='rotate(90, {cx1}, {cy})'>
            <Dial cx={cx1} cy={cy} r={$dialRadius}/>
        </g>
        <g transform='rotate(-90, {cx2}, {cy})'>
            <Dial cx={cx2} cy={cy} r={$dialRadius}/>
        </g>
        {#each bandsData as bandData, bandIndex}
        <Band
        dialCx1={cx1} dialCx2={cx2} dialCy={cy} {bandIndex} data={bandData} {styleMap}/>
        {/each}
        <g transform='translate(80, {vBHeight-400})'>
            <Legend />
        </g>
    </Canvas>
</div>
<style>
    .main {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>