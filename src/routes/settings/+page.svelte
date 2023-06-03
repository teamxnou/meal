<script lang="ts">
  import { slide } from 'svelte/transition'

  import { notifyRelease } from '../../stores'
  import { settings } from '../../settings'
  import type { Settings } from '../../settings'

  import { logs } from '../../updateLog'

  import { ChevronDown } from 'lucide-svelte'

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

  const updateLogs = logs[version]

  let allergySettingOpened = true
  let allergies = [
    '난류',
    '우유',
    '메밀',
    '땅콩',
    '대두',
    '밀',
    '고등어',
    '게',
    '새우',
    '돼지고기',
    '복숭아',
    '토마토',
    '아황산류',
    '호두',
    '닭고기',
    '쇠고기',
    '오징어',
    '조개류',
    '잣'
  ]
</script>

<MenuBar title="설정" back={true} />
<div class="flex h-full grow flex-col gap-3 bg-neutral-100 p-4">
  {#if $notifyRelease}
    <div class="flex flex-col items-center rounded-lg bg-white" out:slide|local>
      <span class="sr-only">업데이트 정보</span>
      <div
        class="w-full rounded-t-lg bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-center text-white"
      >
        <h1 class="font-mono text-3xl font-bold">v{version}</h1>
      </div>
      <div class="w-full">
        <ul class="flex w-full flex-col gap-2 p-4">
          {#each updateLogs as log}
            <li class="flex w-full items-center gap-5 px-3">
              <div>
                <svelte:component this={log.Icon} class="h-8 w-8 text-purple-500" />
              </div>
              <div class="grow">
                <h3 class="font-semibold">{log.title}</h3>
                <p class="font-normal text-neutral-400">{log.description}</p>
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
  <ul class="divide-y overflow-hidden rounded-lg">
    <li>
      <MenuSwitch
        name="급식을 불러올 때 로딩 표시"
        bind:checked={_settings.showMealLoading}
        updateChecked={(checked) => (_settings.showMealLoading = checked)}
      />
    </li>
    <li>
      <MenuSwitch
        name="오후 7시 이후 내일 급식 표시"
        bind:checked={_settings.tomorrowMealAfter7pm}
        updateChecked={(checked) => (_settings.tomorrowMealAfter7pm = checked)}
      />
    </li>
  </ul>
  <ul class="divide-y overflow-hidden rounded-lg">
    <li class="w-full">
      <div class="w-full">
        <button
          class="flex w-full justify-between bg-white px-5 py-3 hover:bg-neutral-50"
          on:click={() => (allergySettingOpened = !allergySettingOpened)}
          aria-labelledby="allergy-setting"
        >
          <span id="allergy-setting">알레르기 설정</span>
          <ChevronDown class="h-6 w-6 text-neutral-400" />
        </button>
      </div>
      {#if allergySettingOpened}
        <div class="bg-white px-3 pt-2 pb-3 flex flex-col gap-2">
          <ul class="flex flex-wrap gap-3" transition:slide>
            {#each allergies as name, i}
              <li>
                <label
                  class="flex cursor-pointer items-center justify-center rounded-lg hover:bg-neutral-50"
                >
                  <input
                    type="checkbox"
                    class="peer hidden"
                    bind:checked={_settings.allergies[i]}
                  />
                  <span
                    class="flex h-10 w-10 items-center justify-center rounded-l-lg bg-neutral-100 text-lg font-semibold transition duration-150 peer-checked:bg-green-500 peer-checked:text-white"
                  >
                    {i + 1}
                  </span>
                  <span
                    class="flex h-10 items-center rounded-r-lg border border-l-0 border-neutral-100 px-3"
                  >
                    {name}
                  </span>
                </label>
              </li>
            {/each}
          </ul>
          <div class="flex justify-end gap-1">
            <button class="rounded py-2 px-3 text-green-500 hover:bg-green-50 active:bg-green-100" on:click={() => {
              _settings.allergies = Array(allergies.length).fill(true)
            }}>모두 선택</button>
            <button class="rounded py-2 px-3 text-green-500 hover:bg-green-50 active:bg-green-100" on:click={() => {
              _settings.allergies = Array(allergies.length).fill(false)
            }}>모두 선택 해제</button>
          </div>
        </div>
      {/if}
    </li>
  </ul>
  <ul class="overflow-hidden rounded-lg">
    <li class="bg-white px-5 py-3 text-neutral-400">
      v{version}
    </li>
  </ul>
</div>
