<script lang="ts">
  import { selectedCity, selectedSchool, selectedSchoolName, openSchoolToast } from '../../stores'
  import { draw, fade } from 'svelte/transition'
  import { Info, BoxSelect } from 'lucide-svelte'

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
  let searched = false
  let searchResults: Vegetable[] = vegetableData

  let loadingAnimationReady = false
  setTimeout(() => {
    loadingAnimationReady = true
  }, 0)

  let debounceTimer: any
  function handleQueryChange(query: string) {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      searched = true
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
    <ul class="flex grow flex-col items-start gap-4">
      {#each searchResults as vegetable}
        <li class="w-full">
          <a
            href="/info?id={vegetableData.indexOf(vegetable)}"
            class="flex w-full flex-col items-start rounded-lg bg-white gap-3 pb-3"
          >
            <img
              src={vegetable.images[vegetable.thumbnail]}
              alt="{vegetable.name}의 사진"
              class="w-full aspect-video object-cover rounded-t-lg"
              loading="lazy"
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
