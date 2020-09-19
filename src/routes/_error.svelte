<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

{#if status === 404}
	<div class="container">
		<article class="message is-warning">
			<div class="message-header">
				<p>Page Not Found</p>
			</div>
			<div class="message-body">
				<a href="/">Click Here</a> to go home.
			</div>
		</article>
	</div>
{:else if status === 500}
	<div class="container">
		<article class="message is-danger">
			<div class="message-header">
				<p>Server Error</p>
			</div>
			<div class="message-body">
				<p>{error.message}</p>
			</div>
		</article>
	</div>
{:else}
	<h1>{status}</h1>

	<p>{error.message}</p>
{/if}


{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
