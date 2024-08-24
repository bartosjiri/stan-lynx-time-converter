<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { DatePicker } from 'date-picker-svelte';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';

	import { Wrapper } from '$lib/layout';
	import { TextInput } from '$lib/primitives';

	import { calculateStanLynxTime } from '../helpers/calculateStanLynxTime';

	import { dayjs, DATETIME_FORMAT } from '$util/dayjs';

	let announcementDatetimePickerRef: HTMLDivElement;
	let announcementDatetime = dayjs().toDate();
	let isAnnouncementPickerOpen = false;

	let promisedDatetimePickerRef: HTMLDivElement;
	let promisedDatetime = dayjs().add(1, 'hours').toDate();
	let isPromisedPickerOpen = false;

	// $: if (dayjs(promisedDatetime).isBefore(dayjs(announcementDatetime))) {
	// 	announcementDatetime = dayjs(promisedDatetime).subtract(1, 'minute').toDate();
	// }

	const handleClickOutside = (e: Event) => {
		if (
			announcementDatetimePickerRef &&
			!announcementDatetimePickerRef.contains(e.target as Node)
		) {
			isAnnouncementPickerOpen = false;
		}
		if (promisedDatetimePickerRef && !promisedDatetimePickerRef.contains(e.target as Node)) {
			isPromisedPickerOpen = false;
		}
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('click', handleClickOutside);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('click', handleClickOutside);
		}
	});

	$: estimatedDeliveryDatetime = calculateStanLynxTime(
		dayjs(announcementDatetime),
		dayjs(promisedDatetime)
	);
</script>

<section id="time-converter" class:time-converter={true}>
	<Wrapper>
		<div class:container={true}>
			<div class:announcement={true}>
				<div class:title={true}>
					<span>Announcement time</span>
				</div>
				<div class:timing={true} bind:this={announcementDatetimePickerRef}>
					<TextInput
						label="Select date & time"
						value={dayjs(announcementDatetime).format(DATETIME_FORMAT)}
						on:focus={() => (isAnnouncementPickerOpen = true)}
						readonly
					/>
					{#if isAnnouncementPickerOpen}
						<div
							class:datepicker-dropdown={true}
							in:fly={{ duration: 200, y: '-0.4rem' }}
							out:fly={{ duration: 200, y: '-0.4rem' }}
						>
							<DatePicker bind:value={announcementDatetime} timePrecision="minute" />
						</div>
					{/if}
				</div>
			</div>
			<div class:promise={true}>
				<div class:title={true}>
					<span>Promised (Stan Lynx) time</span>
				</div>
				<div class:timing={true} bind:this={promisedDatetimePickerRef}>
					<TextInput
						label="Select date & time"
						value={dayjs(promisedDatetime).format(DATETIME_FORMAT)}
						on:focus={() => (isPromisedPickerOpen = true)}
						readonly
					/>
					{#if isPromisedPickerOpen}
						<div
							class:datepicker-dropdown={true}
							in:fly={{ duration: 200, y: '-0.4rem' }}
							out:fly={{ duration: 200, y: '-0.4rem' }}
						>
							<DatePicker bind:value={promisedDatetime} timePrecision="minute" />
						</div>
					{/if}
				</div>
			</div>
			<div class:arrow={true}>
				<svelte:component this={ArrowRight} weight="thin" />
			</div>
			<div class:output={true}>
				<div class:title={true}>
					<span>Actual time</span>
				</div>
				<div class:timing={true}>
					<span>{dayjs(estimatedDeliveryDatetime).format(DATETIME_FORMAT)}</span>
				</div>
			</div>
		</div>
	</Wrapper>
</section>

<style lang="scss">
	.time-converter {
		.container {
			display: grid;
			grid-template-columns: 1fr 1fr auto 1fr;
			align-items: center;
			column-gap: 1.6rem;
			padding: 1.6rem;
			background: var(--color-background-02);
			border: 1px solid var(--color-gray-04);
			border-radius: 1.2rem;

			@include breakpoint($breakpoint-mobile) {
				grid-template-columns: 1fr;
				row-gap: 1.6rem;
			}

			.arrow {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: auto;

				@include breakpoint($breakpoint-mobile) {
					transform: rotate(90deg);
				}

				:global(svg) {
					height: 4.8rem;
					width: auto;
					color: var(--color-gray-06);
				}
			}

			.announcement,
			.promise,
			.output {
				display: flex;
				flex-direction: column;
				justify-content: center;
				row-gap: 0.4rem;
			}

			.announcement,
			.promise {
				position: relative;

				.timing {
					:global(.text-input) {
						height: auto;

						:global(.input input) {
							font-size: var(--typography-size-04);
							font-weight: 500;
						}
					}

					.datepicker-dropdown {
						position: absolute;
						top: 100%;
						top: calc(100% + 1.2rem);
						z-index: 1000;

						:global(.date-time-picker) {
							transform: scale(1.66);
							transform-origin: top left;

							:global(select option) {
								font-size: var(--typography-size-02);
							}
						}
					}
				}
			}

			.output {
				align-items: flex-end;

				@include breakpoint($breakpoint-mobile) {
					align-items: flex-start;
				}

				.timing {
					grid-area: timing;
					display: flex;
					align-items: center;
					column-gap: 1.2rem;
					height: 4.8rem;

					span {
						font-size: var(--typography-size-04);
						font-weight: 500;
					}
				}
			}
		}
	}
</style>
