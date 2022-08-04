import type { rawTimeData } from './types';

export const data: rawTimeData = {
	Tamas: [
		{ start: '00:00', end: '02:40', type: 'sleep' },
		{ start: '02:40', end: '03:20', type: 'unpaidWork' },
		{ start: '03:20', end: '06:00', type: 'sleep' },
		{ start: '06:00', end: '06:20', type: 'unpaidWork' },
		{ start: '06:20', end: '07:20', type: 'fun' },
		{ start: '07:20', end: '08:00', type: 'unpaidWork' },
		{ start: '08:00', end: '08:20', type: 'commute' },
		{ start: '08:20', end: '09:00', type: 'unpaidWork' },
		{ start: '09:00', end: '11:00', type: 'paidWork' },
		{ start: '11:00', end: '11:20', type: 'fun' },
		{ start: '11:20', end: '12:00', type: 'paidWork' },
		{ start: '12:00', end: '13:00', type: 'fun' },
		{ start: '13:00', end: '15:00', type: 'paidWork' },
		{ start: '15:00', end: '15:20', type: 'fun' },
		{ start: '15:20', end: '16:00', type: 'commute' },
		{ start: '16:00', end: '17:00', type: 'fun' },
		{ start: '17:00', end: '18:00', type: 'unpaidWork' },
		{ start: '18:00', end: '19:00', type: 'paidWork' },
		{ start: '19:00', end: '19:40', type: 'fun' },
		{ start: '19:40', end: '21:00', type: 'unpaidWork' },
		{ start: '21:00', end: '22:00', type: 'fun' },
		{ start: '22:00', end: '24:00', type: 'sleep' }
	],
	Julcsi: [
		{ start: '00:00', end: '00:20', type: 'fun' },
		{ start: '00:20', end: '09:00', type: 'sleep' },
		{ start: '09:00', end: '09:40', type: 'unpaidWork' },
		{ start: '09:40', end: '10:00', type: 'paidWork' },
		{ start: '10:00', end: '10:20', type: 'commute' },
		{ start: '10:20', end: '10:40', type: 'fun' },
		{ start: '10:40', end: '12:00', type: 'paidWork' },
		{ start: '12:00', end: '12:40', type: 'fun' },
		{ start: '12:40', end: '18:20', type: 'paidWork' },
		{ start: '18:20', end: '19:00', type: 'commute' },
		{ start: '19:00', end: '22:00', type: 'fun' },
		{ start: '22:00', end: '22:40', type: 'commute' },
		{ start: '22:40', end: '24:00', type: 'unpaidWork' }
	],
	Pisti: [
		{ start: '00:00', end: '08:00', type: 'sleep' },
		{ start: '08:00', end: '08:20', type: 'unpaidWork' },
		{ start: '08:20', end: '09:00', type: 'fun' },
		{ start: '09:00', end: '09:40', type: 'commute' },
		{ start: '09:40', end: '12:00', type: 'paidWork' },
		{ start: '12:00', end: '13:00', type: 'fun' },
		{ start: '13:00', end: '18:20', type: 'paidWork' },
		{ start: '18:20', end: '19:00', type: 'commute' },
		{ start: '19:00', end: '20:00', type: 'unpaidWork' },
		{ start: '20:00', end: '23:20', type: 'fun' },
		{ start: '23:20', end: '24:00', type: 'sleep' }
	]
};
