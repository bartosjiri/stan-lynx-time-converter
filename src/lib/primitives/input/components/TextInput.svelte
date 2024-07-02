<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ComponentType } from 'svelte';

	export let ref: HTMLInputElement | null = null;
	export let label: string;
	export let icon: ComponentType | undefined = undefined;
	export let value: string | number | null = null;
	export let readonly = false;
	export let disabled = false;

	$: inputProps = {
		class: ['text-input', disabled && '--disabled', $$restProps.class].filter(Boolean).join(' ')
	};

	const dispatch = createEventDispatcher();

	const parseValue = (value: string | null) => {
		return value === '' ? null : value;
	};

	const handleInput = (e: Event) => {
		if (disabled) return;
		value = parseValue((e.target as HTMLInputElement).value);
		dispatch('input', value);
	};

	const handleChange = (e: Event) => {
		dispatch('change', parseValue((e.target as HTMLInputElement).value));
	};
</script>

<div {...inputProps}>
	<div
		class:input={true}
		on:click={() => ref?.focus()}
		on:keydown={() => {}}
		role="textbox"
		tabindex="0"
	>
		{#if icon}
			<div class:icon={true}>
				<svelte:component this={icon} />
			</div>
		{/if}
		<input
			bind:this={ref}
			bind:value
			on:input={handleInput}
			on:change={handleChange}
			on:keydown
			on:keyup
			on:focus
			on:blur
			on:paste
			type="text"
			placeholder={label}
			autocapitalize="none"
			autocorrect="off"
			{disabled}
			{readonly}
		/>
	</div>
</div>

<style lang="scss">
	.text-input {
		--color-foreground: var(--color-foreground-01);
		--color-background: transparent;
		--color-border: var(--color-gray-04);
		--color-foreground-hover: var(--color-foreground-01);
		--color-background-hover: var(--color-gray-01);
		--color-border-hover: var(--color-gray-05);
		--color-foreground-active: var(--color-foreground-01);
		--color-background-active: var(--color-gray-02);
		--color-border-active: var(--color-gray-06);
		--color-foreground-disabled: var(--color-gray-07);
		--color-background-disabled: var(--color-gray-01);
		--color-border-disabled: var(--color-gray-02);

		position: relative;
		height: 4.2rem;

		.input {
			display: flex;
			align-items: center;
			color: var(--color-foreground);
			background: var(--color-background);
			padding: 0 1.6rem;
			border: 1px solid var(--color-border);
			border-radius: 0.5rem;
			transition-property: color, background, border;
			transition-duration: var(--transition-duration-01);
			transition-timing-function: var(--transition-function-01);

			.icon {
				display: flex;
				margin-right: 0.8rem;

				:global(svg) {
					height: 1.6rem;
				}
			}

			input {
				width: 100%;
				display: block;
				font-size: 1.4rem;
				font-weight: 400;
				padding: 1.2rem 0;
				margin-bottom: -1px;
				background: transparent;
				border: none;
				outline: none;
			}

			&:hover {
				color: var(--color-foreground-hover);
				background: var(--color-background-hover);
				border-color: var(--color-border-hover);
			}

			&:focus-within {
				color: var(--color-foreground-active);
				background: var(--color-background-active);
				border-color: var(--color-border-active);
			}
		}

		&.--disabled {
			.input {
				color: var(--color-foreground-disabled);
				background: var(--color-background-disabled);
				border-color: var(--color-border-disabled);
				cursor: not-allowed;

				input {
					cursor: not-allowed;
				}
			}
		}
	}
</style>
