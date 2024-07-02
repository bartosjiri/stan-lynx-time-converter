<script lang="ts">
	import { PageMeta } from '$util/meta';
	import { Header, Footer } from '$lib/layout';

	import '../styles/_global.scss';
</script>

<PageMeta />
<Header />
<slot />
<Footer />
