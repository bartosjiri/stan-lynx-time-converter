export type EventT = {
	name: string;
	description?: string;
	announcedAt: string;
	announcementReferences?: ReferenceT[] | null;
	promisedAt: string;
	deliveredAt?: string | null;
	deliveryReferences?: ReferenceT[] | null;
};

export type ReferenceT = {
	name: string;
	url: string;
};
