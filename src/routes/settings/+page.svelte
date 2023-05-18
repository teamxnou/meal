<script lang="ts">
  import { settings } from '../../settings'
  import type { Settings } from '../../settings'

  import MenuBar from '../../components/MenuBar.svelte'

  let _settings: Settings = $settings

  settings.subscribe((value) => {
    _settings = value
  })

  $: {
    settings.update((value) => {
      value = _settings
      return value
    })
  }
</script>

<MenuBar title="설정" back={true} />
<div class="flex h-full grow flex-col gap-3 bg-neutral-100 p-4">
  <ul class="divide-y overflow-hidden rounded-lg">
    <li>
      <label
        class="flex cursor-pointer items-center justify-between bg-white px-5 py-1 hover:bg-neutral-50 relative"
      >
        <span class="my-2" aria-hidden="true">메뉴 설문 참가</span>
        <input
          type="checkbox"
          class="peer appearance-none absolute top-0 left-0 right-0 bottom-0 w-full h-full"
          bind:checked={_settings.parcipiateMenuSurvey}
          role="switch"
          aria-label="메뉴 설문 참가"
        />
        <div
          class="group-9 w-14 rounded-full border-2 bg-neutral-50 transition duration-500 peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:[&>div]:translate-x-5"
        >
          <div class="h-8 w-8 transform rounded-full bg-white shadow transition duration-300" />
        </div>
      </label>
    </li>
    <li>
      <label
        class="flex cursor-pointer items-center justify-between bg-white px-5 py-1 hover:bg-neutral-50 relative"
      >
        <input
          type="checkbox"
          class="peer appearance-none absolute top-0 left-0 right-0 bottom-0 w-full h-full"
          bind:checked={_settings.viewMenuSurvey}
          role="switch"
          aria-label="메뉴 설문 결과 보기"
        />
        <div class="my-2 flex flex-col">
          <span aria-hidden="true">메뉴 설문 결과 보기</span>
          <p class="text-xs text-neutral-400">
            메뉴 설문에서 다른 학생들이 만족스럽다고 표시한 메뉴에 별을 표시해요.
          </p>
        </div>
        <div
          class="group-9 w-14 rounded-full border-2 bg-neutral-50 transition duration-500 peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:[&>div]:translate-x-5"
        >
          <div class="h-8 w-8 transform rounded-full bg-white shadow transition duration-300" />
        </div>
      </label>
    </li>
  </ul>
  <ul class="overflow-hidden rounded-lg">
    <li class="bg-white px-5 py-3 text-neutral-400">
      <span aria-hidden="true">v1.2.0</span>
      <span class="sr-only">버전 1 점 2 점 0</span>
    </li>
  </ul>
</div>
