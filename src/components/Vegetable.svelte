<script lang="ts">
  export let infoIndex: number, colors: string[]

  let randomColor = colors[Math.floor(Math.random()*colors.length)]
</script>

<a
  href={`/info?id=${infoIndex}`}
  class="relative after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-1/2 after:w-full"
  style='--highlighter: {randomColor}'
>
  <slot />
</a>

<style>
  a::after {
    background: var(--highlighter);
  }  
</style>
