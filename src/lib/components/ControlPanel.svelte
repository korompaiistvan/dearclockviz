<script lang="ts">
    import {bandSpacing, dialPaddingFactor, bandGroupSpacingFactor, timeGranularity, radiusFactor} from '$lib/stores'
    import ControlPanelRow from './ControlPanelRow.svelte';
</script>
<div class='controlWrapper'>
    <ControlPanelRow labelFor='bandSpacing' labelString='Band spacing' value='{($bandSpacing/10).toFixed(2)}mm'>
        <input id='bandSpacing' type='range' min=0 max=300 bind:value={$bandSpacing}>
    </ControlPanelRow>
    <ControlPanelRow labelFor='dialPaddingFactor' labelString='Dial padding' value='{$dialPaddingFactor.toFixed(2)}x'>
        <input id='dialPaddingFactor' type='range' min=0.0 max=3.0  step=0.05 bind:value={$dialPaddingFactor}>
    </ControlPanelRow>
    <ControlPanelRow labelFor='bandGroupSpacingFactor' labelString='Space between two circles' value='{$bandGroupSpacingFactor.toFixed(2)}x'>
        <input id='bandGroupSpacingFactor' type='range' min=0.0 max=3.0 step=0.05 bind:value={$bandGroupSpacingFactor}>
    </ControlPanelRow>
    <ControlPanelRow labelFor='timeGranularity' labelString='Minutes per dot'>
        <select id='timeGranularity' bind:value={$timeGranularity}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
        </select>
    </ControlPanelRow>
</div>
<style>
    .controlWrapper {
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin-top: 8rem;
        width: 20%;
    }
</style>