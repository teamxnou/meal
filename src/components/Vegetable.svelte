<script lang="ts">
  export let infoIndex: number
</script>

<a
  href={`/info?id=${infoIndex}`}
  class="relative after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-1/2 after:w-full after:bg-yellow-300"
>
  <slot />
</a>
