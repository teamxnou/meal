<script lang="ts">
  import { createClient } from '@supabase/supabase-js'

  const supabaseUrl = 'https://ojeqqmhebtcdwpenevaf.supabase.co'
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  import { onMount } from 'svelte'
  import {
    primarySchool,
    primarySchoolSelected,
    altSchools,
    currentSchoolIndex,
    isNeisUnderMaintaince
  } from '../stores'
  import { modalOpened } from '../a11y'
  import { settings } from '../settings'
  import { date } from '../stores'

  import { School2, AlertCircle, ClipboardX, LeafyGreen } from 'lucide-svelte'
  import SimpleInfo from './SimpleInfo.svelte'
  import Vegetable from './Vegetable.svelte'

  import { getMeal, parseMeal } from '../fetchMeal'
  import ServerMaintainceAlert from './ServerMaintainceAlert.svelte'
    import MealShare from './MealShare.svelte'

  $: formattedDate = `${$date.getFullYear()}${String($date.getMonth() + 1).padStart(2, '0')}${String(
    $date.getDate()
  ).padStart(2, '0')}`

  let ariaHidden: boolean
  modalOpened.subscribe((value) => {
    ariaHidden = value
  })

  interface MenuToken {
    string: string
    infoIndex?: number
  }

  interface Menu {
    name: MenuToken[]
    allergies: number[]
  }
  interface menuSurveyData {
    name: string
    total_survey: number
    total_votes: number
  }
  let surveyData: menuSurveyData[] = []
  async function getSurveyData(menus: string[]) {
    const orStatement = menus.map((menu) => `name.eq.${menu}`).join(',')
    return await supabase.from('menus').select('name, total_survey, total_votes').or(orStatement)
  }

  $: schools = [$primarySchool, ...$altSchools.filter((s) => s.name != $primarySchool.name)]
  $: currentSchool = schools[$currentSchoolIndex]

  let error: boolean = false
  let errorCode: number = 0
  let meal: Menu[] = []
  let loading = false
  async function updateMeal() {
    loading = false
    if (!currentSchool.city || !currentSchool.school) return
    const loadingDebounce = setTimeout(() => {
      if ($settings.showMealLoading) loading = true
    }, 200)
    if ($isNeisUnderMaintaince) return
    let res = await getMeal(currentSchool.city, currentSchool.school, formattedDate)
    let parsedMeal = parseMeal(res.body)
    if (!res.error) {
      const { data } = await getSurveyData(
        parsedMeal.map((menu) => menu.name.map((token) => token.string).join(''))
      )
      surveyData = data as menuSurveyData[]
    }
    meal = parsedMeal
    error = res.error
    errorCode = res.errorCode
    loading = false
    clearTimeout(loadingDebounce)
  }

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
  function findAllergic(allergies: number[]): number[] {
    let allergic: number[] = []
    allergies.forEach((n) => {
      if ($settings.allergies[n - 1]) allergic.push(n)
    })
    return allergic
  }

  async function canBeStarred(menu: MenuToken[]): Promise<number> {
    if (!$settings.viewMenuSurvey) return 0
    let name = menu.map((token) => token.string).join('')
    const data = surveyData.filter((data) => data.name == name)
    const total_survey = data?.[0].total_survey
    const total_votes = data?.[0].total_votes
    if (data?.length == 0 || total_survey < 10) return 0
    const ratio = total_votes == 0 ? 0 : total_votes / total_survey
    if (ratio >= 0.9) return 4
    else if (ratio >= 0.7) return 3
    else if (ratio >= 0.5) return 2
    else if (ratio >= 0.3) return 1
    else return 0
  }

  onMount(() => {
    updateMeal()
  })
  $: {
    // To update meal when date changes
    $date
    $currentSchoolIndex
    updateMeal()
  }

  const highlighterColors = ['#fca5a5', '#fdba74', '#fcd34d', '#bef264', '#7dd3fc', '#c4b5fd']

  let joinedMeal: string = ''
</script>

<div
  class="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform px-5 pb-5"
  aria-hidden={ariaHidden}
> 
  {#if !error && $primarySchoolSelected && meal.length > 0 && !$isNeisUnderMaintaince && !loading}
    <button
      class="sr-only"
      on:click={() => {
        joinedMeal = ''
        setTimeout(() => {
          joinedMeal = meal
            .map((menu) => {
              return menu.name.map((token) => token.string).join('')
            })
            .join('. ')
          setTimeout(() => {
            joinedMeal = ''
          }, 10)
        }, 10)
      }}>급식 모두 듣기</button
    >
    <span
      role="alert"
      aria-live="assertive"
      class="sr-only"
      aria-hidden={joinedMeal ? 'false' : 'true'}>{joinedMeal}</span
    >
    <div class="flex flex-col grow justify-center items-center">
      <ul class="flex grow flex-col items-center justify-center text-3xl">
        {#each meal as menu}
          <li class="flex flex-col items-center">
            <div class:text-red-500={findAllergic(menu.allergies).length > 0}>
              {#each menu.name as token}
                {#if token.infoIndex}
                  <Vegetable
                    infoIndex={token.infoIndex}
                    colors={highlighterColors}
                    tabindex={ariaHidden ? -1 : 0}
                  >
                    {token.string}
                  </Vegetable>
                {:else}
                  <span>{token.string}</span>
                {/if}
              {/each}
              {#await canBeStarred(menu.name) then canBeStarred}
                {#if canBeStarred}
                  <span class="ml-2">
                    {#if canBeStarred == 1}
                      ⭐️
                    {:else if canBeStarred == 2}
                      🌟
                    {:else if canBeStarred == 3}
                      💫
                    {:else if canBeStarred == 4}
                      🌠
                    {/if}
                  </span>
                {/if}
              {/await}
            </div>
            {#if findAllergic(menu.allergies).length > 0}
              <p class="mb-1 text-sm text-red-500">
                {findAllergic(menu.allergies)
                  .map((n) => allergies[n - 1])
                  .join(', ')}
              </p>
            {/if}
          </li>
        {/each}
      </ul>
      {#if $settings.shareMeal}
        <MealShare />
      {/if}
    </div>
  {:else if loading}
    <div class="flex grow justify-center items-center">
      <LeafyGreen class="w-7 h-7 animate-spin text-neutral-400" />
    </div>
  {:else if $isNeisUnderMaintaince}
    <div class="mx-auto flex max-w-xs grow rounded-xl bg-neutral-50">
      <ServerMaintainceAlert />
    </div>
  {:else if !$primarySchoolSelected}
    <div class="flex grow flex-col items-center justify-center gap-5">
      <SimpleInfo
        Icon={School2}
        title="학교를 선택해주세요"
        description="학교를 선택하면 급식을 확인할 수 있어요."
      />
      <a
        href="/school-selection"
        class="mb-2 rounded-lg bg-green-500 py-2 px-4 text-white active:bg-green-600"
        role="button"
        tabindex={ariaHidden ? -1 : 0}
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
