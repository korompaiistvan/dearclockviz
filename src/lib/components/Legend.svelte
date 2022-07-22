<script lang="ts">
    import { styleMap } from "$lib/styleMap";
    import type { ActivityType } from "$lib/types";
    const styleRules = Object.keys(styleMap).map(key => {return {key, style: styleMap[key as ActivityType]}})

    const vOffset = 80;
    const textPos = 120;
</script>

<g class='wrapper'>
    {#each styleRules as styleRule, idx}
        <g class='row'>
            <circle {...styleRule.style} cx=20 cy={vOffset*idx}/> 
            <text x={textPos} y={vOffset*idx}>{styleRule.key}</text>
        </g>
    {/each}            
</g>
<style>
    text {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 2rem;
    }
</style>