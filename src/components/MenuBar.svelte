<script>
  import { GraduationCap } from 'lucide-svelte'
</script>

<header class="flex items-center justify-between rounded-b-lg bg-green-500 py-3 px-5 text-white shadow-lg">
  <h1 class="text-[20px] font-semibold">오늘뭐먹지</h1>
  <div class="flex h-full items-center">
    <button class="rounded p-1 hover:bg-black/5 active:bg-black/10">
      <GraduationCap class="h-7 w-7" />
    </button>
  </div>
</header>

<style>
  button {
    -webkit-tap-highlight-color: transparent;
  }
</style>
