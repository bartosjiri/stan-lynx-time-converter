<script lang="ts">
	import Question from 'phosphor-svelte/lib/Question';

	import { Wrapper, LINK_GITHUB_REPO } from '$lib/layout';
</script>

<section id="guide" class:guide={true}>
	<Wrapper>
		<div class:container={true}>
			<div class:title={true}>
				<svelte:component this={Question} />
				<h2>How it works</h2>
			</div>
			<div class:content={true}>
				<p>
					The&nbsp;application offers an&nbsp;approximate conversion from Stan Lynx time
					to&nbsp;actual&nbsp;time, utilizing historical&nbsp;data.<br /> This&nbsp;calculation relies
					on&nbsp;the&nbsp;variances between the&nbsp;announcement and&nbsp;promised delivery times (in&nbsp;Stan
					Lynx time) and&nbsp;the&nbsp;corresponding actual delivery&nbsp;times.
				</p>
				<p>
					The&nbsp;project data is&nbsp;<a href={LINK_GITHUB_REPO} target="_blank">open source</a>,
					and&nbsp;contributions are greatly&nbsp;appreciated.<br /> By&nbsp;maintaining a&nbsp;larger
					sample&nbsp;size, we&nbsp;can achieve more accurate&nbsp;estimations.
				</p>
			</div>
		</div>
	</Wrapper>
</section>

<style lang="scss">
	.guide {
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

			.content {
				font-size: var(--typography-size-02);
				text-align: center;
				padding: 1.6rem;
				background: var(--color-background-02);
				border: 1px solid var(--color-gray-04);
				border-radius: 1.2rem;

				p {
					margin-bottom: 1.6rem;

					&:last-of-type {
						margin-bottom: 0;
					}
				}

				a {
					color: var(--color-foreground-01);
					text-decoration: underline;
				}
			}
		}
	}
</style>
