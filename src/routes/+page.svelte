<script lang="ts">
  import { GraduationCap } from 'lucide-svelte'

  import MenuBar from '../components/MenuBar.svelte'
  import MealList from '../components/MealList.svelte'
  import DatePicker from '../components/DatePicker.svelte'

  let date = new Date()
</script>

<MenuBar
  title="오늘뭐먹지"
  buttons={[GraduationCap]}
  buttonLinks={['/school-selection']}
  primary={true}
/>
<MealList {date} />
<!-- To make effect like DatePicker is a part of #app flex layout -->
<div class="h-20"></div>
<DatePicker
  {date}
  updateDate={(newDate) => {
    date = newDate
  }}
/>
