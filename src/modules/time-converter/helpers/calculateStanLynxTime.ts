import { get } from 'svelte/store';

import { deltaMultiplier } from '../stores/timeConverter.store';

import { dayjs } from '$util/dayjs';

export const calculateStanLynxTime = (
	announcementDatetime: dayjs.Dayjs,
	promisedDatetime: dayjs.Dayjs
) => {
	const currentDeltaMultiplier = get(deltaMultiplier);

	const announcementDatetimeMillis = announcementDatetime.valueOf();
	const promisedDatetimeMillis = promisedDatetime.valueOf();

	const announcedToPromisedDuration = promisedDatetimeMillis - announcementDatetimeMillis;
	const estimatedDuration = announcedToPromisedDuration * currentDeltaMultiplier;
	const estimatedExecutionMillis = announcementDatetimeMillis + estimatedDuration;
	return dayjs(estimatedExecutionMillis).toDate();
};
