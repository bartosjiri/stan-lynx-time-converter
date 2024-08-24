import { writable, derived } from 'svelte/store';

import { EVENTS } from '../../../../config/events';

import { dayjs } from '$util/dayjs';

import type { Writable } from 'svelte/store';
import type { EventT } from '../types/timeConverter.types';

export const events: Writable<EventT[]> = writable(
	EVENTS?.sort((a: EventT, b: EventT) =>
		dayjs(a.announcedAt).isBefore(dayjs(b.announcedAt)) ? 1 : -1
	)
);

export const deltaMultiplier = derived(events, ($events) => {
	let totalMultiplier = 0;
	let totalCount = 0;

	for (const event of $events) {
		const announcedAt = dayjs(event.announcedAt);
		const promisedAt = dayjs(event.promisedAt);
		const deliveredAt = event.deliveredAt ? dayjs(event.deliveredAt) : dayjs();

		const announcedToPromisedDuration = promisedAt.diff(announcedAt);
		const announcedToDeliveredDuration = deliveredAt.diff(announcedAt);

		if (announcedToPromisedDuration !== 0) {
			const multiplier = announcedToDeliveredDuration / announcedToPromisedDuration;
			totalMultiplier += multiplier;
			totalCount++;
		}
	}

	return totalMultiplier / (totalCount || 1);
});
