<script>
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();
	export let items = [];
	export let activeItem = '';
</script>

<style>
	.tabs {
		margin: 0 5px;
		cursor: pointer;
		display: flex;
	}
	.tabs span {
		margin: 8px;
	}
	.active {
		border-bottom: 2px solid #000;
	}
</style>

<div class="tabs">
	{#each items as item}
		<span
			class:active={item === activeItem}
			on:click={() => dispatch('tabChange', item)}>{item}</span>
	{/each}
</div>
