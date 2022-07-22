import type { StyleMap } from '$lib/types';
const radiusFactor = 0.15;

export const styleMap: StyleMap = {
	sleep: { r: 25 * radiusFactor, fill: '#c99da3' },
	paidWork: { r: 100 * radiusFactor, fill: '#2191FB' },
	fun: { r: 75 * radiusFactor, fill: '#42d9c8' },
	unpaidWork: { r: 75 * radiusFactor, fill: '#CCAD8F' },
	commute: { r: 50 * radiusFactor, fill: 'grey' }
};
