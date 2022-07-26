<script lang="ts">
    import {bandSpacing, dialPaddingFactor, bandGroupSpacingFactor, timeGranularity, radiusFactor} from '$lib/stores'
    import ControlPanelRow from './ControlPanelRow.svelte';
</script>
<div class='controlWrapper'>
    <ControlPanelRow>
        <label for='bandSpacing'>Band spacing</label>
        <input id='bandSpacing' type='range' min=0 max=300 bind:value={$bandSpacing}>
    </ControlPanelRow>
    <ControlPanelRow>
        <label for='timeGranularity'>Minutes per dot</label>
        <select id='timeGranularity' bind:value={$timeGranularity}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
        </select>
    </ControlPanelRow>
    <ControlPanelRow>
        <label for='dialPaddingFactor'>Padding between dial and bands</label>
        <input id='dialPaddingFactor' type='range' min=0.0 max=3.0  step=0.05 bind:value={$dialPaddingFactor}>
    </ControlPanelRow>
    <ControlPanelRow>
        <label for='bandGroupSpacingFactor'>Space between two circles</label>
        <input id='bandGroupSpacingFactor' type='range' min=0.0 max=3.0 step=0.05 bind:value={$bandGroupSpacingFactor}>
    </ControlPanelRow>
</div>
<style>
    .controlWrapper {
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin-top: 8rem;
    }
</style>