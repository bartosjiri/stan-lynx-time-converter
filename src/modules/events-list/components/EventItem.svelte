<script lang="ts">
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import Link from 'phosphor-svelte/lib/Link';

	import { Avatar, Button } from '$lib/primitives';
	import DeltaLabel from './DeltaLabel.svelte';

	import { dayjs, DATETIME_FORMAT } from '$util/dayjs';

	import type { EventT } from '$modules/time-converter';

	export let event: EventT;
</script>

<div class:event-item={true}>
	<div class:intro={true}>
		<div class:name={true}>
			<span>{event.name}</span>
		</div>
		<div class:datetime={true}>
			<span>{dayjs(event.announcedAt).format(DATETIME_FORMAT)}</span>
		</div>
	</div>
	<div class:details={true}>
		<div class:announcement={true}>
			<div class:avatar={true}>
				<Avatar src="/assets/images/stan-announcement.png" />
			</div>
			<div class:timing={true}>
				<span>{dayjs(event.promisedAt).format(DATETIME_FORMAT)}</span>
			</div>
			<div class:references={true}>
				{#each event.announcementReferences || [] as { name, url }}
					<Button href={url} target="_blank" size="small" variant="subtle" icon={Link}>
						{name}
					</Button>
				{/each}
			</div>
		</div>
		<div class:arrow={true}>
			<svelte:component this={ArrowRight} weight="thin" />
		</div>
		{#if event.deliveredAt}
			<div class:delivery={true}>
				<div class:avatar={true}>
					<Avatar src="/assets/images/stan-delivery.png" />
				</div>
				<div class:timing={true}>
					<DeltaLabel datetimes={[event.promisedAt, event.deliveredAt]} />
					<span>{dayjs(event.deliveredAt).format(DATETIME_FORMAT)}</span>
				</div>
				<div class:references={true}>
					{#if event.deliveredAt}
						{#each event.deliveryReferences || [] as { name, url }}
							<Button href={url} target="_blank" size="small" variant="subtle" icon={Link}>
								{name}
							</Button>
						{/each}
					{/if}
				</div>
			</div>
		{:else}
			<div class:promise={true}>
				<div class:avatar={true}>
					<Avatar src="/assets/images/stan-promise.png" />
				</div>
				<div class:timing={true}>
					<DeltaLabel datetimes={[event.promisedAt, dayjs().toISOString()]} />
					<span>(to be delivered)</span>
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.event-item {
		display: flex;
		flex-direction: column;
		row-gap: 0.8rem;
		padding: 1.6rem;
		background: var(--color-background-02);
		border: 1px solid var(--color-gray-04);
		border-radius: 1.2rem;

		@include breakpoint($breakpoint-mobile) {
			row-gap: 2.4rem;
		}

		.intro {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.name {
				display: flex;
				justify-content: center;

				span {
					font-size: 2.4rem;
					font-weight: 600;
					text-align: center;
				}
			}
		}

		.details {
			display: grid;
			grid-template-columns: 1fr auto 1fr;
			align-items: center;
			column-gap: 1.6rem;

			@include breakpoint($breakpoint-mobile) {
				grid-template-columns: 1fr;
				row-gap: 1.6rem;
			}

			.announcement,
			.promise,
			.delivery {
				display: grid;
				column-gap: 1.2rem;
				row-gap: 0.4rem;

				.avatar {
					grid-area: avatar;
				}

				.timing {
					grid-area: timing;
					display: flex;
					align-items: center;
					column-gap: 1.2rem;

					span {
						font-size: var(--typography-size-04);
						font-weight: 500;
						white-space: nowrap;

						&.empty {
							color: var(--color-gray-05);
							font-style: italic;
							font-weight: 400;
						}
					}
				}

				.references {
					grid-area: references;
					display: flex;
					column-gap: 0.8rem;

					a {
						display: grid;
						column-gap: 0.8rem;
					}
				}
			}

			.arrow {
				display: flex;
				justify-content: center;
				align-items: center;

				@include breakpoint($breakpoint-mobile) {
					transform: rotate(90deg);
				}

				:global(svg) {
					height: 4.8rem;
					width: auto;
					color: var(--color-gray-06);
				}
			}

			.announcement {
				grid-template-columns: auto 1fr;
				grid-template-areas: 'avatar timing' 'avatar references';
				grid-template-rows: auto auto;
			}

			.delivery {
				grid-template-columns: 1fr auto;
				grid-template-rows: auto auto;
				grid-template-areas: 'timing avatar' 'references avatar';

				.timing,
				.references {
					justify-content: flex-end;
				}
			}

			.promise {
				grid-template-columns: 1fr auto;
				grid-template-areas: 'timing avatar';

				.timing {
					justify-content: flex-end;

					span {
						color: var(--color-gray-05);
						font-style: italic;
						font-weight: 400;
					}
				}

				.avatar {
					:global(img) {
						filter: grayscale(100%) contrast(0.66);
					}
				}
			}
		}
	}
</style>
