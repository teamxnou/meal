<script lang="ts">
  export let infoIndex: number, colors: string[]

  let randomColor = colors[infoIndex % colors.length]
</script>

<a
  href="/info?id={infoIndex}"
  class="relative after:absolute after:bottom-0 after:left-[2px] after:-z-10 after:h-1/2 after:w-[calc(100%-4px)] after:rounded"
  style="--highlighter: {randomColor}"
>
  <slot />
</a>

<style>
  a::after {
    background: var(--highlighter);
  }
</style>
