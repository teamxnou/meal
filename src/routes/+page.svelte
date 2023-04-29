<script lang="ts">
  import { goto } from '$app/navigation'

  import { Search } from 'lucide-svelte'
  import CenteredSchool2 from '../components/CenteredSchool2.svelte'

  import MenuBar from '../components/MenuBar.svelte'
  import MealList from '../components/MealList.svelte'
  import DatePicker from '../components/DatePicker.svelte'

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
  title="오늘뭐먹지"
  buttons={[CenteredSchool2, Search]}
  buttonLinks={['/school-selection', '/vegetable-search']}
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
