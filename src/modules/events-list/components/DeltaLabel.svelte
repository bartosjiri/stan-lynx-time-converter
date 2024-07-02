<script lang="ts">
	import { dayjs } from '$util/dayjs';

	export let datetimes: string[] | undefined[];

	let difference: null | number = null;

	$: if (datetimes?.length >= 2) {
		const [start, end] = datetimes.map(dayjs);
		difference = end.diff(start);
	}
</script>

{#if difference !== null}
	<div class:delta-label={true} class:--variant-danger={difference > 24 * 60 * 60 * 1000}>
		<span>
			{#if difference === 0}
				On time
			{:else}
				{difference >= 0 ? '+' : '-'}{dayjs.duration(difference, 'milliseconds').humanize()}
			{/if}
		</span>
	</div>
{/if}

<style lang="scss">
	.delta-label {
		--color-foreground: var(--color-success-01);
		--color-background: var(--color-success-02);

		display: inline-flex;
		align-items: center;
		height: 2.4rem;
		color: var(--color-foreground);
		background: var(--color-background);
		padding: 0 0.8rem;
		border-radius: 9999px;

		span {
			font-size: 1.4rem;
			font-weight: 500;
			white-space: nowrap;
		}

		&.--variant-danger {
			--color-foreground: var(--color-danger-01);
			--color-background: var(--color-danger-02);
		}
	}
</style>
