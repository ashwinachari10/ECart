<script>
	import Categories from '../stores/Categories';
	import Products from '../stores/Products';
	import Category from './Category.svelte';
	import { onDestroy } from 'svelte';

	let categoryData = {};
	let categoryStore = Categories.subscribe(data => {
		categoryData = data;
	});

	let productsData = [];
	let productStore = Products.subscribe(data => {
		productsData = data;
	});

	//Clearing components once its removed from the DOM

	onDestroy(() => {
		categoryStore();
		productStore();
	});
	let categoriesWiseData = [];

	for (let categoryId in categoryData) {
		let { name: categoryName } = categoryData[categoryId];
		let data = {};
		data['category_id'] = categoryId;
		data['category_name'] = categoryName;
		let productsArray = [];

		if (productsData.length > 0) {
			productsArray = productsData.filter(product => {
				if (product.category_id == categoryId) {
					return true;
				}
			});
		}
		data['products'] = productsArray;
		categoriesWiseData.push(data);
	}
</script>

<Category items={categoriesWiseData} />
