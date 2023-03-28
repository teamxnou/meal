<script lang="ts">
  import MenuBar from '../components/MenuBar.svelte'
  import MealList from '../components/MealList.svelte'
  import DatePicker from '../components/DatePicker.svelte'

  let meal = ['쌀보리밥', '설렁탕', '코다리살조림', '연근조림', '딸기', '깍두기']
  let date = new Date().toISOString().slice(0, 10)
</script>

<MenuBar />
<MealList {meal} />
<DatePicker
  {date}
  updateDate={(newDate) => {
    date = newDate
  }}
/>
