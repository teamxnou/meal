<script lang="ts">
  export let title: string, buttons: any[]
</script>

<header
  class="flex items-center justify-between rounded-b-lg bg-green-500 py-3 px-5 text-white shadow-lg"
>
  <h1 class="text-[20px] font-semibold">{title}</h1>
  {#if buttons.length}
    <div class="flex h-full items-center">
      {#each buttons as Button}
        <button class="rounded p-1 hover:bg-black/5 active:bg-black/10">
          <Button class="h-7 w-7" />
        </button>
      {/each}
    </div>
  {/if}
</header>

<style>
  button {
    -webkit-tap-highlight-color: transparent;
  }
</style>
