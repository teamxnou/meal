<script lang="ts">
  import { modalOpened } from '../a11y'
  import { ChevronLeft, Search } from 'lucide-svelte'

  export let LeftButton: any = null,
    leftButtonLink: string = '',
    leftButtonLabel: string = '',
    title: string,
    buttons: any[] = [],
    buttonLinks: (string | undefined)[] = [],
    buttonLabels: string[] = [],
    primary: boolean = false,
    back: boolean = false,
    search: boolean = false,
    searchPlaceholder: string = '검색',
    queryChange: (query: string) => void = () => {}

  let searchQuery = ''
  $: queryChange(searchQuery)

  let ariaHidden: boolean
  modalOpened.subscribe((value) => {
    ariaHidden = value
  })
</script>

<div
  class="sticky top-0 z-50 w-full overflow-hidden rounded-b-lg shadow-lg"
  aria-hidden={ariaHidden}
>
  <header
    class="flex items-center py-3 px-5 h-14"
    class:bg-neutral-100={!primary}
    class:bg-green-500={primary}
    class:text-white={primary}
  >
    {#if back}
      <button
        on:click={() => history.back()}
        class="mr-3 rounded hover:bg-black/5 active:bg-black/10"
        aria-label="뒤로가기"
        tabindex={ariaHidden ? -1 : 0}
      >
        <ChevronLeft class="h-7 w-7" />
      </button>
    {:else if LeftButton}
      <a
        href={leftButtonLink}
        class="mr-3 rounded hover:bg-black/5 active:bg-black/10 p-1"
        role="button"
        aria-label={leftButtonLabel}
        tabindex={ariaHidden ? -1 : 0}
      >
        <LeftButton class="h-7 w-7" />
      </a>
    {/if}
    <h1 class="text-[20px] font-semibold">{title}</h1>
    {#if buttons.length}
      <div class="flex h-full grow items-center justify-end gap-1">
        {#each buttons as Button, i}
          <a
            href={buttonLinks[i]}
            class="rounded p-1 hover:bg-black/5 active:bg-black/10"
            role="button"
            aria-label={buttonLabels[i]}
            tabindex={ariaHidden ? -1 : 0}
          >
            <Button class="h-7 w-7" />
          </a>
        {/each}
      </div>
    {/if}
  </header>
  {#if search}
    <div class="flex h-12 items-center gap-3 bg-neutral-50 py-3 pl-6 pr-2">
      <Search class="h-6 w-6 text-neutral-400" />
      <input
        type="text"
        class="grow bg-transparent focus:outline-none"
        placeholder={searchPlaceholder}
        bind:value={searchQuery}
        tabindex={ariaHidden ? -1 : 0}
      />
    </div>
  {/if}
</div>
