<script>
	let isOpen = false;
	export let segment;

	const toggleOpen = () => isOpen = !isOpen;
</script>

<style>
	@media screen and (min-width: 769px) {
		nav {
			border-bottom: solid gray 1px;
		}
		a.is-active {
			background-color: #fafafa;
    		color: #3273dc;
		}
		.navbar-menu {
			display: flex;
			flex-grow: 1;
			flex-shrink: 0;
		}
		.navbar-burger {
			display: none;
		}
		.navbar, .navbar-start, .navbar-menu {
			display: flex;
		}
	}
</style>
<nav class="navbar" role='navigation' aria-label='mainnavigation'>
	<div class="navbar-brand">
		<a href="/" class="navbar-item">
			<img src="covid_logo.jpg" alt="covid logo">
		</a> 
		<span
			class='navbar-burger'
			aria-label='menu'
			aria-expanded='false'
			class:is-active={isOpen}
			on:click={toggleOpen}
			>
			<span aria-hidden='true'></span>
			<span aria-hidden='true'></span>
			<span aria-hidden='true'></span>
		</span>
	</div>
	<div class="navbar-menu" class:is-active={isOpen}>
		<div class="navbar-start">
			<a rel='prefetch' href="/" class="navbar-item" class:is-active={segment === undefined}>Home</a>
			<a rel='prefetch' href="about" class="navbar-item" class:is-active={segment === 'about'}>About</a>
		</div>
	</div>
</nav>
