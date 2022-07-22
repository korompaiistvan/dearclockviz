<script lang="ts">
    import Dial from "$lib/components/Dial.svelte";
    import Band from "$lib/components/Band.svelte";
    import processData from "$lib/processData";
    import { data } from "$lib/data";
    import type { Name, StyleMap } from "$lib/types";

    const vBWidth = 2970;
    const vBHeight = 2100;

    const dialRadius = 250;
    const bandSpacing = 60;
    const dialPadding = bandSpacing;
    const bandGroupSpacing = bandSpacing ;
    const timeGranularity = 10 // minutes

    const cy =  vBHeight/2
    const cxOffset = bandGroupSpacing/2 + 2*bandSpacing + dialPadding + dialRadius
    const cx1 = vBWidth/2 - cxOffset
    const cx2 = vBWidth/2 + cxOffset
    
    const processedData = processData(data)
    const bandOrder: Name[] = ['Tamas', 'Pisti', 'Julcsi']
    const bandsData = bandOrder.map(n => processedData[n])

    const radiusFactor = 0.15

    const styleMap: StyleMap = {
        'sleep':        {r: 25 * radiusFactor,  fill: '#c99da3'},
        'paidWork':     {r: 100 * radiusFactor, fill: '#2191FB'},
        'fun':          {r: 75 * radiusFactor,  fill: '#42d9c8'},
        'unpaidWork':   {r: 75 * radiusFactor,  fill: '#CCAD8F'},
        'commute':      {r: 50 * radiusFactor,  fill: 'grey'},
    }

</script>

<div class='mockupWrapper'>
    <svg viewBox='0 0 {vBWidth} {vBHeight}' preserveAspectRatio='xMidYMid meet'>
        <Dial cx={cx1} cy={cy} r={dialRadius}/>
        <Dial cx={cx2} cy={cy} r={dialRadius}/>
        {#each bandsData as bandData, bandIndex}
            <Band dialCx1={cx1} dialCx2={cx2} dialCy={cy} {dialRadius} {bandSpacing} {dialPadding} {timeGranularity} {bandIndex} data={bandData} {styleMap}/>
        {/each}
    </svg>
</div>

<style>
    .mockupWrapper {
        --innerPadding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 2 * var(--innerPadding));
        padding: var(--innerPadding);
    }

    svg {
        border: 0.5px solid #a8a8a8;
        height: 100%;
    }
</style>