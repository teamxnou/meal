<script lang="ts">
  export let meal: string[] = []
</script>

<ul class="flex flex-col items-center justify-center text-3xl grow">
  {#each meal as menu}
    <li>{menu}</li>
  {/each}
</ul>
