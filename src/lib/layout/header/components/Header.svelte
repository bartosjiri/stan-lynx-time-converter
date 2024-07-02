<script lang="ts">
	import { Wrapper } from '$lib/layout';
</script>

<header>
	<Wrapper variant="narrow">
		<div class:container={true}>
			<div class:logo={true}>
				<img src="/assets/images/header-logo.png" alt="" />
			</div>
			<div class:title={true}>
				<h1>Stan Lynx<br />Time Converter</h1>
			</div>
		</div>
	</Wrapper>
</header>

<style lang="scss">
	header {
		margin-top: 4.8rem;
		margin-bottom: 4.8rem;

		.container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.logo {
				display: flex;
				max-width: 48rem;

				img {
					display: block;
					width: 100%;
				}
			}

			.title {
				h1 {
					font-size: var(--typography-size-07);
					font-weight: 700;
					text-align: center;
					line-height: var(--typography-line-02);
				}
			}
		}
	}
</style>
