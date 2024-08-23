<script>
  export let title;
  export let href;
</script>

<li>
  <a href={href} target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
  <span>
    {title}
  </span>
</li>

<style>
  li {
    position: relative;
    width: fit-content;
  }

  li > a {
    display: grid;
    place-content: center;
    width: fit-content;
    border-radius: 50%;
    transition: scale 0.05s;
  }

  a:active {
    scale: .95;
  }

  li > span {
    transform: translate(0, 0);
    opacity: 0;
    position: absolute;
    top: 1.75rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.05);
    padding: .25rem .5rem;
    border-radius: .25rem;
    pointer-events: none;

    transition: opacity 0.2s .15s, top 0.3s .15s;
  }

  li:has(> a:hover) > span {
    top: 2.75rem;
    opacity: 1;
  }
</style>