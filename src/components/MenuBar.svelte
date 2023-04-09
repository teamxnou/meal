<script lang="ts">
  import { ChevronLeft, Search } from 'lucide-svelte'

  export let title: string,
    buttons: any[] = [],
    buttonLinks: (string | undefined)[] = [],
    primary: boolean = false,
    back: boolean = false,
    search: boolean = false,
    searchPlaceholder: string = '검색',
    queryChange: (query: string) => void = () => {}

  let searchQuery = ''
  $: queryChange(searchQuery)
</script>



<div class="shadow-lg rounded-b-lg overflow-hidden sticky top-0 w-full">
  <header
    class="flex items-center py-3 px-5"
    class:bg-neutral-100={!primary}
    class:bg-green-500={primary}
    class:text-white={primary}
  >
    {#if back}
      <button
        on:click={() => history.back()}
        class="mr-3 rounded hover:bg-black/5 active:bg-black/10"
      >
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
  {#if search}
    <div class="flex items-center gap-3 bg-neutral-50 py-3 pl-6 pr-2">
      <Search class="h-6 w-6 text-neutral-400" />
      <input
        type="text"
        class="grow bg-transparent focus:outline-none"
        placeholder={searchPlaceholder}
        bind:value={searchQuery}
      />
    </div>
  {/if}
</div>
