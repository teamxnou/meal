<script lang="ts">
  import { page } from '$app/stores'

  import { AlertCircle } from 'lucide-svelte'

  import MenuBar from '../../components/MenuBar.svelte'
  import SimpleInfo from '../../components/SimpleInfo.svelte'

  import vegetableData from '../../vegetableData'

  const id = parseInt($page.url.searchParams.get('id') || '')
  const isIdValid = id && !isNaN(id) && id >= 0 && id < vegetableData.length

  const vegetable = vegetableData[id]
</script>

<div class="flex max-h-screen grow flex-col" class:bg-neutral-300={isIdValid}>
  <MenuBar title="재료 정보" back={true} />
  {#if id && isIdValid}
    <div class="flex grow flex-col">
      <div class="relative flex w-screen grow snap-x snap-mandatory overflow-x-scroll">
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
