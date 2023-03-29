<script lang="ts">
  import { ChevronLeft, ChevronRight } from 'lucide-svelte'

  export let date: string, updateDate: (date: string) => void

  $: formattedDate = new Date(date).toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'short'
  })

  function changeDate(offset: number) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + offset)
    date = newDate.toISOString().slice(0, 10)
    updateDate(date)
  }
</script>

<div class="mb-16 flex items-center justify-center gap-1">
  <button class="arrow-button" on:click={() => changeDate(-1)}>
    <ChevronLeft class="h-7 w-7" />
  </button>
  <button
    class="relative w-[8rem] gap-0 rounded-lg bg-neutral-100 px-3 py-1 text-center"
  >
    {formattedDate}
  </button>
  <button class="arrow-button" on:click={() => changeDate(1)}>
    <ChevronRight class="h-7 w-7" />
  </button>
</div>

<style lang="postcss">
  .arrow-button {
    @apply h-full rounded hover:bg-neutral-50 active:bg-neutral-100;
  }
</style>
