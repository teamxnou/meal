<script lang="ts">
  import { slide } from 'svelte/transition'

  import type { School } from '../stores'
  import { modalOpened } from '../a11y'

  import { FileType, Link2, X } from 'lucide-svelte'

  export let meal: string[], currentSchool: School

  let shareOptions = false
  function toggleShareOptions() {
    shareOptions = !shareOptions
    modalOpened.set(shareOptions)
  }
</script>

<div class="relative flex flex-col items-center">
  <button
    class="rounded-lg py-1 px-3 text-green-500 hover:bg-green-50 active:bg-green-100"
    on:click={toggleShareOptions}
  >
    급식 공유하기
  </button>
  {#if shareOptions}
    <div class="absolute top-10 flex rounded-lg" transition:slide>
      <span class="sr-only">어떤 방식으로 공유할까요?</span>
      <button
        class="rounded-l-lg p-2 ring-inset focus:ring-offset-0 hover:bg-neutral-200 active:bg-neutral-300 bg-neutral-100"
        aria-label="텍스트로 공유하기"
      >
        <FileType class="h-6 w-6" />
      </button>
      <button
        class="p-2 ring-inset focus:ring-offset-0 hover:bg-neutral-200 active:bg-neutral-300 bg-neutral-100"
        aria-label="오늘뭐먹지 링크로 공유하기"
      >
        <Link2 class="h-6 w-6" />
      </button>
      <button
        class="rounded-r-lg bg-neutral-100 p-2 ring-inset hover:bg-neutral-200 focus:ring-offset-0 active:bg-neutral-300"
        on:click={() => {
          toggleShareOptions()
        }}
        aria-label="취소"
      >
        <X class="h-6 w-6" />
      </button>
    </div>
  {/if}
</div>
