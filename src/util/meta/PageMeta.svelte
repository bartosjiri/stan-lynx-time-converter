<script lang="ts">
	import * as META from './meta.config';

	export let title: string | null = null;
	export let fullTitle: string | null = null;
	export let description: string = META.META_DESCRIPTION;
	export let keywords: string[] = META.META_KEYWORDS;
	export let author: string = META.META_AUTHOR;
	export let ogImageUrl: string = META.META_OG_IMAGE_URL;
	export let ogImageWidth = META.META_OG_IMAGE_WIDTH;
	export let ogImageHeight = META.META_OG_IMAGE_HEIGHT;
	export let noindex = false;
	export let nofollow = false;

	$: pageTitle = fullTitle || (title ? `${title} — ${META.META_TITLE}` : META.META_TITLE);
</script>

<svelte:head>
	{#if noindex || nofollow}
		<meta
			name="robots"
			content={[noindex && 'noindex', nofollow && 'nofollow'].filter(Boolean).join(',')}
		/>
	{/if}

	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href={`/meta/apple-touch-icon.png?v=${META.META_VERSION}`}
	/>
	<!-- <link rel="icon" type="image/svg+xml" href="/meta/favicon.svg?v=${META.META_VERSION}" /> -->
	<!-- <link rel="icon" type="image/png" href="/meta/favicon.png?v=${META.META_VERSION}" /> -->
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/meta/favicon-32x32.png?v=${META.META_VERSION}"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="/meta/favicon-16x16.png?v=${META.META_VERSION}"
	/>
	<link rel="manifest" href={`/meta/site.webmanifest?v=${META.META_VERSION}`} />
	<link
		rel="mask-icon"
		href={`/meta/safari-pinned-tab.svg?v=${META.META_VERSION}`}
		color={META.META_COLOR_APPLE}
	/>
	<link rel="shortcut icon" href={`/meta/favicon.ico?v=${META.META_VERSION}`} />
	<meta name="msapplication-TileColor" content={META.META_COLOR_MICROSOFT} />
	<meta name="msapplication-config" content={`/meta/browserconfig.xml?v=${META.META_VERSION}`} />
	<meta name="theme-color" content={META.META_COLOR_THEME} />

	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords.join(', ')} />
	<meta name="author" content={author} />

	<meta property="og:url" content={META.META_OG_URL} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={META.META_TITLE} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:image" content={`${ogImageUrl}?v=${META.META_VERSION}`} />
	<meta property="og:image:width" content={String(ogImageWidth)} />
	<meta property="og:image:height" content={String(ogImageHeight)} />
	<meta property="og:image:alt" content={pageTitle} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={META.META_OG_URL} />
	<meta name="twitter:creator" content={author} />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={`${ogImageUrl}?v=${META.META_VERSION}`} />
	<meta name="twitter:image:alt" content={pageTitle} />
</svelte:head>
