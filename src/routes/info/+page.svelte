<script lang="ts">
  import { page } from '$app/stores'

  import { AlertCircle, ChevronLeft, ChevronRight } from 'lucide-svelte'

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
            class="flex grow snap-x snap-mandatory"
            style="width: {vegetable.images.length * 100}vw;"
          >
            {#each vegetable.images as image, i}
              <div
                class="min-w-screen max-w-screen h-[calc(100vh-54px-theme(spacing.32))] w-screen snap-start"
              >
                <!-- Had to use calc, it was hard to make it with only %'s. -->
                <img
                  src={image}
                  class="h-[calc(100vh-54px-theme(spacing.32))] w-screen object-contain"
                  alt="{vegetable.name}의 {i + 1}번째 사진"
                />
              </div>
            {/each}
          </div>
        </div>
        <button
          class="absolute bottom-3 left-3 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 shadow-lg transition duration-200 hover:bg-neutral-200 hover:shadow-xl"
          on:click={() => scrollCarousel(-1)}
        >
          <ChevronLeft class="h-7 w-7" />
        </button>
        <button
          class="absolute bottom-3 right-3 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 shadow-lg transition duration-200 hover:bg-neutral-200 hover:shadow-xl"
          on:click={() => scrollCarousel(1)}
        >
          <ChevronRight class="h-7 w-7" />
        </button>
      </div>
      <div class="h-32 rounded-t-lg bg-white p-5">
        <h1 class="text-2xl font-semibold">{vegetable.name}</h1>
        <p>{vegetable.description}</p>
      </div>
    </div>
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
