<script lang="ts">
  import { settings } from '../../settings'
  import type { Settings } from '../../settings'

  import MenuBar from '../../components/MenuBar.svelte'
  import MenuSwitch from '../../components/MenuSwitch.svelte'

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
      <MenuSwitch
        name="메뉴 설문 참가"
        checked={_settings.parcipiateMenuSurvey}
        updateChecked={(checked) => (_settings.parcipiateMenuSurvey = checked)}
      />
    </li>
    <li>
      <MenuSwitch
        name="메뉴 설문 결과 보기"
        description="메뉴 설문에서 다른 학생들이 만족스럽다고 표시한 메뉴에 별을 표시해요."
        bind:checked={_settings.viewMenuSurvey}
        updateChecked={(checked) => (_settings.viewMenuSurvey = checked)}
      />
    </li>
  </ul>
  <ul class="overflow-hidden rounded-lg">
    <li class="bg-white px-5 py-3 text-neutral-400">
      v1.3.0
    </li>
  </ul>
</div>
