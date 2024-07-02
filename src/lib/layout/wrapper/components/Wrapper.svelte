<script lang="ts">
	export let variant: 'narrow' | 'base' = 'base';

	$: wrapperProps = {
		...$$restProps,
		class: ['wrapper', variant === 'narrow' && '--variant-narrow', $$restProps.class]
			.filter(Boolean)
			.join(' ')
	};
</script>

<div {...wrapperProps}>
	<slot />
</div>

<style lang="scss">
	.wrapper {
		max-width: 92rem;
		padding: 0 1.6rem;
		margin-left: auto;
		margin-right: auto;

		&.--variant-narrow {
			max-width: 64rem;
		}
	}
</style>
