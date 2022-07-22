export interface processedTimeInformation {
	type: ActivityType;
	start: number;
	end: number;
}

export interface rawTimeInformation {
	type: ActivityType;
	start: TimestampString;
	end: TimestampString;
}

export type Name = 'Tamas' | 'Julcsi' | 'Pisti';

export type rawTimeData = {
	[key in Name]: rawTimeInformation[];
};

export type processedTimeData = {
	[key in Name]: processedTimeInformation[];
};

export type TimestampString = `${string}:${string}`;

export type ActivityType = 'fun' | 'sleep' | 'paidWork' | 'unpaidWork' | 'commute';

interface StyleStatement {
	r: number;
	fill: string;
}
export type StyleMap = {
	[key in ActivityType]: StyleStatement;
};
