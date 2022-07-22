import type { processedTimeInformation, StyleMap } from '$lib/types';
export function generateDots(
	rho: number,
	timeGranularity: number,
	data: processedTimeInformation[],
	styleMap: StyleMap,
	dialCx1: number,
	dialCx2: number,
	dialCy: number
) {
	interface Dot {
		cx: number;
		cy: number;
		r: number;
		fill: string;
	}
	const dots: Dot[] = [];
	const minutesInADay = 60 * 24;
	for (let minuteOfDay = 0; minuteOfDay < minutesInADay; minuteOfDay += timeGranularity) {
		const isAfternoon = minuteOfDay >= minutesInADay / 2;

		const minuteOfHalfDay = isAfternoon ? minuteOfDay - minutesInADay / 2 : minuteOfDay;
		let theta = (minuteOfHalfDay / (minutesInADay / 2)) * 2 * Math.PI;
		if (!isAfternoon) {
			// im not sure about the order of these two operations
			// but 1 pi is a special case as its the same added and subtracted
			// theta *= -1
			theta += Math.PI;
			theta += (timeGranularity / (minutesInADay / 2)) * 2 * Math.PI;
		}

		const dialCx = isAfternoon ? dialCx1 : dialCx2;
		const cx = Math.cos(theta) * rho + dialCx;
		const cy = Math.sin(theta) * rho + dialCy;

		const matchingTimeRecord = data.find((ti) => {
			return ti.start <= minuteOfDay && ti.end > minuteOfDay;
		});
		if (!matchingTimeRecord) continue;
		const type = matchingTimeRecord.type;
		const style = styleMap[type];
		dots.push({ cx, cy, ...style });
	}
	return dots;
}
