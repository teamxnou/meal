<script lang="ts">
  import { fly } from 'svelte/transition'
  export let message: string;
</script>

<div
  class="absolute bottom-5 left-1/2 -translate-x-1/2 transform rounded-lg bg-zinc-700 text-white py-2 px-4"
  transition:fly={{ x: 0, y: 100, duration: 500 }}
>
  {message}
</div>
