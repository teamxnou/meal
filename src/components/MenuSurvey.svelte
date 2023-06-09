<script lang="ts">
  import { createClient } from '@supabase/supabase-js'

  const supabaseUrl = 'https://ojeqqmhebtcdwpenevaf.supabase.co'
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  import { fade, fly } from 'svelte/transition'
  import { primarySchool } from '../stores'
  import { modalOpened } from '../a11y'

  import { getMeal, removeAllergyInfo } from '../fetchMeal'

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
    if (!$primarySchool.city || !$primarySchool.school) return
    let mealResponse = await getMeal($primarySchool.city, $primarySchool.school, formattedDate)
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

  function submitSurvey() {
    meal.forEach(async (menu) => {
      const { data } = await supabase
        .from('menus')
        .select('name, total_survey, total_votes')
        .eq('name', menu.name)
      if (data?.length === 0) {
        await supabase
          .from('menus')
          .insert([{ name: menu.name, total_survey: 1, total_votes: menu.voted ? 1 : 0 }])
      } else {
        await supabase
          .from('menus')
          .update({
            total_survey: data?.[0].total_survey + 1,
            total_votes: menu.voted ? data?.[0].total_votes + 1 : data?.[0].total_votes
          })
          .eq('name', menu.name)
      }
    })
    localStorage.setItem('lastSurveyDate', formattedDate)
    showSurvey = false
  }

  let showSurvey = false
  modalOpened.set(false)

  setTimeout(() => {
    showSurvey = true
  }, 2000)

  $: {
    if (meal && !error && meal.length > 0 && showSurvey) {
      modalOpened.set(true)
    } else {
      modalOpened.set(false)
    }
  }
</script>

{#if meal && !error && meal.length > 0 && showSurvey}
  <div
    class="absolute top-0 left-0 z-50 h-screen w-screen bg-black/30"
    transition:fade={{ duration: 200 }}
  >
    <div class="absolute bottom-0 left-0 right-0 p-5">
      <div
        class="mx-auto flex w-full max-w-lg flex-col gap-5 rounded-xl bg-white p-5 shadow-lg"
        transition:fly={{ y: 100 }}
      >
        <h1 class="text-center text-2xl font-semibold" role="alert" aria-live="assertive">
          <span class="sr-only">메뉴 설문 열림</span>어제 급식 중 만족스러웠던 메뉴를 골라주세요.
        </h1>
        <ul class="grid grid-cols-2 gap-1">
          {#each meal as menu, i}
            <li>
              <label
                for="checkbox{i}"
                class="menulabel"
                class:bg-green-500={menu.voted}
                class:text-white={menu.voted}
                class:shadow-lg={menu.voted}
              >
                <input
                  type="checkbox"
                  id="checkbox{i}"
                  class="peer h-0 w-0 overflow-hidden focus:ring-0 focus:ring-offset-0"
                  bind:checked={menu.voted}
                  tabindex="0"
                />
                <span>{menu.name}</span>
              </label>
            </li>
          {/each}
        </ul>
        {#if !meal.some((menu) => menu.voted)}
          <button
            class="w-full rounded-xl py-3 text-xl text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500"
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
            on:click={submitSurvey}
          >
            완료
          </button>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  .menulabel {
    @apply flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-1 text-center text-xl transition duration-150;
  }
  .menulabel:has(input:focus:focus-visible) {
    @apply outline-none ring-2 ring-green-600 ring-offset-2 ring-offset-white;
  }
</style>
