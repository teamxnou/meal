<script lang="ts">
  import { onMount } from 'svelte'
  import { selectedCity, selectedSchool } from '../stores'

  import { AlertCircle } from 'lucide-svelte'
  import SimpleInfo from './SimpleInfo.svelte'

  export let date: Date

  $: formattedDate = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`

  let schoolCode: number
  selectedSchool.subscribe((value) => {
    schoolCode = value
  })
  let cityCode: string
  selectedCity.subscribe((value) => {
    cityCode = value
  })

  let error: boolean = false
  let meal: string[] = []
  function updateMeal() {
    console.log(`Updating meal for ${date}. School: ${schoolCode}, City: ${cityCode}`)
    if (!schoolCode || !cityCode) return
    fetch(
      `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${
        import.meta.env.VITE_NEIS_API_KEY
      }&Type=json&ATPT_OFCDC_SC_CODE=${cityCode}&SD_SCHUL_CODE=${schoolCode}&MLSV_YMD=${formattedDate}`
    ).then((res) => res.json()).then((res) => {
      if (!res.mealServiceDietInfo) {
        error = true
        return
      }
      meal = res.mealServiceDietInfo[1].row[0].DDISH_NM.split('<br/>')
      error = false
    }).catch((err) => {
      error = true
    })
  }

  onMount(() => {
    updateMeal()
  })
  $: {
    // To update meal when date changes
    date
    updateMeal()
  }
</script>

{#if !error}
  <ul class="flex grow flex-col items-center justify-center text-3xl">
    {#each meal as menu}
      <li>{menu}</li>
    {/each}
  </ul>
{:else}
  <div class="flex grow flex-col items-center justify-center">
    <SimpleInfo
      Icon={AlertCircle}
      title="오류가 발생했어요"
      description="급식 정보를 불러오는 도중 오류가 발생했어요. 다시 시도해주세요."
    />
  </div>
{/if}
