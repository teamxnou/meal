<script lang="ts">
  import { modalOpened } from '../a11y'

  import { Flag } from 'lucide-svelte'
</script>

<ul class="mx-auto mt-10 flex divide-x rounded-full bg-neutral-100">
  {#each ['국원초', '남산초', '혜성학교'] as name, i}
    <li
      class="[&:first-child>button]:rounded-l-full [&:first-child>button]:pl-3 [&:last-child>button]:rounded-r-full [&:last-child>button]:pr-3"
    >
      <button
        class="flex items-center gap-1 py-1 px-2 ring-inset hover:bg-neutral-200 focus:ring-offset-0"
        aria-hidden={$modalOpened ? 'true' : 'false'}
        tabindex={$modalOpened ? -1 : 0}
      >
        {#if i == 0}
          <Flag class="w-4 h-4 inline-block" />
        {/if}
        {name}
      </button>
    </li>
  {/each}
</ul>
