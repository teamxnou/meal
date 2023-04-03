<script lang="ts">
  import { onMount } from 'svelte'
  import { selectedCity, selectedSchool } from '../stores'

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

  let meal: string[] = []
  function updateMeal() {
    console.log(`Updating meal for ${date}. School: ${schoolCode}, City: ${cityCode}`)
    if (!schoolCode || !cityCode) return
    fetch(
      `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${
        import.meta.env.VITE_NEIS_API_KEY
      }&Type=json&ATPT_OFCDC_SC_CODE=${cityCode}&SD_SCHUL_CODE=${schoolCode}&MLSV_YMD=${formattedDate}`
    ).then((res) => res.json()).then((res) => {
      meal = res.mealServiceDietInfo[1].row[0].DDISH_NM.split('<br/>')
    })
  }

  onMount(() => {
    updateMeal()
  })
  $: updateMeal()
</script>

<ul class="flex grow flex-col items-center justify-center text-3xl">
  {#each meal as menu}
    <li>{menu}</li>
  {/each}
</ul>
