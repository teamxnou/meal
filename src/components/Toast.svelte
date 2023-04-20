<script lang="ts">
  import { fly } from 'svelte/transition'
  export let message: string;
</script>

<div
  class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full transform p-5"
  transition:fly={{ x: 0, y: 100, duration: 500 }}
>
  <div class="bg-neutral-100 shadow-lg py-2 px-4 rounded-lg max-w-sm text-center">
    {message}
  </div>
</div>
