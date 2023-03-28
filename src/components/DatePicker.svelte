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
  <button on:click={() => changeDate(-1)}>
    <ChevronLeft class="h-7 w-7" />
  </button>
  <label for="datepicker" class="relative gap-0 rounded-lg bg-neutral-50 px-3 py-1 text-center">
    <input type="date" bind:value={date} id="datepicker" class="h-0 w-0" />
    <span>{formattedDate}</span>
  </label>
  <button on:click={() => changeDate(1)}>
    <ChevronRight class="h-7 w-7" />
  </button>
</div>

<style>
  input[type='date']::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
</style>
