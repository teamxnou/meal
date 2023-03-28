<script lang="ts">
  import { ChevronLeft } from 'lucide-svelte'

  export let title: string,
    buttons: any[] = [],
    buttonLinks: (string | undefined)[] = [],
    primary: boolean = false,
    back: boolean = false
</script>

<header
  class="flex items-center rounded-b-lg py-3 px-5 shadow-lg"
  class:bg-neutral-100={!primary}
  class:bg-green-500={primary}
  class:text-white={primary}
>
  {#if back}
    <button on:click={() => history.back()} class="mr-3">
      <ChevronLeft class="h-7 w-7" />
    </button>
  {/if}
  <h1 class="text-[20px] font-semibold">{title}</h1>
  {#if buttons.length}
    <div class="flex h-full grow items-center justify-end">
      {#each buttons as Button, i}
        <a
          href={buttonLinks[i]}
          class="rounded p-1 hover:bg-black/5 active:bg-black/10"
          role="button"
        >
          <Button class="h-7 w-7" />
        </a>
      {/each}
    </div>
  {/if}
</header>

<style>
  button {
    -webkit-tap-highlight-color: transparent;
  }
</style>
