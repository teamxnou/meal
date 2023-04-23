<script lang="ts">
  import { fly } from 'svelte/transition'
  export let message: string
</script>

<div
  class="absolute bottom-0 left-0 flex w-full transform justify-center p-5"
  transition:fly={{ x: 0, y: 100, duration: 500 }}
>
  <div class="max-w-sm rounded-lg bg-neutral-100 py-2 px-4 text-center shadow-lg">
    {message}
  </div>
</div>
