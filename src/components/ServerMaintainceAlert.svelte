<script lang="ts">
  import { ServerOff } from 'lucide-svelte'
</script>

<div
  class="mx-auto flex max-w-xs grow flex-col items-center justify-center gap-3 px-5 py-7"
>
  <ServerOff class="h-16 w-16" />
  <h1 class="text-center text-2xl font-bold">서버가 점검 중이에요</h1>
  <p class="text-center">
    급식 서버가 현재 점검 중이에요.<br />
    점검이 끝나면 다시 이용하실 수 있어요.
  </p>
  <a
    href="https://neis.go.kr/"
    class="mt-2 mb-1 rounded-lg border border-green-500 py-2 px-4 text-green-500 transition duration-150 hover:bg-green-500 hover:text-white active:bg-green-600"
  >
    점검 기간 보기
  </a>
</div>
