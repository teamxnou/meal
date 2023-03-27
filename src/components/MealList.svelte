<script lang="ts">
  export let meal: string[] = []
</script>

<ul class="flex grow flex-col items-center justify-center text-3xl">
  {#each meal as menu}
    <li>{menu}</li>
  {/each}
</ul>
