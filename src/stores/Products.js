import { writable } from 'svelte/store';

const Products = [
	{
		id: 1,
		category_id: 1,
		name: 'Vada Pav',
		image: 'MH-2.jpg',
		price: 10,
	},
	{
		id: 2,
		category_id: 1,
		name: 'Misal Pav',
		image: 'MH-1.jpg',
		price: 70,
	},
	{
		id: 3,
		category_id: 1,
		name: 'Pav Bhaji',
		image: 'MH-3.jpg',
		price: 60,
	},
	{
		id: 4,
		category_id: 2,
		name: 'Dosa',
		image: 'SI-1.jpg',
		price: 35,
	},
	{
		id: 5,
		category_id: 2,
		name: 'Idli',
		image: 'SI-2.jpg',
		price: 40,
	},
	{
		id: 6,
		category_id: 2,
		name: 'Puttu',
		image: 'SI-3.jpg',
		price: 50,
	},
];

const ProductStore = writable(Products);

export default ProductStore;
