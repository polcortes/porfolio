<script lang="ts">
  import { onMount } from 'svelte';
  import type { LANGS } from '../types';
  
  export let title: string;
  export let items: LANGS[];

  let ul: HTMLUListElement | null = null;
  let dropdownVisible = false;
  let buttonRef: HTMLButtonElement | null = null;

  function toggleDropdown() {
    dropdownVisible = !dropdownVisible;
  }

  function handleClickOutside(event: MouseEvent) {
    // Close the dropdown if the click is outside the dropdown and the button
    if (ul && !ul.contains(event.target as Node) && buttonRef && !buttonRef.contains(event.target as Node)) {
      dropdownVisible = false;
    }
  }

  onMount(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
</script>

<div>
  <button class:active={dropdownVisible} bind:this={buttonRef} on:click={toggleDropdown}>
    {title}
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M6 9l6 6l6 -6"/>
    </svg>
  </button>

  <ul class:hidden={!dropdownVisible} bind:this={ul} on:click={toggleDropdown}>
    {#each items as item}
      <li>
        <a href={`/${item.prefix}/`}>{item.name}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  div {
    position: relative;
    display: grid;
    place-content: center;
  }

  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: white;
    border-radius: .5rem;
    padding-block: .5rem;
    width: 100%;
    box-sizing: border-box;
    top: 2rem;
  }

  li {
    width: 100%;
  }

  a {
    font: normal normal .875rem 'Inter', sans-serif;
    padding: .5rem 1rem;
    box-sizing: border-box;
    width: 100%;
    display: flex;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .hidden {
    display: none;
  }

  button {
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .25rem .75rem;
    border-radius: .5rem;
    font: normal normal .875rem 'Inter', sans-serif;

    transition: background-color .15s linear;
  }

  button:hover,
  button.active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media screen and (max-width: 650px) {
    div {
      display: none;
    }
  }
</style>
