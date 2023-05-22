<script lang="ts">
  import { slide } from 'svelte/transition'

  import { notifyRelease } from '../../stores'
  import { settings } from '../../settings'
  import type { Settings } from '../../settings'

  import { Bird, Dog, Cat, Fish } from 'lucide-svelte'
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

  const version = import.meta.env.VITE_APP_VERSION
</script>

<MenuBar title="설정" back={true} />
<div class="flex h-full grow flex-col gap-3 bg-neutral-100 p-4">
  {#if $notifyRelease}
    <div class="flex flex-col items-center rounded-lg bg-white" transition:slide>
      <span class="sr-only">업데이트 정보</span>
      <div
        class="w-full rounded-t-lg bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-center text-white"
      >
        <h1 class="font-mono text-3xl font-bold">v{version}</h1>
      </div>
      <div class="w-full">
        <ul class="flex w-full flex-col gap-2 p-4">
          {#each [Bird, Dog, Cat, Fish] as Icon}
            <li class="flex w-full items-center gap-5 px-3">
              <div>
                <Icon class="h-8 w-8 text-purple-500" />
              </div>
              <div class="grow">
                <h3 class="font-semibold">Example title</h3>
                <p class="font-normal text-neutral-400">Example description</p>
              </div>
            </li>
          {/each}
        </ul>
      </div>
      <div class="w-full p-3">
        <button
          class="w-full rounded-xl bg-purple-500 py-3 text-xl font-medium text-white hover:bg-purple-600 focus:ring-purple-600"
          on:click={() => {
            $notifyRelease = false
            localStorage.setItem('lastUsedBigRelease', version)
          }}
        >
          확인
        </button>
      </div>
    </div>
  {/if}
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
      v{version}
    </li>
  </ul>
</div>
