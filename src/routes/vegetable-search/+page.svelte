<script lang="ts">
  import { BoxSelect } from 'lucide-svelte'

  import MenuBar from '../../components/MenuBar.svelte'
  import SimpleInfo from '../../components/SimpleInfo.svelte'

  import vegetableData from '../../vegetableData'

  interface Vegetable {
    name: string
    exceptions?: Array<string>
    images: Array<string>
    source: Array<string> | string
    thumbnail: number
    description: string
  }
  let searchResults: Vegetable[] = vegetableData

  let debounceTimer: any
  function handleQueryChange(query: string) {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      searchResults = vegetableData.filter((vegetable) => vegetable.name.includes(query))
    }, 200)
  }
</script>

<MenuBar
  title="재료 검색"
  back={true}
  search={true}
  searchPlaceholder="재료 이름 검색"
  queryChange={handleQueryChange}
/>
<div class="flex h-full grow flex-col gap-3 bg-neutral-100 p-4">
  {#if searchResults.length}
    <ul
      class="flex grow flex-col items-start gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      {#each searchResults as vegetable}
        <li class="w-full">
          <a
            href="/info?id={vegetableData.indexOf(vegetable)}"
            class="flex w-full flex-col items-start gap-3 rounded-lg bg-white pb-3"
          >
            <img
              src={vegetable.images[vegetable.thumbnail]}
              alt="{vegetable.name}의 사진"
              class="aspect-video w-full rounded-t-lg object-cover"
              loading="lazy"
              aria-hidden="true"
            />
            <h2 class="mx-5 text-2xl font-semibold">
              {vegetable.name}
            </h2>
          </a>
        </li>
      {/each}
    </ul>
  {:else}
    <div class="flex grow items-center justify-center">
      <SimpleInfo
        Icon={BoxSelect}
        title="검색 결과가 없어요"
        description="오타를 확인해주세요. 아니라면 재료가 등록되지 않았을 수 있어요."
      />
    </div>
  {/if}
</div>
