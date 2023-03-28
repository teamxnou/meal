<script lang="ts">
  import MenuBar from '../../components/MenuBar.svelte'
</script>

<MenuBar title="학교 선택" back={true} search={true} searchPlaceholder="초등학교 검색" />
<ul class="flex grow flex-col items-start gap-4 bg-neutral-100 p-4">
  <li class="flex w-full flex-col items-start rounded-lg bg-white">
    <span class="mx-5 mt-4 text-sm font-medium text-neutral-400">
      서울특별시 서대문구 경기대로9길 10
    </span>
    <h2 class="mx-5 text-2xl font-semibold">경기초등학교</h2>
    <button
      class="mx-2 mt-3 mb-2 rounded py-2 px-3 text-green-500 hover:bg-green-50 active:bg-green-100"
    >
      이 학교로 선택
    </button>
  </li>
</ul>
