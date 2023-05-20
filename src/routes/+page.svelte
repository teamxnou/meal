<script lang="ts">
  import { goto } from '$app/navigation'
  import { settings } from '../settings'

  import { Settings, Search } from 'lucide-svelte'
  import CenteredSchool2 from '../components/CenteredSchool2.svelte'

  import MenuBar from '../components/MenuBar.svelte'
  import MealList from '../components/MealList.svelte'
  import DatePicker from '../components/DatePicker.svelte'
  import MenuSurvey from '../components/MenuSurvey.svelte'

  let date: Date = new Date()

  if (typeof window !== 'undefined') {
    const hash = window.location.hash.slice(1)
    if (window.location.hash && new Date(hash).toString() !== 'Invalid Date') {
      date = new Date(hash)
    }
  }

  $: {
    if (typeof window !== 'undefined' && date instanceof Date) {
      goto(
        `/#${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
          date.getDate()
        ).padStart(2, '0')}`
      )
    }
  }
</script>

<MenuBar
  LeftButton={Settings}
  leftButtonLink="/settings"
  leftButtonLabel="설정"
  title="오늘뭐먹지"
  buttons={[CenteredSchool2, Search]}
  buttonLinks={['/school-selection', '/vegetable-search']}
  buttonLabels={['학교 선택', '재료 검색']}
  primary={true}
/>
{#if typeof window !== 'undefined'}
  <MealList {date} />
{/if}
<DatePicker
  {date}
  updateDate={(newDate) => {
    date = newDate
  }}
/>
{#if $settings.parcipiateMenuSurvey}
  <MenuSurvey />
{/if}
