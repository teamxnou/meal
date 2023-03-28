<script lang="ts">
  import { ChevronLeft, ChevronRight } from 'lucide-svelte'

  export let date: string
  })
</script>

<div class="mb-16 flex items-center justify-center gap-1">
  <button>
    <ChevronLeft class="h-7 w-7" />
  </button>
  <input type="date" bind:value={date} class="rounded-lg bg-neutral-50 px-2 py-1 text-center relative" />
  <button>
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
