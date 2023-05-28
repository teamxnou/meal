<script lang="ts">
  import { slide } from 'svelte/transition'
  import { Star } from 'lucide-svelte'

  export let school: any,
    name: string,
    address: string,
    isFavorite: boolean,
    selectSchool: (school: any) => void,
    handleFavoriteSchool: (school: any) => void
</script>

<li class="flex w-full flex-col items-start overflow-clip rounded-lg bg-white" out:slide|local>
  <span class="mx-5 mt-4 text-sm font-medium text-neutral-400" aria-hidden="true">
    {address}
  </span>
  <h2
    class="max-w-full truncate px-5 text-2xl font-semibold"
    aria-label="{school.SCHUL_NM}. 주소: {school.ORG_RDNMA}"
  >
    {name}
  </h2>
  <div class="grow" />
  <div class="flex w-full justify-between px-2 pt-3 pb-2">
    <a
      href="/"
      class="rounded py-2 px-3 text-green-500 hover:bg-green-50 active:bg-green-100"
      on:click={() => selectSchool(school)}
      aria-label="{name}를 기본 학교로 선택"
      role="button"
    >
      기본 학교로 선택
    </a>
    <button
      class="rounded py-2 px-3 text-yellow-500 hover:bg-yellow-50 focus:ring-yellow-500 active:bg-yellow-100"
      on:click={() => {
        handleFavoriteSchool(school)
      }}
    >
      {#if isFavorite}
        <Star class="h-6 w-6 fill-yellow-500" />
      {:else}
        <Star class="h-6 w-6" />
      {/if}
    </button>
  </div>
</li>
