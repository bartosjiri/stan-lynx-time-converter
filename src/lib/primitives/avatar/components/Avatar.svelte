<script lang="ts">
	export let src: string;
</script>

<div class:avatar={true} {...$$restProps}>
	<img {src} alt="" />
</div>

<style lang="scss">
	.avatar {
		--height: 6.4rem;

		height: var(--height);
		width: var(--height);
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--color-gray-01);
		border: 1px solid var(--color-gray-04);
		border-radius: 50%;
		overflow: hidden;

		img {
			display: block;
			height: var(--height);
			width: var(--height);
		}
	}
</style>
