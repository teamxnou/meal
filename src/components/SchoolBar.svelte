<script lang="ts">
  import { primarySchool, altSchools, currentSchoolIndex } from '../stores'
  import { modalOpened } from '../a11y'

  import { Flag } from 'lucide-svelte'

  $: schools = [$primarySchool, ...$altSchools.filter((s) => s.name != $primarySchool.name)]

  function changeSchool(i: number) {
    currentSchoolIndex.set(i)
    sessionStorage.setItem('currentSchoolIndex', i.toString())
  }
</script>

<ul class="mx-auto mt-10 flex divide-x rounded-full bg-neutral-100">
  {#each schools as school, i}
    <li
      class="[&:first-child>button]:rounded-l-full [&:first-child>button]:pl-3 [&:last-child>button]:rounded-r-full [&:last-child>button]:pr-3"
    >
      <button
        class="flex items-center gap-1 py-1 px-2 ring-inset hover:bg-neutral-200 focus:ring-offset-0"
        class:font-bold={$currentSchoolIndex == i}
        aria-hidden={$modalOpened ? 'true' : 'false'}
        tabindex={$modalOpened ? -1 : 0}
        on:click={() => changeSchool(i)}
      >
        {#if i == 0}
          <Flag class="inline-block h-4 w-4" />
        {/if}
        {school.name.replace('등학교', '')}
      </button>
    </li>
  {/each}
</ul>
