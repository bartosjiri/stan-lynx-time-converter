<script lang="ts">
	import { fly } from 'svelte/transition';
	import ChatCircleText from 'phosphor-svelte/lib/ChatCircleText';
	import ArrowSquareOut from 'phosphor-svelte/lib/ArrowSquareOut';

	import { Wrapper, LINK_GITHUB_REPO } from '$lib/layout';
	import { Button } from '$lib/primitives';
	import EventItem from './EventItem.svelte';

	import { events } from '$modules/time-converter';

	const INITIAL_COUNT = 3;

	let isExpanded = false;
</script>

<section id="events" class:events-list={true}>
	<Wrapper>
		<div class:container={true}>
			<div class:title={true}>
				<svelte:component this={ChatCircleText} />
				<h2>Events</h2>
			</div>
			<div class:list={true}>
				{#each $events.slice(0, INITIAL_COUNT) as event}
					<EventItem {event} />
				{/each}
				{#if isExpanded}
					<div class:list={true} in:fly={{ duration: 250, y: '-2.4rem' }}>
						{#each $events.slice(INITIAL_COUNT) as event}
							<EventItem {event} />
						{/each}
					</div>
				{/if}
			</div>
			<div class:actions={true}>
				{#if !isExpanded}
					<Button on:click={() => (isExpanded = true)}>Show all events</Button>
				{/if}
				<Button href={LINK_GITHUB_REPO} target="_blank" icon={ArrowSquareOut}>Add new event</Button>
			</div>
		</div>
	</Wrapper>
</section>

<style lang="scss">
	.events-list {
		margin: 4.8rem 0;

		.container {
			display: flex;
			flex-direction: column;

			.title {
				display: flex;
				justify-content: center;
				align-items: center;
				column-gap: 0.8rem;
				color: var(--color-gray-09);
				margin-bottom: 1.6rem;

				:global(svg) {
					height: 1.6rem;
					width: auto;
				}

				h2 {
					font-size: var(--typography-size-03);
				}
			}

			.list {
				display: flex;
				flex-direction: column;
				row-gap: 1.6rem;
			}

			.actions {
				display: flex;
				justify-content: center;
				align-items: center;
				column-gap: 1.2rem;
				margin-top: 1.6rem;
			}
		}
	}
</style>
