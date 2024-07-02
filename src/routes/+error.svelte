<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	if (browser && $page.status === 404) {
		location.replace('/');
	}
</script>

<slot />
