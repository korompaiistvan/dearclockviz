import type { rawTimeData } from './types';

export const data: rawTimeData = {
	Tamas: [
		{ start: '00:00', end: '06:30', type: 'sleep' },
		{ start: '06:30', end: '08:00', type: 'unpaidWork' },
		{ start: '08:00', end: '08:30', type: 'commute' },
		{ start: '08:30', end: '12:00', type: 'paidWork' },
		{ start: '12:00', end: '12:45', type: 'fun' }, // ebéd
		{ start: '12:45', end: '16:15', type: 'paidWork' },
		{ start: '16:15', end: '17:30', type: 'unpaidWork' },
		{ start: '17:30', end: '18:00', type: 'fun' },
		{ start: '18:00', end: '19:00', type: 'paidWork' },
		{ start: '19:00', end: '21:30', type: 'fun' },
		{ start: '21:30', end: '24:00', type: 'sleep' }
	],
	Julcsi: [
		{ start: '00:00', end: '00:30', type: 'fun' },
		{ start: '00:30', end: '08:45', type: 'sleep' },
		{ start: '08:45', end: '09:45', type: 'fun' },
		{ start: '09:45', end: '10:00', type: 'paidWork' },
		{ start: '10:00', end: '10:30', type: 'commute' },
		{ start: '10:30', end: '10:45', type: 'fun' },
		{ start: '10:45', end: '12:00', type: 'paidWork' },
		{ start: '12:00', end: '13:00', type: 'fun' },
		{ start: '13:00', end: '17:15', type: 'paidWork' },
		{ start: '17:15', end: '17:45', type: 'commute' },
		{ start: '17:45', end: '19:00', type: 'fun' },
		{ start: '19:00', end: '19:30', type: 'commute' },
		{ start: '19:30', end: '24:00', type: 'fun' }
	],
	Pisti: [
		{ start: '00:00', end: '08:00', type: 'sleep' },
		{ start: '08:00', end: '08:30', type: 'unpaidWork' },
		{ start: '08:30', end: '09:15', type: 'fun' },
		{ start: '09:15', end: '09:45', type: 'commute' },
		{ start: '09:45', end: '12:00', type: 'paidWork' },
		{ start: '12:00', end: '13:00', type: 'fun' },
		{ start: '13:00', end: '18:15', type: 'paidWork' },
		{ start: '18:15', end: '18:45', type: 'commute' },
		{ start: '18:45', end: '19:30', type: 'unpaidWork' },
		{ start: '19:30', end: '22:30', type: 'fun' },
		{ start: '22:30', end: '24:00', type: 'sleep' }
	]
};
