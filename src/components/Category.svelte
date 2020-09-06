<script>
	export let items = [];
	import Button from '../utilityComponents/Button.svelte';
	import Cart from '../stores/Cart';
	//Subscribing to get products in the cart
	let cartData = {};
	Cart.subscribe(data => {
		cartData = data;
	});

	const addToCart = (productId, categoryId) => {
		let quantity = document.querySelector(`#qty-${productId}`).value;
		let isValid = false;
		let errors = [];
		if (quantity == '') {
			errors.push('Please select no of item you want to place');
		} else if (quantity < 1) {
			errors.push('Quantity should be not less than 1.');
		}

		if (errors.length > 0) {
			document.querySelector(`errors-${productId}`).innerHTML =
				errors.join;
			return true;
		} else {
			isValid = true;
		}

		//Generating data to be added to the cart item
		let cart = {};
		cart[productId] = {
			quantity: quantity,
		};

		if (isValid) {
			Cart.update(product => {
				return Object.assign(product, cart);
			});
		}

		console.log(cartData);
	};
</script>

<style>
	.category_container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
	.container {
		display: flex;
		padding: 5px;
		flex-direction: column;
	}
	.title {
		background: #000;
		padding: 10px;
		border-radius: 5px;
		color: #fff;
	}
	li {
		list-style: none;
	}
	img {
		width: 100px;
		height: 100px;
		object-fit: contain;
	}
	ul {
		display: flex;
		flex-direction: column;
	}
	li {
		display: flex;
		align-items: center;
	}
	.input_number {
		width: 20%;
	}
</style>

<div class="category_container">
	{#each items as item (item.category_id)}
		<div class="container">
			<div class="title">{item.category_name}</div>
			<div class="products_container">
				<ul>
					{#each item.products as product (product.id)}
						<li>
							<!-- svelte-ignore a11y-img-redundant-alt -->
							<div>
								<img
									src="/img/{product.image}"
									alt="product image" />
							</div>
							<div>{product.name}</div>
							<div>
								<input
									class="input_number"
									type="number"
									min="1"
									placeholder="Qty"
									id="qty-{product.id}"
									value={cartData[product.id] != undefined ? cartData[product.id]['quantity'] : ''} />
								<Button
									on:click={() => addToCart(product.id, item.category_id)}>
									Add to cart
								</Button>
								<div id="error-{product.id}" />
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/each}
</div>
