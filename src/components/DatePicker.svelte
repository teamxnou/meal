<script lang="ts">
  import { fade, slide } from 'svelte/transition'
  import { ChevronLeft, ChevronRight, CalendarClock } from 'lucide-svelte'

  export let date: Date, updateDate: (date: Date) => void

  $: formattedDate = new Date(date).toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'short'
  })

  function changeDate(offset: number) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + offset)
    updateDate(newDate)
  }

  let openDatepicker = false
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let selectedDate = new Date()
  $: weekDaysInMonth = new Array(new Date(year, month, 0).getDate())
    .fill(0)
    .map((_, i) => i + 1)
    .filter(
      (day) =>
        new Date(year, month - 1, day).getDay() !== 0 &&
        new Date(year, month - 1, day).getDay() !== 6
    )

  $: placeholderDays = new Date(year, month - 1, 1).getDay() - 1
  $: if (placeholderDays === -1) placeholderDays = 0
  $: if (month > 12) {
    month = 1
    year += 1
  } else if (month < 1) {
    month = 12
    year -= 1
  }
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
    class="absolute top-0 left-0 h-screen w-screen bg-black/30"
    transition:fade={{ duration: 200 }}
    on:click={() => (openDatepicker = false)}
    on:keypress={(e) => {
      if (e.key === 'Escape') openDatepicker = false
    }}
  />
  <div
    class="absolute top-1/2 left-1/2 flex h-[401px] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-3 rounded-2xl bg-white"
    transition:slide={{ duration: 200 }}
  >
    <div class="flex items-center px-4 pt-4">
      <button class="month-arrow-button" on:click={() => (month -= 1)}>
        <ChevronLeft class="h-7 w-7" />
      </button>
      <div class="flex-grow text-center text-lg font-semibold">{year}년 {month}월</div>
      <button class="month-arrow-button" on:click={() => (month += 1)}>
        <ChevronRight class="h-7 w-7" />
      </button>
    </div>
    <ul class="grid grid-cols-5 grid-rows-[auto_1fr_1fr_1fr_1fr_1fr] gap-3 px-4 text-center grow">
      {#each ['월', '화', '수', '목', '금'] as day}
        <li class="day-indicator">{day}</li>
      {/each}
      {#each Array(placeholderDays == 5 ? 0 : placeholderDays).fill(0) as _}
        <li class="placeholder" />
      {/each}
      {#each weekDaysInMonth as day}
        <li
          class:active={day === date.getDate()}
          class:today={day === selectedDate.getDate() &&
            month === selectedDate.getMonth() + 1 &&
            year === selectedDate.getFullYear()}
        >
          <button
            on:click={() => {
              const newDate = new Date(date)
              newDate.setDate(day)
              updateDate(newDate)
            }}>{day}</button
          >
        </li>
      {/each}
    </ul>
    <div class="flex justify-between border-t p-2">
      <button
        class="rounded-lg px-3 py-1 text-green-700 hover:bg-neutral-50 active:bg-neutral-100"
        on:click={() => {
          updateDate(new Date())
        }}
      >
        오늘
      </button>
    </div>
  </div>
{/if}

<style lang="postcss">
  .arrow-button {
    @apply h-full rounded hover:bg-neutral-50 active:bg-neutral-100;
  }
  .month-arrow-button {
    @apply flex h-10 w-10 items-center justify-center rounded-full text-green-700 hover:bg-neutral-50 active:bg-neutral-100;
  }
  .day-indicator {
    @apply h-3 cursor-default bg-transparent text-sm text-neutral-400 hover:bg-transparent;
  }
  ul li button {
    @apply flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-[1.25rem] hover:bg-green-50 active:bg-green-100;
  }
  ul li.placeholder button {
    @apply cursor-default bg-transparent hover:bg-transparent;
  }
  ul li.active button {
    @apply bg-green-100 font-semibold text-green-700;
  }
  ul li.today button {
    @apply text-green-700;
  }
  ul li.active.today button {
    @apply bg-green-500 text-white;
  }
</style>
