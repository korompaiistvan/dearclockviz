<script lang="ts">
    export let labelFor: string;
    export let labelString: string;
    export let value: string | undefined = undefined;

</script>
<div class='cpRow'>
    <div class='header'>
    <label for={labelFor}>{labelString}</label>
    {#if value}
        <p>{value}</p>
    {:else}
        <slot />
    {/if}

    </div>
    {#if value}
        <slot></slot>
    {/if}
</div>
<style>
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0.2rem;
    }
    .cpRow {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0.8rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>