import type { EventT } from '../src/modules/time-converter';

// @NOTE: Read the README for more information on how to use this file

export const EVENTS: EventT[] = [
	{
		name: '"Dropping some news"',
		announcedAt: '2024-07-01T09:27:00.000Z',
		announcementReferences: [
			{
				name: 'Discord message',
				url: 'https://discord.com/channels/902609415281201253/902609416048742512/1257266348715937883'
			}
		],
		promisedAt: '2024-07-01T21:59:59.999Z',
		deliveredAt: '2024-07-01T20:06:00.000Z',
		deliveryReferences: [
			{
				name: 'Kickstarter update',
				url: 'https://www.kickstarter.com/projects/stanlarroque/lynx/posts/4139700'
			}
		]
	},
	{
		name: '"I\'ll be back next week"',
		announcedAt: '2024-02-22T20:22:00.000Z',
		announcementReferences: [
			{
				name: 'Discord message',
				url: 'https://discord.com/channels/902609415281201253/902609416048742512/1210320658664390717'
			}
		],
		promisedAt: '2024-02-24T23:00:00.000Z',
		deliveredAt: '2024-03-07T18:00:00.000Z',
		deliveryReferences: [
			{
				name: 'Youtube stream',
				url: 'https://www.youtube.com/live/n6dcgLLu7wo'
			}
		]
	},
	{
		name: 'Unboxing and shipping livestream',
		announcedAt: '2023-08-25T21:07:00.000Z',
		announcementReferences: [
			{
				name: 'Tweet',
				url: 'https://x.com/stanlarroque/status/1695166100428722227'
			}
		],
		promisedAt: '2023-08-29T17:00:00.000Z',
		deliveredAt: '2023-08-29T17:00:00.000Z',
		deliveryReferences: [
			{
				name: 'Youtube stream',
				url: 'https://www.youtube.com/watch?v=ymSmnWiVM-Y'
			}
		]
	},
	{
		name: 'Lynx R1 Early Bird delivery',
		announcedAt: '2021-10-04T22:00:00.000Z',
		announcementReferences: [
			{
				name: 'Kickstarter campaign',
				url: 'https://www.kickstarter.com/projects/stanlarroque/lynx/'
			}
		],
		promisedAt: '2022-03-31T22:00:00.000Z',
		deliveredAt: null // @TODO: Update only once late backer #s have received their units
	}
];
