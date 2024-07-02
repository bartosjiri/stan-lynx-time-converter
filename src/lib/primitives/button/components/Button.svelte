<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let size: 'small' | 'base' = 'base';
	export let variant: 'primary' | 'secondary' | 'subtle' | 'ghost' = 'primary';
	export let icon: ComponentType | undefined = undefined;
	export let href: string | undefined = undefined;
	export let disabled = false;

	$: hasIconOnly = icon && !$$slots.default;
	$: buttonProps = {
		type: 'button' as HTMLButtonElement['type'],
		disabled: disabled ? true : undefined,
		href: disabled ? undefined : href,
		...$$restProps,
		class: [
			'button',
			size === 'small' && '--size-small',
			variant === 'secondary' && '--variant-secondary',
			variant === 'subtle' && '--variant-subtle',
			variant === 'ghost' && '--variant-ghost',
			hasIconOnly && '--icon-only',
			disabled && '--disabled',
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};
</script>

<svelte:element
	this={href && !disabled ? 'a' : 'button'}
	{...buttonProps}
	on:click
	on:mouseenter
	on:mouseover
	on:mouseleave
	on:focus
	role="button"
	tabindex="0"
>
	{#if $$slots.default}
		<span>
			<slot />
		</span>
	{/if}
	{#if icon}
		<div class:icon={true}>
			<svelte:component this={icon} />
		</div>
	{/if}
</svelte:element>

<style lang="scss">
	button.button,
	a.button {
		--color-foreground: var(--color-background-01);
		--color-background: var(--color-foreground-01);
		--color-border: var(--color-foreground-01);
		--color-foreground-hover: var(--color-brand-01);
		--color-background-hover: var(--color-foreground-02);
		--color-border-hover: var(--color-brand-02);
		--color-foreground-disabled: var(--color-gray-07);
		--color-background-disabled: var(--color-gray-01);
		--color-border-disabled: var(--color-gray-02);

		position: relative;
		display: grid;
		grid-auto-flow: column;
		align-items: center;
		column-gap: 0.8rem;
		height: 4.2rem;
		width: max-content;
		padding: 0 1.6rem;
		color: var(--color-foreground);
		background: var(--color-background);
		border: 1px solid var(--color-border);
		border-radius: 0.5rem;
		transition-property: color, background, border-color;
		transition-duration: var(--transition-duration-01);
		transition-timing-function: var(--transition-function-01);
		cursor: pointer;
		box-shadow: none;
		outline: none;

		span {
			display: block;
			font-size: 1.4rem;
			font-weight: 400;
			line-height: 1;
		}

		.icon {
			position: relative;
			width: 1.6rem;
			height: 1.6rem;
		}

		:global(svg) {
			--height: 1.6rem;
			--color: var(--color-foreground);
			height: var(--height);
			width: auto;
		}

		&:hover {
			color: var(--color-foreground-hover);
			background: var(--color-background-hover);
			border-color: var(--color-border-hover);
		}

		&.--size-small {
			height: 2.4rem;
			padding: 0 1.2rem;
		}

		&.--variant-subtle {
			--color-foreground: var(--color-foreground-01);
			--color-background: var(--color-gray-01a);
			--color-border: transparent;
			--color-foreground-hover: var(--color-foreground-01);
			--color-background-hover: var(--color-gray-02a);
			--color-border-hover: transparent;
		}

		&.--variant-ghost {
			--color-foreground: var(--color-foreground-01);
			--color-background: transparent;
			--color-border: transparent;
			--color-foreground-hover: var(--color-foreground-01);
			--color-background-hover: var(--color-gray-02a);
			--color-border-hover: transparent;
		}

		&.--disabled {
			color: var(--color-foreground-disabled);
			background: var(--color-background-disabled);
			border-color: var(--color-border-disabled);
			cursor: not-allowed;

			:global(.loader) {
				--color: var(--color-foreground-disabled);
			}

			&:hover {
				color: var(--color-foreground-disabled);
				background: var(--color-background-disabled);
				border-color: var(--color-border-disabled);
			}
		}
	}
</style>
