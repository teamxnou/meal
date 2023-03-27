<script lang="ts">
  import MenuBar from '../components/MenuBar.svelte'
  import MealList from '../components/MealList.svelte'

  let meal = [
    '쌀보리밥',
    '설렁탕',
    '코다리살조림',
    '연근조림',
    '딸기',
    '깍두기'
  ]
</script>

<MenuBar />
<MealList {meal} />
