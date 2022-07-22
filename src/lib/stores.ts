import { writable, derived } from 'svelte/store';

export const dialRadius = writable(250);
export const bandSpacing = writable(120);

export const dialPaddingFactor = writable(1.0);
export const dialPadding = derived(
	[dialPaddingFactor, bandSpacing],
	([$dialPaddingFactor, $bandSpacing]) => $dialPaddingFactor * $bandSpacing
);

export const bandGroupSpacingFactor = writable(1.0);
export const bandGroupSpacing = derived(
	[bandGroupSpacingFactor, bandSpacing],
	([$bandGroupSpacingFactor, $bandSpacing]) => $bandGroupSpacingFactor * $bandSpacing
);

export const timeGranularity = writable(15); //minutes

export const radiusFactor = writable(0.15);
