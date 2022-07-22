import { writable } from 'svelte/store';

const bandSpacingDefaultValue = 60;
export const dialRadius = writable(250);
export const bandSpacing = writable(60);
export const dialPadding = writable(bandSpacingDefaultValue);
export const bandGroupSpacing = writable(bandSpacingDefaultValue);
export const timeGranularity = writable(10); //minutes
export const radiusFactor = writable(0.15);
