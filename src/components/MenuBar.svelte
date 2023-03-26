<script>
  import { GraduationCap } from 'lucide-svelte'
</script>

<header class="bg-green-500 py-3 px-5 flex justify-between rounded-b-lg items-center text-white shadow-lg">
  <h1 class="text-[20px] font-semibold">오늘뭐먹지</h1>
  <div class="h-full flex items-center">
    <button class="hover:bg-black/5 p-1 rounded active:bg-black/10">
      <GraduationCap class="w-7 h-7" />
    </button>
  </div>
</header>

<style>
  button {
    -webkit-tap-highlight-color: transparent;
  }
</style>
