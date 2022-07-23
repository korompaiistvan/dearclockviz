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
    $: cxOffset = $bandGroupSpacing / 2 + $dialPadding + $dialRadius
    $: cx1 = vBWidth/2 - cxOffset
    $: cx2 = vBWidth/2 + cxOffset
    
    const processedData = processData(data)
    const bandOrder: Name[] = ['Tamas', 'Pisti', 'Julcsi']
    const bandsData = bandOrder.map(n => processedData[n])
</script>
<div class="main">
    <ControlPanel />
    <Canvas {vBHeight} {vBWidth}>
        {#each bandsData as bandData, bandIndex}
            <g transform='translate({(bandIndex-1)*vBWidth/7 * 2}) rotate(90,{vBWidth/2},{vBHeight/2})'>
                <Dial cx={cx1} cy={cy} r={$dialRadius}/>
                <Dial cx={cx2} cy={cy} r={$dialRadius}/>
                <Band
                dialCx1={cx1} dialCx2={cx2} dialCy={cy} bandIndex={0} data={bandData} {styleMap}/>
            </g>
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