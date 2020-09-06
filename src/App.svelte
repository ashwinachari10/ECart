<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Banner from './components/Banner.svelte';
	import Tabs from './utilityComponents/Tabs.svelte';
	import Categories from './components/Categories.svelte';
	import Cart from './components/Cart.svelte';

	let items = ['Home', 'Categories'];
	let activeItem = 'Home';

	let displayCart = false;

	//Triggered when user changes the tab
	const tabChange = event => {
		let item = event.detail;
		activeItem = item;
	};
	const toggleCartView = e => {
		displayCart = e.detail;
	};

	const openMenu = e => {
		let type = e.detail;
		if (type == 'home') {
			activeItem = 'Home';
			displayCart = false;
		} else if (type == 'category') {
			activeItem = 'Categories';
			displayCart = false;
		}
	};
</script>

<style>
	.options {
		display: flex;
		justify-content: flex-end;
	}
</style>

<main>
	<Header
		cartView={displayCart}
		on:toggleCartView={e => toggleCartView(e)}
		on:openMenu={e => openMenu(e)} />
	{#if !displayCart}
		<div class="options">
			<Tabs {items} {activeItem} on:tabChange={tabChange} />
		</div>
		{#if activeItem === 'Categories'}
			<Categories />
		{:else if activeItem === 'Products'}
			<p>Products</p>
		{:else if activeItem === 'Home'}
			<Banner />
		{/if}
	{:else if displayCart}
		<Cart />
	{/if}
	<Footer />
</main>
