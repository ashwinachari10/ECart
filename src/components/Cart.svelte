<script>
	import Products from '../stores/Products';
	import Cart from '../stores/Cart';
	import { onDestroy } from 'svelte';
	import Card from '../utilityComponents/Card.svelte';
	import Icon from 'fa-svelte';
	import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
	import Button from '../utilityComponents/Button.svelte';

	let products = [];
	let cart = {};
	let unSubscribeProducts = Products.subscribe(data => (products = data));
	let unSubscribeCart = Cart.subscribe(data => (cart = data));

	let selectedProducts = [];
	for (let productId in cart) {
		let currentProduct = {};
		let quantity = cart[productId]['quantity'];
		currentProduct['quantity'] = quantity;
		products.map(product => {
			if (product.id == productId) {
				Object.assign(currentProduct, product);
			}
		});

		selectedProducts.push(currentProduct);
	}

	let totalQuantity = 0;
	let totalPrice = 0;
	selectedProducts.map(product => {
		totalQuantity += parseInt(product.quantity);
		totalPrice += parseInt(product.quantity) * product.price;
	});

	//Clearing dom
	onDestroy(() => {
		unSubscribeProducts();
		unSubscribeCart();
	});
</script>

<style>
	.main-container {
		display: grid;
		/* grid-template-columns: 1fr 1fr; */
		grid-template-columns: repeat(auto-fill, 1fr);
		grid-gap: 60px;
	}
	.cart-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 60px;
		grid-gap: 10px;
		margin: 15px;
	}
	.card {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		width: 40%;
		height: 50%;
	}

	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	.container {
		padding: 2px 16px;
	}
	.total-container {
		margin-top: 15px;
		display: flex;
		justify-content: center;
	}
	h4 {
		border-bottom: 1px solid lightgrey;
	}
	.place-order-btn {
		display: flex;
		justify-content: center;
	}
</style>

<div class="main-container">
	<div class="cart-container">
		{#if selectedProducts.length > 0}
			{#each selectedProducts as product}
				<Card {product} />
			{/each}
		{:else}
			<p style="text-align:center;font-weight:bold">
				Please select product to place order
			</p>
		{/if}
	</div>
	<div class="total-container">
		<div class="card">
			<div class="container">
				<h4><b>Order Details</b></h4>
				<p>Quantity: {totalQuantity}</p>
				<p>
					Total Price:
					<Icon icon={faRupeeSign} />
					{totalPrice}
				</p>
				<div class="place-order-btn">
					<Button
						type="secondary"
						inverse="true"
						on:click={() => alert('Order placed successfully.')}>
						Place Order
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>
