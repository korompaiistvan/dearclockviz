import type {
	rawTimeData,
	processedTimeData,
	TimestampString,
	Name,
	processedTimeInformation
} from '$lib/types';

export default function processData(data: rawTimeData): processedTimeData {
	type wipData = {
		[key in Name]?: processedTimeInformation[];
	};
	const returnObject: wipData = {};
	for (const key in data) {
		const processedData = data[key as Name].map((ti) => {
			return {
				...ti,
				start: convertTimestampToMinutesOfDay(ti.start),
				end: convertTimestampToMinutesOfDay(ti.end)
			};
		});
		returnObject[key as Name] = processedData;
	}
	return returnObject as processedTimeData;
}

function convertTimestampToMinutesOfDay(timestamp: TimestampString): number {
	return timestamp
		.split(':')
		.map((v, idx) => {
			const intValue = parseInt(v);
			return idx == 0 ? intValue * 60 : intValue;
		})
		.reduce((pv, cv) => pv + cv, 0);
}
