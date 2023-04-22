<script lang="ts">
  import { GraduationCap, Search } from 'lucide-svelte'

  import MenuBar from '../components/MenuBar.svelte'
  import MealList from '../components/MealList.svelte'
  import DatePicker from '../components/DatePicker.svelte'

  let date = new Date()
</script>

<MenuBar
  title="오늘뭐먹지"
  buttons={[GraduationCap, Search]}
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
