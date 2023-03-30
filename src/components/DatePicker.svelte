<script lang="ts">
  import { fade, slide } from 'svelte/transition'
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

  let openDatepicker = false
</script>

<div class="mb-16 flex items-center justify-center gap-1">
  <button class="arrow-button" on:click={() => changeDate(-1)}>
    <ChevronLeft class="h-7 w-7" />
  </button>
  <button
    class="relative w-[8rem] gap-0 rounded-lg bg-neutral-100 px-3 py-1 text-center active:bg-neutral-200"
    on:click={() => (openDatepicker = true)}
  >
    {formattedDate}
  </button>
  <button class="arrow-button" on:click={() => changeDate(1)}>
    <ChevronRight class="h-7 w-7" />
  </button>
</div>
{#if openDatepicker}
  <div
    class="absolute top-0 left-0 h-screen w-screen bg-black/20"
    transition:fade={{ duration: 200 }}
    on:click={() => (openDatepicker = false)}
    on:keypress={(e) => {
      if (e.key === 'Escape') openDatepicker = false
    }}
  />
  <div
    class="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-3 rounded-2xl bg-white p-4"
    transition:slide={{ duration: 200 }}
  >
    <div class="flex items-center">
      <button class="month-arrow-button">
        <ChevronLeft class="h-7 w-7" />
      </button>
      <div class="flex-grow text-center text-lg font-semibold">2023년 3월</div>
      <button class="month-arrow-button">
        <ChevronRight class="h-7 w-7" />
      </button>
    </div>
    <ul class="grid grid-cols-5 gap-3 text-center">
      {#each ['월', '화', '수', '목', '금'] as day}
        <li class="day-indicator">{day}</li>
      {/each}
      <li class="placeholder" />
      <li class="placeholder" />
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li class="active">30</li>
      <li class="today">31</li>
    </ul>
  </div>
{/if}

<style lang="postcss">
  .arrow-button {
    @apply h-full rounded hover:bg-neutral-50 active:bg-neutral-100;
  }
  .month-arrow-button {
    @apply flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-50 active:bg-neutral-100 text-green-700;
  }
  .day-indicator {
    @apply cursor-default bg-transparent hover:bg-transparent text-sm text-neutral-400 h-3;
  }
  ul li {
    @apply flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-[1.25rem] hover:bg-green-50 active:bg-green-100;
  }
  ul li.placeholder {
    @apply cursor-default bg-transparent hover:bg-transparent;
  }
  ul li.active {
    @apply bg-green-100 font-semibold text-green-700;
  }
  ul li.today {
    @apply text-green-700;
  }
  ul li.active.today {
    @apply bg-green-500 text-white;
  }
</style>
