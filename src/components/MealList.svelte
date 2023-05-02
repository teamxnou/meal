<script lang="ts">
  import { onMount } from 'svelte'
  import { selectedCity, selectedSchool } from '../stores'

  import { School2, AlertCircle, ClipboardX } from 'lucide-svelte'
  import SimpleInfo from './SimpleInfo.svelte'
  import Vegetable from './Vegetable.svelte'

  import { getMeal } from '../fetchMeal'

  export let date: Date

  $: formattedDate = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(
    date.getDate()
  ).padStart(2, '0')}`

  let schoolCode: number
  selectedSchool.subscribe((value) => {
    schoolCode = value
  })
  let cityCode: string
  selectedCity.subscribe((value) => {
    cityCode = value
  })

  $: isSchoolSelected = schoolCode && cityCode

  interface MenuToken {
    string: string
    infoIndex?: number
  }

  interface Menu {
    name: MenuToken[]
    allergies: number[]
  }

  let error: boolean = false
  let errorCode: number = 0
  let meal: Menu[] = []
  async function updateMeal() {
    if (!schoolCode || !cityCode) return
    let res = await getMeal(cityCode, schoolCode, formattedDate)
    meal = res.body
    error = res.error
    errorCode = res.errorCode
  }

  onMount(() => {
    updateMeal()
  })
  $: {
    // To update meal when date changes
    date
    updateMeal()
  }

  const highlighterColors = ['#fca5a5', '#fdba74', '#fcd34d', '#bef264', '#7dd3fc', '#c4b5fd']
</script>

<div
  class="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform px-5 pb-5"
>
  {#if !error && isSchoolSelected && meal.length > 0}
    <ul class="flex grow flex-col items-center justify-center text-3xl">
      {#each meal as menu}
        <li class="flex">
          {#each menu.name as token}
            {#if token.infoIndex}
              <Vegetable infoIndex={token.infoIndex} colors={highlighterColors}>
                {token.string}
              </Vegetable>
            {:else}
              <span>{token.string}</span>
            {/if}
          {/each}
        </li>
      {/each}
    </ul>
  {:else if !isSchoolSelected}
    <div class="flex grow flex-col items-center justify-center gap-5">
      <SimpleInfo
        Icon={School2}
        title="학교를 선택해주세요"
        description="학교를 선택하면 급식을 확인할 수 있어요."
      />
      <a
        href="/school-selection"
        class="mb-2 rounded-lg bg-green-500 py-2 px-4 text-white active:bg-green-600"
      >
        학교 선택하기
      </a>
    </div>
  {:else if error && errorCode == 200}
    <div class="flex grow flex-col items-center justify-center">
      <SimpleInfo
        Icon={ClipboardX}
        title="급식 정보가 없어요"
        description="선택된 날짜가 주말이나 공휴일, 또는 방학인지 확인해주세요."
      />
    </div>
  {:else}
    <div class="flex grow flex-col items-center justify-center">
      <SimpleInfo
        Icon={AlertCircle}
        title="오류가 발생했어요"
        description="급식 정보를 불러오는 도중 오류가 발생했어요. 다시 시도해주세요."
      />
    </div>
  {/if}
</div>
