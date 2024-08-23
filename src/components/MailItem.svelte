<script>
  import { useTranslations } from '$lib/i18n/utils';

  export let lang;
  const t = useTranslations(lang);

  let title = t('rsslist').mail.title;
  let copyTitle = t('rsslist').mail.copyTitle;

  let currTitle = title;

  let timeout;

  function onclick() {
    navigator.clipboard.writeText('polcortesg@gmail.com');
    currTitle = copyTitle;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      currTitle = title;
    }, 2000);
  }
</script>

<li>
  <button on:click={ onclick }>
    <slot />
  </button>
  <span>
    {currTitle}
  </span>
</li>

<style>
  li {
    position: relative;
    width: fit-content;
  }

  li > button {
    display: grid;
    place-content: center;
    width: fit-content;
    border-radius: 50%;
    transition: scale .05s;
  }

  button:active {
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
    width: 10ch;
    text-align: center;

    transition: opacity 0.2s .15s, top 0.3s .15s;
  }

  li:has(> button:hover) > span {
    top: 2.75rem;
    opacity: 1;
  }
</style>