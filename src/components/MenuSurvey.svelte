<script lang="ts">
  import { selectedCity, selectedSchool } from '../stores'

  import { getMeal, removeAllergyInfo } from '../fetchMeal'

  let schoolCode: number
  selectedSchool.subscribe((value) => {
    schoolCode = value
  })
  let cityCode: string
  selectedCity.subscribe((value) => {
    cityCode = value
  })

  let yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  let formattedDate = `${yesterday.getFullYear()}${String(yesterday.getMonth() + 1).padStart(
    2,
    '0'
  )}${String(yesterday.getDate()).padStart(2, '0')}`

  interface SurveyMenuToken {
    name: string
    voted: boolean
  }

  let meal: SurveyMenuToken[] = []
  let error = false

  async function fetchYesterdayMeal() {
    if (!schoolCode || !cityCode) return
    let mealResponse = await getMeal(cityCode, schoolCode, formattedDate)
    if (mealResponse.error) {
      error = true
      return
    }
    meal = removeAllergyInfo(mealResponse.body).map((menu) => {
      return {
        name: menu,
        voted: false
      }
    })
  }
  if (typeof window !== 'undefined' && localStorage.getItem('lastSurveyDate') != formattedDate) {
    fetchYesterdayMeal()
  }

  let showSurvey = false
</script>

{#if meal && !error && meal.length > 0 && showSurvey}
  <div class="absolute top-0 left-0 z-50 h-screen w-screen bg-black/30">
    <div class="absolute bottom-0 left-0 right-0 p-5">
      <div class="mx-auto flex w-full max-w-lg flex-col gap-5 rounded-xl bg-white p-5 shadow-lg">
        <h1 class="text-center text-2xl font-semibold">
          어제 급식 중 만족스러웠던 메뉴를 골라주세요.
        </h1>
        <ul class="grid grid-cols-2 gap-1">
          {#each meal as menu, i}
            <li>
              <label
                for="checkbox{i}"
                class="flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-1 text-center text-xl transition duration-150"
                class:bg-green-500={menu.voted}
                class:text-white={menu.voted}
                class:shadow-lg={menu.voted}
              >
                <input type="checkbox" id="checkbox{i}" class="hidden" bind:checked={menu.voted} />
                <span>{menu.name}</span>
              </label>
            </li>
          {/each}
        </ul>
        {#if !meal.some((menu) => menu.voted)}
          <button
            class="w-full rounded-xl py-3 text-xl text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100"
            on:click={() => {
              localStorage.setItem('lastSurveyDate', formattedDate)
              showSurvey = false
            }}
          >
            무시하기
          </button>
        {:else}
          <button
            class="w-full rounded-xl bg-green-500 py-3 text-xl font-medium text-white hover:bg-green-600"
            on:click={() => {
              localStorage.setItem('lastSurveyDate', formattedDate)
              showSurvey = false
            }}
          >
            완료
          </button>
        {/if}
      </div>
    </div>
  </div>
{/if}
