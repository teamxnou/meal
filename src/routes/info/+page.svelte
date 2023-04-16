<script lang="ts">
  import { page } from '$app/stores'

  import vegetableData from '../../vegetableData'

  const id = parseInt($page.url.searchParams.get('id') || '')
  const isIdNaN = isNaN(id)
</script>

{#if !isIdNaN}
  info id: {id}<br />
  object: {JSON.stringify(vegetableData[id])}
{:else if id}
  id is not a number
{:else}
  id is not set
{/if}
