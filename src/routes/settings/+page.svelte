<script lang="ts">
  import MenuBar from '../../components/MenuBar.svelte'
</script>

<MenuBar title="설정" back={true} />
<div class="flex h-full grow flex-col gap-3 bg-neutral-100 p-4">
  <ul class="overflow-hidden rounded-lg">
    <li>
      <label
        class="flex cursor-pointer items-center justify-between bg-white px-5 py-1 hover:bg-neutral-50"
      >
        <span class="my-2">메뉴 설문 참가</span>
        <input type="checkbox" class="peer appearance-none" />
        <div
          class="group-9 w-14 rounded-full border-2 bg-neutral-50 transition duration-500 peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:[&>div]:translate-x-5"
        >
          <div class="h-8 w-8 transform rounded-full bg-white shadow transition duration-300" />
        </div>
      </label>
    </li>
  </ul>
  <ul class="overflow-hidden rounded-lg">
    <li class="bg-white px-5 py-3 text-neutral-400">v1.2.0</li>
  </ul>
</div>
