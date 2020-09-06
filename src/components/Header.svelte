<script>
	import Icon from 'fa-svelte';
	import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
	import Cart from '../stores/Cart';
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();

	let isSideMenuOpen = false;
	let toggleMenu = () => {
		isSideMenuOpen = !isSideMenuOpen;
	};

	//Subscribing to get products in the cart
	let cartData = {};
	Cart.subscribe(data => {
		cartData = data;
	});
</script>

<style>
	.header {
		background: #000029;
		color: #fff;
		display: flex;
		justify-content: space-between;
		align-content: center;
		align-items: center;
		padding: 0 15px;
		top: 0;
		position: sticky;
	}
	h4 {
		margin: 0;
		padding: 10px;
	}

	div :global(.cart) {
		color: red;
		font-size: 20px;
		cursor: pointer;
	}
	.cart-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cart-count {
		margin-right: 0.1em;
		font-weight: 600;
	}

	div :global(.menu-bar) {
		cursor: pointer;
	}
	.menu {
		display: none;
	}
	.menu.active {
		display: flex;
		flex-direction: column;
		background: #cccccc;
		position: absolute;
		height: 95%;
		width: 20%;
		z-index: 1050;
	}
	li {
		list-style: none;
		cursor: pointer;
		padding: 10px;
		border-bottom: 3px solid lightgrey;
		font-weight: 500;
	}
</style>

<div class="header">
	<span on:click={toggleMenu}><Icon class="menu-bar" icon={faBars} /></span>
	<h4>E-Store</h4>
	<div
		class="cart-container"
		on:click={() => {
			dispatch('toggleCartView', true);
		}}>
		<span class="cart-count">{Object.keys(cartData).length}</span>
		<Icon class="cart" icon={faShoppingCart} />
	</div>
</div>
<div class="menu" class:active={isSideMenuOpen}>
	<li
		on:click={() => {
			dispatch('openMenu', 'home');
			isSideMenuOpen = !isSideMenuOpen;
		}}>
		Home
	</li>
	<li
		on:click={() => {
			dispatch('openMenu', 'category');
			isSideMenuOpen = !isSideMenuOpen;
		}}>
		Categories
	</li>
</div>
