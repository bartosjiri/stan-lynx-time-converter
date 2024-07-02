<script lang="ts">
	import {
		Wrapper,
		LINK_GITHUB_REPO,
		LINK_WEBSITE_BARTOSJIRI,
		LINK_TWITTER_STANLARROQUE
	} from '$lib/layout';
</script>

<footer>
	<Wrapper variant="narrow">
		<div class:container={true}>
			<div class:credits={true}>
				<p><a href={LINK_WEBSITE_BARTOSJIRI} target="_blank">A project by bartosjiri</a></p>
				<p>
					<a href={LINK_GITHUB_REPO} target="_blank">
						Open-sourced codebase, contribute on GitHub
					</a>
				</p>
				<p>
					<a href={LINK_TWITTER_STANLARROQUE} target="_blank">
						Made with love for Stan Larroque's dedication
					</a>
				</p>
			</div>
		</div>
	</Wrapper>
</footer>

<style lang="scss">
	footer {
		margin-top: 6.4rem;
		margin-bottom: 6.4rem;

		.container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.credits {
				display: flex;
				flex-direction: column;
				align-items: center;

				p {
					font-size: var(--typography-size-01);
					text-align: center;

					a {
						color: var(--color-foreground-01);

						&:hover {
							text-decoration: underline;
						}
					}
				}
			}
		}
	}
</style>
