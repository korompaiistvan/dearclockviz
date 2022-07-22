<script lang='ts'>
    export let vBWidth = 2970;
    export let vBHeight = 2100;
</script>
<div class='mockupWrapper'>
    <svg viewBox='0 0 {vBWidth} {vBHeight}' preserveAspectRatio='xMidYMid meet'>
        <slot />
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