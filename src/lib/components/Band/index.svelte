<script lang="ts">
    import type {processedTimeInformation, StyleMap} from '$lib/types'
    import {dialRadius, bandSpacing, dialPadding, timeGranularity} from '$lib/stores'
    import {generateDots} from './utils'

    export let bandIndex: number;
    export let dialCx1: number;
    export let dialCx2: number;
    export let dialCy: number;

    export let data: processedTimeInformation[];
    export let styleMap: StyleMap;

    $: rho =  $dialRadius + $dialPadding + bandIndex*$bandSpacing // the radial coordinate is the same for all circles in the band
    $: dots = generateDots(rho, $timeGranularity, data, styleMap, dialCx1, dialCx2, dialCy)
</script>
<g>
    {#each dots as dot}
        <circle {...dot}/>
    {/each}
</g>