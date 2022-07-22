<script lang="ts">
    import Dial from "$lib/components/Dial.svelte";
    import Band from "$lib/components/Band/index.svelte";
    import Canvas from "$lib/components/Canvas.svelte";
    import processData from "$lib/processData";
    import { data } from "$lib/data";
    import type { Name, StyleMap } from "$lib/types";

    import {dialRadius, bandSpacing, dialPadding, bandGroupSpacing} from '$lib/stores'

    const vBWidth = 2970;
    const vBHeight = 2100;

    const cy =  vBHeight/2
    $: cxOffset = $bandGroupSpacing / 2 + 2 * $bandSpacing + $dialPadding + $dialRadius
    $: cx1 = vBWidth/2 - cxOffset
    $: cx2 = vBWidth/2 + cxOffset
    
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

<Canvas {vBHeight} {vBWidth}>
    <Dial cx={cx1} cy={cy} r={$dialRadius}/>
    <Dial cx={cx2} cy={cy} r={$dialRadius}/>
    {#each bandsData as bandData, bandIndex}
        <Band
            dialCx1={cx1} dialCx2={cx2} dialCy={cy} {bandIndex} data={bandData} {styleMap}/>
    {/each}
</Canvas>