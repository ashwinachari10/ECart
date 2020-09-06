import { writable } from 'svelte/store';

const categories = {};
categories[1] = { name: 'Maharashtrian', id: 1 };
categories[2] = { name: 'South Indian', id: 2 };

const CategoriesStore = writable(categories);

export default CategoriesStore;
