import { writable } from 'svelte/store';

const products = {};

const cart = writable(products);

export default cart;
