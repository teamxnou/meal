<script lang="ts">
  import { fade, fly } from 'svelte/transition'
  import { page } from '$app/stores'

  import { AlertCircle, ChevronLeft, ChevronRight, Info, X } from 'lucide-svelte'

  import MenuBar from '../../components/MenuBar.svelte'
  import SimpleInfo from '../../components/SimpleInfo.svelte'

  import vegetableData from '../../vegetableData'

  const id = parseInt($page.url.searchParams.get('id') || '')
  const isIdValid = (id || id == 0) && !isNaN(id) && id >= 0 && id < vegetableData.length

  const vegetable = vegetableData[id]

  let carousel: HTMLDivElement
  function scrollCarousel(pageOffset: number) {
    let prevScroll = carousel.scrollLeft
    carousel.scrollBy({
      left: pageOffset * window.innerWidth,
      behavior: 'smooth'
    })
    setTimeout(() => {
      if (carousel.scrollLeft == prevScroll) {
        carousel.classList.add('motion-safe:animate-[shake_400ms_ease-in-out]')
        setTimeout(() => {
          carousel.classList.remove('motion-safe:animate-[shake_400ms_ease-in-out]')
        }, 500)
      }
    }, 50)
  }

  let sourceOpened = false
</script>

<div class="flex max-h-screen grow flex-col" class:bg-neutral-300={isIdValid}>
  <MenuBar title="재료 정보" back={true} />
  {#if isIdValid}
    <div class="flex grow flex-col">
      <div class="relative flex w-screen grow">
        <div
          class="relative flex w-screen grow snap-x snap-mandatory overflow-x-scroll"
          bind:this={carousel}
        >
          <div
            class="flex grow snap-x snap-mandatory snap-always"
            style="width: {vegetable.images.length * 100}vw;"
          >
            {#each vegetable.images as image, i}
              <div
                class="min-w-screen max-w-screen h-[calc(100vh-54px-theme(spacing.32))] w-screen snap-start snap-always"
              >
                <!-- Had to use calc, it was hard to make it with only %'s. -->
                <img
                  src={image}
                  class="h-full w-screen object-contain"
                  alt="{vegetable.name}의 {i + 1}번째 사진"
                />
              </div>
            {/each}
          </div>
        </div>
        <button
          class="absolute bottom-3 left-3 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 shadow-lg transition duration-200 hover:bg-neutral-200 hover:shadow-xl"
          on:click={() => scrollCarousel(-1)}
          aria-hidden="true"
        >
          <ChevronLeft class="h-7 w-7" />
        </button>
        <button
          class="absolute bottom-3 right-3 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 shadow-lg transition duration-200 hover:bg-neutral-200 hover:shadow-xl"
          on:click={() => scrollCarousel(1)}
          aria-hidden="true"
        >
          <ChevronRight class="h-7 w-7" />
        </button>
      </div>
      <div class="h-32 rounded-t-lg bg-white p-5">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-semibold">{vegetable.name}</h1>
          <button
            class="rounded p-2 text-green-500 hover:bg-green-50 focus:ring-green-500 active:bg-green-100"
            on:click={() => (sourceOpened = !sourceOpened)}
          >
            <Info class="h-7 w-7" />
          </button>
        </div>
        <p>{vegetable.description}</p>
      </div>
    </div>
    {#if sourceOpened}
      <div
        class="absolute top-0 left-0 z-50 h-screen w-screen bg-black/30"
        transition:fade={{ duration: 200 }}
        on:click={() => (sourceOpened = false)}
        on:keydown={(e) => {
          if (e.key == 'Escape') sourceOpened = false
        }}
      >
        <div
          class="absolute top-1/2 left-1/2 w-2/3 -translate-x-1/2 max-w-sm -translate-y-1/2 transform rounded-xl bg-white p-5 shadow-lg"
          transition:fly={{ y: 100 }}
        >
          <div class="flex items-center justify-between">
            <h1 class="ml-1 text-[20px] font-semibold">출처</h1>
            <button
              class="mr-1 rounded hover:bg-black/5 active:bg-black/10"
              on:click={() => (sourceOpened = false)}
            >
              <X class="h-7 w-7" />
            </button>
          </div>
          <ul class="mt-2 flex flex-col divide-y">
            {#each vegetable.source as source}
              <li class="py-2 pl-2">
                {source}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/if}
  {:else}
    <div class="flex flex-grow flex-col items-center justify-center">
      <SimpleInfo
        Icon={AlertCircle}
        title="재료 정보를 찾을 수 없어요"
        description="무언가 잘못되었어요."
      />
    </div>
  {/if}
</div>
