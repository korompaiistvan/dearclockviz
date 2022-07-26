import type { StyleMap } from '$lib/types';
const radiusFactor = 1;

export const styleMap: StyleMap = {
	sleep: { r: 8.5 * radiusFactor, fill: '#4682B4' }, //confirmed
	paidWork: { r: 27.5 * radiusFactor, fill: '#c0c0c0' }, //confirmed
	fun: { r: 26.25 * radiusFactor, fill: '#ffd55f' }, //confirmed
	unpaidWork: { r: 27.5 * radiusFactor, fill: '#bc7361' }, //confirmed
	commute: { r: 13 * radiusFactor, fill: '#C0C0C0' }
};
