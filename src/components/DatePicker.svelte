<script lang="ts">
  import { fade, slide } from 'svelte/transition'
  import { modalOpened } from '../a11y'
  import { ChevronLeft, ChevronRight } from 'lucide-svelte'

  export let date: Date, updateDate: (date: Date) => void

  let tempDate: Date = date

  $: formattedDate = new Date(date).toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'short'
  })

  function changeDate(offset: number) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + offset)
    tempDate = newDate
    updateDate(newDate)
  }

  let ariaHidden: boolean
  modalOpened.subscribe((value) => {
    ariaHidden = value
  })

  let arrowAnimation: 'left' | 'right' | undefined
  $: {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          changeDate(e.key === 'ArrowRight' ? 1 : -1)
          arrowAnimation = e.key === 'ArrowRight' ? 'right' : 'left'
          setTimeout(() => {
            arrowAnimation = undefined
          }, 200)
        }
      })
    }
  }

  $: selectedDayInCurrentMonth =
    year === tempDate.getFullYear() && month === tempDate.getMonth() + 1 ? tempDate.getDate() : 0

  function isToday(day: number) {
    return year === today.getFullYear() && month === today.getMonth() + 1 && day === today.getDate()
  }

  function dayAreaLabel(day: number) {
    const selected = selectedDayInCurrentMonth == day
    const prefix = isToday(day) ? '오늘, ' : selected ? '선택됨. ' : ''
    const suffix = selected ? '' : ' 선택'
    return `${prefix} ${day}일 ${dayNames[new Date(year, month - 1, day).getDay()]}요일 ${suffix}`
  }

  const dayNames = ['일', '월', '화', '수', '목', '금', '토']

  let openDatepicker = false
  function closeDatepicker() {
    openDatepicker = false
    modalOpened.set(false)
    updateDate(tempDate)
  }

  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let today = new Date()
  $: daysInMonth = Array.from(Array(new Date(year, month, 0).getDate()).keys()).map((i) => i + 1)

  $: placeholderDays = new Date(year, month - 1, 1).getDay()
  $: if (placeholderDays === -1) placeholderDays = 0
  $: if (month > 12) {
    month = 1
    year += 1
  } else if (month < 1) {
    month = 12
    year -= 1
  }
</script>

<div
  class="absolute bottom-0 left-1/2 mb-16 flex -translate-x-1/2 transform items-center justify-center gap-1"
>
  <button
    class="arrow-button"
    class:bg-neutral-100={arrowAnimation == 'left'}
    on:click={() => {
      changeDate(-1)
      tempDate = date
    }}
    aria-label="어제 급식 보기"
    aria-hidden={ariaHidden}
    tabindex={ariaHidden ? -1 : 0}
  >
    <ChevronLeft class="h-7 w-7" />
  </button>
  <button
    class="relative w-[8rem] gap-0 rounded-lg bg-neutral-100 px-3 py-1 text-center active:bg-neutral-200"
    on:click={() => {
      openDatepicker = true
      modalOpened.set(true)
      tempDate = date
    }}
    aria-label="날짜 선택. {formattedDate}"
    aria-hidden={ariaHidden}
    tabindex={ariaHidden ? -1 : 0}
  >
    {formattedDate}
  </button>
  <button
    class="arrow-button"
    class:bg-neutral-100={arrowAnimation == 'right'}
    on:click={() => {
      changeDate(1)
      tempDate = date
    }}
    aria-label="내일 급식 보기"
    aria-hidden={ariaHidden}
    tabindex={ariaHidden ? -1 : 0}
  >
    <ChevronRight class="h-7 w-7" />
  </button>
</div>
{#if openDatepicker}
  <div
    class="absolute top-0 left-0 z-50 h-screen w-screen bg-black/30"
    transition:fade={{ duration: 200 }}
    on:click={closeDatepicker}
    on:keypress={(e) => {
      console.log(e.key)
      if (e.key === 'Escape') {
        closeDatepicker()
      }
    }}
  />
  <div
    class="absolute top-0 left-0 flex h-screen w-screen items-center justify-center"
    id="calander"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="z-[60] flex flex-col gap-3 rounded-2xl bg-white"
      transition:slide={{ duration: 200 }}
    >
      <div class="flex items-center px-4 pt-4">
        <button class="month-arrow-button" on:click={() => (month -= 1)} aria-label="이전 달 보기">
          <ChevronLeft class="h-7 w-7" />
        </button>
        <div class="flex-grow text-center text-lg font-semibold" aria-label="{year}년 {month}월">
          {year}년 {month}월
        </div>
        <button class="month-arrow-button" on:click={() => (month += 1)} aria-label="다음 달 보기">
          <ChevronRight class="h-7 w-7" />
        </button>
      </div>
      <ul
        class="grid grow grid-cols-7 grid-rows-[auto_1fr_1fr_1fr_1fr_1fr] gap-x-2 gap-y-3 px-4 text-center"
      >
        {#each dayNames as day}
          <li
            class="h-3 cursor-default bg-transparent text-sm text-neutral-400 hover:bg-transparent"
            aria-hidden="true"
          >
            {day}
          </li>
        {/each}
        {#each Array(placeholderDays == 7 ? 0 : placeholderDays).fill(0) as _}
          <li class="placeholder" aria-hidden="true" />
        {/each}
        {#each daysInMonth as day}
          <li class:active={selectedDayInCurrentMonth == day} class:today={isToday(day)}>
            <button
              on:click={() => {
                const newDate = new Date(date)
                newDate.setMonth(month - 1)
                newDate.setDate(day)
                tempDate = newDate
              }}
              aria-label={dayAreaLabel(day)}
            >
              {day}
            </button>
          </li>
        {/each}
      </ul>
      <div class="footer">
        <button
          on:click={() => {
            tempDate = new Date()
          }}
        >
          오늘
        </button>
        <button on:click={closeDatepicker}> 확인 </button>
      </div>
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
  .footer {
    @apply flex items-center justify-end gap-3 px-4 pb-4;
  }
  .footer button {
    @apply rounded-lg px-3 py-1 text-green-700 hover:bg-neutral-50 active:bg-neutral-100;
  }
</style>
