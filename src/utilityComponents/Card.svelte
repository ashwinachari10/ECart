<script>
	export let product;
	const { name, image, price, quantity } = product;
	import Icon from 'fa-svelte';
	import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
</script>

<style>
	.card {
		/* Add shadows to create the "card" effect */
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		display: flex;
		margin: 10px auto;
		border-radius: 5px;
	}

	/* On mouse-over, add a deeper shadow */
	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	/* Add some padding inside the card container */
	.container {
		padding: 2px 2px;
		width: 15em;
	}
	img {
		border-radius: 5px 5px 0 0;
		width: 150px;
		height: 150px;
		/* object-fit: contain; */
	}
	.container h4 {
		border-bottom: 1px solid lightgrey;
		text-align: center;
	}
	.details {
		display: flex;
		align-items: center;
		margin: 4px;
		justify-content: space-evenly;
	}
	.total {
		display: flex;
		align-items: center;
		margin: 4px;
		justify-content: center;
	}
</style>

<div class="card">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img src="/img/{image}" alt="Product Image" />
	<div class="container">
		<h4><b>{name}</b></h4>
		<div class="details">
			<div>
				<span>Price:
					<Icon icon={faRupeeSign} />
					{price}</span>
			</div>
			<div><span>Quantity: </span> <span>{quantity}</span></div>
		</div>
		<div class="total">
			<p>
				Total Price:
				<Icon icon={faRupeeSign} />
				{quantity * price}
			</p>
		</div>
	</div>
</div>
